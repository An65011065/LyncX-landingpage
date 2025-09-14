import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        console.log('🔍 Testing Firestore connection...');
        
        // Initialize Firebase Admin
        const envVar = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        if (!envVar) {
            res.status(200).json({
                success: false,
                error: 'Environment variable not found'
            });
            return;
        }

        const serviceAccount = JSON.parse(envVar);
        
        let app;
        const existingApps = getApps();
        if (existingApps.length === 0) {
            app = initializeApp({
                credential: cert(serviceAccount),
                projectId: serviceAccount.project_id
            });
        } else {
            app = existingApps[0];
        }

        // Test Firestore connection
        let db;
        try {
            db = getFirestore(app);
            console.log('✅ Firestore instance created');
        } catch (dbError) {
            res.status(200).json({
                success: false,
                error: 'Firestore initialization failed',
                details: dbError instanceof Error ? dbError.message : 'Unknown error'
            });
            return;
        }

        // Test write operation
        const testDocId = `test-${Date.now()}`;
        try {
            console.log('🔄 Testing Firestore write...');
            await db.collection('debug-test').doc(testDocId).set({
                message: 'Test document',
                timestamp: new Date(),
                test: true
            });
            console.log('✅ Firestore write successful');
        } catch (writeError) {
            res.status(200).json({
                success: false,
                error: 'Firestore write failed',
                details: writeError instanceof Error ? writeError.message : 'Unknown error',
                step: 'write'
            });
            return;
        }

        // Test read operation
        try {
            console.log('🔄 Testing Firestore read...');
            const doc = await db.collection('debug-test').doc(testDocId).get();
            if (doc.exists) {
                console.log('✅ Firestore read successful');
            } else {
                throw new Error('Document not found after write');
            }
        } catch (readError) {
            res.status(200).json({
                success: false,
                error: 'Firestore read failed',
                details: readError instanceof Error ? readError.message : 'Unknown error',
                step: 'read'
            });
            return;
        }

        // Clean up test document
        try {
            await db.collection('debug-test').doc(testDocId).delete();
            console.log('✅ Test document cleaned up');
        } catch (deleteError) {
            console.log('⚠️ Failed to clean up test document:', deleteError);
        }

        res.status(200).json({
            success: true,
            message: 'Firestore connection, read, and write operations successful',
            project_id: serviceAccount.project_id,
            test_doc_id: testDocId
        });

    } catch (error) {
        console.error('❌ Firestore test error:', error);
        res.status(500).json({
            success: false,
            error: 'Test failed',
            details: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
    }
}