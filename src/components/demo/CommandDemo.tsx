import React, { useEffect, useState, useRef } from "react";
import FAQDemo from "./FAQDemo";
import FooterDemo from "./FooterDemo";
import ModularSection from "./ModularDemo";
import visualizationImage from "../../../assets/visualization.png";
import { DemoCommandBar, commandBrandColors } from "./DemoCommandBar";
import emailVideo from "../../../assets/videos/email.mp4";
import leetcodeVideo from "../../../assets/videos/leetcode.mp4";
import redditVideo from "../../../assets/videos/reddit.mp4";
import spotifyVideo from "../../../assets/videos/spotify.mp4";
import sessionVideo from "../../../assets/videos/session.mp4";
import helpVideo from "../../../assets/videos/help.mp4";

const DemoHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-sm z-50 border-b border-[var(--border)] transition-all duration-300 ${
                isScrolled ? "shadow-sm" : ""
            }`}
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6">
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
                    LyncX
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 items-center">
                    <a
                        href="#features"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Features
                    </a>
                    <a
                        href="/privacy"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Privacy
                    </a>
                    <button className="text-sm font-semibold bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-md">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-[var(--text)] hover:bg-[var(--border)] transition-colors duration-200"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/98 backdrop-blur-sm">
                    <div className="px-4 py-6 space-y-4">
                        <a
                            href="#features"
                            className="block text-base font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="/privacy"
                            className="block text-base font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Privacy
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

const DemoHero: React.FC<{
    commandBarRef: React.RefObject<HTMLDivElement>;
    onCommandChange: (commandIndex: number) => void;
    scrollProgress: number;
    browserRef: React.RefObject<HTMLDivElement>;
}> = ({ commandBarRef, onCommandChange, scrollProgress, browserRef }) => {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [interpolatedColor, setInterpolatedColor] = useState({
        r: 225,
        g: 226,
        b: 168,
        a: 1,
    });
    const [isMobile, setIsMobile] = useState(false);

    // Mobile detection
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const handleCommandChange = (index: number) => {
        setCurrentCommandIndex(index);
        onCommandChange(index);
    };
    // Spotlight control state
    const [spotlightParams, setSpotlightParams] = useState({
        enabled: true,
        leftPosition: 0,
        topPosition: 46,
        height: 1000,
        width: 80,
        translateY: -450,
        perspective: 1500,
        scaleX: 1.2,
        rotateY: 45,
        colorCenter: { r: 225, g: 226, b: 168 },
        opacity: 0.7,
        gradient1: 5,
        gradient2: 30,
        gradient3: 60,
    });

    const updateParam = (key: string, value: any) => {
        setSpotlightParams((prev) => ({ ...prev, [key]: value }));
    };

    // Smart color conversion: extract RGBA from command brand colors
    const getSpotlightColor = () => {
        const colorString =
            commandBrandColors[currentCommandIndex] || commandBrandColors[0];
        const matches = colorString.match(
            /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
        );
        if (matches) {
            return {
                r: Number(matches[1]),
                g: Number(matches[2]),
                b: Number(matches[3]),
                a: matches[4] ? Number(matches[4]) : 1,
            };
        }
        return { r: 225, g: 226, b: 168, a: 1 };
    };

    const targetSpotlightColor = getSpotlightColor();

    // Smooth color interpolation
    useEffect(() => {
        const duration = 800; // 800ms transition
        const startTime = Date.now();
        const startColor = interpolatedColor;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Eased interpolation (smooth curve)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setInterpolatedColor({
                r: Math.round(
                    startColor.r +
                        (targetSpotlightColor.r - startColor.r) * easeProgress,
                ),
                g: Math.round(
                    startColor.g +
                        (targetSpotlightColor.g - startColor.g) * easeProgress,
                ),
                b: Math.round(
                    startColor.b +
                        (targetSpotlightColor.b - startColor.b) * easeProgress,
                ),
                a:
                    startColor.a +
                    (targetSpotlightColor.a - startColor.a) * easeProgress,
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [currentCommandIndex]);
    return (
        <section className="min-h-screen flex items-center pt-20 relative">
            {/* Desktop Spotlight Effect */}
            {spotlightParams.enabled && !isMobile && (
                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        left: `${spotlightParams.leftPosition}%`,
                        top: `${spotlightParams.topPosition}%`,
                        height: `${spotlightParams.height}px`,
                        width: `${spotlightParams.width}%`,
                        transformOrigin: "right center",
                        transform: `translateY(${spotlightParams.translateY}px) perspective(${spotlightParams.perspective}px) scaleX(${spotlightParams.scaleX}) rotateY(${spotlightParams.rotateY}deg)`,
                        background: `radial-gradient(ellipse at 95% center, rgba(${
                            interpolatedColor.r
                        }, ${interpolatedColor.g}, ${interpolatedColor.b}, ${
                            interpolatedColor.a *
                            spotlightParams.opacity *
                            (1 - scrollProgress * 2)
                        }) ${spotlightParams.gradient1}%, rgba(${
                            interpolatedColor.r
                        }, ${interpolatedColor.g}, ${interpolatedColor.b}, ${
                            interpolatedColor.a *
                            spotlightParams.opacity *
                            0.5 *
                            (1 - scrollProgress * 2)
                        }) ${spotlightParams.gradient2}%, rgba(${
                            interpolatedColor.r
                        }, ${interpolatedColor.g}, ${interpolatedColor.b}, ${
                            interpolatedColor.a *
                            spotlightParams.opacity *
                            0.125 *
                            (1 - scrollProgress * 2)
                        }) ${spotlightParams.gradient3}%, transparent)`,
                        clipPath: "polygon(95% 48%, 0% 0%, 0% 100%, 95% 52%)",
                    }}
                />
            )}

            {/* Mobile Gradient Overlay - Bottom to Top */}
            {spotlightParams.enabled && isMobile && (
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: `linear-gradient(to top, rgba(${
                            interpolatedColor.r
                        }, ${interpolatedColor.g}, ${interpolatedColor.b}, ${
                            interpolatedColor.a * 0.3 * (1 - scrollProgress * 2)
                        }) 0%, rgba(${interpolatedColor.r}, ${
                            interpolatedColor.g
                        }, ${interpolatedColor.b}, ${
                            interpolatedColor.a *
                            0.15 *
                            (1 - scrollProgress * 2)
                        }) 30%, transparent 60%)`,
                    }}
                />
            )}

            <div className="w-full max-w-6xl mx-auto px-8 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-[var(--text)] tracking-tight">
                            A command bar for{" "}
                            <span className="font-semibold text-[var(--accent-color)]">
                                everything
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed text-[var(--muted-text)] font-medium">
                            LyncX lets you type what you want to do, without
                            having to open another tab
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent-color)] text-white rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-95 min-h-[44px]">
                                Install Free
                            </button>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white min-h-[44px]">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-start self-start w-full">
                        <DemoCommandBar
                            commandBarRef={commandBarRef}
                            onCommandChange={handleCommandChange}
                            scrollProgress={scrollProgress}
                            browserRef={browserRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const HelpSection: React.FC<{
    lyncxRef: React.RefObject<HTMLDivElement>;
    helpSectionRef: React.RefObject<HTMLElement>;
}> = ({ lyncxRef, helpSectionRef }) => {
    const [cardsRevealed, setCardsRevealed] = useState(false);

    // Detect when user scrolls to this section
    useEffect(() => {
        const handleScroll = () => {
            if (helpSectionRef.current) {
                const rect = helpSectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Trigger animation when section is 50% visible, reverse when scrolled past
                if (rect.top < viewportHeight * 0.5 && rect.bottom > 0) {
                    setCardsRevealed(true);
                } else {
                    setCardsRevealed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, [helpSectionRef]);
    const commands = [
        "/spotify",
        "/gmail",
        "/slack",
        "/todo",
        "/translate",
        "/timer",
        "/block",
        "/limit",
        "/remember",
        "/recall",
        "/ss",
        "/chat",
        "/lyncx",
        "/visualize",
        "/cal",
        "/new",
        "/group",
        "/arrange",
        "/history",
        "/next",
        "/view",
        "/close",
        "/switch",
        "/sessions",
        "/clip",
    ];

    return (
        <section
            ref={helpSectionRef}
            className="flex items-center justify-center pt-24 pb-44"
        >
            <div className="w-full max-w-6xl mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-light mb-6 text-[var(--text)]">
                        Available{" "}
                        <span className="font-semibold text-[var(--accent-color)]">
                            Commands
                        </span>
                    </h2>
                    <p className="text-xl text-[var(--muted-text)] max-w-2xl mx-auto leading-relaxed">
                        Press / to start typing any command. LyncX understands
                        natural language and handles the rest.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 relative">
                    {commands.map((command, index) => {
                        // Calculate animation styles for non-lyncx cards
                        const getCardStyle = () => {
                            if (index === 12) {
                                // /lyncx card - always visible with special styling
                                return {
                                    background:
                                        "linear-gradient(135deg, #16162a 0%, #0f0f1f 50%, #16162a 100%)",
                                    borderColor: "#16162a",
                                    boxShadow:
                                        "0 0 20px rgba(22, 22, 42, 0.5), 0 0 40px rgba(22, 22, 42, 0.3), 0 0 60px rgba(22, 22, 42, 0.2)",
                                    animation:
                                        "glow 2s ease-in-out infinite alternate",
                                    transformOrigin: "center center",
                                    willChange: "box-shadow",
                                };
                            }

                            if (!cardsRevealed) {
                                // Hide cards behind /lyncx - reverse stagger for hiding
                                const reverseDelay =
                                    (commands.length - 1 - index) * 30; // Reverse order, faster
                                return {
                                    transform: "translate(0px, 0px) scale(0.1)",
                                    opacity: 0,
                                    zIndex: 1,
                                    transition: `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${reverseDelay}ms`,
                                };
                            }

                            // Revealed state - animate to normal position
                            return {
                                transform: "translate(0px, 0px) scale(1)",
                                opacity: 1,
                                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                                    index * 50
                                }ms`,
                                zIndex: 5,
                            };
                        };

                        return (
                            <div
                                key={index}
                                ref={index === 12 ? lyncxRef : undefined}
                                className={`${
                                    index === 12
                                        ? "z-10 p-5"
                                        : "bg-white/80 shadow-sm hover:shadow-md border-[var(--border)] p-4"
                                } backdrop-blur-sm border rounded-xl text-center`}
                                style={getCardStyle()}
                            >
                                <span
                                    className={`text-sm font-mono ${
                                        index === 12
                                            ? "text-white font-semibold"
                                            : "text-[var(--muted-text)]"
                                    }`}
                                >
                                    {command}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* +more text */}
                <div className="text-center mt-8">
                    <span className="text-sm text-[var(--muted-text)] opacity-90">
                        +more
                    </span>
                </div>
            </div>
        </section>
    );
};

