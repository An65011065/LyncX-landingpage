import React from "react";
import DashboardTab from "./demo/DashboardDemo";

export const Hero: React.FC = () => {
    const getViewportStyle = () => {
        const baseStyle = {
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            overflowY: "hidden" as const,
            overflowX: "hidden" as const,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative" as const,
            zIndex: 10,
            // Glass effect properties
            background: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(8px) saturate(100%)",
            WebkitBackdropFilter: "blur(8px) saturate(100%)",
        };
        return baseStyle;
    };

    return (
        <section className="pt-40 pb-0 px-6 max-w-7xl mx-auto flex flex-col items-center min-h-screen">
            {/* Text Content - positioned lower with more top space */}
            <div className="text-center space-y-8 animate-[fadeInUp_1s_ease_0.2s_forwards] opacity-0 max-w-4xl mt-32 mb-16">
                <h1 className="text-6xl font-semibold tracking-tight leading-tight">
                    See where time disappeared
                </h1>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto font-['Playfair_Display'] font-light">
                    The all-in-one AI tool to map, save, and focus your browsing
                    - without changing how you use it.
                </p>
                <div className="pt-4">
                    <button className="bg-[var(--text)] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-opacity-80 transition-all hover:-translate-y-0.5">
                        Install Free
                    </button>
                </div>
            </div>

            {/* Dashboard Demo - positioned much lower with increased height */}
            <div className="w-full max-w-7xl opacity-0 transform translate-y-12 animate-[slideIn_1.2s_ease_0.8s_forwards] flex-1 flex items-end pb-8">
                {/* Dashboard Content with Glass Effect */}
                <div
                    style={getViewportStyle()}
                    className="h-[900px] w-full rounded-2xl"
                >
                    <DashboardTab isDarkMode={false} />
                </div>
            </div>
        </section>
    );
};
