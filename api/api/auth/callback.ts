import type { VercelRequest, VercelResponse } from '@vercel/node';
import { exchangeCodeForTokens, getUserInfo } from '../../src/services/oauth';
import { createAuthCookies } from '../../src/utils/cookies';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';
import { createOrUpdateUser } from '../../src/services/firebase';

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

    try {
        const { code, redirectUri } = req.body;
        
        if (!code) {
            res.status(400).json({ error: 'Authorization code required' });
            return;
        }

        console.log('🔄 Processing OAuth callback for extension');
        
        // Exchange code for tokens
        const tokenData = await exchangeCodeForTokens(code, redirectUri);
        
        // Get user info
        const userInfo = await getUserInfo(tokenData.access_token);
        
        // Try to create Firebase user document (non-blocking)
        try {
            await createOrUpdateUser({
                uid: userInfo.id,
                email: userInfo.email,
                displayName: userInfo.name,
                photoURL: userInfo.picture,
                accessToken: tokenData.access_token,
                refreshToken: tokenData.refresh_token
            });
            console.log('✅ Firebase user created successfully');
        } catch (firebaseError) {
            console.error('⚠️ Firebase user creation failed (non-critical):', firebaseError);
            // Continue with authentication even if Firebase fails
        }
        
        // Set secure HTTP-only cookies using standardized utility
        const cookies = createAuthCookies({
            access_token: tokenData.access_token,
            refresh_token: tokenData.refresh_token,
            user_id: userInfo.id
        });
        
        res.setHeader('Set-Cookie', cookies);
        
        console.log('✅ Authentication successful, cookies set');
        
        res.status(200).json({
            success: true,
            user: {
                uid: userInfo.id,
                email: userInfo.email,
                displayName: userInfo.name,
                photoURL: userInfo.picture
            }
        });
        
    } catch (error) {
        console.error('❌ OAuth callback error:', error);
        res.status(500).json({ 
            error: 'Authentication failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}