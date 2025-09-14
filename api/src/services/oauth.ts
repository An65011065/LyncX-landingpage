const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET) {
    throw new Error('Google OAuth credentials not found in environment variables');
}

interface TokenResponse {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
}

interface UserInfo {
    id: string;
    email: string;
    name: string;
    picture: string;
}

export async function exchangeCodeForTokens(code: string, redirectUri: string): Promise<TokenResponse> {
    const tokenUrl = 'https://oauth2.googleapis.com/token';
    
    const params = new URLSearchParams({
        client_id: GOOGLE_OAUTH_CLIENT_ID,
        client_secret: GOOGLE_OAUTH_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri
    });
    
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
    });
    
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Token exchange failed: ${error}`);
    }
    
    return response.json();
}

export async function getUserInfo(accessToken: string): Promise<UserInfo> {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Failed to get user info');
    }
    
    return response.json();
}