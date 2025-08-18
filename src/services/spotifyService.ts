//spopifyService.ts

import SpotifyWebApi from "spotify-web-api-js";
import {
    authEndpoint,
    clientId,
    redirectUri,
    scopes,
} from "../spotifyConfig";

const spotifyApi = new SpotifyWebApi();

export interface Track {
    id: string;
    name: string;
    artist: string;
    albumArt: string;
}

export interface Playlist {
    id: string;
    name: string;
    trackCount: number;
}

export interface AudioFeatures {
    Acousticness: number;
    Danceability: number;
    Energy: number;
    Instrumentalness: number;
    Liveness: number;
    Loudness: number;
    Speechiness: number;
    Tempo: number;
    Valence: number;
    Key: number;
    Mode: number;
    "Time Signature": number;
}


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const retryFetch = async <T>(
    fetchFunction: () => Promise<T>,
    maxRetries = 5,
): Promise<T> => {
    let lastError: any;
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await fetchFunction();
        } catch (error: any) {
            lastError = error;
            if (error.status === 429) {
                const retryAfter =
                    parseInt(error.getResponseHeader("Retry-After")) || 1;
                console.log(
                    `Rate limited. Waiting for ${retryAfter} seconds before retrying.`,
                );
                await delay(retryAfter * 1000);
            } else if (error.status === 401) {
                // Token expired, don't retry
                console.log("Token expired (401), clearing localStorage and stopping retries");
                localStorage.removeItem('spotify_token');
                throw error;
            } else if (i < maxRetries) {
                const waitTime = Math.pow(2, i) * 1000; // Exponential backoff
                console.log(
                    `Request failed. Retrying in ${waitTime / 1000} seconds.`,
                );
                await delay(waitTime);
            } else {
                throw error;
            }
        }
    }
    throw lastError;
};
export const getTrackAudioFeatures = async (
    trackId: string
): Promise<AudioFeatures> => {
    try {
        const response = await retryFetch(() =>
            spotifyApi.getAudioFeaturesForTrack(trackId)
        );
        console.log("Spotify API response:", response);

        return {
            Acousticness: response.acousticness ,
            Danceability: response.danceability ,
            Energy: response.energy ,
            Instrumentalness: response.instrumentalness ,
            Liveness: response.liveness ,
            Loudness: (response.loudness) ,
            Speechiness: response.speechiness ,
            Tempo: response.tempo,
            Valence: response.valence,
            Key: response.key,
            Mode: response.mode,
            "Time Signature": response.time_signature,
        };
    } catch (error) {
        console.error("Failed to fetch audio features:", error);
        throw error;
    }
};

export const getLoginUrl = () => {
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20",
    )}&response_type=token&show_dialog=true`;
};

export const setAccessToken = (token: string) => {
    spotifyApi.setAccessToken(token);
};

export const fetchUserPlaylists = async (): Promise<Playlist[]> => {
    try {
        const response = await retryFetch(() => spotifyApi.getUserPlaylists());
        return response.items.map((playlist) => ({
            id: playlist.id,
            name: playlist.name,
            trackCount: playlist.tracks.total,
        }));
    } catch (error) {
        console.error("Failed to fetch user playlists:", error);
        return [];
    }
};

export const fetchPlaylistTracks = async (
    playlistId: string,
): Promise<Track[]> => {
    try {
        const response = await retryFetch(() =>
            spotifyApi.getPlaylistTracks(playlistId, {
                fields: "items(track(id,name,artists,album(images)))",
                limit: 15,
                offset: 0,
            }),
        );

        return response.items
            .filter(
                (item): item is SpotifyApi.PlaylistTrackObject =>
                    "track" in item &&
                    item.track !== null &&
                    "artists" in item.track &&
                    "album" in item.track,
            )
            .map((item) => {
                const track = item.track as SpotifyApi.TrackObjectFull;
                return {
                    id: track.id,
                    name: track.name,
                    artist: track?.artists
                        .map((artist) => artist.name)
                        .join(", "),
                    albumArt: track.album.images[0]?.url || "",
                };
            });
    } catch (error) {
        console.error(
            `Failed to fetch tracks for playlist ${playlistId}:`,
            error,
        );
        return [];
    }
};

export const playTrack = (trackId: string) =>
    retryFetch(() => spotifyApi.play({ uris: [`spotify:track:${trackId}`] }));
export const pausePlayback = () => retryFetch(() => spotifyApi.pause());
export const resumePlayback = () => retryFetch(() => spotifyApi.play());
export const setVolume = (volume: number) =>
    retryFetch(() => spotifyApi.setVolume(volume));
export const transferPlayback = (deviceId: string) =>
    retryFetch(() => spotifyApi.transferMyPlayback([deviceId]));
