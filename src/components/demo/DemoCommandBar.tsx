import React, { useEffect, useState } from "react";

interface DemoCommandBarProps {
    commandBarRef: React.RefObject<HTMLDivElement>;
    className?: string;
    style?: React.CSSProperties;
    onCommandChange?: (commandIndex: number) => void;
    scrollProgress?: number;
    browserRef?: React.RefObject<HTMLDivElement>;
}

const commands = [
    "todo call Ciro @3pm",
    "slack #front-end check out this implementation!",
    "spotify play Dakiti",
    "gmail sara@gmail.com quick coffee tomorrow?",
    "chat is this relevant to the new feature?",
    "remember quarterly metrics data for meeting",
    "translate can we check in at 11am? to spanish",
];

// Brand colors for each command
export const commandBrandColors = [
    "rgba(255, 165, 0, 0.5)", // Todo Orange
    "rgba(112, 66, 192, 0.7)", // Slack Purple
    "rgba(30, 215, 96, 0.6)", // Spotify Green
    "rgba(66, 133, 244, 0.5)", // Gmail Blue
    "rgba(0, 172, 193,0.6)", // Chat Teal
    "rgba(255, 193, 7, 0.6)", // Remember Yellow
    "rgba(66, 165, 245, 0.8)", // Translate Blue
];

export const DemoCommandBar: React.FC<DemoCommandBarProps> = ({
    commandBarRef,
    className = "",
    style = {},
    onCommandChange,
    scrollProgress = 0,
    browserRef,
}) => {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
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

    useEffect(() => {
        const mainInterval = setInterval(() => {
            setIsTyping(true);

            setTimeout(() => {
                const newIndex = (currentCommandIndex + 1) % commands.length;
                setCurrentCommandIndex(newIndex);
                setIsTyping(false);
                onCommandChange?.(newIndex);
            }, 100); // 0.3 second typing animation
        }, 1400); // Change command every 1.8 seconds

        return () => clearInterval(mainInterval);
    }, [currentCommandIndex, onCommandChange]);

    // Call onCommandChange initially
    useEffect(() => {
        onCommandChange?.(currentCommandIndex);
    }, []);

    // No longer need forced layout calculation with simplified animation

    // Calculate transform using scroll progress
    const [maxDistanceY, setMaxDistanceY] = useState(0);
    const [maxDistanceX, setMaxDistanceX] = useState(0);

    useEffect(() => {
        if (!commandBarRef.current || !browserRef?.current) return;

        // Calculate once on mount
        const calculateDistances = () => {
            // For mobile, use simplified calculations
            if (isMobile) {
                setMaxDistanceY(200); // Simple fixed distance for mobile
                setMaxDistanceX(0); // No horizontal movement on mobile
                return;
            }

            const currentScroll = window.scrollY;
            window.scrollTo(0, 0);

            const commandBarRect =
                commandBarRef.current!.getBoundingClientRect();
            const browserRect = browserRef.current!.getBoundingClientRect();

            // Calculate Y distance (vertical movement to browser bottom - offset)
            const browserBottom = browserRect.bottom - 130; // 40px higher than bottom
            const commandBarTop = commandBarRect.top;
            const distanceY = browserBottom - commandBarTop;

            // Calculate X distance (horizontal movement to center)
            const browserCenterX = browserRect.left + browserRect.width / 2;
            const commandBarCenterX =
                commandBarRect.left + commandBarRect.width / 2;
            const distanceX = browserCenterX - commandBarCenterX;

            // Ensure the command bar doesn't move outside viewport bounds
            const maxAllowableX = window.innerWidth - commandBarRect.width - 50; // 50px margin
            const constrainedDistanceX = Math.max(
                -commandBarRect.left + 50,
                Math.min(distanceX, maxAllowableX - commandBarRect.left),
            );

            window.scrollTo(0, currentScroll);
            setMaxDistanceY(distanceY);
            setMaxDistanceX(constrainedDistanceX);
        };

        setTimeout(calculateDistances, 100);
    }, [isMobile]);

    // Cap movement at 100% but allow scale to continue beyond
    const moveProgress = Math.min(scrollProgress, 1);
    const animationTransform = `translate(${moveProgress * maxDistanceX}px, ${
        moveProgress * maxDistanceY
    }px)`;

    // Calculate opacity for glass background (fade out as animation progresses)
    const glassOpacity = Math.max(0, 1 - scrollProgress * 1.5); // Starts fading at 67% progress

    // Calculate border radius that increases with scroll progress
    const innerBorderRadius = 12 + scrollProgress * 24; // From 12px (rounded-xl) to 36px

    // Calculate background color transition to white
    const backgroundOpacity = scrollProgress; // 0 to 1

    // Trigger scaling animation when reaching final position
    const [shouldSink, setShouldSink] = useState(false);

    useEffect(() => {
        if (scrollProgress >= 1 && !shouldSink) {
            // Delay the sinking animation slightly for better effect
            setTimeout(() => setShouldSink(true), 200);
        } else if (scrollProgress < 1 && shouldSink) {
            setShouldSink(false);
        }
    }, [scrollProgress, shouldSink]);

    return (
        <div
            ref={commandBarRef}
            className={`rounded-2xl p-4 sm:p-6 mt-12 sm:mt-20 w-[95vw] max-w-[400px] sm:max-w-[500px] lg:max-w-[30vw] relative z-50 ${className}`}
            style={{
                transform: animationTransform,
                transition:
                    scrollProgress === 0 ? "transform 0.1s ease-out" : "none",
                backgroundColor: `rgba(255, 255, 255, ${0.8 * glassOpacity})`,
                backdropFilter: glassOpacity > 0 ? "blur(8px)" : "none",
                border: glassOpacity > 0 ? "1px solid var(--border)" : "none",
                boxShadow:
                    glassOpacity > 0
                        ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                        : "none",
                ...style,
            }}
        >
            <div
                className="flex items-center gap-0 px-3 sm:px-4 py-3 sm:py-4 border border-[var(--border)]"
                style={{
                    borderRadius: `${innerBorderRadius}px`,
                    transform: shouldSink ? "scale(0)" : "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                    background:
                        scrollProgress === 0
                            ? "var(--bg)"
                            : `linear-gradient(rgba(255, 255, 255, ${backgroundOpacity}), rgba(255, 255, 255, ${backgroundOpacity})), var(--bg)`,
                }}
            >
                <span className="text-[var(--muted-text)] text-base sm:text-lg font-bold">
                    /
                </span>
                <span
                    className={`text-[var(--muted-text)] font-mono text-sm sm:text-lg transition-opacity duration-300 flex-1 overflow-hidden whitespace-nowrap ${
                        isTyping ? "opacity-50" : "opacity-100"
                    }`}
                    style={{
                        textOverflow: "ellipsis",
                    }}
                >
                    {commands[currentCommandIndex]}
                </span>
                <div className="ml-auto w-2 h-4 bg-[var(--accent-color)] rounded-sm animate-pulse flex-shrink-0"></div>
            </div>
        </div>
    );
};
