import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [currentEmoji, setCurrentEmoji] = useState("🔍");
    
    const emojis = ["🔍", "🗂️", "📁", "🔗", "⚡", "🎯"];
    
    useEffect(() => {
        setMounted(true);
        
        // Emoji rotation animation
        const interval = setInterval(() => {
            setCurrentEmoji(prev => {
                const currentIndex = emojis.indexOf(prev);
                return emojis[(currentIndex + 1) % emojis.length];
            });
        }, 2000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="not-found-container">
            <div className={`content-wrapper ${mounted ? 'mounted' : ''}`}>
                <div className="logo-section">
                    <div className="linkx-logo">
                        <span className="logo-text">/x</span>
                    </div>
                    <h1 className="brand-name">LyncX</h1>
                </div>

                <div className="main-content">
                    <div className="emoji-container">
                        <span className="rotating-emoji">{currentEmoji}</span>
                    </div>
                    
                    <div className="text-content">
                        <h2 className="error-title">Page not found</h2>
                        <p className="error-description">
                            The page you're looking for has wandered off into the digital wilderness.
                            Let's get you back on track.
                        </p>
                    </div>

                    <div className="action-section">
                        <Link to="/" className="primary-button">
                            <span>Take me home</span>
                            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        
                        <button 
                            onClick={() => window.history.back()} 
                            className="secondary-button"
                        >
                            Go back
                        </button>
                    </div>

                    <div className="help-section">
                        <p className="help-text">
                            Lost? Try these popular destinations:
                        </p>
                        <div className="quick-links">
                            <Link to="/" className="quick-link">Home</Link>
                            <Link to="/privacy" className="quick-link">Privacy</Link>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="decoration-dots">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`dot dot-${i + 1}`}></div>
                    ))}
                </div>
            </div>

            <style>{`
                .not-found-container {
                    min-height: 100vh;
                    background: #fffbf0;
                    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .content-wrapper {
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .content-wrapper.mounted {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Logo Section */
                .logo-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .linkx-logo {
                    width: 48px;
                    height: 48px;
                    background: #c68346;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 25px rgba(198, 131, 70, 0.25);
                    transform: rotate(-5deg);
                    transition: transform 0.3s ease;
                }

                .linkx-logo:hover {
                    transform: rotate(0deg) scale(1.05);
                }

                .logo-text {
                    font-size: 24px;
                    font-weight: bold;
                    color: white;
                    letter-spacing: 1px;
                }

                .brand-name {
                    font-size: 2rem;
                    font-weight: 600;
                    color: #2d1810;
                    margin: 0;
                }

                /* Main Content */
                .main-content {
                    background: white;
                    border-radius: 1rem;
                    border: 1px solid #e5e5e5;
                    padding: 3rem 2rem;
                    box-shadow: 0 4px 20px rgba(45, 24, 16, 0.08);
                    position: relative;
                }

                .emoji-container {
                    margin-bottom: 2rem;
                }

                .rotating-emoji {
                    font-size: 4rem;
                    display: inline-block;
                    animation: gentle-bounce 2s infinite ease-in-out;
                    transition: transform 0.5s ease;
                }

                @keyframes gentle-bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    40% {
                        transform: translateY(-10px) scale(1.1);
                    }
                    60% {
                        transform: translateY(-5px) scale(1.05);
                    }
                }

                /* Text Content */
                .text-content {
                    margin-bottom: 2.5rem;
                }

                .error-title {
                    font-size: 3rem;
                    font-weight: 600;
                    color: #2d1810;
                    margin: 0 0 1rem 0;
                    line-height: 1.1;
                }

                .error-description {
                    font-size: 1.125rem;
                    color: #8b4513;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 480px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Action Section */
                .action-section {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    flex-wrap: wrap;
                }

                .primary-button {
                    background: #c68346;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.2s ease;
                    border: none;
                    cursor: pointer;
                }

                .primary-button:hover {
                    background: #b07139;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(198, 131, 70, 0.25);
                }

                .primary-button .arrow-icon {
                    transition: transform 0.2s ease;
                }

                .primary-button:hover .arrow-icon {
                    transform: translateX(4px);
                }

                .secondary-button {
                    border: 2px solid #c68346;
                    color: #c68346;
                    background: transparent;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    font-family: inherit;
                }

                .secondary-button:hover {
                    background: #c68346;
                    color: white;
                    transform: translateY(-2px);
                }

                /* Help Section */
                .help-section {
                    border-top: 1px solid #e5e5e5;
                    padding-top: 1.5rem;
                }

                .help-text {
                    font-size: 0.875rem;
                    color: #8b4513;
                    margin: 0 0 1rem 0;
                }

                .quick-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }

                .quick-link {
                    color: #c68346;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: all 0.2s ease;
                    position: relative;
                }

                .quick-link:hover {
                    background: rgba(198, 131, 70, 0.08);
                    color: #b07139;
                }

                /* Decorative Elements */
                .decoration-dots {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: -1;
                }

                .dot {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: rgba(198, 131, 70, 0.15);
                    border-radius: 50%;
                    animation: float 6s infinite ease-in-out;
                }

                .dot-1 { top: 15%; left: 10%; animation-delay: 0s; }
                .dot-2 { top: 25%; right: 15%; animation-delay: 1s; }
                .dot-3 { bottom: 30%; left: 15%; animation-delay: 2s; }
                .dot-4 { bottom: 20%; right: 10%; animation-delay: 3s; }
                .dot-5 { top: 60%; left: 8%; animation-delay: 4s; }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-20px) scale(1.2);
                        opacity: 0.7;
                    }
                }

                /* Responsive Design */
                @media (max-width: 640px) {
                    .not-found-container {
                        padding: 1rem;
                    }
                    
                    .main-content {
                        padding: 2rem 1.5rem;
                    }

                    .error-title {
                        font-size: 2.25rem;
                    }

                    .action-section {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .primary-button,
                    .secondary-button {
                        width: 100%;
                        justify-content: center;
                    }

                    .quick-links {
                        gap: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default NotFound;