//Player.tsx
import React, { useState, useCallback, useEffect } from "react";
import { Sun, Moon, Music2 } from "lucide-react";
import { AdvancedPowerButton } from "../components/player/PowerButton";
import { TrackList } from "../components/player/trackList";
import { glassmorphism } from "../styles/glassmorphism";
import * as SpotifyService from "../services/spotifyService";

const Player: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPowerOn, setIsPowerOn] = useState(false);
    const [tracks, setTracks] = useState<SpotifyService.Track[]>([]);
    const [currentTrack, setCurrentTrack] = useState("");
    const [volume] = useState(1);
    const [player, setPlayer] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [playlists, setPlaylists] = useState<SpotifyService.Playlist[]>([]);
    const [selectedPlaylist, setSelectedPlaylist] =
        useState<SpotifyService.Playlist | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showTrackListModal, setShowTrackListModal] = useState(false);

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
        // Check localStorage first
        const savedToken = localStorage.getItem("spotify_token");
        if (savedToken) {
            setToken(savedToken);
            SpotifyService.setAccessToken(savedToken);
            setIsPowerOn(true);
            setIsLocked(false);
            return;
        }

        // If no saved token, check URL hash
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
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
            SpotifyService.setAccessToken(_token);
            setIsPowerOn(true);
            setIsLocked(false);
            // Save token to localStorage
            localStorage.setItem("spotify_token", _token);
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

        player.addListener("player_state_changed", (state) => {
            if (state) {
                setIsPlaying(!state.paused);
                setCurrentTrack(state.track_window.current_track.id);
            }
        });

        player.connect().then((success) => {
            if (success) {
                console.log(
                    "The Web Playback SDK successfully connected to Spotify!",
                );
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

    const handleTrackSelect = useCallback(
        (trackId: string) => {
            if (!trackId || !tracks.some((track) => track.id === trackId))
                return;
            setCurrentTrack(trackId);
            if (token) {
                SpotifyService.playTrack(trackId)
                    .then(() => setIsPlaying(true))
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
            // If not authenticated, handle power on/off
            if (!token) {
                setIsPowerOn(newPowerState);
                if (newPowerState) {
                    window.location.href = SpotifyService.getLoginUrl();
                }
                return;
            }

            // If authenticated, always keep power on and use as play/pause button
            setIsPowerOn(true);
            if (isPlaying) {
                player?.pause();
                SpotifyService.pausePlayback();
                setIsPlaying(false);
            } else {
                player?.resume();
                SpotifyService.resumePlayback();
                setIsPlaying(true);
            }
        },
        [token, player, isPlaying],
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
                    {token && tracks.length > 0 && currentTrack && (
                        <div className="text-center max-w-md transition-all duration-300">
                            {(() => {
                                const track = tracks.find(
                                    (t) => t.id === currentTrack,
                                );
                                if (!track) return null;

                                return (
                                    <div className="space-y-0.5">
                                        <div
                                            className={`text-lg font-semibold truncate ${glassmorphism.text.primary(
                                                isDarkMode,
                                            )}`}
                                        >
                                            {track.name}
                                        </div>
                                        <div
                                            className={`text-sm ${glassmorphism.text.muted(
                                                isDarkMode,
                                            )}`}
                                        >
                                            by {track.artist}
                                        </div>
                                    </div>
                                );
                            })()}
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