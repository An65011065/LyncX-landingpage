import type { VercelRequest, VercelResponse } from '@vercel/node';
import { exchangeCodeForTokens, getUserInfo } from '../../src/services/oauth';

function setCorsHeaders(res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.lyncx.ai, https://lyncx.ai, http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
        res.status(200).end();
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
        
        // Set secure HTTP-only cookies
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax' as const,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/'
        };
        
        const accessTokenCookie = `lyncx_access_token=${tokenData.access_token}; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''} SameSite=Lax; Max-Age=${60 * 60}; Path=/`;
        const userIdCookie = `lyncx_user_id=${userInfo.id}; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''} SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}; Path=/`;
        
        const cookies = [accessTokenCookie, userIdCookie];
        
        if (tokenData.refresh_token) {
            const refreshTokenCookie = `lyncx_refresh_token=${tokenData.refresh_token}; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''} SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}; Path=/`;
            cookies.push(refreshTokenCookie);
        }
        
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