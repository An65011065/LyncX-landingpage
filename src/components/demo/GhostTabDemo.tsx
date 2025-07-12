import React, { useState } from "react";
import { Ghost } from "lucide-react";

const GhostTab = ({ isDarkMode = false }) => {
    const [hoveredUrl, setHoveredUrl] = useState(null);

    // Hardcoded data for 8 URLs
    const wasteData = [
        {
            url: "https://open.spotify.com",
            domain: "open.spotify.com",
            title: "Spotify - Web Player",
            wastedTime: 7200000, // 2 hours
            activeTime: 1800000, // 30 minutes
            wasteRatio: 80,
            visitCount: 15,
        },
        {
            url: "https://greensock.com/docs",
            domain: "greensock.com",
            title: "GSAP Documentation",
            wastedTime: 5400000, // 1.5 hours
            activeTime: 3600000, // 1 hour
            wasteRatio: 60,
            visitCount: 8,
        },
        {
            url: "https://github.com",
            domain: "github.com",
            title: "GitHub",
            wastedTime: 4800000, // 1.3 hours
            activeTime: 2400000, // 40 minutes
            wasteRatio: 66,
            visitCount: 12,
        },
        {
            url: "https://twitter.com",
            domain: "twitter.com",
            title: "Twitter",
            wastedTime: 3600000, // 1 hour
            activeTime: 900000, // 15 minutes
            wasteRatio: 80,
            visitCount: 25,
        },
        {
            url: "https://youtube.com",
            domain: "youtube.com",
            title: "YouTube",
            wastedTime: 3000000, // 50 minutes
            activeTime: 1200000, // 20 minutes
            wasteRatio: 71,
            visitCount: 18,
        },
        {
            url: "https://reddit.com",
            domain: "reddit.com",
            title: "Reddit",
            wastedTime: 2700000, // 45 minutes
            activeTime: 1800000, // 30 minutes
            wasteRatio: 60,
            visitCount: 10,
        },
        {
            url: "https://stackoverflow.com",
            domain: "stackoverflow.com",
            title: "Stack Overflow",
            wastedTime: 2400000, // 40 minutes
            activeTime: 2400000, // 40 minutes
            wasteRatio: 50,
            visitCount: 6,
        },
        {
            url: "https://dribbble.com",
            domain: "dribbble.com",
            title: "Dribbble",
            wastedTime: 1800000, // 30 minutes
            activeTime: 1200000, // 20 minutes
            wasteRatio: 60,
            visitCount: 7,
        },
    ];

    // Hardcoded average metrics
    const averageMetrics = {
        avgActiveTime: 1800000, // 30 minutes
        avgTimeToClose: 3600000, // 1 hour
    };

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        if (hours > 0) {
            return `${hours}h`;
        }
        return `${minutes}m`;
    };

    const formatHours = (ms) => {
        const hours = ms / (1000 * 60 * 60);
        if (hours >= 1) {
            return `${hours.toFixed(1)}h`;
        }
        const minutes = Math.floor(ms / (1000 * 60));
        return `${minutes}m`;
    };

    return (
        <div
            className={`rounded-2xl p-3 w-full h-full relative flex flex-col backdrop-blur-sm ${
                isDarkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-gray-200 shadow-lg"
            }`}
            style={{ overflow: "visible" }}
        >
            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
                <Ghost
                    size={16}
                    className={isDarkMode ? "text-white" : "text-gray-700"}
                />
                <h3
                    className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                    Ghost Websites
                </h3>
            </div>

            {/* Grid - 4 columns */}
            <div className="flex-1">
                <div className="grid grid-cols-4 gap-1 mb-3">
                    {wasteData.map((urlData) => (
                        <div
                            key={urlData.url}
                            onMouseEnter={() => {
                                setHoveredUrl(urlData.url);
                            }}
                            onMouseLeave={() => {
                                setHoveredUrl(null);
                            }}
                            className={`
                                flex flex-col items-center gap-1 cursor-pointer 
                                transition-all duration-200 p-1 rounded-lg 
                                hover:-translate-y-0.5
                                ${
                                    isDarkMode
                                        ? "hover:bg-white/10"
                                        : "hover:bg-gray-50 hover:shadow-md"
                                }
                                ${
                                    hoveredUrl === urlData.url
                                        ? isDarkMode
                                            ? "bg-white/10"
                                            : "bg-gray-50 shadow-md"
                                        : ""
                                }
                            `}
                        >
                            {/* Favicon */}
                            <div>
                                <img
                                    src={`https://www.google.com/s2/favicons?domain=${urlData.domain}&sz=32`}
                                    alt={urlData.domain}
                                    className="w-4 h-4 rounded"
                                    onError={(e) => {
                                        const target = e.target;
                                        target.style.display = "none";
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `<span class="${
                                                isDarkMode
                                                    ? "text-white/60"
                                                    : "text-gray-600"
                                            } text-xs font-medium">${urlData.domain[0].toUpperCase()}</span>`;
                                        }
                                    }}
                                />
                            </div>
                            {/* Wasted time */}
                            <div
                                className={`text-xs font-medium ${
                                    isDarkMode
                                        ? "text-white/70"
                                        : "text-gray-700"
                                }`}
                            >
                                {formatHours(urlData.wastedTime)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Average Metrics */}
            <div className="flex gap-1.5 mt-auto">
                <div
                    className={`flex-1 text-center p-2 rounded-lg border ${
                        isDarkMode
                            ? "bg-white/5 border-white/10"
                            : "bg-white/80 border-gray-100"
                    }`}
                >
                    <div
                        className={`text-xs font-light uppercase mb-1 tracking-wider ${
                            isDarkMode ? "text-white/60" : "text-gray-400"
                        }`}
                    >
                        Avg Active
                    </div>
                    <div
                        className={`text-xs font-medium ${
                            isDarkMode ? "text-white/90" : "text-gray-900"
                        }`}
                    >
                        {formatTime(averageMetrics.avgActiveTime)}
                    </div>
                </div>
                <div
                    className={`flex-1 text-center p-2 rounded-lg border ${
                        isDarkMode
                            ? "bg-white/5 border-white/10"
                            : "bg-white/80 border-gray-100"
                    }`}
                >
                    <div
                        className={`text-xs font-light uppercase mb-1 tracking-wider ${
                            isDarkMode ? "text-white/60" : "text-gray-400"
                        }`}
                    >
                        Avg Close
                    </div>
                    <div
                        className={`text-xs font-medium ${
                            isDarkMode ? "text-white/90" : "text-gray-900"
                        }`}
                    >
                        {formatTime(averageMetrics.avgTimeToClose)}
                    </div>
                </div>
            </div>

            {/* Hover tooltip */}
            {hoveredUrl && (
                <div
                    className={`
            fixed pointer-events-none z-50
            rounded-lg shadow-xl p-3 min-w-48 max-w-64 border 
            backdrop-blur-sm
            ${
                isDarkMode
                    ? "bg-black/90 border-white/20"
                    : "bg-white border-gray-200"
            }
        `}
                    style={{
                        left: "50%",
                        top: "20%",
                        transform: "translate(-50%, 20%)",
                        zIndex: 9999,
                    }}
                >
                    {(() => {
                        const data = wasteData.find(
                            (d) => d.url === hoveredUrl,
                        );
                        if (!data) return null;
                        return (
                            <>
                                <div
                                    className={`text-xs font-medium mb-2 break-words ${
                                        isDarkMode
                                            ? "text-white/90"
                                            : "text-gray-900"
                                    }`}
                                >
                                    {data.title}
                                </div>
                                <div
                                    className={`flex justify-between text-xs mb-1 ${
                                        isDarkMode
                                            ? "text-white/60"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <span>Wasted Time</span>
                                    <span
                                        className={`font-medium ${
                                            isDarkMode
                                                ? "text-red-400"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {formatTime(data.wastedTime)}
                                    </span>
                                </div>
                                <div
                                    className={`flex justify-between text-xs mb-1 ${
                                        isDarkMode
                                            ? "text-white/60"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <span>Active Time</span>
                                    <span
                                        className={`font-medium ${
                                            isDarkMode
                                                ? "text-white/90"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {formatTime(data.activeTime)}
                                    </span>
                                </div>
                                <div
                                    className={`flex justify-between text-xs mb-1 ${
                                        isDarkMode
                                            ? "text-white/60"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <span>Waste Ratio</span>
                                    <span
                                        className={`font-medium ${
                                            isDarkMode
                                                ? "text-white/90"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {Math.round(data.wasteRatio)}%
                                    </span>
                                </div>
                                <div
                                    className={`flex justify-between text-xs ${
                                        isDarkMode
                                            ? "text-white/60"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <span>Visits</span>
                                    <span
                                        className={`font-medium ${
                                            isDarkMode
                                                ? "text-white/90"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {data.visitCount}
                                    </span>
                                </div>
                            </>
                        );
                    })()}
                </div>
            )}
        </div>
    );
};

export default GhostTab;
