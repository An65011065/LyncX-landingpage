import type { VercelRequest, VercelResponse } from '@vercel/node';
import { clearAuthCookies } from '../../src/utils/cookies';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';

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

    // Clear cookies using standardized utility
    const clearCookies = clearAuthCookies();
    res.setHeader('Set-Cookie', clearCookies);
    
    res.status(200).json({ success: true, message: 'Logged out successfully' });
}