const DemoDescription: React.FC = () => {
    return (
        <section className="py-8 flex items-center justify-center relative z-10">
            <div className="w-full max-w-6xl mx-auto px-8 text-center">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-[var(--text)]">
                    All your essentials in one single bar, so you
                    <br />{" "}
                    <span className="text-[var(--accent-color)] font-medium">
                        move faster
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-color)] font-medium">
                        stay focused
                    </span>
                    , and{" "}
                    <span className="text-[var(--accent-color)] font-medium">
                        stay on top of what matters
                    </span>
                    .
                </p>
            </div>
        </section>
    );
};

const BrowserFrame: React.FC<{
    browserRef: React.RefObject<HTMLDivElement>;
    commandBarRef: React.RefObject<HTMLDivElement>;
    isCommandBarFixed: boolean;
    scrollProgress: number;
}> = ({ browserRef, commandBarRef, isCommandBarFixed, scrollProgress }) => {
    const [activeVideo, setActiveVideo] = useState<
        "reddit" | "leetcode" | "email" | "spotify" | "session" | "help"
    >("reddit");

    const videoRef = useRef<HTMLVideoElement>(null);

    const videos = {
        reddit: redditVideo,
        leetcode: leetcodeVideo,
        email: emailVideo,
        spotify: spotifyVideo,
        session: sessionVideo,
        help: helpVideo,
    };

    // Control video playback based on scroll progress and video changes
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            if (scrollProgress >= 1) {
                video.play().catch(console.error);
            } else {
                video.pause();
            }
        }
    }, [scrollProgress, activeVideo]);

    return (
        <section className="py-8 flex flex-col items-center justify-center relative z-10">
            <div className="w-full max-w-6xl mx-auto px-8">
                <div
                    ref={browserRef}
                    className="relative bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-3xl border-2 border-[var(--border)] shadow-xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] w-full"
                >
                    {/* Video Content */}
                    <div className="absolute inset-0 bg-gray-900 rounded-xl sm:rounded-3xl overflow-hidden">
                        <video
                            ref={videoRef}
                            key={activeVideo}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source
                                src={videos[activeVideo]}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Video Control Buttons - Now below the browser frame */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-6 px-4">
                    {/* Website buttons (reddit, leetcode) */}
                    <div className="flex gap-2">
                        {["reddit", "leetcode"].map((videoKey) => (
                            <button
                                key={videoKey}
                                onClick={() =>
                                    setActiveVideo(
                                        videoKey as keyof typeof videos,
                                    )
                                }
                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                                    activeVideo === videoKey
                                        ? "bg-[var(--accent-color)] text-white shadow-md"
                                        : "bg-white/20 backdrop-blur-sm text-[var(--text)] hover:bg-white/30 hover:shadow-sm"
                                }`}
                            >
                                {videoKey}
                            </button>
                        ))}
                    </div>

                    {/* Command buttons (session, spotify, email, help) */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {["session", "spotify", "email", "help"].map(
                            (videoKey) => (
                                <button
                                    key={videoKey}
                                    onClick={() =>
                                        setActiveVideo(
                                            videoKey as keyof typeof videos,
                                        )
                                    }
                                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                                        activeVideo === videoKey
                                            ? "bg-[var(--accent-color)] text-white shadow-md"
                                            : "bg-white/20 backdrop-blur-sm text-[var(--text)] hover:bg-white/30 hover:shadow-sm"
                                    }`}
                                >
                                    /{videoKey}
                                </button>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Background Pattern Components
const CurvesPattern: React.FC<{ color: string }> = ({ color }) => (
    <svg
        className="card__bg"
        width="648px"
        height="648px"
        viewBox="0 0 648 648"
        style={{ color }}
    >
        <g fill="none" stroke="currentColor" strokeWidth="12" opacity="0.15">
            <path d="M 371.646 -16.266 C 328.554 21.003 255.465 49.043 214.417 88.552 C 204.914 97.698 201.122 117.816 203.936 130.48 C 204.954 135.063 223.705 151.184 228.393 151.444 C 247.225 152.49 268.217 141.879 286.044 135.721 C 300.864 130.601 356.726 98.89 368.152 88.552 C 384.788 73.5 419.727 21.192 443.272 20.42 C 466.201 19.668 488.552 28.981 486.946 51.866 C 484.611 85.14 405.888 122.024 397.85 125.239 C 379.675 132.509 315.118 176.349 300.019 181.142 C 278.43 187.996 171.305 238.027 191.707 270.238 C 199.694 282.848 245.401 287.141 251.104 285.961 C 272.473 281.54 312.575 264.398 329.718 256.263 C 349.247 246.995 369.945 239.359 387.368 226.564 C 407.616 211.695 436.166 193.291 460.741 170.661 C 481.974 151.109 503.703 120.367 507.91 114.757 C 521.283 96.926 532.568 77.618 544.597 58.854 C 548.202 53.231 566.334 18.673 595.259 15.179 C 614.89 12.808 637.386 23.453 635.44 43.131 C 620.486 194.344 475.403 251.2 355.923 287.708 C 322.634 297.88 289.732 309.309 256.345 319.154 C 244.287 322.709 231.584 323.914 219.658 327.889 C 180.191 341.045 142.564 353.262 162.008 415.238 C 167.355 432.282 247.011 426.256 258.092 422.226 C 279.039 414.609 326.614 401.1 347.188 392.527 C 354.656 389.415 361.4 384.754 368.152 380.298 C 390.53 365.529 413.129 351.02 434.537 334.877 C 453.303 320.726 468.437 302.193 486.946 287.708 C 517.369 263.898 550.649 243.076 581.283 219.576 C 606.25 200.423 655.973 142.746 680.862 123.492 C 686.867 118.846 759.061 175.106 719.294 203.853 C 670.087 239.425 565.388 323.141 514.898 352.346 C 492.125 365.519 417.408 399.066 394.356 411.744 C 370.813 424.693 337.524 440.083 312.248 457.165 C 286.069 474.857 285.912 495.194 296.525 499.093 C 325.501 509.737 358.468 501.038 389.115 497.346 C 407.223 495.164 424.116 487.063 441.525 481.623 C 488.901 466.818 494.222 458.543 539.356 427.467 C 558.379 414.369 577.623 401.591 597.006 389.033 C 618.971 374.802 641.049 360.738 663.391 347.106 C 675.414 339.77 673.133 397.859 651.163 415.238 C 633.929 428.871 605.25 440.426 586.524 451.924 C 572.056 460.808 508.422 486.1 528.874 516.563 C 547.527 544.346 603.523 534.311 621.465 527.044 C 649.531 515.676 662.009 508.054 682.609 490.358" />
        </g>
    </svg>
);

const CirclesPattern: React.FC<{ color: string }> = ({ color }) => (
    <svg
        className="card__bg"
        width="648px"
        height="648px"
        viewBox="0 0 648 648"
        style={{ color }}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            opacity="0.15"
        >
            <path
                strokeWidth="6"
                d="M 453.754 -21.507 C 426.967 6.445 420.959 57.037 331.465 60.601 C 234.771 64.452 225.579 0.318 214.418 -28.495"
            />
            <path
                strokeWidth="6"
                d="M 156.767 -33.735 C 167.249 11.104 188.994 80.565 217.912 111.263 C 239.879 134.581 286.462 149.302 307.007 147.95"
            />
            <path
                strokeWidth="6"
                d="M 307.007 128.398 C 331.812 142.719 401.333 127.174 443.273 102.193 C 482.243 78.981 545.369 8.9 555.079 -28.829"
            />
            <path
                strokeWidth="6"
                d="M 68.545 -23.06 C 69.207 -20.985 69.087 78.639 108.725 135.914 C 148.883 193.94 180.333 225.897 241.496 225.01"
            />
            <path
                strokeWidth="8"
                d="M 289.538 242.287 C 349.575 238.65 410.797 237.601 509.657 175.902 C 594.584 122.899 644.472 14.236 663.391 -28.494"
            />
            <path
                strokeWidth="6"
                d="M -2.208 -47.265 C 0.121 58.718 67.059 227.084 132.309 281.167 C 179.791 320.523 209.414 320.27 289.537 300.383"
            />
            <path
                strokeWidth="9"
                d="M 279.055 313.722 C 311.054 325.465 444.581 310.019 502.669 285.771 C 635.523 230.313 649.997 179.204 658.147 173.963"
            />
            <path
                strokeWidth="6"
                d="M -40.642 217.539 C -33.11 240.221 37.621 309.223 86.887 336.334 C 137.474 364.172 230.737 391.311 284.496 376.743"
            />
            <path
                strokeWidth="8"
                d="M 255.671 376.584 C 304.19 396.955 402.82 394.656 501.796 360.633 C 566.99 338.222 659.371 264.987 690.471 247.08"
            />
        </g>
    </svg>
);

const GrassPattern: React.FC<{ color: string }> = ({ color }) => (
    <svg
        className="card__bg"
        width="316px"
        height="316px"
        viewBox="0 0 316 316"
        style={{ color }}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="8"
            opacity="0.15"
        >
            <path d="M 38.058 7.993 C 28.089 11.316 0.838 21.446 -9.778 21.446" />
            <path d="M 54.502 25.931 C 36.784 32.374 9.564 33.659 -9.031 34.9" />
            <path d="M 40.3 44.617 C 32.596 47.185 20.108 49.102 12.645 49.102 C 11.724 49.102 -11.273 49.849 -11.273 49.849" />
            <path d="M 70.197 55.828 C 44.513 59.371 10.302 63.302 -15.01 63.302" />
            <path d="M 38.805 78.251 C 29.458 78.251 19.421 80.494 10.403 80.494 C 9.638 80.494 -11.273 81.241 -11.273 81.241" />
            <path d="M 146.436 76.009 C 98.755 87.302 33.852 89.444 -15.011 93.2" />
            <path d="M 92.62 96.191 C 64.188 99.928 19.045 106.654 -12.021 106.654" />
            <path d="M 127.002 110.623 C 86.185 118.524 29.402 125.223 -11.273 121.835" />
            <path d="M 123.265 126.33 C 81.9 132.793 33.25 138.54 -9.031 141.279" />
            <path d="M 129.245 137.299 C 105.14 140.135 80.943 144.406 56.743 146.268 C 35.936 147.869 15.883 150.753 -5.294 150.753" />
            <path d="M 144.193 148.51 C 104.716 148.51 68.301 160.469 28.341 160.469 C 18.874 160.469 8.423 162.712 -0.062 162.712 C -0.691 162.712 -9.031 162.712 -9.031 162.712" />
            <path d="M 138.214 168.691 C 86.225 174.993 43.197 175.802 -9.03 179.156" />
            <path d="M 138.961 185.135 C 108.316 187.377 77.638 189.2 47.027 191.862 C 27.053 193.599 12.579 197.094 -7.535 197.094" />
            <path d="M 192.029 200.083 C 138.506 205.436 85.211 206.11 31.331 206.81 C 14.889 207.024 5.881 207.212 -10.526 208.305" />
            <path d="M 148.678 215.032 C 110.861 217.395 72.943 217.687 35.068 218.769 C 17.607 219.268 6.926 222.506 -10.526 222.506" />
            <path d="M 187.545 234.465 C 164.527 234.465 142.438 237.455 120.275 237.455 C 75.157 237.455 32.388 235.96 -11.273 235.96" />
        </g>
    </svg>
);

const BackgroundPattern: React.FC<{ pattern: string; color: string }> = ({
    pattern,
    color,
}) => {
    switch (pattern) {
        case "curves":
            return <CurvesPattern color={color} />;
        case "circles":
            return <CirclesPattern color={color} />;
        case "grass":
            return <GrassPattern color={color} />;
        default:
            return <CurvesPattern color={color} />;
    }
};

const DataCard: React.FC<{
    title: string;
    value: string;
    subtitle?: string;
    description: string;
    color: string;
    backgroundPattern: string;
    icon: React.ReactNode;
    showOverlay?: boolean;
    overlayContent?: React.ReactNode;
}> = ({
    title,
    value,
    subtitle,
    description,
    color,
    backgroundPattern,
    icon,
    showOverlay,
    overlayContent,
}) => {
    return (
        <div
            className="relative w-full h-full rounded-xl overflow-hidden p-5 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: color }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <BackgroundPattern
                    pattern={backgroundPattern}
                    color="rgba(255,255,255,0.1)"
                />
            </div>

            <div className="relative z-10 flex justify-between items-start gap-3">
                <div className="text-sm font-medium uppercase tracking-wide text-white/90">
                    {title}
                </div>
                <div className="flex-shrink-0 opacity-80">{icon}</div>
            </div>

            <div className="relative z-10 text-white">
                <div className="text-4xl font-light leading-none mb-2 font-nunito">
                    {value}
                </div>

                {subtitle && (
                    <div className="text-sm font-normal mb-3 text-white/80">
                        {subtitle}
                    </div>
                )}

                <div className="text-xs leading-relaxed text-white/85">
                    {description}
                </div>
            </div>

            {showOverlay && overlayContent && (
                <div className="absolute top-12 left-5 right-5 bottom-5 z-20 text-white overflow-hidden">
                    {overlayContent}
                </div>
            )}
        </div>
    );
};

const DataBox: React.FC<{ activeTab: "ai" | "domains" | "activity" }> = ({
    activeTab,
}) => {
    const [showGrid, setShowGrid] = useState(true);

    const topDomains = [
        { domain: "github.com", time: 2400 },
        { domain: "youtube.com", time: 1800 },
        { domain: "stackoverflow.com", time: 1200 },
        { domain: "twitter.com", time: 700 },
        { domain: "linkedin.com", time: 500 },
        { domain: "reddit.com", time: 400 },
        { domain: "medium.com", time: 300 },
        { domain: "gmail.com", time: 200 },
        { domain: "discord.com", time: 150 },
        { domain: "notion.so", time: 100 },
    ];

    const formatTimeMilliseconds = (milliseconds: number): string => {
        const totalMinutes = Math.round(milliseconds / (1000 * 60));
        if (totalMinutes < 60) return `${totalMinutes}m`;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    };

    const cardColors = {
        ai: "hsl(32, 62%, 47%)",
        domains: "hsl(158, 43%, 33%)",
        activity: "hsl(262, 44%, 53%)",
    };

    const renderCard = () => {
        switch (activeTab) {
            case "ai":
                return (
                    <DataCard
                        title="AI Insights"
                        value="92%"
                        subtitle="productivity score"
                        description="Your browsing patterns show strong focus on development work with minimal distractions"
                        color={cardColors.ai}
                        backgroundPattern="curves"
                        icon={
                            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        }
                    />
                );

            case "domains":
                return (
                    <DataCard
                        title="Top Domains"
                        value={topDomains[0]?.domain.split(".")[0] || "github"}
                        subtitle={formatTimeMilliseconds(
                            topDomains[0]?.time || 2400,
                        )}
                        description={`Also: ${topDomains
                            .slice(1, 3)
                            .map((d) => d.domain.split(".")[0])
                            .join(", ")}`}
                        color={cardColors.domains}
                        backgroundPattern="circles"
                        icon={
                            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        }
                        showOverlay={showGrid}
                        overlayContent={
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gridTemplateRows: "auto auto",
                                    gap: "0.1rem",
                                    justifyItems: "center",
                                    alignItems: "start",
                                    height: "30%",
                                    marginTop: "10px",
                                }}
                            >
                                {topDomains.slice(0, 8).map((domain) => (
                                    <div
                                        key={domain.domain}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "0.2rem",
                                        }}
                                        title={`${
                                            domain.domain
                                        } - ${formatTimeMilliseconds(
                                            domain.time,
                                        )}`}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "28px",
                                                height: "28px",
                                            }}
                                        >
                                            <img
                                                src={`https://www.google.com/s2/favicons?domain=${domain.domain}&sz=24`}
                                                alt={domain.domain}
                                                style={{
                                                    width: "24px",
                                                    height: "24px",
                                                    borderRadius: "3px",
                                                }}
                                                onError={(e) => {
                                                    const target =
                                                        e.target as HTMLImageElement;
                                                    target.style.display =
                                                        "none";
                                                    const parent =
                                                        target.parentElement;
                                                    if (
                                                        parent &&
                                                        !parent.querySelector(
                                                            ".fallback-icon",
                                                        )
                                                    ) {
                                                        parent.innerHTML =
                                                            '<div class="fallback-icon" style="width: 24px; height: 24px; background-color: white; border-radius: 4px; opacity: 0.6;"></div>';
                                                    }
                                                }}
                                            />
                                        </div>
                                        <span
                                            style={{
                                                color: "white",
                                                fontSize: "0.6rem",
                                                fontWeight: "500",
                                                textAlign: "center",
                                                lineHeight: "1",
                                                opacity: 0.85,
                                            }}
                                        >
                                            {formatTimeMilliseconds(
                                                domain.time,
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        }
                    />
                );

            case "activity":
                return (
                    <DataCard
                        title="Browsing Activity"
                        value="23 tabs"
                        subtitle="147 pages visited"
                        description="Average 18m per tab • Today's session"
                        color={cardColors.activity}
                        backgroundPattern="grass"
                        icon={
                            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        }
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full">
            {renderCard()}
            <style>{`
                .card__bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
};

const TransitionText: React.FC<{
    transitionTextRef: React.RefObject<HTMLElement>;
}> = ({ transitionTextRef }) => {
    return (
        <section
            ref={transitionTextRef}
            className="py-12 flex items-center justify-center relative overflow-hidden"
        >
            <div className="w-full max-w-4xl mx-auto px-8 text-center">
                <p className="transition-text text-2xl md:text-3xl font-light leading-relaxed text-[var(--text)]">
                    When focus slips, LyncX{" "}
                    <span className="text-[var(--accent-color)] font-medium">
                        helps you see the patterns behind it
                    </span>
                </p>
            </div>
        </section>
    );
};

const AnimationSpace: React.FC<{
    dataCardRef: React.RefObject<HTMLDivElement>;
    lyncxCardRef: React.RefObject<HTMLDivElement>;
    viewCardRef: React.RefObject<HTMLDivElement>;
    animationSpaceRef: React.RefObject<HTMLElement>;
}> = ({ dataCardRef, lyncxCardRef, viewCardRef, animationSpaceRef }) => {
    const [activeTab, setActiveTab] = useState<"ai" | "domains" | "activity">(
        "ai",
    );

    return (
        <section
            ref={animationSpaceRef}
            className="w-full flex items-center justify-center relative bg-[var(--bg)] py-16"
        >
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 px-4">
                <div className="flex flex-col items-center text-center relative">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2">
                        /data
                    </h3>
                    <p className="text-[var(--muted-text)] text-sm mb-6 max-w-80">
                        See where you spend your time and learn more about your
                        browsing habits.
                    </p>

                    <div
                        ref={dataCardRef}
                        className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-[var(--border)] w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex flex-col relative"
                    >
                        <div className="absolute top-4 right-4 flex gap-2 z-20">
                            <button
                                onClick={() => setActiveTab("ai")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                    activeTab === "ai"
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "bg-white/20 text-[var(--muted-text)] hover:bg-white/30"
                                }`}
                            >
                                AI
                            </button>
                            <button
                                onClick={() => setActiveTab("domains")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                    activeTab === "domains"
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "bg-white/20 text-[var(--muted-text)] hover:bg-white/30"
                                }`}
                            >
                                domains
                            </button>
                            <button
                                onClick={() => setActiveTab("activity")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                    activeTab === "activity"
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "bg-white/20 text-[var(--muted-text)] hover:bg-white/30"
                                }`}
                            >
                                activity
                            </button>
                        </div>
                        <DataBox activeTab={activeTab} />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2">
                        /visualize
                    </h3>
                    <p className="text-[var(--muted-text)] text-sm mb-6">
                        Visualize all your links.
                        <br />
                        Click on any node and see how you ended up there.
                    </p>

                    <div
                        ref={lyncxCardRef}
                        className="backdrop-blur-sm rounded-xl border-2 w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative overflow-hidden"
                        style={{
                            backgroundColor: "#16162a",
                            borderColor: "#16162a",
                        }}
                    >
                        <div
                            className="absolute inset-0 z-0 rounded-xl"
                            style={{
                                backgroundImage: `url(${visualizationImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2">
                        /download
                    </h3>
                    <p className="text-[var(--muted-text)] text-sm mb-6 max-w-80">
                        You can download your data, already standardized for R
                        or Python.
                    </p>

                    <div
                        ref={viewCardRef}
                        className="backdrop-blur-sm rounded-xl border-2 w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex flex-col items-center justify-center gap-6"
                        style={{
                            backgroundColor: "#1e3a8a",
                            borderColor: "#1e3a8a",
                        }}
                    >
                        {/* Big Bold Downward Arrow */}
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-300"
                        >
                            <path d="M12 5v14" />
                            <path d="M19 12l-7 7-7-7" />
                        </svg>

                        {/* CSV Text */}
                        <div className="text-2xl font-bold text-white">
                            .CSV
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CommandDemo: React.FC = () => {
    // Refs
    const commandBarRef = useRef<HTMLDivElement>(null);
    const browserRef = useRef<HTMLDivElement>(null);
    const lyncxRef = useRef<HTMLDivElement>(null);
    const helpSectionRef = useRef<HTMLElement>(null);
    const transitionTextRef = useRef<HTMLElement>(null);
    const dataCardRef = useRef<HTMLDivElement>(null);
    const lyncxCardRef = useRef<HTMLDivElement>(null);
    const viewCardRef = useRef<HTMLDivElement>(null);
    const animationSpaceRef = useRef<HTMLElement>(null);

    // State
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Scroll animation effect
    useEffect(() => {
        let animationEnd = 0;

        const calculateAnimationEnd = () => {
            if (!commandBarRef.current || !browserRef.current) return 0;

            // Reset scroll to get initial positions
            const currentScroll = window.scrollY;
            window.scrollTo(0, 0);

            const commandBarRect =
                commandBarRef.current.getBoundingClientRect();
            const browserRect = browserRef.current.getBoundingClientRect();

            // Calculate distance needed
            const distance = browserRect.bottom - commandBarRect.top;

            // Restore scroll
            window.scrollTo(0, currentScroll);

            return distance;
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Calculate animation end point once
            if (animationEnd === 0) {
                animationEnd = calculateAnimationEnd();
                console.log("Animation end calculated:", animationEnd);
            }

            // Animation starts immediately when scroll is detected
            // Make animation complete faster by reducing the distance needed
            const adjustedAnimationEnd = animationEnd * 0.6; // Complete movement at 80%, allow extra scroll for scaling

            if (scrollY <= 0) {
                setScrollProgress(0);
            } else if (scrollY >= adjustedAnimationEnd) {
                setScrollProgress(1);
            } else {
                const progress = scrollY / adjustedAnimationEnd;
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            }
        };

        // Delay initial calculation to ensure layout is complete
        setTimeout(() => {
            animationEnd = calculateAnimationEnd();
            handleScroll();
        }, 100);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Add glow animation styles
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            @keyframes glow {
                from {
                    box-shadow: 0 0 20px rgba(22, 22, 42, 0.5), 0 0 40px rgba(22, 22, 42, 0.3), 0 0 60px rgba(22, 22, 42, 0.2);
                }
                to {
                    box-shadow: 0 0 40px rgba(22, 22, 42, 0.6), 0 0 80px rgba(22, 22, 42, 0.4), 0 0 120px rgba(22, 22, 42, 0.3);
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                fontFamily: '"Nunito", sans-serif',
                overflowX: "hidden",
            }}
        >
            {/* Page Content */}
            <DemoHeader />
            <DemoHero
                commandBarRef={commandBarRef}
                onCommandChange={setCurrentCommandIndex}
                scrollProgress={scrollProgress}
                browserRef={browserRef}
            />
            <DemoDescription />
            <BrowserFrame
                browserRef={browserRef}
                commandBarRef={commandBarRef}
                isCommandBarFixed={false}
                scrollProgress={scrollProgress}
            />
            <HelpSection lyncxRef={lyncxRef} helpSectionRef={helpSectionRef} />
            <TransitionText transitionTextRef={transitionTextRef} />
            <AnimationSpace
                dataCardRef={dataCardRef}
                lyncxCardRef={lyncxCardRef}
                viewCardRef={viewCardRef}
                animationSpaceRef={animationSpaceRef}
            />
            <ModularSection />
            <FAQDemo />
            <FooterDemo />
        </div>
    );
};
