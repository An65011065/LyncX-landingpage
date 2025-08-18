import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Camera,
    BarChart3,
    FileText,
    Timer,
    Shield,
    Calendar,
    ArrowRight,
    MessageSquare,
    Search,
    X
} from "lucide-react";

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
    const [showExploreModal, setShowExploreModal] = useState(false);
    const [exploreInput, setExploreInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState<string | null>(null);

    // Auto-typing demo for explore modal
    useEffect(() => {
        if (showExploreModal && !isTyping) {
            const demoTexts = [
                "/ask What is this page about?",
                "/calc 15% tip on $47.50", 
                "/remember This design pattern",
                "How does this component work?"
            ];
            let currentIndex = 0;
            
            const typeText = (text: string) => {
                setIsTyping(true);
                setExploreInput("");
                let i = 0;
                const typing = setInterval(() => {
                    if (i < text.length) {
                        setExploreInput(text.slice(0, i + 1));
                        i++;
                    } else {
                        clearInterval(typing);
                        setTimeout(() => {
                            setIsTyping(false);
                            currentIndex = (currentIndex + 1) % demoTexts.length;
                            setTimeout(() => typeText(demoTexts[currentIndex]), 2000);
                        }, 1500);
                    }
                }, 100);
            };
            
            typeText(demoTexts[currentIndex]);
        }
    }, [showExploreModal, isTyping]);

    const navItems = [
        { id: "screenshot", icon: Camera, label: "Screenshot" },
        { id: "analytics", icon: BarChart3, label: "Analytics" },
        { id: "flow", icon: Calendar, label: "Flow" },
        { id: "explore", icon: MessageSquare, label: "Explore" },
        { id: "notes", icon: FileText, label: "Notes" },
        { id: "timer", icon: Timer, label: "Timer" },
        { id: "limits", icon: Shield, label: "Limits" },
    ];

    return (
        <section 
            className="min-h-screen flex items-center justify-center"
            style={{
                background: "#fffbf0",
                fontFamily: '"Nunito", sans-serif'
            }}
        >
            <div className="w-full max-w-6xl mx-auto px-8">
                
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h1 
                        className="text-5xl md:text-6xl font-semibold mb-6 leading-tight"
                        style={{ color: "#2d1810" }}
                    >
                        Browse with intention
                    </h1>
                    
                    <p 
                        className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                        style={{ color: "#8b4513" }}
                    >
                        AI-powered browsing assistant that maps, saves, and focuses your digital journey
                    </p>
                    
                    <button
                        onClick={() => navigate("/auth")}
                        className="px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{
                            background: "#c68346",
                            color: "white"
                        }}
                    >
                        Install Free
                    </button>
                </div>

            </div>

            <style>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                
                .animate-pulse {
                    animation: pulse 1s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
