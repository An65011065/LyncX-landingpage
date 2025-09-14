import type { VercelRequest, VercelResponse } from '@vercel/node';

function setCorsHeaders(res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.lyncx.ai, https://lyncx.ai, http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    // Clear cookies
    const clearCookies = [
        'lyncx_access_token=; HttpOnly; Max-Age=0; Path=/',
        'lyncx_refresh_token=; HttpOnly; Max-Age=0; Path=/',
        'lyncx_user_id=; HttpOnly; Max-Age=0; Path=/'
    ];
    
    res.setHeader('Set-Cookie', clearCookies);
    
    res.status(200).json({ success: true, message: 'Logged out successfully' });
}