//Player.tsx
import React, { useState, useCallback, useEffect } from "react";
import { Sun, Moon, Music2 } from "lucide-react";
import { AdvancedPowerButton } from "../components/player/PowerButton";
import { TrackList } from "../components/player/trackList";
import { glassmorphism } from "../styles/glassmorphism";
import * as SpotifyService from "../services/spotifyService";

const Player: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [, setIsLocked] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPowerOn, setIsPowerOn] = useState(false);
    const [tracks, setTracks] = useState<SpotifyService.Track[]>([]);
    const [currentTrack, setCurrentTrack] = useState("");
    const [currentTrackInfo, setCurrentTrackInfo] = useState<{
        id: string;
        name: string;
        artist: string;
        album: string;
    } | null>(null);
    const [volume] = useState(1);
    const [player, setPlayer] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [playlists, setPlaylists] = useState<SpotifyService.Playlist[]>([]);
    const [selectedPlaylist, setSelectedPlaylist] =
        useState<SpotifyService.Playlist | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showTrackListModal, setShowTrackListModal] = useState(false);
    const [pendingTrackId, setPendingTrackId] = useState<string | null>(null);

    useEffect(() => {
        if (!token) return;

        const testApiCall = async () => {
            try {
                const response = await fetch("https://api.spotify.com/v1/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("API call successful:", data);
                } else if (response.status === 401) {
                    console.log(
                        "Token expired, clearing and requiring re-auth",
                    );
                    localStorage.removeItem("spotify_token");
                    setToken(null);
                    setIsPowerOn(false);
                } else {
                    console.error("API call failed:", response.statusText);
                }
            } catch (error) {
                console.error("Error making API call:", error);
            }
        };

        testApiCall();
    }, [token]);

    useEffect(() => {
        // Parse URL hash parameters first
        const hash = window.location.hash
            .substring(1)
            .split("&")
            .reduce((initial: any, item) => {
                if (item) {
                    const parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});

        // Priority 1: Check URL hash for token parameter (from extension)
        let tokenFromUrl = hash.token;
        
        // Priority 2: Check URL hash for access_token (from OAuth callback)
        if (!tokenFromUrl) {
            tokenFromUrl = hash.access_token;
        }

        // Priority 3: Check localStorage for existing token
        const savedToken = localStorage.getItem("spotify_token");

        // Use the first available token (URL takes priority over localStorage)
        const tokenToUse = tokenFromUrl || savedToken;

        if (tokenToUse) {
            setToken(tokenToUse);
            SpotifyService.setAccessToken(tokenToUse);
            setIsPowerOn(true);
            setIsLocked(false);
            
            // Save token to localStorage if it came from URL
            if (tokenFromUrl) {
                localStorage.setItem("spotify_token", tokenFromUrl);
                console.log("🎵 Token received from extension and saved to localStorage");
            } else {
                console.log("🎵 Using existing token from localStorage");
            }

            // Handle track ID from URL for immediate playback context
            if (hash.track) {
                console.log("🎵 Track ID received from extension:", hash.track);
                setPendingTrackId(hash.track);
                
                // We'll handle the actual playback once the player is initialized
            }
        }

        // Clear the URL hash to clean up the URL
        if (window.location.hash) {
            window.location.hash = "";
        }
    }, []);

    // fetching the playlist
    useEffect(() => {
        if (!token) return;
        const fetchUserPlaylists = async () => {
            try {
                const userPlaylists = await SpotifyService.fetchUserPlaylists();
                setPlaylists(userPlaylists);
                if (userPlaylists.length > 0) {
                    setSelectedPlaylist(userPlaylists[0]);
                }
            } catch (error) {
                console.error("Error fetching user playlists:", error);
            }
        };
        fetchUserPlaylists();
    }, [token]);

    useEffect(() => {
        if (!token || !selectedPlaylist) return;
        const fetchPlaylistTracks = async () => {
            setIsLoading(true);
            setError(null);
            let retries = 3;
            while (retries > 0) {
                try {
                    const playlistTracks =
                        await SpotifyService.fetchPlaylistTracks(
                            selectedPlaylist.id,
                        );
                    if (playlistTracks.length > 0) {
                        setTracks(playlistTracks);
                        setCurrentTrack(playlistTracks[0].id);

                        break;
                    } else {
                        throw new Error("No tracks fetched");
                    }
                } catch (error) {
                    console.error("Error fetching top tracks:", error);
                    retries--;
                    if (retries === 0) {
                        setError(
                            "Failed to fetch top tracks. Please try again later.",
                        );
                    } else {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 5000),
                        ); // Wait 5 seconds before retrying
                    }
                }
            }
            setIsLoading(false);
        };
        fetchPlaylistTracks();
    }, [token, selectedPlaylist]);

    const initializePlayer = useCallback(() => {
        if (!token) return;

        const player = new window.Spotify.Player({
            name: "Web Playback SDK",
            getOAuthToken: (cb) => {
                cb(token);
            },
            volume: volume,
        });

        player.addListener("ready", ({ device_id }) => {
            console.log("Ready with Device ID", device_id);
            SpotifyService.transferPlayback(device_id);
        });

        player.addListener("not_ready", ({ device_id }) => {
            console.log("Device ID has gone offline", device_id);
            setIsPlaying(false);
        });

        player.addListener("player_state_changed", (state) => {
            console.log("🎵 Player state changed");
            if (state && state.track_window && state.track_window.current_track) {
                const track = state.track_window.current_track;
                console.log("🎵 Now playing:", track.name, "by", track.artists.map(a => a.name).join(", "));
                
                setIsPlaying(!state.paused);
                setCurrentTrack(track.id);
                setCurrentTrackInfo({
                    id: track.id,
                    name: track.name,
                    artist: track.artists.map(a => a.name).join(", "),
                    album: track.album.name
                });
            } else {
                console.log("🎵 Playback stopped");
                setIsPlaying(false);
                setCurrentTrackInfo(null);
            }
        });

        player.addListener("initialization_error", ({ message }) => {
            console.error("🎵 Initialization Error:", message);
            setError("Failed to initialize player: " + message);
        });

        player.addListener("authentication_error", ({ message }) => {
            console.error("🎵 Authentication Error:", message);
            setError("Authentication failed: " + message);
            // Clear token and require re-authentication
            localStorage.removeItem("spotify_token");
            setToken(null);
            setIsPowerOn(false);
        });

        player.addListener("account_error", ({ message }) => {
            console.error("🎵 Account Error:", message);
            setError("Account error: " + message);
        });

        player.addListener("playback_error", ({ message }) => {
            console.error("🎵 Playback Error:", message);
            setError("Playback error: " + message);
            setIsPlaying(false);
        });

        player.connect().then((success) => {
            if (success) {
                console.log("✅ Web Playback SDK connected to Spotify");
                setPlayer(player);
            }
        });
    }, [token, volume]);

    useEffect(() => {
        if (!token) return;

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = initializePlayer;

        return () => {
            document.body.removeChild(script);
        };
    }, [token, initializePlayer]);

    // Handle pending track playback when player is ready
    useEffect(() => {
        if (pendingTrackId && player && token) {
            console.log("🎵 Playing pending track from extension:", pendingTrackId);
            
            SpotifyService.playTrack(pendingTrackId)
                .then(() => {
                    console.log("✅ Track playback initiated");
                    setPendingTrackId(null); // Clear pending track - state change event will handle UI update
                })
                .catch((error) => {
                    console.error("❌ Error playing pending track:", error);
                    setPendingTrackId(null);
                });
        }
    }, [pendingTrackId, player, token]);

    // Simple function to update track info from player state
    const updateTrackInfo = useCallback(async () => {
        if (!player) return;
        
        try {
            const state = await player.getCurrentState();
            if (state && state.track_window && state.track_window.current_track) {
                const track = state.track_window.current_track;
                console.log("🎵 Updating track info:", track.name, "by", track.artists.map(a => a.name).join(", "));
                
                setIsPlaying(!state.paused);
                setCurrentTrack(track.id);
                setCurrentTrackInfo({
                    id: track.id,
                    name: track.name,
                    artist: track.artists.map(a => a.name).join(", "),
                    album: track.album.name
                });
            } else {
                console.log("🎵 No active playback found");
                setIsPlaying(false);
                setCurrentTrackInfo(null);
            }
        } catch (error) {
            console.error("🎵 Error getting player state:", error);
        }
    }, [player]);

    // Initial check for existing playback when player is ready
    useEffect(() => {
        if (player && token) {
            // Brief delay to let player settle
            const timer = setTimeout(() => updateTrackInfo(), 1000);
            return () => clearTimeout(timer);
        }
    }, [player, token, updateTrackInfo]);

    // Check player state when tab becomes visible (backup mechanism)
    useEffect(() => {
        if (!player || !token) return;

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                console.log("🎵 Tab became visible, checking for missed playback...");
                updateTrackInfo();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', updateTrackInfo);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('focus', updateTrackInfo);
        };
    }, [player, token, updateTrackInfo]);

    const handleTrackSelect = useCallback(
        (trackId: string) => {
            if (!trackId || !tracks.some((track) => track.id === trackId))
                return;
                
            if (token) {
                SpotifyService.playTrack(trackId)
                    .then(() => {
                        console.log("✅ Track playback initiated from track list");
                        // Let the player_state_changed event handle UI updates
                    })
                    .catch((error) => {
                        console.error("Error playing track:", error);
                        setError("Failed to play track. Please try again.");
                    });
            }
        },
        [token, tracks],
    );


    const handlePowerStateChange = useCallback(
        (newPowerState: boolean) => {
            console.log("🎵 Power button clicked. Auth state:", !!token, "Power state:", newPowerState, "Is playing:", isPlaying);
            
            // If not authenticated, handle power on/off for OAuth
            if (!token) {
                console.log("🎵 No token, starting OAuth flow");
                setIsPowerOn(newPowerState);
                if (newPowerState) {
                    window.location.href = SpotifyService.getLoginUrl();
                }
                return;
            }

            // If authenticated, always keep power on and use as play/pause button
            setIsPowerOn(true);
            
            // Check if we have any tracks to play
            if (!currentTrackInfo && tracks.length > 0) {
                console.log("🎵 No current track, starting playback with first track");
                // Start playback with the first available track
                const firstTrack = tracks[0];
                SpotifyService.playTrack(firstTrack.id)
                    .then(() => {
                        console.log("✅ Started playback with first track:", firstTrack.name);
                    })
                    .catch((error) => {
                        console.error("❌ Error starting playback:", error);
                        setError("Failed to start playback. Please try again.");
                    });
                return;
            }
            
            // Handle play/pause for current track
            if (player && isPlaying) {
                console.log("🎵 Pausing playback via Web Playback SDK");
                player.pause();
            } else if (player && !isPlaying) {
                console.log("🎵 Resuming playback via Web Playback SDK");
                player.resume();
            } else {
                // Fallback to Spotify Web API if player isn't ready yet
                console.log("🎵 Using Spotify Web API for playback control (player not ready)");
                if (isPlaying) {
                    SpotifyService.pausePlayback();
                } else {
                    SpotifyService.resumePlayback();
                }
            }
            // Let the player_state_changed event handle isPlaying state
        },
        [token, player, isPlaying, currentTrackInfo, tracks],
    );

    const handleLockStateChange = useCallback((newLockState: boolean) => {
        setIsLocked(newLockState);
    }, []);


    // Theme toggle handler
    const handleThemeToggle = useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);

    return (
        <div
            className={`min-h-screen h-screen w-full transition-all duration-700 ease-out ${
                isDarkMode ? "bg-slate-900" : "bg-orange-50"
            } ${!isPowerOn ? "power-off" : ""}`}
        >
            {/* Theme Toggle Button */}
            <button
                onClick={handleThemeToggle}
                className={`fixed top-6 right-6 z-50 p-2 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
                    isDarkMode
                        ? "bg-slate-800/30 text-slate-300 hover:bg-slate-700/40"
                        : "bg-white/30 text-gray-600 hover:bg-white/50"
                } backdrop-blur-sm shadow-md hover:shadow-lg`}
            >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Music Button - only show when authenticated */}
            {token && (
                <button
                    onClick={() => setShowTrackListModal(true)}
                    className={`fixed top-6 right-16 z-50 p-2 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
                        isDarkMode
                            ? "bg-slate-800/30 text-slate-300 hover:bg-slate-700/40"
                            : "bg-white/30 text-gray-600 hover:bg-white/50"
                    } backdrop-blur-sm shadow-md hover:shadow-lg`}
                >
                    <Music2 size={16} />
                </button>
            )}

            <div className="min-h-screen flex items-start justify-center px-6 pt-64">
                <div className="flex flex-col items-center space-y-8">
                    {/* Power Button - Centered */}
                    <AdvancedPowerButton
                        onLockStateChange={handleLockStateChange}
                        isPowerOn={isPowerOn}
                        onPowerStateChange={handlePowerStateChange}
                        isPlaying={isPlaying}
                        isDarkMode={isDarkMode}
                        isAuthenticated={!!token}
                    />

                    {/* Now Playing Display */}
                    {token && currentTrackInfo && (
                        <div className="text-center max-w-md transition-all duration-300">
                            <div className="space-y-0.5">
                                <div
                                    className={`text-lg font-semibold truncate ${glassmorphism.text.primary(
                                        isDarkMode,
                                    )}`}
                                >
                                    {currentTrackInfo.name}
                                </div>
                                <div
                                    className={`text-sm ${glassmorphism.text.muted(
                                        isDarkMode,
                                    )}`}
                                >
                                    by {currentTrackInfo.artist}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* TrackList Modal Overlay */}
            {showTrackListModal && token && (
                <div className="fixed inset-0 z-40 flex items-start justify-end p-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={() => setShowTrackListModal(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-96 mt-16 max-h-[80vh]">
                        {isLoading ? (
                            <div
                                className={`text-center py-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                                    isDarkMode
                                        ? "bg-slate-900/90 border-slate-700/50 text-slate-200"
                                        : "bg-white/90 border-gray-200/50 text-gray-800"
                                } shadow-2xl`}
                            >
                                <div className="text-lg font-medium mb-2">
                                    Loading...
                                </div>
                                <div
                                    className={`text-sm ${
                                        isDarkMode
                                            ? "text-slate-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    Fetching your music
                                </div>
                            </div>
                        ) : error ? (
                            <div
                                className={`text-center py-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                                    isDarkMode
                                        ? "bg-slate-900/90 border-slate-700/50"
                                        : "bg-white/90 border-gray-200/50"
                                } shadow-2xl`}
                            >
                                <div className="text-red-500 font-medium mb-2">
                                    Error
                                </div>
                                <div
                                    className={`text-sm ${
                                        isDarkMode
                                            ? "text-slate-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {error}
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                                    isDarkMode
                                        ? "bg-slate-900/90 border-slate-700/50"
                                        : "bg-white/90 border-gray-200/50"
                                } shadow-2xl overflow-hidden`}
                            >
                                <TrackList
                                    title={selectedPlaylist?.name || "Playlist"}
                                    tracks={tracks}
                                    currentTrack={currentTrack}
                                    onTrackSelect={handleTrackSelect}
                                    playlists={playlists}
                                    selectedPlaylist={selectedPlaylist}
                                    onPlaylistSelect={setSelectedPlaylist}
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Player;