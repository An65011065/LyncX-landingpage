import React, { useEffect, useState, useRef, useCallback } from "react";

// TypeScript declarations for particles.js
declare global {
    interface Window {
        particlesJS: (id: string, config: any) => void;
        pJSDom: any[];
    }
}

const DemoHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
                <div className="text-2xl font-bold tracking-tight text-[var(--text)]">
                    LyncX
                </div>
                <div className="flex gap-10 items-center">
                    <a
                        href="#features"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Features
                    </a>
                    <a
                        href="#privacy"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Privacy
                    </a>
                    <a
                        href="#pricing"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Pricing
                    </a>
                    <button className="text-sm font-semibold bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-md">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>
    );
};

const DemoHero: React.FC<{
    commandBarRef: React.RefObject<HTMLDivElement>;
    isCommandBarFixed: boolean;
}> = ({ commandBarRef, isCommandBarFixed }) => {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="w-full max-w-6xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight text-[var(--text)] tracking-tight">
                            A command bar for{" "}
                            <span className="font-semibold text-[var(--accent-color)]">
                                everything
                            </span>
                        </h1>

                        <p className="text-xl mb-12 leading-relaxed text-[var(--muted-text)] font-medium">
                            LyncX lets you type what you want to do, without
                            having to open another tab
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-[var(--accent-color)] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-95">
                                Install Free
                            </button>
                            <button className="px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white">
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[var(--border)]">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-[var(--muted-text)] font-medium">
                                    Used by 10,000+ professionals
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-28 flex justify-end items-start self-start">
                        {/* Placeholder when command bar is fixed */}
                        {/* {isCommandBarFixed && (
                            <div
                                className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[var(--border)] shadow-lg p-6"
                                style={{
                                    height: "120px",
                                    maxWidth: "500px",
                                    width: "100%",
                                }}
                            />
                        )} */}

                        {/* The actual command bar that will move */}
                        <div
                            ref={commandBarRef}
                            className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] shadow-lg p-6 -mt-4`}
                            style={{
                                maxWidth: isCommandBarFixed ? "500px" : "500px",
                                width: "100%",
                            }}
                        >
                            <div className="flex items-center gap-4 bg-[var(--bg)] rounded-xl px-4 py-4 border border-[var(--border)]">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent-color)] flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                        ⌘
                                    </span>
                                </div>
                                <span className="text-[var(--muted-text)] font-mono text-lg">
                                    spotify play chill music
                                </span>
                                <div className="ml-auto w-2 h-4 bg-[var(--accent-color)] rounded-sm animate-pulse"></div>
                            </div>
                        </div>
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
    const commands = [
        "/spotify play [song]",
        "/reopen tabs",
        "/search [query]",
        "/translate [text]",
        "/weather [city]",
        "/calculator [expression]",
        "/timer [duration]",
        "/notes add [text]",
        "/history",
        "/bookmarks",
        "/screenshot",
        "/data",
        "/lyncx",
        "/view",
        "/zoom out",
        "/clear cache",
        "/new tab",
        "/close tab",
        "/refresh",
        "/back",
        "/forward",
        "/downloads",
        "/settings",
        "/help",
        "/quit",
    ];

    return (
        <section
            ref={helpSectionRef}
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="w-full max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    {commands.map((command, index) => (
                        <div
                            key={index}
                            ref={index === 12 ? lyncxRef : undefined}
                            className={`${
                                index === 12
                                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-300 z-10 p-5"
                                    : "bg-white/80 shadow-sm hover:shadow-md border-[var(--border)] p-4"
                            } backdrop-blur-sm border rounded-xl text-center transition-all duration-200`}
                            style={
                                index === 12
                                    ? {
                                          boxShadow:
                                              "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(34, 211, 238, 0.4)",
                                          animation:
                                              "glow 2s ease-in-out infinite alternate",
                                          transformOrigin: "center center",
                                          willChange: "box-shadow",
                                      }
                                    : {}
                            }
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
                    ))}
                </div>
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
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-8">
                <div
                    ref={browserRef}
                    className="relative bg-white/40 backdrop-blur-sm rounded-3xl border-2 border-[var(--border)] shadow-xl"
                    style={{ height: "600px", width: "100%" }}
                >
                    {/* Empty - the command bar will be positioned here via fixed positioning */}
                </div>
            </div>
        </section>
    );
};

// Background Pattern Components - Copied from MetricsCard.tsx
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
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <BackgroundPattern
                    pattern={backgroundPattern}
                    color="rgba(255,255,255,0.1)"
                />
            </div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start gap-3">
                <div className="text-sm font-medium uppercase tracking-wide text-white/90">
                    {title}
                </div>
                <div className="flex-shrink-0 opacity-80">{icon}</div>
            </div>

            {/* Content */}
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

            {/* Overlay Content */}
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

    // Mock data
    const topDomains = [
        { domain: "github.com", time: 2400 }, // 2400ms = 2.4h
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
        ai: "hsl(32, 62%, 47%)", // Warm amber
        domains: "hsl(158, 43%, 33%)", // Cool teal
        activity: "hsl(262, 44%, 53%)", // Purple
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
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    backgroundColor: "white",
                                    opacity: 0.8,
                                }}
                            />
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
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "4px",
                                    backgroundColor: "white",
                                    opacity: 0.8,
                                }}
                            />
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
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "2px",
                                    backgroundColor: "white",
                                    opacity: 0.8,
                                }}
                            />
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

const AnimationSpace: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"ai" | "domains" | "activity">(
        "ai",
    );
    const particlesRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);
    const lastClickTimeRef = useRef(0);

    // Find closest particle to click coordinates
    const findClosestParticle = useCallback(
        (clickX: number, clickY: number) => {
            if (!window.pJSDom || !window.pJSDom[0]) return null;

            const particles = window.pJSDom[0].pJS.particles.array;
            let closestIndex = -1;
            let closestDistance = Infinity;
            const maxClickDistance = 50; // Increased click radius

            console.log("Searching for particle near", clickX, clickY);
            console.log("Total particles:", particles.length);

            particles.forEach((particle: any, index: number) => {
                const dx = particle.x - clickX;
                const dy = particle.y - clickY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Log first few particles for debugging
                if (index < 5) {
                    console.log(
                        `Particle ${index} at (${particle.x}, ${particle.y}), distance: ${distance}`,
                    );
                }

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            console.log(
                `Closest particle: ${closestIndex} at distance ${closestDistance}`,
            );
            console.log(`Max allowed distance: ${maxClickDistance}`);

            return closestDistance <= maxClickDistance ? closestIndex : null;
        },
        [],
    );

    // Build connection map to understand particle relationships
    const buildConnectionMap = useCallback(() => {
        if (!window.pJSDom || !window.pJSDom[0]) return new Map();

        const pJS = window.pJSDom[0].pJS;
        const particles = pJS.particles.array;
        const linkDistance = pJS.particles.line_linked.distance;
        const connectionMap = new Map<number, number[]>();

        // Build adjacency list
        particles.forEach((particle: any, index: number) => {
            const connections: number[] = [];

            particles.forEach((otherParticle: any, otherIndex: number) => {
                if (index === otherIndex) return;

                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= linkDistance) {
                    connections.push(otherIndex);
                }
            });

            connectionMap.set(index, connections);
        });

        return connectionMap;
    }, []);

    // Trace path to target node (similar to usePathTracing logic)
    const tracePathToNode = useCallback(
        (targetIndex: number) => {
            const connectionMap = buildConnectionMap();
            const path: number[] = [];
            const visited = new Set<number>();

            // Simple path tracing - find a path by traversing connections
            // Starting from nodes with fewer connections (likely earlier in chain)
            const findPath = (
                currentIndex: number,
                targetIndex: number,
                currentPath: number[],
            ): boolean => {
                if (currentIndex === targetIndex) {
                    path.push(...currentPath, targetIndex);
                    return true;
                }

                if (visited.has(currentIndex) || currentPath.length > 10) {
                    // Prevent infinite loops
                    return false;
                }

                visited.add(currentIndex);
                const connections = connectionMap.get(currentIndex) || [];

                // Try each connection
                for (const nextIndex of connections) {
                    if (!visited.has(nextIndex)) {
                        if (
                            findPath(nextIndex, targetIndex, [
                                ...currentPath,
                                currentIndex,
                            ])
                        ) {
                            return true;
                        }
                    }
                }

                visited.delete(currentIndex);
                return false;
            };

            // Try to find path starting from nodes with fewer connections
            const allNodes = Array.from(connectionMap.keys());
            const sortedNodes = allNodes.sort((a, b) => {
                const aConnections = connectionMap.get(a)?.length || 0;
                const bConnections = connectionMap.get(b)?.length || 0;
                return aConnections - bConnections;
            });

            // Try starting from different nodes to find a good path
            for (const startNode of sortedNodes) {
                visited.clear();
                const tempPath: number[] = [];
                if (findPath(startNode, targetIndex, [])) {
                    break;
                }
            }

            // If no complex path found, just return connected nodes as simple path
            if (path.length === 0) {
                const directConnections = connectionMap.get(targetIndex) || [];
                return [targetIndex, ...directConnections];
            }

            return path;
        },
        [buildConnectionMap],
    );

    // Simply draw numbers without changing particles
    const drawPathNumbers = useCallback((pathIndices: number[]) => {
        if (!window.pJSDom || !window.pJSDom[0]) return;

        const particles = window.pJSDom[0].pJS.particles.array;
        const canvas = window.pJSDom[0].pJS.canvas.el;
        const ctx = canvas.getContext("2d");

        // Just draw numbers on top of particles - don't change particles at all
        setTimeout(() => {
            if (ctx) {
                ctx.font = 'bold 24px "Nunito", sans-serif';
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#E01E5B";

                // Number particles in path order (1, 2, 3, ..., N)
                pathIndices.forEach((particleIndex, order) => {
                    const particle = particles[particleIndex];
                    if (particle) {
                        const number = (order + 1).toString();
                        const offsetX = particle.x + particle.radius + 8;
                        const offsetY = particle.y;

                        ctx.fillText(number, offsetX, offsetY);
                    }
                });
            }
        }, 50);
    }, []);

    // Particle configuration
    const getParticleConfig = () => ({
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
            },
            shape: {
                type: ["circle"],
                stroke: {
                    width: 0,
                    color: "#fff",
                },
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 8,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 10,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble",
                },
                onclick: {
                    enable: false,
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 40,
                    size: 16,
                    duration: 0.3,
                    opacity: 1,
                },
            },
        },
        retina_detect: true,
    });

    // Keep ref in sync with state
    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    // Initialize particles.js
    useEffect(() => {
        let clickHandler: ((event: MouseEvent) => void) | null = null;

        const handleCanvasClick = (event: MouseEvent) => {
            const now = Date.now();

            // Debounce clicks within 300ms to prevent double-firing
            if (now - lastClickTimeRef.current < 300) {
                console.log("Click debounced, ignoring duplicate");
                return;
            }
            lastClickTimeRef.current = now;

            const canvas = event.target as HTMLCanvasElement;
            const rect = canvas.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;

            console.log(
                "Canvas click detected, isPaused:",
                isPausedRef.current,
            );

            if (isPausedRef.current) {
                // Second click - clear path trace and resume movement
                console.log("Clearing path trace and resuming movement");
                if (window.pJSDom && window.pJSDom[0]) {
                    // Re-enable particle movement - this will trigger a redraw and clear the numbers
                    window.pJSDom[0].pJS.particles.move.enable = true;

                    // Restore all particles to full opacity
                    const particles = window.pJSDom[0].pJS.particles.array;
                    particles.forEach((particle: any) => {
                        particle.opacity = 1;
                    });

                    // Force a refresh of the particle system to clear overlay numbers
                    window.pJSDom[0].pJS.fn.particlesRefresh();
                }
                setIsPaused(false);
            } else {
                // First click - find particle and show path
                const scaleX = canvas.width / rect.width;
                const scaleY = canvas.height / rect.height;
                const scaledClickX = clickX * scaleX;
                const scaledClickY = clickY * scaleY;

                const particleIndex = findClosestParticle(
                    scaledClickX,
                    scaledClickY,
                );

                if (particleIndex !== null) {
                    const pathIndices = tracePathToNode(particleIndex);

                    if (window.pJSDom && window.pJSDom[0]) {
                        window.pJSDom[0].pJS.particles.move.enable = false;

                        // Dim all particles not in the path
                        const particles = window.pJSDom[0].pJS.particles.array;
                        const pathSet = new Set(pathIndices);

                        particles.forEach((particle: any, index: number) => {
                            if (pathSet.has(index)) {
                                // Keep path particles at full opacity
                                particle.opacity = 1;
                            } else {
                                // Dim non-path particles
                                particle.opacity = 0.2;
                            }
                        });
                    }
                    setIsPaused(true);

                    drawPathNumbers(pathIndices);
                    console.log("Drew path numbers and paused");
                }
            }
        };

        function initializeParticles() {
            if (window.particlesJS && particlesRef.current) {
                window.particlesJS("particles-js", getParticleConfig());

                // Add single click handler
                setTimeout(() => {
                    if (window.pJSDom && window.pJSDom[0]) {
                        const canvas = window.pJSDom[0].pJS.canvas.el;
                        clickHandler = handleCanvasClick;
                        canvas.addEventListener("click", clickHandler);
                    }
                }, 100);
            }
        }

        // Load particles.js script if not already loaded
        if (typeof window !== "undefined" && !window.particlesJS) {
            const script = document.createElement("script");
            script.src =
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
            script.async = true;
            script.onload = () => initializeParticles();
            document.head.appendChild(script);
        } else if (typeof window.particlesJS === "function") {
            initializeParticles();
        }

        return () => {
            if (clickHandler && window.pJSDom && window.pJSDom[0]) {
                const canvas = window.pJSDom[0].pJS.canvas.el;
                canvas.removeEventListener("click", clickHandler);
            }
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, []);

    return (
        <section className="h-screen w-full flex items-center justify-center relative bg-[var(--bg)]">
            {/* Three feature sections */}
            <div className="relative z-10 w-full h-full flex items-center justify-center gap-12">
                {/* Left: /data */}
                <div className="flex flex-col items-center text-center relative">
                    {/* Tab Buttons positioned over data card */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
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

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-[var(--border)] w-96 h-96 flex flex-col">
                        <DataBox activeTab={activeTab} />
                    </div>
                </div>

                {/* Center: /lyncx with particles */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[var(--accent-color)]/20 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--accent-color)]/50 w-96 h-96 relative overflow-hidden flex flex-col">
                        {/* Header inside the container */}
                        <div className="relative z-10 mb-4">
                            <h3 className="text-3xl font-bold text-[var(--text)] mb-4">
                                /lyncx
                            </h3>
                            <p className="text-[var(--muted-text)] text-sm">
                                Visualize all your links.
                                <br />
                                Click on any node and see how you ended up
                                there.
                            </p>
                        </div>

                        {/* Particles container inside lyncx box */}
                        <div
                            id="particles-js"
                            ref={particlesRef}
                            className="absolute inset-0 z-0 rounded-xl"
                        />
                    </div>
                </div>

                {/* Right: /view */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--border)] w-96 h-96 flex flex-col">
                        <h3 className="text-3xl font-bold text-[var(--text)] mb-4">
                            /view
                        </h3>
                        <p className="text-[var(--muted-text)] mb-6">
                            LyncX is a command line tool but it supports a
                            companion UI for users who want to visualize their
                            commands
                        </p>
                        <div className="space-y-2">
                            <div className="text-sm text-[var(--muted-text)]">
                                • Visual command interface
                            </div>
                            <div className="text-sm text-[var(--muted-text)]">
                                • Interactive dashboards
                            </div>
                            <div className="text-sm text-[var(--muted-text)]">
                                • Command visualization
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CommandDemo: React.FC = () => {
    // Add custom CSS animation for the illumination effect
    React.useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            @keyframes glow {
                from {
                    box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(34, 211, 238, 0.4);
                }
                to {
                    box-shadow: 0 0 40px rgba(34, 211, 238, 1), 0 0 80px rgba(59, 130, 246, 0.8), 0 0 120px rgba(34, 211, 238, 0.6);
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
    const commandBarRef = useRef<HTMLDivElement>(null);
    const browserRef = useRef<HTMLDivElement>(null);
    const lyncxRef = useRef<HTMLDivElement>(null);
    const helpSectionRef = useRef<HTMLElement>(null);
    const originalPosition = useRef<{ top: number; left: number } | null>(null);
    const lyncxOriginalPosition = useRef<{
        top: number;
        left: number;
        width: number;
        height: number;
    } | null>(null);
    const helpSectionBounds = useRef<{ top: number; bottom: number } | null>(
        null,
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLyncxAnimating, setIsLyncxAnimating] = useState(false);

    useEffect(() => {
        // Store original positions on mount
        if (commandBarRef.current && !originalPosition.current) {
            const rect = commandBarRef.current.getBoundingClientRect();
            originalPosition.current = {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
            };
        }

        if (lyncxRef.current && !lyncxOriginalPosition.current) {
            const rect = lyncxRef.current.getBoundingClientRect();
            lyncxOriginalPosition.current = {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
            };
        }

        if (helpSectionRef.current && !helpSectionBounds.current) {
            const rect = helpSectionRef.current.getBoundingClientRect();
            helpSectionBounds.current = {
                top: rect.top + window.scrollY,
                bottom: rect.bottom + window.scrollY,
            };
        }

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (
                        !commandBarRef.current ||
                        !browserRef.current ||
                        !originalPosition.current
                    ) {
                        ticking = false;
                        return;
                    }

                    const scrollY = window.scrollY;
                    const windowHeight = window.innerHeight;
                    const browserRect =
                        browserRef.current.getBoundingClientRect();

                    // Start animation when original position would reach middle of screen
                    const startThreshold =
                        originalPosition.current.top - windowHeight * 0.5;

                    if (scrollY >= startThreshold) {
                        // Animation phase
                        if (!isAnimating) setIsAnimating(true);

                        // Calculate target position
                        const viewportHeight = window.innerHeight;
                        const targetY = scrollY + viewportHeight + 600; // 100px from bottom of viewport

                        // Calculate proper center position accounting for command bar width
                        const commandBarWidth =
                            commandBarRef.current.offsetWidth;
                        const targetX = window.innerWidth / 2 - commandBarWidth;

                        // Calculate progress (0 = start position, 1 = end position)
                        const totalScrollDistance =
                            browserRect.bottom + scrollY - startThreshold;
                        const currentScrollDistance = scrollY - startThreshold;
                        let progress = Math.max(
                            0,
                            Math.min(
                                1,
                                currentScrollDistance / totalScrollDistance,
                            ),
                        );

                        // Interpolate position
                        const currentY =
                            originalPosition.current.top +
                            (targetY - originalPosition.current.top) * progress;
                        const currentX =
                            originalPosition.current.left +
                            (targetX - originalPosition.current.left) *
                                progress;

                        // Apply fixed positioning
                        commandBarRef.current.style.position = "fixed";
                        const viewportY = currentY - scrollY;
                        commandBarRef.current.style.top = `${viewportY}px`;
                        commandBarRef.current.style.left = `${currentX}px`;
                        commandBarRef.current.style.transform = "";
                        commandBarRef.current.style.zIndex = "50";
                    } else {
                        // Back to original position
                        if (isAnimating) setIsAnimating(false);

                        // Reset to natural positioning
                        commandBarRef.current.style.position = "";
                        commandBarRef.current.style.top = "";
                        commandBarRef.current.style.left = "";
                        commandBarRef.current.style.transform = "";
                        commandBarRef.current.style.zIndex = "";
                    }

                    // Handle lyncx element animation
                    if (
                        lyncxRef.current &&
                        lyncxOriginalPosition.current &&
                        helpSectionBounds.current
                    ) {
                        // Start animation when we begin scrolling past the HelpSection
                        // Animation starts when the bottom of HelpSection reaches the middle of viewport
                        const helpSectionStart =
                            helpSectionBounds.current.bottom -
                            windowHeight * 0.7;

                        // Calculate the end of the document
                        const documentHeight =
                            document.documentElement.scrollHeight;
                        const helpSectionEnd = documentHeight - windowHeight;

                        if (scrollY >= helpSectionStart) {
                            // Animation phase
                            if (!isLyncxAnimating) setIsLyncxAnimating(true);

                            // Calculate progress through the HelpSection area
                            const totalScrollDistance =
                                helpSectionEnd - helpSectionStart;
                            const currentScrollDistance =
                                scrollY - helpSectionStart;
                            const progress = Math.max(
                                0,
                                Math.min(
                                    1,
                                    currentScrollDistance / totalScrollDistance,
                                ),
                            );

                            // Calculate target position (bottom center of viewport)
                            const targetY = scrollY + windowHeight - 100; // 100px from bottom
                            const targetWidth = window.innerWidth * 0.2; // 35% of viewport width
                            const targetX =
                                (window.innerWidth - targetWidth) / 2; // Center the element

                            // Calculate current size - expand to 35vw gradually
                            const currentWidth =
                                lyncxOriginalPosition.current.width +
                                (targetWidth -
                                    lyncxOriginalPosition.current.width) *
                                    progress;
                            const currentHeight =
                                lyncxOriginalPosition.current.height -
                                lyncxOriginalPosition.current.height *
                                    0.2 *
                                    progress; // 20% height increase

                            // Interpolate position
                            const currentY =
                                lyncxOriginalPosition.current.top +
                                (targetY - lyncxOriginalPosition.current.top) *
                                    progress;
                            const currentX =
                                lyncxOriginalPosition.current.left +
                                (targetX - lyncxOriginalPosition.current.left) *
                                    progress;

                            // Apply fixed positioning and sizing
                            lyncxRef.current.style.position = "fixed";
                            lyncxRef.current.style.top = `${
                                currentY - scrollY
                            }px`;
                            lyncxRef.current.style.left = `${currentX}px`;
                            lyncxRef.current.style.width = `${currentWidth}px`;
                            lyncxRef.current.style.height = `${currentHeight}px`;
                            lyncxRef.current.style.borderRadius = `${
                                16 + progress * 18
                            }px`; // Increase roundness from 16px to 40px
                            lyncxRef.current.style.display = "flex";
                            lyncxRef.current.style.alignItems = "center";
                            lyncxRef.current.style.justifyContent = "center";
                            lyncxRef.current.style.zIndex = "60";
                            lyncxRef.current.style.transition = "none"; // Disable CSS transitions during scroll animation
                        } else {
                            // Back to original position
                            if (isLyncxAnimating) setIsLyncxAnimating(false);

                            // Reset to natural positioning
                            lyncxRef.current.style.position = "";
                            lyncxRef.current.style.top = "";
                            lyncxRef.current.style.left = "";
                            lyncxRef.current.style.width = "";
                            lyncxRef.current.style.height = "";
                            lyncxRef.current.style.borderRadius = "";
                            lyncxRef.current.style.display = "";
                            lyncxRef.current.style.alignItems = "";
                            lyncxRef.current.style.justifyContent = "";
                            lyncxRef.current.style.zIndex = "";
                            lyncxRef.current.style.transition = "";
                        }
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isAnimating, isLyncxAnimating]);

    return (
        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                fontFamily: '"Nunito", sans-serif',
            }}
        >
            <DemoHeader />
            <DemoHero
                commandBarRef={commandBarRef}
                isCommandBarFixed={isAnimating}
            />
            <BrowserFrame
                browserRef={browserRef}
                commandBarRef={commandBarRef}
                isCommandBarFixed={isAnimating}
                scrollProgress={0}
            />
            <HelpSection lyncxRef={lyncxRef} helpSectionRef={helpSectionRef} />
            <AnimationSpace />
        </div>
    );
};
