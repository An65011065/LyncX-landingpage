import React from "react";
import StoriesDemo from "./StoriesDemo";

export const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-center min-h-screen">
            <div className="space-y-6 animate-[fadeInUp_1s_ease_0.2s_forwards] opacity-0">
                <h1 className="text-5xl font-semibold tracking-tight leading-tight">
                    See where your time actually goes
                </h1>
                <p className="text-lg text-[var(--muted-text)]">
                    Track every website automatically. Get AI insights. Block
                    distractions. All in one extension.
                </p>
                <button className="bg-[var(--text)] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-opacity-80 transition-all hover:-translate-y-0.5">
                    Install Free Extension
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl opacity-0 transform translate-y-12 rotate-2 animate-[slideIn_1.2s_ease_0.8s_forwards]">
                {/* Browser Chrome */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 border-b border-[var(--border)] flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:scale-110 transition-transform cursor-pointer" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:scale-110 transition-transform cursor-pointer" />
                        <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    <div className="flex-1 bg-white px-4 py-2 rounded-md text-xs text-[var(--muted-text)] border border-gray-200 font-mono">
                        chrome-extension://lyncx/dashboard
                    </div>
                </div>

                {/* Content will be added in separate components */}
                <div className="h-[500px] bg-white p-8 flex items-center justify-center text-[var(--muted-text)]">
                    <StoriesDemo />
                </div>
            </div>
        </section>
    );
};
