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
        console.log('🔍 Step 1: Testing individual environment variables...');
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const privateKeyId = process.env.FIREBASE_PRIVATE_KEY_ID;
        const clientId = process.env.FIREBASE_CLIENT_ID;
        
        if (!projectId || !privateKey || !clientEmail) {
            results.step1_env = {
                success: false,
                error: 'Missing required Firebase environment variables',
                missing: {
                    project_id: !projectId,
                    private_key: !privateKey,
                    client_email: !clientEmail
                }
            };
            return res.status(200).json(results);
        }

        const serviceAccount = {
            type: "service_account",
            project_id: projectId,
            private_key_id: privateKeyId,
            private_key: privateKey.replace(/\\n/g, '\n'), // Fix escaped newlines
            client_email: clientEmail,
            client_id: clientId,
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(clientEmail)}`
        };
        
        results.step1_env = {
            success: true,
            project_id: projectId,
            client_email: clientEmail,
            has_private_key: !!privateKey,
            has_private_key_id: !!privateKeyId,
            has_client_id: !!clientId,
            private_key_preview: privateKey.substring(0, 50) + '...'
        };
        console.log('✅ Step 1: Environment variables OK');

        // STEP 2: Firebase Init Test
        console.log('🔍 Step 2: Testing Firebase initialization...');
        let app;
        try {
            const existingApps = getApps();
            if (existingApps.length === 0) {
                app = initializeApp({
                    credential: cert(serviceAccount),
                    projectId: projectId
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