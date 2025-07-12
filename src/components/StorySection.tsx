import React, { useEffect, useRef } from "react";
import StoriesDemo from "./demo/StoriesDemo";

interface StorySectionProps {
    id: string;
    title: string;
    description: string;
}

export const StorySection: React.FC<StorySectionProps> = ({
    id,
    title,
    description,
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0",
                        );
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px",
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="py-32 px-6 max-w-7xl mx-auto opacity-0 transform translate-y-12 transition-all duration-800 ease-out"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold tracking-tight mb-6">
                    {title}
                </h2>
                <p className="text-lg text-[var(--muted-text)] max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Stories Demo Container - matches Hero section styling */}
            <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl max-w-4xl mx-auto">
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

                {/* Stories Demo Content */}
                <div className="h-[500px] bg-white">
                    <StoriesDemo isDarkMode={false} />
                </div>
            </div>
        </section>
    );
};
