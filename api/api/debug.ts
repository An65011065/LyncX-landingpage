import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const results: any = {
        step1_env: { success: false },
        step2_firebase_init: { success: false },
        step3_firestore: { success: false }
    };

    try {
        // STEP 1: Environment Variable Test
        console.log('🔍 Step 1: Testing environment variable...');
        const envVar = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        
        if (!envVar) {
            results.step1_env = {
                success: false,
                error: 'Environment variable FIREBASE_SERVICE_ACCOUNT_KEY not found'
            };
            return res.status(200).json(results);
        }

        let serviceAccount;
        try {
            serviceAccount = JSON.parse(envVar);
            results.step1_env = {
                success: true,
                project_id: serviceAccount.project_id,
                client_email: serviceAccount.client_email,
                has_private_key: !!serviceAccount.private_key
            };
            console.log('✅ Step 1: Environment variable OK');
        } catch (parseError) {
            results.step1_env = {
                success: false,
                error: 'JSON parsing failed',
                details: parseError instanceof Error ? parseError.message : 'Unknown error'
            };
            return res.status(200).json(results);
        }

        // STEP 2: Firebase Init Test
        console.log('🔍 Step 2: Testing Firebase initialization...');
        let app;
        try {
            const existingApps = getApps();
            if (existingApps.length === 0) {
                app = initializeApp({
                    credential: cert(serviceAccount),
                    projectId: serviceAccount.project_id
                });
            } else {
                app = existingApps[0];
            }
            
            results.step2_firebase_init = {
                success: true,
                app_name: app.name,
                existing_apps_count: getApps().length
            };
            console.log('✅ Step 2: Firebase init OK');
        } catch (initError) {
            results.step2_firebase_init = {
                success: false,
                error: 'Firebase initialization failed',
                details: initError instanceof Error ? initError.message : 'Unknown error'
            };
            return res.status(200).json(results);
        }

        // STEP 3: Firestore Test
        console.log('🔍 Step 3: Testing Firestore...');
        try {
            const db = getFirestore(app);
            const testDocId = `debug-test-${Date.now()}`;
            
            // Test write
            await db.collection('debug-test').doc(testDocId).set({
                message: 'Debug test',
                timestamp: new Date()
            });
            
            // Test read
            const doc = await db.collection('debug-test').doc(testDocId).get();
            if (!doc.exists) {
                throw new Error('Document not found after write');
            }
            
            // Clean up
            await db.collection('debug-test').doc(testDocId).delete();
            
            results.step3_firestore = {
                success: true,
                test_doc_id: testDocId,
                message: 'Read/write operations successful'
            };
            console.log('✅ Step 3: Firestore OK');
            
        } catch (firestoreError) {
            results.step3_firestore = {
                success: false,
                error: 'Firestore operation failed',
                details: firestoreError instanceof Error ? firestoreError.message : 'Unknown error'
            };
        }

        res.status(200).json(results);

    } catch (error) {
        console.error('❌ Debug test error:', error);
        res.status(500).json({
            ...results,
            overall_error: {
                message: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined
            }
        });
    }
}