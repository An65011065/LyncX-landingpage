import React, { useEffect, useState } from "react";

const extensionsData = [
    {
        title: "Website Blocker",
        text: "Block distracting websites with smart scheduling and focus modes",
    },
    {
        title: "Time Tracker",
        text: "Monitor your browsing habits with detailed analytics and insights",
    },
    {
        title: "Tab Manager",
        text: "Organize and manage your tabs efficiently with powerful tools",
    },
    {
        title: "Focus Timer",
        text: "Stay productive with Pomodoro timers and break reminders",
    },
    {
        title: "AI Assistant",
        text: "Get instant summaries and insights about your browsing patterns",
    },
    {
        title: "Note Taking",
        text: "Capture thoughts and ideas directly from any webpage",
    },
    {
        title: "Search History",
        text: "Find and revisit your browsing history with intelligent search",
    },
    {
        title: "Quick Actions",
        text: "Perform common tasks with keyboard shortcuts and gestures",
    },
    {
        title: "Analytics",
        text: "Deep insights into your digital habits and productivity patterns",
    },
    {
        title: "All-in-One",
        text: "Experience the power of 10+ extensions unified in one seamless tool",
    },
];

export const ExtensionsSection: React.FC = () => {
    const [currentLayer, setCurrentLayer] = useState(0);
    const [isConverging, setIsConverging] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("extensions-section");
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const scrollProgress =
                1 - rect.bottom / (window.innerHeight + rect.height);

            if (scrollProgress >= 0 && scrollProgress <= 1) {
                const layerIndex = Math.min(9, Math.floor(scrollProgress * 10));
                setCurrentLayer(layerIndex);
                setIsConverging(scrollProgress > 0.9);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="extensions-section"
            className="h-screen sticky top-0 flex flex-col items-center justify-center bg-[var(--bg)] z-10"
        >
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h2 className="text-5xl font-semibold tracking-tight mb-4">
                    10+ Extensions, 1 Seamless Experience
                </h2>
                <p className="text-lg text-[var(--muted-text)] max-w-2xl mx-auto">
                    Why install multiple extensions when LyncX does it all? Get
                    website blocking, tab management, productivity tracking,
                    time timers, AI assistance, and more - all in one
                    lightweight extension.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl px-6">
                <div className="flex justify-center">
                    <div className="relative w-60">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className={`
                  absolute w-full aspect-[1160/521] transition-all duration-300
                  ${index <= currentLayer ? "opacity-100" : "opacity-30"}
                  ${isConverging ? "scale-95" : "scale-100"}
                `}
                                style={{
                                    top: `${index * 10}px`,
                                    transform: isConverging
                                        ? `translateY(${(5 - index) * 20}px)`
                                        : `translateY(0)`,
                                    background: `hsl(${index * 36}, 70%, 60%)`,
                                    borderRadius: "12px",
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-left">
                    <div className="opacity-0 animate-[fadeIn_1s_ease_forwards] animation-delay-1200">
                        <h3 className="text-3xl font-semibold mb-2">
                            {extensionsData[currentLayer].title}
                        </h3>
                        <hr className="border-t-2 border-current my-2" />
                        <p className="text-lg text-[var(--muted-text)]">
                            {extensionsData[currentLayer].text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
