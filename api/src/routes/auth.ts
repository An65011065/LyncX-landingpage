import { Router, Request, Response } from 'express';
import { exchangeCodeForTokens, getUserInfo } from '../services/oauth';

const router = Router();

// OAuth callback endpoint - handles the redirect from Google OAuth
router.post('/callback', async (req: Request, res: Response) => {
    try {
        const { code, redirectUri } = req.body;
        
        if (!code) {
            return res.status(400).json({ error: 'Authorization code required' });
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
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        };
        
        res.cookie('lyncx_access_token', tokenData.access_token, {
            ...cookieOptions,
            maxAge: 60 * 60 * 1000 // 1 hour for access token
        });
        
        if (tokenData.refresh_token) {
            res.cookie('lyncx_refresh_token', tokenData.refresh_token, cookieOptions);
        }
        
        res.cookie('lyncx_user_id', userInfo.id, cookieOptions);
        
        console.log('✅ Authentication successful, cookies set');
        
        res.json({
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
});

// Check authentication status
router.get('/status', (req: Request, res: Response) => {
    const accessToken = req.cookies.lyncx_access_token;
    const userId = req.cookies.lyncx_user_id;
    
    if (accessToken && userId) {
        res.json({ authenticated: true, userId });
    } else {
        res.json({ authenticated: false });
    }
});

// Logout endpoint
router.post('/logout', (req: Request, res: Response) => {
    res.clearCookie('lyncx_access_token');
    res.clearCookie('lyncx_refresh_token');
    res.clearCookie('lyncx_user_id');
    
    res.json({ success: true, message: 'Logged out successfully' });
});

export default router;