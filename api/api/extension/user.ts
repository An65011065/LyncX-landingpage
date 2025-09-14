import type { VercelRequest, VercelResponse } from '@vercel/node';

function setCorsHeaders(res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.lyncx.ai, https://lyncx.ai, http://localhost:5173');
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    setCorsHeaders(res);

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
    
    if (!accessToken || !userId) {
        res.status(401).json({
            error: 'Authentication required',
            message: 'No valid session found'
        });
        return;
    }
    
    try {
        // Get user info from Google API using stored access token
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        if (userInfoResponse.ok) {
            const userInfo = await userInfoResponse.json();
            res.status(200).json({
                success: true,
                user: {
                    uid: userInfo.id,
                    email: userInfo.email,
                    displayName: userInfo.name,
                    photoURL: userInfo.picture,
                    authenticated: true,
                    timestamp: new Date().toISOString()
                }
            });
        } else {
            // Fallback to basic info if API call fails
            res.status(200).json({
                success: true,
                user: {
                    uid: userId,
                    email: null,
                    displayName: null,
                    photoURL: null,
                    authenticated: true,
                    timestamp: new Date().toISOString()
                }
            });
        }
    } catch (error) {
        // Fallback to basic info if error occurs
        res.status(200).json({
            success: true,
            user: {
                uid: userId,
                email: null,
                displayName: null,
                photoURL: null,
                authenticated: true,
                timestamp: new Date().toISOString()
            }
        });
    }
}