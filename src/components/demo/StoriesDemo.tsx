import React, { useState, useRef, useEffect } from "react";

interface StoriesDemoProps {
    isDarkMode?: boolean;
}

const StoriesDemo: React.FC<StoriesDemoProps> = ({
    isDarkMode = false,
}: {
    isDarkMode?: boolean;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const cardTypes = ["overview", "activity", "focus", "score"] as const;

    // Use isDarkMode to prevent unused variable warning
    const themeClass = isDarkMode ? "dark" : "light";

    // Handle scroll to change cards
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const cardHeight = container.clientHeight;
            const newIndex = Math.round(scrollTop / cardHeight);
            if (
                newIndex !== currentIndex &&
                newIndex >= 0 &&
                newIndex < cardTypes.length
            ) {
                setCurrentIndex(newIndex);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentIndex, cardTypes.length]);

    // Auto-play functionality
    const startAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        setIsAutoPlaying(true);
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev + 1;
                if (next >= cardTypes.length) {
                    // Loop back to first slide
                    if (containerRef.current) {
                        containerRef.current.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }
                    return 0;
                }
                // Scroll to next card
                if (containerRef.current) {
                    containerRef.current.scrollTo({
                        top: next * containerRef.current.clientHeight,
                        behavior: "smooth",
                    });
                }
                return next;
            });
        }, 3000);
    };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
        setIsAutoPlaying(false);
    };

    const toggleAutoPlay = () => {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    };

    // Start auto-play on mount
    useEffect(() => {
        startAutoPlay();
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []);

    // Handle hover
    const handleMouseEnter = () => {
        stopAutoPlay();
    };

    const handleMouseLeave = () => {
        startAutoPlay();
    };

    // Sample data
    const getTopDomains = () => [
        { domain: "youtube.com", time: 2340000 },
        { domain: "notionhq.com", time: 1260000 },
        { domain: "github.com", time: 540000 },
        { domain: "raycast.com", time: 360000 },
        { domain: "world-clock.org", time: 240000 },
        { domain: "figma.com", time: 180000 },
        { domain: "twitter.com", time: 120000 },
        { domain: "facebook.com", time: 60000 },
        { domain: "instagram.com", time: 60000 },
        { domain: "github.com", time: 0 },
        { domain: "unknown.com", time: 0 },
        { domain: "google.com", time: 0 },
    ];

    const formatTime = (milliseconds: number): string => {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor(
            (milliseconds % (1000 * 60 * 60)) / (1000 * 60),
        );
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    };

    // Card rendering functions matching exact StoryCard structure
    const renderOverviewCard = () => (
        <div className="h-full grid grid-cols-2 gap-6 p-12 relative">
            <div className="flex flex-col justify-between">
                <div>
                    <div
                        className={`text-6xl font-extralight mb-3 tracking-tight text-black`}
                    >
                        <strong>1h 32m</strong>
                    </div>
                    <div className="text-lg font-light text-gray-600">
                        across{" "}
                        <span className="font-medium text-black">81</span>{" "}
                        websites today.
                    </div>
                </div>
                <div className="flex gap-12 items-baseline">
                    <div>
                        <div className="text-3xl font-light mb-1 text-black">
                            47m
                        </div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            PRODUCTIVE
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-light mb-1 text-black">
                            44m
                        </div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            LEISURE
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-start">
                <div className="grid grid-cols-4 gap-1 justify-center w-fit">
                    {getTopDomains()
                        .slice(0, 12)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-2 flex flex-col items-center gap-1 transition-all duration-200 hover:shadow-md cursor-pointer w-12"
                            >
                                <img
                                    src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=32`}
                                    alt={item.domain}
                                    className="w-5 h-5 rounded opacity-80"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLImageElement
                                        ).style.display = "none";
                                    }}
                                />
                                <div className="text-xs font-medium text-gray-700 text-center">
                                    {formatTime(item.time)}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <button
                onClick={toggleAutoPlay}
                className="absolute bottom-6 right-6 h-10 pl-3 pr-4 rounded-full flex items-center gap-3 transition-colors shadow-lg bg-white border border-gray-200 hover:bg-gray-50"
            >
                <div className="w-6 h-6 flex items-center justify-center">
                    {isAutoPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6c757d"
                            strokeWidth="2.5"
                        >
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6c757d"
                            strokeWidth="2.5"
                        >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    )}
                </div>
                <div className="text-sm font-medium text-gray-600">
                    {currentIndex + 1}/{cardTypes.length}
                </div>
            </button>
        </div>
    );

    const renderActivityCard = () => (
        <div className="h-full grid grid-cols-2 gap-6 p-12 relative">
            <div className="flex flex-col justify-between">
                <div></div>
                <div className="flex flex-col gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                        LONGEST BREAK
                    </div>
                    <div className="text-5xl font-extralight mb-2 tracking-tight text-green-500">
                        2h 28m
                    </div>
                    <div className="text-sm font-light text-gray-600">
                        4:37 PM - 7:05 PM
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-start">
                <div className="w-full max-w-md">
                    {/* Legend */}
                    <div className="flex justify-end gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                                Productive
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                                Leisure
                            </span>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                        <svg
                            width="100%"
                            height="240"
                            viewBox="0 0 480 240"
                            className="overflow-visible"
                        >
                            <defs>
                                <linearGradient
                                    id="productiveGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#3b82f6"
                                        stopOpacity="0.4"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#3b82f6"
                                        stopOpacity="0.1"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="leisureGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ef4444"
                                        stopOpacity="0.4"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#ef4444"
                                        stopOpacity="0.1"
                                    />
                                </linearGradient>
                            </defs>

                            {/* Grid lines */}
                            <line
                                x1="40"
                                y1="200"
                                x2="440"
                                y2="200"
                                stroke="#f3f4f6"
                                strokeWidth="1"
                            />
                            <line
                                x1="40"
                                y1="160"
                                x2="440"
                                y2="160"
                                stroke="#f3f4f6"
                                strokeWidth="1"
                            />
                            <line
                                x1="40"
                                y1="120"
                                x2="440"
                                y2="120"
                                stroke="#f3f4f6"
                                strokeWidth="1"
                            />
                            <line
                                x1="40"
                                y1="80"
                                x2="440"
                                y2="80"
                                stroke="#f3f4f6"
                                strokeWidth="1"
                            />
                            <line
                                x1="40"
                                y1="40"
                                x2="440"
                                y2="40"
                                stroke="#f3f4f6"
                                strokeWidth="1"
                            />

                            {/* Y-axis labels */}
                            <text
                                x="25"
                                y="205"
                                className="text-xs fill-gray-400"
                            >
                                0m
                            </text>
                            <text
                                x="25"
                                y="165"
                                className="text-xs fill-gray-400"
                            >
                                5m
                            </text>
                            <text
                                x="25"
                                y="125"
                                className="text-xs fill-gray-400"
                            >
                                10m
                            </text>
                            <text
                                x="25"
                                y="85"
                                className="text-xs fill-gray-400"
                            >
                                15m
                            </text>
                            <text
                                x="25"
                                y="45"
                                className="text-xs fill-gray-400"
                            >
                                20m
                            </text>

                            {/* Time labels */}
                            <text
                                x="60"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                9AM
                            </text>
                            <text
                                x="120"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                11AM
                            </text>
                            <text
                                x="180"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                1PM
                            </text>
                            <text
                                x="240"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                3PM
                            </text>
                            <text
                                x="300"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                5PM
                            </text>
                            <text
                                x="360"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                7PM
                            </text>
                            <text
                                x="420"
                                y="220"
                                className="text-xs fill-gray-400"
                            >
                                11PM
                            </text>

                            {/* Productive activity - smooth curves */}
                            <path
                                d="M 60 200 
                                   C 70 160, 90 120, 110 80
                                   C 120 60, 130 200, 140 200
                                   C 150 200, 170 200, 180 200
                                   C 190 200, 210 200, 220 200
                                   C 230 200, 250 200, 260 200
                                   C 270 200, 290 200, 300 200
                                   C 310 200, 330 200, 340 200
                                   C 350 200, 370 200, 380 200
                                   C 390 120, 400 100, 410 110
                                   C 420 120, 430 140, 440 160"
                                fill="url(#productiveGradient)"
                                stroke="#3b82f6"
                                strokeWidth="2"
                            />

                            {/* Leisure activity - smooth curves */}
                            <path
                                d="M 60 200
                                   C 70 190, 90 180, 110 170
                                   C 120 165, 130 200, 140 200
                                   C 150 200, 170 200, 180 200
                                   C 190 200, 210 200, 220 200
                                   C 230 200, 250 200, 260 200
                                   C 270 200, 290 200, 300 200
                                   C 310 200, 330 200, 340 200
                                   C 350 200, 370 200, 380 200
                                   C 390 160, 400 120, 410 100
                                   C 420 80, 430 60, 440 40"
                                fill="url(#leisureGradient)"
                                stroke="#ef4444"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderFocusCard = () => (
        <div className="h-full grid grid-cols-2 gap-6 p-12 relative">
            <div className="flex flex-col justify-between">
                <div></div>
                <div className="flex flex-col gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                        LONGEST FOCUS STREAK
                    </div>
                    <div className="text-5xl font-extralight mb-2 tracking-tight text-green-500">
                        43m
                    </div>
                    <div className="text-sm font-light text-gray-600">
                        4:57 PM - 5:40 PM
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-start">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 w-fit">
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-6">
                        NUMBER OF LINKS
                    </div>
                    <div className="grid grid-cols-4 gap-3 justify-center">
                        {[
                            { domain: "notionhq.com", count: 8 },
                            { domain: "youtube.com", count: 10 },
                            { domain: "github.com", count: 2 },
                            { domain: "figma.com", count: 44 },
                            { domain: "world-clock.org", count: 2 },
                            { domain: "github.com", count: 11 },
                            { domain: "instagram.com", count: 21 },
                            { domain: "google.com", count: 0 },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-12 p-1 rounded-lg transition-all hover:bg-gray-50 hover:-translate-y-0.5"
                            >
                                <img
                                    src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=32`}
                                    alt={item.domain}
                                    className="w-6 h-6 rounded-md"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLImageElement
                                        ).style.display = "none";
                                    }}
                                />
                                <div className="text-xs font-normal text-center mt-1 text-gray-800">
                                    {item.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderScoreCard = () => (
        <div className="h-full grid grid-cols-2 gap-6 p-12 relative">
            <div className="flex flex-col justify-between">
                <div></div>
                <div className="flex flex-col items-start gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                        WELLNESS SCORE
                    </div>
                    <div className="flex items-baseline gap-2">
                        <div className="text-6xl font-extralight tracking-tight text-green-600">
                            79
                        </div>
                        <div className="text-2xl font-light text-gray-400">
                            / 100
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-medium text-black mb-6">
                    Insights & Suggestions
                </h2>
                <div className="flex flex-col gap-4">
                    {[
                        {
                            text: "Good focus streaks",
                            detail: "Achieved 43m focus streak",
                            status: "green",
                        },
                        {
                            text: "Good focus on key tasks",
                            detail: "Maintaining focused browsing patterns",
                            status: "green",
                        },
                        {
                            text: "Good bedtime habits",
                            detail: "No late-night screen activity detected",
                            status: "green",
                        },
                        {
                            text: "Increase productive time",
                            detail: "Currently at 52% productive time",
                            status: "red",
                        },
                    ].map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div
                                className={`w-3 h-3 rounded-full mt-1.5 ${
                                    suggestion.status === "green"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            />
                            <div>
                                <div className="text-sm font-medium text-black">
                                    {suggestion.text}
                                </div>
                                <div className="text-xs text-gray-600">
                                    {suggestion.detail}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div
            className={`stories-container ${themeClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Scroll Container */}
            <div className="scroll-container" ref={containerRef}>
                {cardTypes.map((type, index) => (
                    <div key={type} className="card-wrapper">
                        <div className="rounded-2xl relative overflow-hidden w-full h-full font-sans flex flex-col bg-white shadow-2xl border border-gray-200">
                            <div className="flex-1 relative">
                                {index === 0 && renderOverviewCard()}
                                {index === 1 && renderActivityCard()}
                                {index === 2 && renderFocusCard()}
                                {index === 3 && renderScoreCard()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
                .stories-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .scroll-container {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    scroll-snap-type: y mandatory;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }

                .scroll-container::-webkit-scrollbar {
                    display: none;
                }

                .card-wrapper {
                    width: 100%;
                    height: 100%;
                    scroll-snap-align: start;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }

                /* Mobile support */
                @media (pointer: coarse) and (hover: none) {
                    .scroll-container {
                        overflow-x: auto;
                        overflow-y: hidden;
                        display: flex;
                        scroll-snap-type: x mandatory;
                    }
                    .card-wrapper {
                        flex-shrink: 0;
                        width: 100%;
                        scroll-snap-align: center;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default StoriesDemo;
