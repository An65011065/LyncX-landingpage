import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';

// In-memory rate limiting storage (simple implementation)
interface UserRateLimit {
    dailyCount: number;
    lastRequest: number;
    dailyReset: string; // YYYY-MM-DD format
}

// OpenAI Assistant IDs (from original Firebase Functions)
const ASSISTANT_IDS = {
    page_analysis: "asst_2yxqDOmlVY4yURQROnLdIuKD",
    generalAsk: "asst_OLQ63uhQ7HhKPr5EfZxzDdWy"
};

// OpenAI client (will be initialized with API key)
let openai: any = null;

// Initialize OpenAI client
function initializeOpenAI(apiKey: string) {
    if (!openai) {
        const { OpenAI } = require('openai');
        openai = new OpenAI({ apiKey });
    }
    return openai;
}


const userRateLimits = new Map<string, UserRateLimit>();

// Rate limiting constants
const DAILY_LIMIT = 20; // Daily request limit
const RATE_LIMIT_MS = 5000; // 5 seconds between requests
// Removed character limit - users can send messages of any length

function getTodayString(): string {
    return new Date().toISOString().split('T')[0];
}

function checkRateLimit(userId: string): { allowed: boolean; error?: string; remaining?: number } {
    const now = Date.now();
    const today = getTodayString();
    
    let userLimit = userRateLimits.get(userId);
    
    // Initialize or reset daily counter if new day
    if (!userLimit || userLimit.dailyReset !== today) {
        userLimit = {
            dailyCount: 0,
            lastRequest: 0,
            dailyReset: today
        };
        userRateLimits.set(userId, userLimit);
    }
    
    // Check daily limit
    if (userLimit.dailyCount >= DAILY_LIMIT) {
        return {
            allowed: false,
            error: `Daily limit reached. You've used all ${DAILY_LIMIT} requests for today. They'll refresh tomorrow at midnight!`
        };
    }
    
    // Check rate limit (15 seconds between requests, ~3 per minute)
    if (userLimit.lastRequest > 0 && (now - userLimit.lastRequest) < RATE_LIMIT_MS) {
        const waitTime = Math.ceil((RATE_LIMIT_MS - (now - userLimit.lastRequest)) / 1000);
        return {
            allowed: false,
            error: `Please wait ${waitTime} seconds before sending another message`
        };
    }
    
    return {
        allowed: true,
        remaining: DAILY_LIMIT - userLimit.dailyCount
    };
}

function updateRateLimit(userId: string) {
    const userLimit = userRateLimits.get(userId);
    if (userLimit) {
        userLimit.dailyCount++;
        userLimit.lastRequest = Date.now();
        userRateLimits.set(userId, userLimit);
    }
}

