import type { VercelRequest, VercelResponse } from '@vercel/node';

function setCorsHeaders(res: VercelResponse, origin?: string) {
    // Allow requests from extension, website, and localhost
    const allowedOrigins = [
        'https://www.lyncx.ai',
        'https://lyncx.ai', 
        'http://localhost:5173',
        'chrome-extension://lljcelbdgpjianpjkpdckkmgkbfhoccj'
    ];
    
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'https://www.lyncx.ai');
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
}

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
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const cookies = parseCookies(req.headers.cookie as string);
    const accessToken = cookies.lyncx_access_token;
    const userId = cookies.lyncx_user_id;
    
    if (accessToken && userId) {
        res.status(200).json({ authenticated: true, userId });
    } else {
        res.status(200).json({ authenticated: false });
    }
}