import React, { useEffect, useState, useRef } from "react";

const extensionsData = [
    {
        title: "AI Productivity Assistant",
        text: "Understands your browsing patterns and helps you improve productivity with intelligent insights and gentle nudges toward better focus.",
    },
    {
        title: "Smart Website Locks",
        text: "Set intelligent blocks with time reminders that adapt to your schedule. No more willpower battles—just effective, helpful boundaries.",
    },
    {
        title: "One-Click Summaries",
        text: "Never leave your current tab. Instantly digest articles, reports, and research without the mental overhead of switching contexts.",
    },
    {
        title: "Deep Insights Dashboard",
        text: "See your digital life clearly—domain time breakdowns, screen time patterns, and weekly productivity scores that actually make sense.",
    },
    {
        title: "Cross-Tab Search",
        text: "Search for any word or phrase across all your open tabs with one button. Like Cmd+F, but for your entire browser session.",
    },
    {
        title: "Website Notes",
        text: "Capture thoughts on any website and they'll be there when you return. Your ideas stay connected to the pages that inspired them.",
    },
    {
        title: "Full-Page Screenshots",
        text: "Capture entire websites in one shot—no more stitching together multiple screenshots. One click, perfect capture, every time.",
    },
    {
        title: "Tab Consolidation",
        text: "Intelligently group and manage tabs so your computer runs faster and you never have to think about what to close.",
    },
    {
        title: "Browsing Network Graph",
        text: "See exactly how you landed on any page—the full journey mapped out beautifully. This is what browser history was always meant to be.",
    },
    {
        title: "Privacy by Design",
        text: "Your data stays yours. We built this entire system so your browsing patterns never leave your device—because that's how it should be.",
    },
    {
        title: "Complete Integration",
        text: "All features work together seamlessly. This is what happens when 10+ extensions are designed as one unified experience.",
    },
];

export const ExtensionsSection: React.FC = () => {
    const [currentLayer, setCurrentLayer] = useState(9);
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

            console.log(
                `Extensions area progress: ${progressInArea}, In area: ${isInExtensionsArea}`,
            );

            // Check if we're in the convergence zone (last 10% of the extensions area)
            if (progressInArea > 0.9) {
                setIsConverging(true);
                setHasConverged(true);
                // Calculate progress within the convergence zone (0 to 1)
                const convergenceProgress = (progressInArea - 0.9) / 0.1;
                console.log(
                    `Convergence triggered! Progress: ${convergenceProgress}`,
                );
                startConvergence(convergenceProgress);
                return;
            }

            // Reset convergence state if we scroll back up
            if (isConverging && progressInArea <= 0.9) {
                setIsConverging(false);
                console.log("Resetting convergence");
                resetLayers();
            }

            // Normal layer progression for the first 90% of the extensions area
            if (!isConverging) {
                const adjustedPercent = progressInArea / 0.9; // Scale to 0-1 for first 90%
                const newLayer = 9 - Math.floor(adjustedPercent * 10);

                if (
                    newLayer !== currentLayer &&
                    newLayer >= 0 &&
                    newLayer < 10
                ) {
                    setCurrentLayer(newLayer);
                    console.log(`Layer changed to: ${newLayer}`);
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
                const moveDistance = progress * -4.5 * layerHeight; // Move down (reversed)
                layer.style.transform = `translateY(${moveDistance}px)`;
                layer.style.opacity = Math.max(
                    0.5,
                    1 - progress * 0.3,
                ).toString();
            } else if (index === 9) {
                // Layer 9 is visually at the bottom due to column-reverse
                // It needs to move up to the middle (negative Y)
                const layerHeight =
                    parseFloat(getComputedStyle(layer).height) + 2;
                const moveDistance = progress * 4.5 * layerHeight; // Move up (reversed)
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
        if (progress > 0.5 && currentLayer !== 10) {
            setCurrentLayer(10);
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
        const hues = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360];
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
                    .glass-layer:nth-child(10) { transition-delay: 0.9s; }

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

                    .glass-layer:nth-child(10)::after {
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
                className="h-screen sticky top-0 flex flex-col items-center justify-center bg-[#fcfcf7] z-10"
                style={{ fontFamily: "'Libre Baskerville', Arial, sans-serif" }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-gray-900">
                        10+ Extensions, 1 Seamless Experience
                    </h1>
                    <p className="text-lg mb-12 text-gray-800 opacity-80">
                        Why install multiple extensions when LyncX does it all?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl items-center px-6">
                    {/* Glass Stack */}
                    <div className="flex justify-center">
                        <div
                            className="flex flex-col-reverse relative"
                            style={{ width: "clamp(120px, 32vmin, 240px)" }}
                        >
                            {[...Array(10)].map((_, index) => (
                                <div
                                    key={index}
                                    ref={(el) => setLayerRef(el, index)}
                                    className={`glass-layer ${
                                        currentLayer === index ? "active" : ""
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

                    {/* Content */}
                    <div className="flex justify-start">
                        <div
                            className={`extensions-content ${
                                isVisible ? "visible" : ""
                            }`}
                        >
                            <h2 className="text-3xl font-normal mb-2 leading-tight text-gray-900">
                                {extensionsData[currentLayer].title}
                            </h2>
                            <hr className="h-0.5 w-full border-none bg-gray-900 my-2" />
                            <p className="text-lg leading-relaxed text-gray-700">
                                {extensionsData[currentLayer].text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll sections to enable the glass stack animation */}
            {[...Array(11)].map((_, index) => (
                <div key={index} className="h-screen" />
            ))}
        </div>
    );
};
