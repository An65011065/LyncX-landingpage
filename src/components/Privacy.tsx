import React, { useState, useEffect, useRef, useCallback } from "react";
import {
    Shield,
    Database,
    Key,
    Cloud,
    Cpu,
    Download,
    ChevronDown,
} from "lucide-react";

const PrivacyPage = () => {
    const [scrollPhase, setScrollPhase] = useState("intro");
    const [expandedFeature, setExpandedFeature] = useState(null);
    const privacyRef = useRef(null);

    const features = [
        {
            category: "Local First",
            title: "Your browsing data stays local.",
            description:
                "All your browsing data is processed locally on your device. We never send your personal browsing history to our servers.",
            icon: Database,
            color: "green",
        },
        {
            category: "AI Transparency",
            title: "AI processes data anonymously.",
            description:
                "Our AI features work with anonymized data patterns, never with your personal information or identifiable browsing habits.",
            icon: Cpu,
            color: "blue",
        },
        {
            category: "Smart Backup",
            title: "Notes, bookmarks, templates sync safely.",
            description:
                "Only your notes, bookmarks, and templates are encrypted and synced. Your browsing history stays private and local.",
            icon: Cloud,
            color: "purple",
        },
        {
            category: "Minimal Permissions",
            title: "Only what we absolutely need.",
            description:
                "We request minimal browser permissions and never access sensitive data like passwords or private browsing sessions.",
            icon: Key,
            color: "orange",
        },
        {
            category: "Data Control",
            title: "Delete everything, anytime.",
            description:
                "You have complete control over your data. Delete everything with one click, no questions asked.",
            icon: Shield,
            color: "red",
        },
        {
            category: "Data Export",
            title: "Download your data anytime.",
            description:
                "Export all your data in standard formats (CSV, JSON) whenever you want. Your data, your choice.",
            icon: Download,
            color: "gray",
        },
    ];

    const handleScroll = useCallback(() => {
        if (!privacyRef.current) return;

        const rect = privacyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        const progress = Math.max(
            0,
            Math.min(1, -sectionTop / (sectionHeight - windowHeight)),
        );

        if (progress < 0.4) {
            setScrollPhase("intro");
        } else {
            setScrollPhase("features");
        }
    }, []);

    useEffect(() => {
        let ticking = false;
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", requestTick, { passive: true });
        window.addEventListener("resize", requestTick);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", requestTick);
            window.removeEventListener("resize", requestTick);
        };
    }, [handleScroll]);

    const getColorClasses = (color) => {
        const colors = {
            green: "text-green-600 bg-green-50 border-green-200",
            blue: "text-blue-600 bg-blue-50 border-blue-200",
            purple: "text-purple-600 bg-purple-50 border-purple-200",
            orange: "text-orange-600 bg-orange-50 border-orange-200",
            red: "text-red-600 bg-red-50 border-red-200",
            gray: "text-gray-600 bg-gray-50 border-gray-200",
        };
        return colors[color] || colors.gray;
    };

    return (
        <section
            id="privacy"
            ref={privacyRef}
            className="min-h-[200vh] bg-[var(--bg)] relative"
            style={{ height: "200vh" }}
        >
            {/* Intro section */}
            <div
                className={`sticky top-0 h-screen flex items-center justify-center transition-opacity duration-1000 ${
                    scrollPhase === "intro"
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="text-center max-w-4xl px-8">
                    <h2 className="text-4xl md:text-5xl  font-['Playfair_Display'] font-bold mb-4 text-gray-800">
                        Your digital life deserves privacy.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 italic">
                        Here's how we keep your data safe and private.
                    </p>
                </div>
            </div>

            {/* Features section */}
            <div
                className={`sticky top-0 h-screen flex items-center justify-center transition-opacity duration-1000 ${
                    scrollPhase === "features"
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="w-full max-w-4xl px-8">
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                                    scrollPhase === "features"
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{
                                    transitionDelay:
                                        scrollPhase === "features"
                                            ? `${index * 100}ms`
                                            : "0ms",
                                }}
                                onMouseEnter={() => setExpandedFeature(index)}
                                onMouseLeave={() => setExpandedFeature(null)}
                            >
                                <div className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(
                                                feature.color,
                                            )}`}
                                        >
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-500 mb-1 tracking-wider uppercase ">
                                                {feature.category}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                            expandedFeature === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedFeature === index
                                            ? "max-h-32 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pb-4 pl-22">
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;
