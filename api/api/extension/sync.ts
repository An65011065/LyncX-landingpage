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

export default function handler(req: VercelRequest, res: VercelResponse) {
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
            error: 'Authentication required',
            message: 'No valid session found'
        });
        return;
    }

    const { data } = req.body;
    
    console.log(`📊 Sync request from extension for user: ${userId}`);
    
    // Here you would sync data with Firebase/Firestore
    // For proof of concept, just acknowledge receipt
    
    res.status(200).json({
        success: true,
        message: 'Data sync successful',
        userId,
        dataReceived: !!data
    });
}