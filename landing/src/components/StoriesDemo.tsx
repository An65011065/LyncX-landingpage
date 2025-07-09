import React, { useState, useRef, useEffect } from "react";
import type { BrowsingSession } from "../../../src/data/dataService";
import { StoryCard } from "../../../src/dashboard/components/StoryCard";

interface StoriesDemoProps {
    isDarkMode?: boolean;
}

// Sample data structure matching the exact type from dataService
const sampleSession: BrowsingSession = {
    date: "2024-03-19",
    startTime: 1710838800000,
    endTime: 1711005152653,
    stats: {
        totalUrls: 200,
        uniqueUrls: 39,
        uniqueDomains: 36,
        workTime: 53340000,
        socialTime: 46020000,
        otherTime: 51600000,
        totalTime: 150960000,
    },
    tabSessions: [
        {
            tabId: 1,
            windowId: 1,
            openedAt: 1710838800000,
            closedAt: 1710839460000,
            totalActiveTime: 585805,
            urlVisits: [
                {
                    id: "1_1710838800000",
                    url: "https://chess.com/play",
                    domain: "chess.com",
                    title: "Play Chess Online",
                    startTime: 1710838800000,
                    endTime: 1710839460000,
                    duration: 660000,
                    isActive: false,
                    activeTime: 585805,
                    lastActiveTime: 1710839460000,
                    tabId: 1,
                    windowId: 1,
                    creationMode: "chain",
                    category: "other",
                },
            ],
        },
    ],
};

const StoriesDemo: React.FC<StoriesDemoProps> = ({ isDarkMode = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Using same card types as the original component
    const cardTypes = ["overview", "activity", "focus", "score"] as const;

    // Auto-play functionality
    const startAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        setIsAutoPlaying(true);
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cardTypes.length);
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

    return (
        <div
            className="stories-demo-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-wrapper">
                <StoryCard
                    currentSession={sampleSession}
                    cardType={cardTypes[currentIndex]}
                    isAutoPlaying={isAutoPlaying}
                    onToggleAutoPlay={toggleAutoPlay}
                    currentIndex={currentIndex}
                    totalCards={cardTypes.length}
                    isDarkMode={isDarkMode}
                />
            </div>

            <style>
                {`
                .stories-demo-container {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    height: 400px;
                    margin: 0 auto;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .card-wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }
                `}
            </style>
        </div>
    );
};

export default StoriesDemo;
