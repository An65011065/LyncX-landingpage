// src/pages/Auth.tsx (or wherever you put components)
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // This should exist in your Vite project
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

    const location = useLocation();

    useEffect(() => {
        // Check URL params for Vite/React Router
        const urlParams = new URLSearchParams(location.search);
        const source = urlParams.get("source");
        const isFromExtension = source === "extension";
        setIsExtensionAuth(isFromExtension);

        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (isFromExtension) {
                    // Extension auth - signal success and close
                    notifyExtensionSuccess();
                } else {
                    // Regular web auth - redirect to dashboard or home
                    window.location.href = "/";
                }
            }
        });

        return () => unsubscribe();
    }, [location]);

    const notifyExtensionSuccess = () => {
        console.log("✅ Extension auth successful");

        // Method 1: Change URL (what extension watches for)
        const successUrl = new URL(window.location.href);
        successUrl.pathname = "/auth-success";
        successUrl.searchParams.set("success", "true");
        successUrl.searchParams.set("timestamp", Date.now().toString());

        // Update URL without redirect
        window.history.replaceState({}, "", successUrl.toString());

        // Method 2: Try redirect after delay
        setTimeout(() => {
            window.location.href = successUrl.toString();
        }, 1500);
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

    // Extension auth UI - minimal and focused
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

    // Regular web auth UI
    return (
        <div className="min-h-screen bg-white">
            {/* Your existing header component or simple header */}
            <header className="py-6 border-b">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-900">LyncX</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Get Started with LyncX
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Choose your plan and start tracking your digital
                        wellness
                    </p>

                    {/* You can replace this with your actual PricingSection component */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8 max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Free Trial
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Start tracking your digital wellness today
                        </p>
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                            Free
                        </div>
                        <p className="text-sm text-gray-500">
                            No credit card required
                        </p>
                    </div>

                    <div className="mt-12">
                        <button
                            onClick={handleSignIn}
                            disabled={loading}
                            className="bg-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
                        >
                            {loading ? "Signing in..." : "Start Free Trial"}
                        </button>
                    </div>

                    {error && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 max-w-md mx-auto">
                            {error}
                        </div>
                    )}
                </div>
            </main>

            {/* Your existing footer component or simple footer */}
            <footer className="py-8 border-t bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">
                        © 2024 LyncX. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
