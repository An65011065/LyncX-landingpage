import React, { useEffect, useState, useRef } from "react";
import { Camera, FileText, Layout } from "lucide-react";

const extensionsData = [
    {
        title: "AI Productivity Assistant",
        text: "Understands your browsing patterns and helps you improve productivity with intelligent insights and gentle nudges toward better focus.",
        viewType: "image",
        viewSrc: "assets/aiInsights.png",
    },
    {
        title: "Smart Website Locks",
        text: "Set intelligent blocks with time reminders that adapt to your schedule. No more willpower battles—just effective, helpful boundaries.",
        viewType: "component",
        viewSrc: "assets/blocks.png",
    },
    {
        title: "One-Click Summaries",
        text: "Never leave your current tab. Instantly digest articles, reports, and research without the mental overhead of switching contexts.",
        viewType: "summary",
        viewSrc: null,
    },
    {
        title: "Deep Insights Dashboard",
        text: "See your digital life clearly—domain time breakdowns, screen time patterns, and weekly productivity scores that actually make sense.",
        viewType: "component",
        viewSrc: "StoriesDemo",
    },
    {
        title: "Website Utilities",
        text: "Cross-tab search, full-page screenshots, and intelligent tab consolidation - three powerful tools that work seamlessly together.",
        viewType: "utilities",
        viewSrc: null,
    },
    {
        title: "Website Notes",
        text: "Capture thoughts on any website and they'll be there when you return. Your ideas stay connected to the pages that inspired them.",
        viewType: "image",
        viewSrc: "assets/notes.png",
    },
    {
        title: "Browsing Network Graph",
        text: "See exactly how you landed on any page—the full journey mapped out beautifully. This is what browser history was always meant to be.",
        viewType: "image",
        viewSrc: "assets/graph.png",
    },
    {
        title: "Privacy by Design",
        text: "You decide exactly what browsing data to share - if any. Everything stays stored locally on your device, with zero tracking for dashboards or analytics. You can download your data as a CSV file anytime. Your browsing patterns belong to you, not us.",
        viewType: "image",
        viewSrc: "assets/privacy.png",
    },
    {
        title: "Complete Integration",
        text: "All features work together seamlessly. This is what happens when 8+ extensions are designed as one unified experience.",
        viewType: "image",
        viewSrc: "assets/crossTab.png",
    },
];

