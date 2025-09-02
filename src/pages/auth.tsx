// src/pages/auth.tsx - Complete with debug alerts
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithCredential,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlQbwqFDB0XMZv8du485VBsqVxU3S-vpY",
    authDomain: "lyncx.ai",
    projectId: "linkx-b2c62",
    storageBucket: "linkx-b2c62.firebasestorage.app",
    messagingSenderId: "606602321768",
    appId: "1:606602321768:web:764410dd29bbb76e47c0dd",
    measurementId: "G-ZEQRBXMSSB",
};

// Web Application OAuth Client ID (for universal browser compatibility)
const WEB_OAUTH_CLIENT_ID = "606602321768-s9h4rdbjtieqnc3lh411h0v15q30kjq5.apps.googleusercontent.com";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isExtensionAuth, setIsExtensionAuth] = useState(false);
    const [authComplete, setAuthComplete] = useState(false);
    const [currentAccessToken, setCurrentAccessToken] = useState<string | null>(null);

    const location = useLocation();

    useEffect(() => {
        // Check URL params for extension auth and OAuth callback  
        const urlParams = new URLSearchParams(location.search);
        const source = urlParams.get("source");
        
        // Check for OAuth callback in hash (access_token, id_token)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        const idToken = hashParams.get("id_token");
        const error = hashParams.get("error");
        const state = hashParams.get("state");

        const isFromExtension = source === "extension";
        setIsExtensionAuth(isFromExtension);

        console.log("🔍 Auth page params:", {
            source,
            isFromExtension,
            accessToken: accessToken ? "YES" : "NO",
            idToken: idToken ? "YES" : "NO",
            error: error || "NO",
            state: state || "NO"
        });

        // Handle OAuth callback - simplified logic
        if (accessToken && idToken && isFromExtension) {
            console.log("🔄 Detected OAuth callback for extension");
            handleOAuthCallback(accessToken, idToken);
            return;
        } else if (error && isFromExtension) {
            console.log("❌ OAuth error detected:", error);
            setError(`OAuth error: ${error}`);
            setLoading(false);
            return;
        } else if (isFromExtension && !accessToken && !idToken) {
            console.log("🔄 Extension auth page loaded, waiting for user action");
        }


        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && !authComplete) {
                console.log("✅ User signed in:", user.email);

                if (isFromExtension) {
                    // Extension auth - only notify if not already done in handleOAuthCallback
                    if (!window.location.hash.includes('access_token')) {
                        // This is likely from regular Firebase auth, not OAuth callback
                        notifyExtensionSuccess(user, currentAccessToken);
                    }
                } else {
                    // Regular web auth - redirect to dashboard or home
                    window.location.href = "/";
                }
            }
        });

        return () => unsubscribe();
    }, [location, authComplete]);

    const handleOAuthCallback = async (accessToken: string, idToken: string) => {
        setLoading(true);
        console.log("🔄 Processing OAuth callback...");
        console.log("✅ Got access token and ID token from OAuth");
        
        try {
            // Sign in to Firebase with ID token to get user info
            const credential = GoogleAuthProvider.credential(idToken);
            const firebaseResult = await signInWithCredential(auth, credential);
            console.log("✅ Firebase sign-in successful:", firebaseResult.user.email);

            // ALWAYS store OAuth data when we have tokens - no conditions!
            const authData = {
                user: {
                    uid: firebaseResult.user.uid,
                    email: firebaseResult.user.email,
                    displayName: firebaseResult.user.displayName,
                    photoURL: firebaseResult.user.photoURL
                },
                accessToken: accessToken,
                timestamp: Date.now()
            };

            console.log("🔄 Storing OAuth data immediately...");
            localStorage.setItem('lyncx_oauth_complete', JSON.stringify(authData));
            localStorage.setItem('lyncx_should_redirect', 'true');
            console.log("✅ OAuth data stored successfully");

            // Dispatch event immediately 
            window.dispatchEvent(new CustomEvent('lyncx_auth_complete', { detail: authData }));
            console.log("✅ Event dispatched");

            // Open extension tab directly with your extension ID
            console.log("🔄 Opening extension tab...");
            const extensionUrl = `chrome-extension://lljcelbdgpjianpjkpdckkmgkbfhoccj/src/landing/landing.html`;
            window.open(extensionUrl, '_blank');
            console.log("✅ Extension tab opened");

            // Clear hash from URL
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
            console.log("✅ OAuth callback completed successfully");
            
        } catch (error) {
            console.error("❌ OAuth callback error:", error);
            setError(error instanceof Error ? error.message : "OAuth callback failed");
        } finally {
            setLoading(false);
        }
    };



    const handleSignIn = async () => {
        setLoading(true);
        setError(null);

        try {
            // Try a simpler approach: use postMessage to the parent window from a direct redirect
            const scopes = [
                "openid",
                "email",
                "profile", 
                "https://www.googleapis.com/auth/calendar.readonly",
                "https://www.googleapis.com/auth/calendar.events",
                "https://www.googleapis.com/auth/gmail.send",
                "https://www.googleapis.com/auth/gmail.readonly",
                "https://www.googleapis.com/auth/contacts.readonly",
                "https://www.googleapis.com/auth/youtube.readonly"
            ];

            // Use the current page as redirect URI with a hash fragment approach
            // Preserve the source=extension parameter in redirect URI
            const redirectUri = isExtensionAuth 
                ? window.location.href.split('#')[0] // Keep the source=extension query param
                : window.location.href.split('?')[0]; // Regular web auth without params
                
            const params = new URLSearchParams({
                client_id: WEB_OAUTH_CLIENT_ID,
                response_type: 'token id_token',
                scope: scopes.join(' '),
                redirect_uri: redirectUri,
                nonce: Math.random().toString(36).substring(2),
                state: 'oauth_' + Math.random().toString(36).substring(2),
                include_granted_scopes: 'true',
                prompt: 'consent'
            });

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
            
            console.log("🔗 Generated OAuth URL:", authUrl);
            console.log("🔗 Redirect URI:", window.location.href.split('?')[0]);
            
            // Redirect to OAuth (it will come back to this same page)
            window.location.href = authUrl;
        } catch (error: any) {
            console.error("Sign in error:", error);

            let errorMessage = "Sign in failed. Please try again.";
            if (error.code === "auth/popup-blocked") {
                errorMessage =
                    "Popup was blocked. Please allow popups and try again.";
            } else if (error.code === "auth/popup-closed-by-user") {
                errorMessage = "Sign in was cancelled.";
            }

            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Show success screen after auth (this will be brief before redirect)
    if (authComplete && isExtensionAuth) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Authentication Successful!
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Generating secure token and redirecting...
                    </p>
                    <div className="text-sm text-gray-500">
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Extension auth UI
    if (isExtensionAuth) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                    <div className="text-center mb-2">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            🔗 Extension Auth
                        </span>
                    </div>

                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            LyncX
                        </h1>
                        <p className="text-gray-600">
                            Sign in to sync your browsing history and unlock
                            powerful insights
                        </p>
                    </div>

                    <button
                        onClick={handleSignIn}
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </>
                        )}
                    </button>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    <p className="text-xs text-gray-500 text-center mt-4">
                        Secure authentication powered by Google
                    </p>
                </div>
            </div>
        );
    }

    // Show error if someone visits /auth without proper extension parameters
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Authentication Required
                </h1>
                <p className="text-gray-600 mb-6">
                    This page is for extension authentication only. Please use
                    the LyncX extension to sign in.
                </p>
                <a
                    href="/"
                    className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Go to Homepage
                </a>
            </div>
        </div>
    );
}
