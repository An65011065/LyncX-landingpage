interface CookieOptions {
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
    maxAge?: number;
    path?: string;
}

export function createCookie(name: string, value: string, options: CookieOptions = {}): string {
    const {
        httpOnly = true,
        secure = process.env.NODE_ENV === 'production',
        sameSite = 'lax',
        maxAge,
        path = '/'
    } = options;

    let cookie = `${name}=${value}`;
    
    if (httpOnly) cookie += '; HttpOnly';
    if (secure) cookie += '; Secure';
    cookie += `; SameSite=${sameSite}`;
    if (maxAge !== undefined) cookie += `; Max-Age=${maxAge}`;
    cookie += `; Path=${path}`;
    
    return cookie;
}

export const COOKIE_CONFIG = {
    ACCESS_TOKEN: {
        name: 'lyncx_access_token',
        maxAge: 60 * 60, // 1 hour
    },
    REFRESH_TOKEN: {
        name: 'lyncx_refresh_token', 
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    USER_ID: {
        name: 'lyncx_user_id',
        maxAge: 7 * 24 * 60 * 60, // 7 days
    }
} as const;

export function createAuthCookies(tokens: {
    access_token: string;
    refresh_token?: string;
    user_id: string;
}): string[] {
    const cookies: string[] = [];
    
    // Access token cookie (1 hour)
    cookies.push(createCookie(
        COOKIE_CONFIG.ACCESS_TOKEN.name, 
        tokens.access_token, 
        { maxAge: COOKIE_CONFIG.ACCESS_TOKEN.maxAge }
    ));
    
    // User ID cookie (7 days)
    cookies.push(createCookie(
        COOKIE_CONFIG.USER_ID.name,
        tokens.user_id,
        { maxAge: COOKIE_CONFIG.USER_ID.maxAge }
    ));
    
    // Refresh token cookie (7 days, if available)
    if (tokens.refresh_token) {
        cookies.push(createCookie(
            COOKIE_CONFIG.REFRESH_TOKEN.name,
            tokens.refresh_token,
            { maxAge: COOKIE_CONFIG.REFRESH_TOKEN.maxAge }
        ));
    }
    
    return cookies;
}

export function clearAuthCookies(): string[] {
    return [
        createCookie(COOKIE_CONFIG.ACCESS_TOKEN.name, '', { maxAge: 0 }),
        createCookie(COOKIE_CONFIG.REFRESH_TOKEN.name, '', { maxAge: 0 }),
        createCookie(COOKIE_CONFIG.USER_ID.name, '', { maxAge: 0 })
    ];
}