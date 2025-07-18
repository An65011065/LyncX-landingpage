// src/pages/auth.tsx - Complete with debug alerts
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlQbwqFDB0XMZv8du485VBsqVxU3S-vpY",
    authDomain: "linkx-b2c62.firebaseapp.com",
    projectId: "linkx-b2c62",
    storageBucket: "linkx-b2c62.firebasestorage.app",
    messagingSenderId: "606602321768",
    appId: "1:606602321768:web:764410dd29bbb76e47c0dd",
    measurementId: "G-ZEQRBXMSSB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isExtensionAuth, setIsExtensionAuth] = useState(false);
    const [authComplete, setAuthComplete] = useState(false);

    const location = useLocation();

    useEffect(() => {
        // Check URL params for extension auth
        const urlParams = new URLSearchParams(location.search);
        const source = urlParams.get("source");
        const redirect_uri = urlParams.get("redirect_uri");

        const isFromExtension = source === "extension";
        setIsExtensionAuth(isFromExtension);

        console.log("🔍 Auth page params:", {
            source,
            redirect_uri,
            isFromExtension,
        });

        // Validate extension auth requirements
        if (isFromExtension && !redirect_uri) {
            console.error("❌ Extension auth missing redirect_uri parameter");
            setError("Invalid extension authentication request");
            return;
        }

        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && !authComplete) {
                console.log("✅ User signed in:", user.email);

                if (isFromExtension) {
                    // Extension auth - generate JWT and redirect
                    notifyExtensionSuccess(user, redirect_uri!);
                } else {
                    // Regular web auth - redirect to dashboard or home
                    window.location.href = "/";
                }
            }
        });

        return () => unsubscribe();
    }, [location, authComplete]);

    const notifyExtensionSuccess = async (user: any, redirectUri: string) => {
        alert("🚨 notifyExtensionSuccess called!"); // DEBUG ALERT

        console.log("✅ Extension auth successful, generating JWT token...");
        setAuthComplete(true);

        try {
            // STEP 1: Call your backend to generate JWT token
            console.log("🔄 Calling backend to generate JWT token...");

            const response = await fetch(
                "https://lyncx-server.vercel.app/api/auth/generate-token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    }),
                },
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                alert(`❌ Backend failed: ${response.status}`); // DEBUG ALERT
                throw new Error(
                    errorData.error ||
                        `Token generation failed: ${response.status}`,
                );
            }

            const { token } = await response.json();

            if (!token) {
                alert("❌ No token received from server!"); // DEBUG ALERT
                throw new Error("No token received from server");
            }

            alert("✅ JWT token received, redirecting..."); // DEBUG ALERT

            // STEP 2: Build redirect URL with user data AND JWT token
            const successUrl = new URL(redirectUri);
            successUrl.searchParams.set("uid", user.uid);
            successUrl.searchParams.set("email", user.email || "");
            successUrl.searchParams.set("displayName", user.displayName || "");
            successUrl.searchParams.set("photoURL", user.photoURL || "");
            successUrl.searchParams.set("token", token); // 🔑 JWT TOKEN!
            successUrl.searchParams.set("timestamp", Date.now().toString());

            console.log("🔄 Redirecting to extension with JWT token");

            // STEP 3: Redirect to Chrome's special URL - Chrome will intercept this
            window.location.href = successUrl.toString();
        } catch (error) {
            alert(
                `❌ Error: ${
                    error instanceof Error ? error.message : "Unknown error"
                }`,
            ); // DEBUG ALERT
            console.error("❌ Error during JWT token generation:", error);
            setError(
                `Authentication failed: ${
                    error instanceof Error ? error.message : "Unknown error"
                }`,
            );
            setAuthComplete(false); // Allow retry
        }
    };

    const handleSignIn = async () => {
        setLoading(true);
        setError(null);

        try {
            const provider = new GoogleAuthProvider();
            provider.addScope("email");
            provider.addScope("profile");

            const result = await signInWithPopup(auth, provider);
            console.log("Sign in successful:", result.user.email);

            // Auth state change will handle the redirect
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
