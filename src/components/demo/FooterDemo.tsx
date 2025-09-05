import React from "react";

const FooterDemo: React.FC = () => {
    return (
        <div className="relative">
            {/* Bold LYNCX Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h1
                    className="text-[20rem] font-black text-[var(--border)] select-none leading-none tracking-tighter"
                    style={{
                        fontFamily: "system-ui",
                        opacity: 0.3,
                    }}
                >
                    LYNCX
                </h1>
            </div>

            {/* Footer Content */}
            <footer className="relative z-10 bg-[var(--bg)]/90 backdrop-blur-sm pt-16 pb-8">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    {/* CTA Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-semibold tracking-tight mb-6 text-[var(--text)]">
                            Meet the next chapter of browsing
                        </h2>
                        <p className="text-xl text-[var(--muted-text)] mb-8 font-medium">
                            Because your workflow shouldn’t live in 10 tabs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-[var(--accent-color)] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-95">
                                Install Free
                            </button>
                            <button className="px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="border-t border-[var(--border)] pt-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Brand */}
                            <div className="text-2xl font-bold tracking-tight text-[var(--text)]">
                                LyncX
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[var(--muted-text)] text-sm">
                                    service@lyncx.ai
                                </span>
                                <span className="text-[var(--muted-text)] text-sm">
                                    © 2025 Lyncx. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterDemo;