// Main OpenAI Assistants API processing function (replicated from Firebase Functions)
async function processWithAssistant(
    openai: any,
    userMessage: string,
    assistantType: string,
    browsingData: any = null,
    pageContent: any = null,
    existingThreadId: string | null = null
): Promise<{ output_text: string; threadId: string }> {
    
    const assistantId = ASSISTANT_IDS[assistantType as keyof typeof ASSISTANT_IDS];
    if (!assistantId) {
        throw new Error(`Invalid assistant type: ${assistantType}`);
    }

    console.log("=== OPENAI ASSISTANT REQUEST ===");
    console.log("User message:", userMessage);
    console.log("Assistant type:", assistantType);
    console.log("Browsing data received:", browsingData ? "YES" : "NO");
    console.log("Page content received:", pageContent ? "YES" : "NO");
    console.log("Existing thread:", existingThreadId ? "YES" : "NO");

    let threadId: string;
    let fileId: string | null = null;
    let messageContent = userMessage;

    // Parallel operations for new threads
    if (!existingThreadId) {
        const operations: Promise<any>[] = [];
        
        // Always create new thread
        const threadPromise = openai.beta.threads.create().then((thread: any) => {
            console.log("Created new thread:", thread.id);
            return thread.id;
        });
        operations.push(threadPromise);

        // Handle page content for page_analysis assistant
        if (pageContent && assistantType === "page_analysis") {
            console.log("Processing page content for analysis...");
            console.log("Page title:", pageContent.title);
            console.log("Page URL:", pageContent.url);
            console.log("Content length:", pageContent.content?.length || 0);
            console.log("Word count:", pageContent.wordCount);

            messageContent = `Page Title: ${pageContent.title}
URL: ${pageContent.url}
Word Count: ${pageContent.wordCount}

Content:
${pageContent.content}

User Question: ${userMessage}`;

            console.log("Page content message length:", messageContent.length);
        }

        // Execute operations in parallel
        const results = await Promise.all(operations);
        threadId = results[0]; // Thread ID is always first
        if (results.length > 1) {
            fileId = results[1]; // File ID if file was uploaded
        }
    } else {
        // Use existing thread
        threadId = existingThreadId;
        console.log("Using existing thread:", threadId);
    }

    console.log("Final message content length:", messageContent.length);

    // Regular text processing with Assistants API
    const messageData: any = {
        role: "user",
        content: messageContent
    };

    if (fileId) {
        messageData.attachments = [
            {
                file_id: fileId,
                tools: [{ type: "code_interpreter" }],
            },
        ];
    }

    console.log("Creating message with data:", JSON.stringify(messageData, null, 2));
    await openai.beta.threads.messages.create(threadId, messageData);
    console.log("Message added to thread successfully");

    // Run assistant with the correct ID
    const runConfig: any = {
        assistant_id: assistantId,
    };

    if (fileId) {
        runConfig.tools = [{ type: "code_interpreter" }];
        console.log("Running with code_interpreter (file uploaded)");
    } else {
        console.log("Running with default tools");
    }

    const run = await openai.beta.threads.runs.create(threadId, runConfig);
    console.log("Assistant run created:", run.id);

    // Poll until completion
    let completed = false;
    let runResult: any;
    let attempts = 0;
    const maxAttempts = 30;

    while (!completed && attempts < maxAttempts) {
        attempts++;
        console.log(`Polling run ${run.id} (attempt ${attempts})`);
        runResult = await openai.beta.threads.runs.retrieve(threadId, run.id);
        console.log("Run status:", runResult.status);

        if (runResult.status === "completed") {
            completed = true;
        } else if (runResult.status === "failed" || runResult.status === "cancelled") {
            console.error("Run failed:", runResult.last_error);

            // If file upload failed, try without code interpreter
            if (fileId && runResult.last_error?.code === "server_error") {
                console.log("Retrying without code interpreter...");
                const retryRun = await openai.beta.threads.runs.create(threadId, {
                    assistant_id: assistantId,
                });

                // Continue polling the retry
                let retryCompleted = false;
                let retryAttempts = 0;
                while (!retryCompleted && retryAttempts < 20) {
                    retryAttempts++;
                    const retryResult = await openai.beta.threads.runs.retrieve(threadId, retryRun.id);
                    if (retryResult.status === "completed") {
                        runResult = retryResult;
                        completed = true;
                        retryCompleted = true;
                    } else if (retryResult.status === "failed") {
                        throw new Error(`Retry also failed: ${retryResult.last_error?.message}`);
                    } else {
                        await new Promise((resolve) => setTimeout(resolve, 500)); // Reduced from 1000ms
                    }
                }
                if (!retryCompleted) {
                    throw new Error("Retry run timed out");
                }
            } else {
                throw new Error(`Assistant run ${runResult.status}: ${runResult.last_error?.message || "Unknown error"}`);
            }
        } else if (runResult.status === "expired") {
            throw new Error("Assistant run expired");
        } else {
            await new Promise((resolve) => setTimeout(resolve, 500)); // Reduced from 1000ms
        }
    }

    if (!completed) {
        throw new Error("Assistant run timed out");
    }

    // Get assistant's reply
    const messages = await openai.beta.threads.messages.list(threadId);
    const assistantMessage = messages.data.find(
        (msg: any) => msg.role === "assistant" && msg.run_id === runResult.id,
    );

    const output = assistantMessage?.content?.[0]?.text?.value || "No response from assistant";

    return {
        output_text: output,
        threadId: threadId,
    };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin as string;
    console.log('🌐 Request origin:', origin);
    console.log('🔗 All headers:', Object.keys(req.headers));
    console.log('🔑 Auth header:', req.headers.authorization ? 'present' : 'missing');
    console.log('👤 User ID header:', req.headers['x-user-id'] ? 'present' : 'missing');
    
    setCorsHeaders(res, origin);

    if (req.method === 'OPTIONS') {
        handleOptions(res, origin);
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    // Simple auth: just get the access token from Authorization header
    const authHeader = req.headers.authorization as string;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('❌ Missing or invalid Authorization header');
        res.status(401).json({
            success: false,
            error: 'Authentication required',
            message: 'Missing Authorization header'
        });
        return;
    }

    const accessToken = authHeader.substring(7);
    console.log('✅ Access token extracted, length:', accessToken.length);

    // Parse request body (matching Firebase Functions format)
    const { 
        userMessage, 
        browsingData, 
        pageContent, 
        threadId: existingThreadId, 
        assistantType = 'generalAsk',
        message,
        conversationType 
    } = req.body;

    // Support both old and new format
    const finalUserMessage = userMessage || message;
    const finalAssistantType = assistantType || conversationType || 'generalAsk';

    if (!finalUserMessage || typeof finalUserMessage !== 'string') {
        res.status(400).json({
            success: false,
            error: 'userMessage is required and must be a string'
        });
        return;
    }

    // Validate assistant type  
    const validTypes = ['page_analysis', 'generalAsk'];
    if (!validTypes.includes(finalAssistantType)) {
        res.status(400).json({
            success: false,
            error: `Invalid assistant type. Must be one of: ${validTypes.join(', ')}`
        });
        return;
    }

    try {
        // Verify user authentication by checking Google API first
        const authStartTime = Date.now();
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!userResponse.ok) {
            console.log('❌ Google API returned:', userResponse.status);
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Invalid or expired token'
            });
            return;
        }

        const userInfo = await userResponse.json() as { id: string; email: string; name?: string };
        const userId = userInfo.id;
        const authEndTime = Date.now();
        
        console.log('✅ User authenticated:', userInfo.email);
        console.log('👤 User ID:', userId);
        console.log('⏱️ Auth verification took:', authEndTime - authStartTime, 'ms');

        // Check rate limits after getting userId
        const rateLimitCheck = checkRateLimit(userId);
        if (!rateLimitCheck.allowed) {
            res.status(429).json({
                success: false,
                error: rateLimitCheck.error,
                rateLimited: true
            });
            return;
        }

        // Get OpenAI API key from environment
        const openaiApiKey = process.env.OPENAI_API_KEY;
        if (!openaiApiKey) {
            console.error('OPENAI_API_KEY environment variable not set');
            res.status(500).json({
                success: false,
                error: 'AI service temporarily unavailable - API key not configured'
            });
            return;
        }

        // Initialize OpenAI client
        const openaiClient = initializeOpenAI(openaiApiKey);
        
        console.log(`Processing AI request for user ${userId}, assistant type: ${finalAssistantType}`);
        console.log(`Message: "${finalUserMessage.substring(0, 100)}..."`);
        
        // Update rate limit counters before processing
        updateRateLimit(userId);

        // Process with OpenAI Assistants API (replicating Firebase Functions behavior)
        const result = await processWithAssistant(
            openaiClient,
            finalUserMessage,
            finalAssistantType,
            browsingData,
            pageContent,
            existingThreadId
        );

        const userLimit = userRateLimits.get(userId);
        const remaining = userLimit ? DAILY_LIMIT - userLimit.dailyCount : DAILY_LIMIT;
        
        res.status(200).json({
            success: true,
            output_text: result.output_text,
            response: result.output_text, // Backward compatibility
            threadId: result.threadId,
            usage: {
                remaining: remaining,
                dailyLimit: DAILY_LIMIT,
                resetTime: 'tomorrow at midnight'
            },
            timing: {
                authMs: authEndTime - authStartTime
            }
        });

    } catch (error) {
        console.error('OpenAI chat error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process AI request'
        });
    }
}