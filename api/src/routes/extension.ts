import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Protected route - extension can call this with cookies
router.get('/user', authMiddleware, async (req: Request, res: Response) => {
    const userId = req.cookies.lyncx_user_id;
    const accessToken = req.cookies.lyncx_access_token;
    
    try {
        // Get user info from Google API using stored access token
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        if (userInfoResponse.ok) {
            const userInfo = await userInfoResponse.json();
            res.json({
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
            res.json({
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
        res.json({
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
});

// Extension sync endpoint - where extension would sync data
router.post('/sync', authMiddleware, (req: Request, res: Response) => {
    const { data } = req.body;
    const userId = req.cookies.lyncx_user_id;
    
    console.log(`📊 Sync request from extension for user: ${userId}`);
    
    // Here you would sync data with Firebase/Firestore
    // For proof of concept, just acknowledge receipt
    
    res.json({
        success: true,
        message: 'Data sync successful',
        userId,
        dataReceived: !!data
    });
});

export default router;