import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';
import { COOKIE_CONFIG } from '../../src/utils/cookies';
import { getUserInfo } from '../../src/services/oauth';

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
        res.status(200).json({ authenticated: false });
        return;
    }

    try {
        // Validate the access token by fetching user info from Google
        const userInfo = await getUserInfo(accessToken);
        
        // Verify that the token's user ID matches our stored user ID
        if (userInfo.id === userId) {
            res.status(200).json({ 
                authenticated: true, 
                userId: userInfo.id,
                email: userInfo.email
            });
        } else {
            // User ID mismatch - tokens may be compromised
            res.status(200).json({ authenticated: false });
        }
    } catch (error) {
        // Token is invalid or expired
        console.log('Token validation failed:', error instanceof Error ? error.message : 'Unknown error');
        res.status(200).json({ authenticated: false });
    }
}