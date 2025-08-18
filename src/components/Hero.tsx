import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC = () => {
    const navigate = useNavigate();

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
