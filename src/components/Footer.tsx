import React from "react";

const Footer = () => {
    return (
        <footer className="relative bg-[var(--bg)] py-20 overflow-hidden">
            {/* Giant LYNCX text spanning the footer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1
                    className="text-[30vw] font-light text-gray-200 select-none whitespace-nowrap"
                    style={{
                        clipPath: "inset(0 0 15% 0)",
                        WebkitClipPath: "inset(0 0 15% 0)",
                        letterSpacing: "0.05em",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                >
                    LYNCX
                </h1>
            </div>

            {/* Footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                    {/* Spacer to push content to bottom */}
                    <div className="flex-1"></div>

                    {/* Bottom content - centered */}
                    <div className="text-center space-y-3">
                        <p className="text-gray-500 text-sm font-medium tracking-wide">
                            © 2025 LYNCX. All rights reserved.
                        </p>
                        <a
                            href="mailto:questions@lyncx.ai"
                            className="block text-gray-600 hover:text-[var(--text)] text-sm transition-colors font-medium"
                        >
                            questions@lyncx.ai
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
