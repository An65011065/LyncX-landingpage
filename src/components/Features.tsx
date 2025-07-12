import React, { useState, useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
    Timer,
    Search,
    MessageCircle,
    BarChart3,
    FileText,
    Globe,
    Camera,
    Folder,
    Shield,
    Bookmark,
    Brain,
    Zap,
    Clock,
    Target,
    Eye,
    Link2,
} from "lucide-react";

const Features: React.FC = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const progress = Math.max(
                0,
                -rect.top / (rect.height - window.innerHeight),
            );

            setScrollY(progress);

            // Change feature based on scroll
            const featureIndex = Math.floor(progress * features.length);
            if (
                featureIndex !== currentFeature &&
                featureIndex < features.length
            ) {
                setCurrentFeature(featureIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentFeature]);

    const features = [
        {
            category: "Insights",
            title: "See where every moment goes.",
            description:
                "LyncX automatically tracks your browsing with beautiful visualizations that reveal patterns you never knew existed. No manual input required.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20" />
                    <div className="relative">
                        <BarChart3 className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                        <div className="flex space-x-2 justify-center">
                            {[40, 60, 35, 80, 25].map((height, i) => (
                                <div
                                    key={i}
                                    className="w-4 bg-blue-500 rounded-t opacity-70"
                                    style={{ height: `${height}px` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            category: "Intelligence",
            title: "AI expands all possibilities.",
            description:
                "Data can be hard to understand. Our AI analyzes your patterns and expands all possibilities to show you exactly how to optimize your day.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
                    <div className="relative">
                        <Brain className="w-32 h-32 text-purple-600 mx-auto mb-4" />
                        <div className="bg-white/80 rounded-lg px-4 py-2 backdrop-blur-sm">
                            <div className="text-sm text-gray-600">
                                AI Recommendation
                            </div>
                            <div className="text-xs text-purple-600 font-medium">
                                Focus time: 9-11am
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            category: "Navigation",
            title: "Trace the path to any discovery.",
            description:
                "Interactive network graphs show exactly how you found any piece of content. Never lose track of your digital journey again.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20" />
                    <div className="relative">
                        <Globe className="w-32 h-32 text-green-600 mx-auto mb-4" />
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <div className="w-8 h-0.5 bg-green-400" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <div className="w-8 h-0.5 bg-green-400" />
                            <div className="w-3 h-3 bg-green-600 rounded-full scale-125" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            category: "Discovery",
            title: "Cmd+F for all your tabs.",
            description:
                "Search across all tabs, bookmarks, and history with intelligent understanding. What used to take minutes now takes seconds.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20" />
                    <div className="relative">
                        <Search className="w-32 h-32 text-orange-600 mx-auto mb-4" />
                        <div className="bg-white/80 rounded-lg px-4 py-2 backdrop-blur-sm">
                            <div className="text-sm text-gray-600">
                                ⌘F across 23 tabs
                            </div>
                            <div className="text-xs text-orange-600 font-medium">
                                847 results found
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            category: "Memory",
            title: "Right-click notes for every domain.",
            description:
                "Make notes with a simple right-click, one for every domain. No need to cmd+c/cmd+v multiple times. Straight-through notes that stick.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-400/20" />
                    <div className="relative">
                        <FileText className="w-32 h-32 text-yellow-600 mx-auto mb-4" />
                        <div className="bg-white/80 rounded-lg p-3 backdrop-blur-sm max-w-xs">
                            <div className="text-xs text-gray-500 mb-1">
                                github.com notes
                            </div>
                            <div className="text-sm">
                                Remember to check the API docs →
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            category: "Workflow",
            title: "Templates, timers, screenshots, consolidations.",
            description:
                "Templates so you don't open the same 4 tabs every morning. Timers to avoid distractions. Full-page screenshots with actual names, not 'Screenshot 07-10-2025(10)'. Consolidations so your browser runs smoothly without the fans.",
            visual: (
                <div className="relative w-full h-80 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20" />
                    <div className="relative grid grid-cols-2 gap-4 p-8">
                        <div className="bg-white/80 rounded-lg p-3 backdrop-blur-sm text-center">
                            <Folder className="w-8 h-8 text-cyan-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">Templates</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 backdrop-blur-sm text-center">
                            <Timer className="w-8 h-8 text-cyan-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">Timers</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 backdrop-blur-sm text-center">
                            <Camera className="w-8 h-8 text-cyan-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">
                                Screenshots
                            </div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 backdrop-blur-sm text-center">
                            <Zap className="w-8 h-8 text-cyan-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">
                                Consolidations
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section
            ref={sectionRef}
            data-features-section
            className="min-h-[600vh] bg-white"
            style={{ height: `${features.length * 100 + 200}vh` }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-7xl px-8">
                    {/* Current feature display */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        {/* Left - Visual */}
                        <div className="lg:col-span-1 order-2 lg:order-1">
                            <div className="transition-all duration-700 ease-out">
                                {features[currentFeature]?.visual}
                            </div>
                        </div>

                        {/* Middle - Main content */}
                        <div className="lg:col-span-1 order-1 lg:order-2 text-center lg:text-left">
                            <div className="transition-all duration-700 ease-out">
                                <div className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
                                    {features[currentFeature]?.category}
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {features[currentFeature]?.title}
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
                                    {features[currentFeature]?.description}
                                </p>
                            </div>
                        </div>

                        {/* Right - Feature list */}
                        <div className="lg:col-span-1 order-3">
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                                            currentFeature === index
                                                ? "bg-gray-100 border-2 border-gray-200"
                                                : "hover:bg-gray-50 border-2 border-transparent"
                                        }`}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                                    currentFeature === index
                                                        ? "bg-gray-200"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                {index === 0 && (
                                                    <BarChart3
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                                {index === 1 && (
                                                    <Globe
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                                {index === 2 && (
                                                    <Search
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                                {index === 3 && (
                                                    <Shield
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                                {index === 4 && (
                                                    <Bookmark
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                                {index === 5 && (
                                                    <MessageCircle
                                                        className="w-5 h-5 text-gray-600"
                                                        as="svg"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-gray-900 mb-1 truncate">
                                                    {feature.category}
                                                </div>
                                                <div className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                    {feature.title}
                                                </div>
                                            </div>
                                            {currentFeature === index && (
                                                <div className="flex-shrink-0">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-2">
                            {features.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentFeature === index
                                            ? "bg-gray-600 scale-125"
                                            : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
