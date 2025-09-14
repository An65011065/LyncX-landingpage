import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.lyncx_access_token;
    const userId = req.cookies.lyncx_user_id;
    
    if (!accessToken || !userId) {
        return res.status(401).json({
            error: 'Authentication required',
            message: 'No valid session found'
        });
    }
    
    // In production, you'd validate the access token here
    // For proof of concept, just check if cookies exist
    
    next();
};