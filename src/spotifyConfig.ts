export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "10a750cb31ec4fdc8340f04df8438d4f";
export const redirectUri = "http://localhost:5173/";
export const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private", // Add this scope
    "playlist-read-collaborative",
    "streaming",
    "user-read-email",
    "user-read-private",
];
