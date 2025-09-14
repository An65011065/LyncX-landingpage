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
        } else {
            // Initialize with service account credentials
            // In production, use environment variables for the service account
            const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY 
                ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
                : {
                    // Development fallback - replace with actual service account
                    projectId: "linkx-b2c62",
                    // Add your service account credentials here or use environment variables
                };

            if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
                adminApp = initializeApp({
                    credential: cert(serviceAccount),
                    projectId: "linkx-b2c62"
                });
            } else {
                // For development, you can use application default credentials
                // or initialize without credentials (will use default project)
                adminApp = initializeApp({
                    projectId: "linkx-b2c62"
                });
            }
            
            console.log('🔥 Firebase Admin initialized');
        }

        // Initialize services
        db = getFirestore(adminApp);
        auth = getAuth(adminApp);

    } catch (error) {
        console.error('❌ Failed to initialize Firebase Admin:', error);
        throw error;
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