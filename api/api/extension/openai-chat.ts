import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';
import { COOKIE_CONFIG } from '../../src/utils/cookies';

function parseCookies(cookieHeader: string): Record<string, string> {
    const cookies: Record<string, string> = {};
    if (!cookieHeader) return cookies;
    
    cookieHeader.split(';').forEach(cookie => {
        const [name, ...rest] = cookie.trim().split('=');
        cookies[name] = rest.join('=');
    });
    
    return cookies;
}

// In-memory rate limiting storage (simple implementation)
interface UserRateLimit {
    dailyCount: number;
    lastRequest: number;
    dailyReset: string; // YYYY-MM-DD format
}

const userRateLimits = new Map<string, UserRateLimit>();

// Rate limiting constants
const DAILY_LIMIT = 20;
const RATE_LIMIT_MS = 15000; // 15 seconds between requests (allows ~3 per minute)
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin as string;
    setCorsHeaders(res, origin);

    if (req.method === 'OPTIONS') {
        handleOptions(res, origin);
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const cookies = parseCookies(req.headers.cookie as string);
    const accessToken = cookies[COOKIE_CONFIG.ACCESS_TOKEN.name];
    const userId = cookies[COOKIE_CONFIG.USER_ID.name];

    if (!accessToken || !userId) {
        res.status(401).json({
            success: false,
            error: 'Authentication required',
            message: 'No valid session found'
        });
        return;
    }

    // Parse request body
    const { message, conversationType, resetThread } = req.body;

    if (!message || typeof message !== 'string') {
        res.status(400).json({
            success: false,
            error: 'Message is required and must be a string'
        });
        return;
    }

    if (conversationType && !['general', 'generalAsk'].includes(conversationType)) {
        res.status(400).json({
            success: false,
            error: 'Invalid conversation type. Must be "general" or "generalAsk"'
        });
        return;
    }

    // Check rate limits
    const rateLimitCheck = checkRateLimit(userId);
    if (!rateLimitCheck.allowed) {
        res.status(429).json({
            success: false,
            error: rateLimitCheck.error,
            rateLimited: true
        });
        return;
    }

    try {
        // Verify user authentication by checking Google API
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!userResponse.ok) {
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Invalid or expired token'
            });
            return;
        }

        const userInfo = await userResponse.json();
        
        if (userInfo.id !== userId) {
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Token user ID mismatch'
            });
            return;
        }

        // Update rate limit counters
        updateRateLimit(userId);

        // Get OpenAI API key from environment
        const openaiApiKey = process.env.OPENAI_API_KEY;
        if (!openaiApiKey) {
            console.error('OPENAI_API_KEY environment variable not set');
            res.status(500).json({
                success: false,
                error: 'AI service temporarily unavailable'
            });
            return;
        }

        // TODO: Implement thread management and OpenAI API call
        // For now, return a mock response to test the rate limiting
        const mockResponse = `Hello! I received your message: "${message}". This is a mock response while we implement the OpenAI integration.`;

        const remaining = (userRateLimits.get(userId)?.dailyCount ?? 0);
        
        res.status(200).json({
            success: true,
            response: mockResponse,
            usage: {
                remaining: DAILY_LIMIT - remaining,
                dailyLimit: DAILY_LIMIT,
                resetTime: 'tomorrow at midnight'
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