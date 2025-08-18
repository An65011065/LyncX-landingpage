import React, { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { glassmorphism } from "../../styles/glassmorphism";

interface Track {
    id: string;
    name: string;
    artist: string;
}

interface Playlist {
    id: string;
    name: string;
    trackCount: number;
}

interface TrackListProps {
    title: string;
    tracks: Track[];
    currentTrack: string;
    onTrackSelect: (trackId: string) => void;
    playlists?: Playlist[];
    selectedPlaylist?: Playlist | null;
    onPlaylistSelect?: (playlist: Playlist) => void;
    showBackButton?: boolean;
    onBackClick?: () => void;
    isDarkMode?: boolean;
}

export const TrackList: React.FC<TrackListProps> = ({
    title,
    tracks,
    currentTrack,
    onTrackSelect,
    playlists = [],
    onPlaylistSelect,
    showBackButton = false,
    onBackClick,
    isDarkMode = false,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showingPlaylists, setShowingPlaylists] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(currentTrack);

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    const handleBarsClick = () => {
        setShowingPlaylists(true);
        scrollToTop();
    };

    const handlePlaylistClick = (playlist: Playlist) => {
        if (onPlaylistSelect) {
            onPlaylistSelect(playlist);
        }
        setShowingPlaylists(false);
        scrollToTop();
    };

    const handleBackToPlaylists = () => {
        setShowingPlaylists(false);
        scrollToTop();
    };

    const handleTrackClick = (trackId: string) => {
        // User clicks an item, select it. Done.
        setSelectedTrack(trackId);
        onTrackSelect(trackId);
    };

    return (
        <div className="h-72 w-full overflow-hidden relative flex flex-col">
            <div className="flex justify-between items-center mb-1 pt-4 px-6">
                <div className="flex items-center space-x-2">
                    {showBackButton && (
                        <button
                            onClick={onBackClick}
                            className={`${glassmorphism.text.muted(
                                isDarkMode,
                            )} hover:${glassmorphism.text.primary(
                                isDarkMode,
                            )} focus:outline-none transition-colors duration-300`}
                            aria-label="Back to albums"
                        >
                            ←
                        </button>
                    )}
                    <h3
                        className={`text-lg font-semibold ${glassmorphism.text.primary(
                            isDarkMode,
                        )}`}
                    >
                        {showingPlaylists ? "Playlists" : title}
                    </h3>
                </div>
                {playlists.length > 0 && (
                    <button
                        onClick={
                            showingPlaylists
                                ? handleBackToPlaylists
                                : handleBarsClick
                        }
                        className={`p-2 rounded-lg backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 ${
                            isDarkMode
                                ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300"
                                : "bg-white/50 border-gray-200/50 hover:bg-white/70 text-gray-700"
                        } shadow-lg hover:shadow-xl`}
                    >
                        <Menu className="w-4 h-4" />
                    </button>
                )}
            </div>
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-4 mb-4"
            >
                {showingPlaylists ? (
                    <ul className="space-y-0">
                        {playlists
                            .sort((a, b) => b.trackCount - a.trackCount)
                            .map((playlist) => (
                                <li key={playlist.id} className="h-10">
                                    <button
                                        onClick={() =>
                                            handlePlaylistClick(playlist)
                                        }
                                        className={`w-full h-full text-left px-3 py-1 rounded text-sm transition-colors ${
                                            isDarkMode
                                                ? "hover:bg-slate-800/30"
                                                : "hover:bg-white/40"
                                        }`}
                                    >
                                        <div className="flex items-center h-full">
                                            <span
                                                className={`font-medium truncate ${glassmorphism.text.primary(
                                                    isDarkMode,
                                                )}`}
                                            >
                                                {playlist.name}
                                            </span>
                                            <span
                                                className={`text-xs ml-1 flex-shrink-0 ${glassmorphism.text.subtle(
                                                    isDarkMode,
                                                )}`}
                                            >
                                                ({playlist.trackCount}{" "}
                                                {playlist.trackCount === 1
                                                    ? "track"
                                                    : "tracks"}
                                                )
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                    </ul>
                ) : (
                    <ul className="space-y-0">
                        {tracks.map((track) => (
                            <li key={track.id} className="h-10">
                                <button
                                    className={`w-full h-full text-left px-3 py-1 rounded text-sm transition-colors ${
                                        track.id === selectedTrack
                                            ? "bg-[#c68346] text-white"
                                            : isDarkMode
                                            ? "hover:bg-slate-800/30"
                                            : "hover:bg-white/40"
                                    }`}
                                    onClick={() => handleTrackClick(track.id)}
                                >
                                    <div className="flex justify-between items-center h-full">
                                        <span
                                            className={`font-medium truncate ${
                                                track.id === selectedTrack
                                                    ? "text-white"
                                                    : glassmorphism.text.primary(
                                                          isDarkMode,
                                                      )
                                            }`}
                                        >
                                            {track.name}
                                        </span>
                                        <span
                                            className={`text-xs truncate ml-2 ${
                                                track.id === selectedTrack
                                                    ? "text-orange-100"
                                                    : glassmorphism.text.subtle(
                                                          isDarkMode,
                                                      )
                                            }`}
                                        >
                                            {track.artist.split(" ")[0]}
                                        </span>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
