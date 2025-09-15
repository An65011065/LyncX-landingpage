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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin as string;
    setCorsHeaders(res, origin);

    if (req.method === 'OPTIONS') {
        handleOptions(res, origin);
        return;
    }

    if (req.method !== 'GET') {
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

    try {
        // Verify token is valid by making a simple Google API call
        const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Google access token is invalid or expired'
            });
            return;
        }

        const userInfo = await response.json();
        
        // Verify that the token's user ID matches our stored user ID
        if (userInfo.id !== userId) {
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Token user ID mismatch'
            });
            return;
        }
        
        // Return the Google access token for calendar API usage
        res.status(200).json({
            success: true,
            token: accessToken,
            user_id: userId,
            expires_in: 3600 // Google tokens typically expire in 1 hour
        });
        
    } catch (error) {
        console.error('❌ Google token validation error:', error);
        res.status(401).json({
            success: false,
            error: 'Authentication required',
            message: 'Invalid or expired token'
        });
    }
}