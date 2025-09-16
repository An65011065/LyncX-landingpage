import type { VercelResponse } from "@vercel/node";

const ALLOWED_ORIGINS = [
    "https://www.lyncx.ai",
    "https://lyncx.ai",
    "http://localhost:5173",
    "chrome-extension://lljcelbdgpjianpjkpdckkmgkbfhoccj",
    // Add actual extension ID based on the public key in manifest.json
    "chrome-extension://djipggmclicbicjpnimcipljgmfgdgpb",
];

export function setCorsHeaders(res: VercelResponse, origin?: string): void {
    // Allow specific origin if it's in the allowed list, otherwise default to primary domain
    if (
        origin &&
        (ALLOWED_ORIGINS.includes(origin) ||
            origin.startsWith("chrome-extension://"))
    ) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
        res.setHeader("Access-Control-Allow-Origin", "https://www.lyncx.ai");
    }

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Cookie, x-user-id",
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
}

export function handleOptions(res: VercelResponse, origin?: string): void {
    setCorsHeaders(res, origin);
    res.status(200).end();
}
