import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, getApps, cert } from 'firebase-admin/app';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        console.log('🔍 Testing Firebase Admin initialization...');
        
        // Check environment variable
        const envVar = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        if (!envVar) {
            res.status(200).json({
                success: false,
                error: 'Environment variable not found'
            });
            return;
        }

        // Parse service account
        let serviceAccount;
        try {
            serviceAccount = JSON.parse(envVar);
        } catch (parseError) {
            res.status(200).json({
                success: false,
                error: 'JSON parsing failed',
                details: parseError instanceof Error ? parseError.message : 'Unknown error'
            });
            return;
        }

        // Test Firebase Admin initialization
        let app;
        try {
            // Clear any existing apps first
            const existingApps = getApps();
            console.log(`Found ${existingApps.length} existing Firebase apps`);
            
            if (existingApps.length === 0) {
                console.log('🔥 Initializing Firebase Admin...');
                app = initializeApp({
                    credential: cert(serviceAccount),
                    projectId: serviceAccount.project_id
                });
                console.log('✅ Firebase Admin initialized successfully');
            } else {
                app = existingApps[0];
                console.log('✅ Using existing Firebase Admin app');
            }
        } catch (initError) {
            res.status(200).json({
                success: false,
                error: 'Firebase initialization failed',
                details: initError instanceof Error ? initError.message : 'Unknown error',
                stack: initError instanceof Error ? initError.stack : undefined
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Firebase Admin initialized successfully',
            project_id: serviceAccount.project_id,
            app_name: app.name,
            existing_apps_count: getApps().length
        });

    } catch (error) {
        console.error('❌ Firebase test error:', error);
        res.status(500).json({
            success: false,
            error: 'Test failed',
            details: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
    }
}