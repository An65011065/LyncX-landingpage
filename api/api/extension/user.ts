import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, handleOptions } from '../../src/utils/cors';
import { COOKIE_CONFIG } from '../../src/utils/cookies';
import { getUserInfo } from '../../src/services/oauth';
import { getUser } from '../../src/services/firebase';

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
            error: 'Authentication required',
            message: 'No valid session found'
        });
        return;
    }

    try {
        // Get user info from Google API using standardized service
        const userInfo = await getUserInfo(accessToken);
        
        // Verify that the token's user ID matches our stored user ID
        if (userInfo.id !== userId) {
            res.status(401).json({
                error: 'Authentication required',
                message: 'Token user ID mismatch'
            });
            return;
        }
        
        // Try to get enhanced user data from Firebase
        let userData = {
            uid: userInfo.id,
            email: userInfo.email,
            displayName: userInfo.name,
            photoURL: userInfo.picture,
            authenticated: true,
            timestamp: new Date().toISOString()
        };
        
        try {
            const firebaseUser = await getUser(userInfo.id);
            if (firebaseUser) {
                userData = {
                    ...userData,
                    plan: firebaseUser.plan || { type: 'free' },
                    createdAt: firebaseUser.createdAt,
                    lastLoginAt: firebaseUser.lastLoginAt
                };
            }
        } catch (firebaseError) {
            console.log('Could not fetch Firebase user data:', firebaseError);
            // Continue with Google data only
        }
        
        res.status(200).json({
            success: true,
            user: userData
        });
        
    } catch (error) {
        console.error('❌ User info fetch error:', error);
        res.status(401).json({
            error: 'Authentication required',
            message: 'Invalid or expired token'
        });
    }
}