// Simple StoriesDemo component
const StoriesDemo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardTypes = ["Overview", "Activity", "Focus", "Score"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cardTypes.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {cardTypes[currentIndex]}
                    </h3>
                    <div className="flex gap-1">
                        {cardTypes.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentIndex
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Work</span>
                        <span className="text-sm font-medium">4h 23m</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Social</span>
                        <span className="text-sm font-medium">1h 15m</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-1/5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple BlockerDemo component
const BlockerDemo = () => {
    const [isLocked, setIsLocked] = useState(false);
    const [domain, setDomain] = useState("instagram.com");
    const [timeRemaining, setTimeRemaining] = useState("2h 30m");

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Website Blocker
                    </h3>
                    <div
                        className={`w-4 h-4 rounded-full ${
                            isLocked ? "bg-red-500" : "bg-green-500"
                        }`}
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">{domain}</span>
                        <button
                            onClick={() => setIsLocked(!isLocked)}
                            className={`px-3 py-1 text-xs rounded-full ${
                                isLocked
                                    ? "bg-red-100 text-red-800"
                                    : "bg-green-100 text-green-800"
                            }`}
                        >
                            {isLocked ? "Locked" : "Unlocked"}
                        </button>
                    </div>
                    {isLocked && (
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                            <div className="text-sm text-red-600 font-medium">
                                Time remaining: {timeRemaining}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// One-Click Summary component
const SummaryDemo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSummary, setShowSummary] = useState(false);

    const handleSummarize = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowSummary(true);
        }, 2000);
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Article Summary
                    </h3>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                </div>
                {!showSummary ? (
                    <div className="text-center">
                        <button
                            onClick={handleSummarize}
                            disabled={isLoading}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                        >
                            {isLoading ? "Summarizing..." : "Summarize"}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                                • Key finding about productivity trends
                            </p>
                            <p className="text-sm text-gray-700">
                                • Important data on user behavior
                            </p>
                            <p className="text-sm text-gray-700">
                                • Actionable insights for improvement
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Utilities component
const UtilitiesDemo = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Website Utilities
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Camera className="w-5 h-5 text-blue-500" />
                        <div>
                            <div className="text-sm font-medium text-gray-800">
                                Full-Page Screenshots
                            </div>
                            <div className="text-xs text-gray-600">
                                Capture entire pages in one click
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <FileText className="w-5 h-5 text-green-500" />
                        <div>
                            <div className="text-sm font-medium text-gray-800">
                                Cross-Tab Search
                            </div>
                            <div className="text-xs text-gray-600">
                                Search across all open tabs
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Layout className="w-5 h-5 text-purple-500" />
                        <div>
                            <div className="text-sm font-medium text-gray-800">
                                Tab Consolidation
                            </div>
                            <div className="text-xs text-gray-600">
                                Intelligently group and manage tabs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ViewBox component
const ViewBox = ({ currentLayer }: { currentLayer: number }) => {
    const extension = extensionsData[currentLayer];

    // Safety check
    if (!extension) {
        return (
            <div className="w-full h-full border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm">Loading...</p>
                </div>
            </div>
        );
    }

    const renderView = () => {
        switch (extension.viewType) {
            case "image":
                if (!extension.viewSrc) return null;
                return (
                    <div className="flex items-center justify-center">
                        <img
                            src={extension.viewSrc}
                            alt={extension.title}
                            className="max-w-full object-contain"
                        />
                    </div>
                );
            case "component":
                if (extension.viewSrc === "StoriesDemo") {
                    return <StoriesDemo />;
                } else if (extension.viewSrc === "BlockerDemo") {
                    return <BlockerDemo />;
                }
                return null;
            case "summary":
                return <SummaryDemo />;
            case "utilities":
                return <UtilitiesDemo />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            {renderView()}
        </div>
    );
};

export const ExtensionsSection: React.FC = () => {
    const [currentLayer, setCurrentLayer] = useState(8);
    const [isConverging, setIsConverging] = useState(false);
    const [hasConverged, setHasConverged] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const layersRef = useRef<HTMLDivElement[]>([]);

    // Create layer refs
    const setLayerRef = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            layersRef.current[index] = el;
        }
    };

    // Enhanced intersection observer to trigger animation when section becomes visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-10% 0px",
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            // Find the container with scroll sections
            const container = sectionRef.current.parentElement;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const containerTop = scrollTop + containerRect.top;
            const containerBottom = containerTop + container.offsetHeight;

            // Check if we're in the extensions section area (between container start and end)
            const isInExtensionsArea =
                scrollTop >= containerTop &&
                scrollTop <= containerBottom - windowHeight;

            if (!isInExtensionsArea) {
                // Not in extensions area, don't process
                return;
            }

            // Calculate scroll progress within the extensions area only
            const areaHeight = container.offsetHeight - windowHeight;
            const progressInArea = Math.max(
                0,
                Math.min(1, (scrollTop - containerTop) / areaHeight),
            );

            // Check if we're in the convergence zone (last 10% of the extensions area)
            if (progressInArea > 0.9) {
                setIsConverging(true);
                setHasConverged(true);
                // Calculate progress within the convergence zone (0 to 1)
                const convergenceProgress = (progressInArea - 0.9) / 0.1;
                startConvergence(convergenceProgress);
                return;
            }

            // Reset convergence state if we scroll back up
            if (isConverging && progressInArea <= 0.9) {
                setIsConverging(false);
                resetLayers();
            }

            // Normal layer progression for the first 90% of the extensions area
            if (!isConverging) {
                const adjustedPercent = progressInArea / 0.9; // Scale to 0-1 for first 90%
                const newLayer = 8 - Math.floor(adjustedPercent * 9);

                if (
                    newLayer !== currentLayer &&
                    newLayer >= 0 &&
                    newLayer < 9
                ) {
                    setCurrentLayer(newLayer);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentLayer, isConverging]);

    const startConvergence = (progress: number) => {
        layersRef.current.forEach((layer, index) => {
            if (!layer) return;

            // Add converging class
            layer.classList.add("converging");

            // Disable CSS transitions and animations to prevent conflicts
            layer.style.transition = "none";
            layer.style.animation = "none";

            if (index === 0) {
                // Layer 0 is visually at the top due to column-reverse
                // It needs to move down to the middle (positive Y)
                const layerHeight =
                    parseFloat(getComputedStyle(layer).height) + 2;
                const moveDistance = progress * -4 * layerHeight; // Move down (reversed)
                layer.style.transform = `translateY(${moveDistance}px)`;
                layer.style.opacity = Math.max(
                    0.5,
                    1 - progress * 0.3,
                ).toString();
            } else if (index === 8) {
                // Layer 8 is visually at the bottom due to column-reverse
                // It needs to move up to the middle (negative Y)
                const layerHeight =
                    parseFloat(getComputedStyle(layer).height) + 2;
                const moveDistance = progress * 4 * layerHeight; // Move up (reversed)
                layer.style.transform = `translateY(${moveDistance}px)`;
                layer.style.opacity = Math.max(
                    0.5,
                    1 - progress * 0.3,
                ).toString();
            } else {
                // Middle layers gradually fade out
                const fadeProgress = Math.min(1, progress * 1.5); // Fade at moderate speed
                layer.style.opacity = Math.max(0, 1 - fadeProgress).toString();
                layer.style.transform = `scale(${1 - fadeProgress * 0.1})`;
            }
        });

        // Update content to show convergence when halfway through
        if (progress > 0.5 && currentLayer !== 8) {
            setCurrentLayer(8);
        }
    };

    const resetLayers = () => {
        layersRef.current.forEach((layer) => {
            if (layer) {
                layer.classList.remove("converging");
                layer.style.transform = "";
                layer.style.opacity = "";
                layer.style.transition = "";
                // Keep animation disabled if we've converged before
                if (hasConverged) {
                    layer.style.animation = "none";
                } else {
                    layer.style.animation = "";
                }
            }
        });
    };

    const getHue = (index: number) => {
        const hues = [0, 40, 80, 120, 160, 200, 240, 280, 320];
        return hues[index] || 0;
    };

    return (
        <div className="relative">
            <style>
                {`
                    .glass-layer {
                        height: clamp(9.6px, 2.56vmin, 19.2px);
                        position: relative;
                        margin-bottom: 2px;
                        transform-origin: center;
                        opacity: 0;
                        transform: translateY(-200px) rotate(-2deg);
                        transition: opacity 0.5s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
                    }

                    .glass-layer.visible {
                        opacity: 1;
                        transform: translateY(0) rotate(0);
                    }

                    .glass-layer:nth-child(1) { transition-delay: 0s; }
                    .glass-layer:nth-child(2) { transition-delay: 0.1s; }
                    .glass-layer:nth-child(3) { transition-delay: 0.2s; }
                    .glass-layer:nth-child(4) { transition-delay: 0.3s; }
                    .glass-layer:nth-child(5) { transition-delay: 0.4s; }
                    .glass-layer:nth-child(6) { transition-delay: 0.5s; }
                    .glass-layer:nth-child(7) { transition-delay: 0.6s; }
                    .glass-layer:nth-child(8) { transition-delay: 0.7s; }
                    .glass-layer:nth-child(9) { transition-delay: 0.8s; }

                    .glass-layer.converging {
                        transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }

                    .glass-layer::before {
                        content: "";
                        background-image: url(https://assets.codepen.io/605876/translucent-panel.png);
                        position: absolute;
                        width: 100%;
                        aspect-ratio: 1160 / 521;
                        background-size: cover;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        opacity: 0.8;
                    }

                    .glass-layer::after {
                        content: "";
                        background-image: url(https://assets.codepen.io/605876/color-panel.png);
                        position: absolute;
                        width: 100%;
                        aspect-ratio: 1160 / 521;
                        background-size: cover;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        opacity: 0.1;
                        transition: all 0.3s ease;
                    }

                    .glass-layer:nth-child(1)::after {
                        background-image: url(https://assets.codepen.io/605876/bottom-panel.png);
                        filter: hue-rotate(0deg) brightness(1.5);
                        opacity: 1;
                    }

                    .glass-layer:nth-child(9)::after {
                        opacity: 1;
                    }

                    .glass-layer.active::after {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.05);
                    }

                    .extensions-content {
                        text-align: left;
                        max-width: 400px;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
                        transition-delay: 1.2s;
                    }

                    .extensions-content.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}
            </style>

            <section
                ref={sectionRef}
                className="min-h-screen sticky top-0 flex flex-col items-center justify-center bg-[#fcfcf7] z-10 py-20"
                style={{
                    fontFamily: "'Libre Baskerville', Arial, sans-serif",
                }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-gray-900">
                        10+ Extensions, 1 Seamless Experience
                    </h1>
                    <p className="text-lg mb-10 text-gray-800 opacity-80">
                        Why install multiple extensions when LyncX does it all?
                    </p>
                </div>

                {/* Container centered on screen */}
                <div className="w-full max-w-7xl mx-auto px-6">
                    {/* Two columns: 40% and 60% */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* First column: glass layers and text */}
                        <div className="w-full lg:w-2/5 flex flex-col">
                            {/* Stacks section */}
                            <div className="flex items-center justify-center mb-20">
                                <div
                                    className="flex flex-col-reverse relative"
                                    style={{
                                        width: "clamp(120px, 32vmin, 240px)",
                                    }}
                                >
                                    {[...Array(9)].map((_, index) => (
                                        <div
                                            key={index}
                                            ref={(el) => setLayerRef(el, index)}
                                            className={`glass-layer ${
                                                currentLayer === index
                                                    ? "active"
                                                    : ""
                                            } ${isVisible ? "visible" : ""}`}
                                            style={{
                                                "--hue": `${getHue(index)}deg`,
                                                filter: `hue-rotate(${getHue(
                                                    index,
                                                )}deg)`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Text section */}
                            <div className="flex items-start justify-center">
                                <div
                                    className={`extensions-content ${
                                        isVisible ? "visible" : ""
                                    }`}
                                >
                                    <h2 className="text-3xl font-normal mb-2 leading-tight text-gray-900">
                                        {extensionsData[currentLayer]?.title ||
                                            "Loading..."}
                                    </h2>
                                    <hr className="h-0.5 w-full border-none bg-gray-900 my-2" />
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        {extensionsData[currentLayer]?.text ||
                                            "Loading content..."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second column: ViewBox */}
                        <div className="w-full lg:w-3/5 flex items-center justify-center">
                            <ViewBox currentLayer={currentLayer} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll sections to enable the glass stack animation */}
            {[...Array(9)].map((_, index) => (
                <div key={index} className="h-screen" />
            ))}
        </div>
    );
};
