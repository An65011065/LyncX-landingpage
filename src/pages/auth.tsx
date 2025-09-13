// src/pages/auth.tsx - Simplified for extension auth without Firebase Auth
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Web Application OAuth Client ID (for universal browser compatibility)
const WEB_OAUTH_CLIENT_ID = "606602321768-s9h4rdbjtieqnc3lh411h0v15q30kjq5.apps.googleusercontent.com";

export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isExtensionAuth, setIsExtensionAuth] = useState(false);
    const [processedCode, setProcessedCode] = useState<string | null>(null);

    const location = useLocation();

    useEffect(() => {
        // Check URL params for extension auth and OAuth callback  
        const urlParams = new URLSearchParams(location.search);
        const source = urlParams.get("source");
        
        // Check for OAuth callback - authorization code flow uses URL params, not hash
        const code = urlParams.get("code");
        const error = urlParams.get("error");
        // const state = urlParams.get("state"); // Not used for now
        
        // For backwards compatibility, also check hash params (implicit flow)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        const idToken = hashParams.get("id_token");
        const refreshToken = hashParams.get("refresh_token");

        const isFromExtension = source === "extension";
        setIsExtensionAuth(isFromExtension);

        // console.log("🔍 Auth page params:", {
        //     source,
        //     isFromExtension,
        //     code: code ? "YES" : "NO",
        //     accessToken: accessToken ? "YES" : "NO",
        //     idToken: idToken ? "YES" : "NO", 
        //     refreshToken: refreshToken ? "YES" : "NO",
        //     error: error || "NO",
        //     state: state || "NO"
        // });

        // Handle OAuth callback - support both authorization code and implicit flows  
        if (code && isFromExtension && code !== processedCode) {
            console.log("🔄 Detected authorization code flow callback for extension");
            setProcessedCode(code); // Mark this code as being processed
            handleAuthorizationCodeCallback(code);
            return;
        } else if (accessToken && idToken && isFromExtension) {
            console.log("🔄 Detected implicit flow callback for extension (legacy)");
            handleOAuthCallback(accessToken, idToken, refreshToken || undefined);
            return;
        } else if (error && isFromExtension) {
            console.log("❌ OAuth error detected:", error);
            setError(`OAuth error: ${error}`);
            setLoading(false);
            return;
        } else if (isFromExtension && !code && !accessToken && !idToken) {
            console.log("🔄 Extension auth page loaded, waiting for user action");
        }


        // Extension auth doesn't need Firebase Auth state listener
        return () => {}; // No cleanup needed
    }, [location, processedCode]); // Removed isExtensionAuth to prevent unnecessary re-runs

    const handleAuthorizationCodeCallback = async (code: string) => {
        setLoading(true);
        console.log("🔄 Processing authorization code callback...");
        
        try {
            // Exchange authorization code for tokens using Firebase Function
            console.log("🔄 Calling Firebase Function to exchange code for tokens");
            const redirectUri = `${window.location.origin}/auth?source=extension`;
            console.log("🔗 Using redirect URI:", redirectUri);
            console.log("🔑 Using client ID:", WEB_OAUTH_CLIENT_ID);
            console.log("📄 Authorization code:", code.substring(0, 20) + "...");
            console.log("🌐 Current URL when making request:", window.location.href);
            
            const response = await fetch(
                "https://us-central1-linkx-b2c62.cloudfunctions.net/exchangeCodeForTokens",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: {
                            code: code,
                            clientId: WEB_OAUTH_CLIENT_ID,
                            redirectUri: redirectUri,
                        },
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error?.message || "Failed to exchange code for tokens");
            }

            const tokenData = result.data;
            console.log("✅ Successfully exchanged code for tokens");

            // Get user info using the access token
            const userInfoResponse = await fetch(
                "https://www.googleapis.com/oauth2/v2/userinfo",
                {
                    headers: {
                        'Authorization': `Bearer ${tokenData.access_token}`,
                    },
                }
            );

            if (!userInfoResponse.ok) {
                throw new Error("Failed to get user information");
            }

            const userInfo = await userInfoResponse.json();
            
            // Create auth data structure
            const authData = {
                user: {
                    uid: userInfo.id,
                    email: userInfo.email,
                    displayName: userInfo.name,
                    photoURL: userInfo.picture
                },
                accessToken: tokenData.access_token,
                refreshToken: tokenData.refresh_token, // This should now be available!
                timestamp: Date.now()
            };

            console.log("🔄 Storing OAuth data with refresh token:", authData.refreshToken ? "YES" : "NO");
            localStorage.setItem('lyncx_oauth_complete', JSON.stringify(authData));
            localStorage.setItem('lyncx_should_redirect', 'true');

            // Dispatch event for extension
            window.dispatchEvent(new CustomEvent('lyncx_auth_complete', { detail: authData }));

            // Clear URL parameters
            window.history.replaceState(null, '', window.location.pathname + window.location.search.split('?')[0] + '?source=extension');
            console.log("✅ Authorization code flow completed successfully");

        } catch (error) {
            console.error("❌ Authorization code callback error:", error);
            setError(error instanceof Error ? error.message : "Authorization failed");
        } finally {
            setLoading(false);
        }
    };

    const handleOAuthCallback = async (accessToken: string, idToken: string, refreshToken?: string) => {
        setLoading(true);
        console.log("🔄 Processing OAuth callback...");
        console.log("✅ Got access token and ID token from OAuth");
        
        try {
            // Decode ID token directly to get user info (no Firebase Auth needed for extension)
            console.log("🔄 Extracting user info from ID token...");
            const base64Payload = idToken.split('.')[1];
            const payload = JSON.parse(atob(base64Payload));
            console.log("✅ Extracted user info from ID token:", payload.email);
            
            const firebaseUser = {
                uid: payload.sub,
                email: payload.email,
                displayName: payload.name,
                photoURL: payload.picture
            };

            // ALWAYS store OAuth data when we have tokens - including refresh token!
            const authData = {
                user: {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL
                },
                accessToken: accessToken,
                refreshToken: refreshToken, // ✅ Now we store the refresh token!
                timestamp: Date.now()
            };

            console.log("🔄 Storing OAuth data immediately...");
            localStorage.setItem('lyncx_oauth_complete', JSON.stringify(authData));
            localStorage.setItem('lyncx_should_redirect', 'true');
            console.log("✅ OAuth data stored successfully");

            // Dispatch event immediately 
            window.dispatchEvent(new CustomEvent('lyncx_auth_complete', { detail: authData }));
            console.log("✅ Event dispatched");

            // Let content script handle tab opening to avoid duplicates
            console.log("✅ Content script will handle extension tab opening");

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
            // Use shared scopes from constants
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

            // Use consistent redirect URI - hardcode the path to match callback
            const baseUrl = window.location.origin;
            const redirectUri = isExtensionAuth 
                ? `${baseUrl}/auth?source=extension` // Consistent extension redirect URI
                : `${baseUrl}/auth`; // Regular web auth without params
                
            const params = new URLSearchParams({
                client_id: WEB_OAUTH_CLIENT_ID,
                response_type: 'code',  // Authorization code flow for refresh tokens
                scope: scopes.join(' '),  // Remove offline_access as it's Google-specific
                redirect_uri: redirectUri,
                state: 'oauth_' + Math.random().toString(36).substring(2),
                include_granted_scopes: 'true',
                prompt: 'consent',
                access_type: 'offline'  // This ensures refresh token is provided
            });

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
            
            console.log("🔗 Generated OAuth URL:", authUrl);
            console.log("🔗 OAuth Redirect URI:", redirectUri);
            console.log("🔑 OAuth Client ID:", WEB_OAUTH_CLIENT_ID);
            
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


    // Extension auth UI - redesigned to match extension LoginPage
    if (isExtensionAuth) {
        return (
            <div className="login-page">
                <div className="login-container">
                    {/* Left Side - Hero Content */}
                    <div className="hero-section">
                        <div className="hero-header">
                            <div className="logo-section">
                                {/* Simple logo placeholder since we don't have LinkxLogoIcon component */}
                                <div className="logo-icon">🔗</div>
                                <h1 className="logo-text">LyncX</h1>
                            </div>

                            <h2 className="hero-title">
                                Browse with
                                <span className="hero-accent">intention</span>
                            </h2>

                            <p className="hero-description">
                                Organize your browsing. Navigate with speed. Track
                                what matters.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Login Card */}
                    <div className="login-section">
                        <div className="login-card">
                            <div className="login-header">
                                <h3 className="login-title">Welcome back</h3>
                                <p className="login-subtitle">
                                    Connect with Google to get started
                                </p>
                            </div>

                            <button
                                onClick={handleSignIn}
                                disabled={loading}
                                className="google-button"
                            >
                                {loading ? (
                                    <>
                                        <div className="spinner"></div>
                                        <span>Connecting...</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="google-icon">G</div>
                                        <span>Continue with Google</span>
                                        <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>

                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <style>{`
                    .login-page {
                        min-height: 100vh;
                        background: #fffbf0;
                        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }

                    .login-container {
                        max-width: 1200px;
                        width: 100%;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 80px;
                        align-items: center;
                        transform: translateY(-10vh);
                    }

                    /* Hero Section */
                    .hero-section {
                        display: flex;
                        flex-direction: column;
                        gap: 40px;
                    }

                    .hero-header {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }

                    .logo-section {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 16px;
                    }

                    .logo-icon {
                        width: 32px;
                        height: 32px;
                        background: #c68346;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 18px;
                    }

                    .logo-text {
                        font-size: 32px;
                        font-weight: 600;
                        color: #2d1810;
                        margin: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .hero-title {
                        font-size: 48px;
                        font-weight: 600;
                        color: #2d1810;
                        line-height: 1.1;
                        margin: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .hero-accent {
                        display: block;
                        color: #c68346;
                    }

                    .hero-description {
                        font-size: 18px;
                        color: #8b4513;
                        line-height: 1.6;
                        margin: 0;
                        max-width: 600px;
                        font-family: "Nunito", sans-serif;
                    }

                    /* Login Section */
                    .login-section {
                        display: flex;
                        justify-content: center;
                    }

                    .login-card {
                        width: 100%;
                        max-width: 400px;
                        background: white;
                        backdrop-filter: blur(20px);
                        border-radius: 16px;
                        border: 1px solid #e5e5e5;
                        padding: 32px;
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                    }

                    .login-header {
                        text-align: center;
                        margin-bottom: 32px;
                    }

                    .login-title {
                        font-size: 24px;
                        font-weight: 600;
                        color: #2d1810;
                        margin: 0 0 8px 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .login-subtitle {
                        font-size: 15px;
                        color: #8b4513;
                        margin: 0;
                        line-height: 1.5;
                        font-family: "Nunito", sans-serif;
                    }

                    .google-button {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 12px;
                        background: #c68346;
                        border: 1px solid #c68346;
                        color: white;
                        font-size: 15px;
                        font-weight: 500;
                        padding: 16px 24px;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        margin-bottom: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .google-button:hover:not(:disabled) {
                        background: #b07139;
                        border-color: #b07139;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 16px rgba(198, 131, 70, 0.3);
                    }

                    .google-button:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }

                    .google-icon {
                        width: 20px;
                        height: 20px;
                        background: white;
                        color: #c68346;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .spinner {
                        width: 16px;
                        height: 16px;
                        border: 2px solid rgba(255, 255, 255, 0.3);
                        border-top: 2px solid white;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }

                    .arrow-icon {
                        transition: transform 0.2s ease;
                        color: white;
                    }

                    .google-button:hover .arrow-icon {
                        transform: translateX(2px);
                        color: white;
                    }

                    .error-message {
                        margin-top: 16px;
                        padding: 12px;
                        background: #fef2f2;
                        border: 1px solid #fecaca;
                        border-radius: 8px;
                        color: #dc2626;
                        font-size: 14px;
                        text-align: center;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Responsive */
                    @media (max-width: 968px) {
                        .login-container {
                            grid-template-columns: 1fr;
                            gap: 48px;
                            text-align: center;
                        }

                        .hero-title {
                            font-size: 40px;
                        }

                        .hero-description {
                            max-width: 100%;
                        }
                    }

                    @media (max-width: 640px) {
                        .login-page {
                            padding: 16px;
                        }

                        .hero-title {
                            font-size: 32px;
                        }

                        .hero-description {
                            font-size: 16px;
                        }

                        .login-card {
                            padding: 24px;
                        }
                    }
                `}</style>
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
