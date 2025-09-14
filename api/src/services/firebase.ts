// Firebase Admin SDK service for backend user management
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getAuth, type Auth } from 'firebase-admin/auth';

// Firebase Admin configuration
let adminApp: App;
let db: Firestore;
let auth: Auth;

// Initialize Firebase Admin SDK
export function initializeFirebaseAdmin(): void {
    try {
        // Check if already initialized
        if (getApps().length > 0) {
            console.log('🔥 Firebase Admin already initialized');
            adminApp = getApps()[0];
            db = getFirestore(adminApp);
            auth = getAuth(adminApp);
            return;
        }

        console.log('🔄 Initializing Firebase Admin...');
        
        // Initialize with individual environment variables
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        
        if (projectId && privateKey && clientEmail) {
            console.log('📋 Using individual environment variables');
            
            const serviceAccount = {
                type: "service_account",
                project_id: projectId,
                private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                private_key: privateKey.replace(/\\n/g, '\n'), // Fix escaped newlines
                client_email: clientEmail,
                client_id: process.env.FIREBASE_CLIENT_ID,
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(clientEmail)}`
            };
            
            adminApp = initializeApp({
                credential: cert(serviceAccount),
                projectId: projectId
            });
        } else {
            console.log('⚠️ Missing Firebase environment variables, using default credentials');
            adminApp = initializeApp({
                projectId: "linkx-b2c62"
            });
        }
        
        // Initialize services
        db = getFirestore(adminApp);
        auth = getAuth(adminApp);
        
        console.log('✅ Firebase Admin initialized successfully');

    } catch (error) {
        console.error('❌ Failed to initialize Firebase Admin:', error);
        // Don't throw - allow the API to work without Firebase for now
    }
}

// User creation interface
export interface CreateUserData {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;
    accessToken?: string;
    refreshToken?: string;
}

// Create or update user in Firestore
export async function createOrUpdateUser(userData: CreateUserData): Promise<void> {
    try {
        if (!db) {
            initializeFirebaseAdmin();
        }

        console.log('🔥 Creating/updating Firebase user:', userData.email);

        // Create user document in Firestore
        const userDocRef = db.collection('users').doc(userData.uid);
        
        const now = new Date();
        const userDoc = {
            uid: userData.uid,
            email: userData.email,
            displayName: userData.displayName,
            photoURL: userData.photoURL,
            plan: { type: 'free' },
            createdAt: now,
            updatedAt: now,
            lastLoginAt: now,
            // Store auth metadata (not tokens for security)
            authProvider: 'google',
            isActive: true
        };

        // Use set with merge to avoid overwriting existing data
        await userDocRef.set(userDoc, { merge: true });

        console.log('✅ Firebase user document created/updated:', userData.uid);

    } catch (error) {
        console.error('❌ Failed to create Firebase user:', error);
        throw error;
    }
}

// Get user from Firestore
export async function getUser(uid: string): Promise<any> {
    try {
        if (!db) {
            initializeFirebaseAdmin();
        }

        const userDoc = await db.collection('users').doc(uid).get();
        
        if (userDoc.exists) {
            return { uid, ...userDoc.data() };
        }
        
        return null;
    } catch (error) {
        console.error('❌ Failed to get Firebase user:', error);
        throw error;
    }
}

// Update user last login time
export async function updateUserLastLogin(uid: string): Promise<void> {
    try {
        if (!db) {
            initializeFirebaseAdmin();
        }

        await db.collection('users').doc(uid).update({
            lastLoginAt: new Date(),
            isActive: true
        });

        console.log('✅ Updated last login for user:', uid);
    } catch (error) {
        console.error('❌ Failed to update user last login:', error);
        // Don't throw - this is not critical
    }
}

// Firebase Admin initialized lazily when functions are called

export { db, auth };