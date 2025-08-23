import React, { useEffect, useState } from "react";

interface DemoCommandBarProps {
    commandBarRef: React.RefObject<HTMLDivElement>;
    isCommandBarFixed?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onCommandChange?: (commandIndex: number) => void;
}

const commands = [
    "todo call Ciro @3pm",
    "slack #front-end check out this implementation!",
    "spotify play Dakiti",
    "gmail sara@gmail.com quick coffee tomorrow?",
    "chat is this relevant to the new feature?",
    "remember quarterly metrics data for meeting",
    "translate can we check in at 11am?",
];

// Brand colors for each command
export const commandBrandColors = [
    "rgba(255, 165, 0, 1)", // Todo Orange
    "rgba(112, 66, 192, 1)", // Slack Purple
    "rgba(30, 215, 96, 1)", // Spotify Green
    "rgba(66, 133, 244, 1)", // Gmail Blue
    "rgba(0, 172, 193, 1)", // Chat Teal
    "rgba(255, 193, 7, 1)", // Remember Yellow
    "rgba(66, 165, 245, 1)", // Translate Blue
];

export const DemoCommandBar: React.FC<DemoCommandBarProps> = ({
    commandBarRef,
    isCommandBarFixed = false,
    className = "",
    style = {},
    onCommandChange,
}) => {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const mainInterval = setInterval(() => {
            setIsTyping(true);

            setTimeout(() => {
                const newIndex = (currentCommandIndex + 1) % commands.length;
                setCurrentCommandIndex(newIndex);
                setIsTyping(false);
                onCommandChange?.(newIndex);
            }, 500); // Half second typing animation
        }, 3000); // Change command every 3 seconds

        return () => clearInterval(mainInterval);
    }, [currentCommandIndex, onCommandChange]);

    // Call onCommandChange initially
    useEffect(() => {
        onCommandChange?.(currentCommandIndex);
    }, []);

    // No longer need forced layout calculation with simplified animation

    return (
        <div
            ref={commandBarRef}
            className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] shadow-lg p-6 -mt-12 ${className}`}
            style={{
                maxWidth: isCommandBarFixed ? "500px" : "500px",
                width: "100%",
                ...style,
            }}
        >
            <div className="flex items-center gap-0 bg-[var(--bg)] rounded-xl px-4 py-4 border border-[var(--border)]">
                <span className="text-[var(--muted-text)] text-lg font-bold">
                    /
                </span>
                <span
                    className={`text-[var(--muted-text)] font-mono text-lg transition-opacity duration-300 flex-1 overflow-hidden whitespace-nowrap ${
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
