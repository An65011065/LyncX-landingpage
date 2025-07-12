import React, { useEffect, useState } from "react";

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-[var(--bg)]/90 backdrop-blur z-50 border-b border-[var(--border)] transition-all duration-300 ${
                isScrolled ? "bg-opacity-95 shadow-lg" : ""
            }`}
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
                <div className="text-lg font-semibold tracking-tight">
                    LyncX
                </div>
                <div className="flex gap-8 items-center">
                    <a
                        href="#problem"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors"
                    >
                        Features
                    </a>
                    <a
                        href="#privacy"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors"
                    >
                        Privacy
                    </a>
                    <a
                        href="#pricingpage"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium bg-[var(--text)] text-white px-5 py-2.5 rounded-lg hover:bg-opacity-80 transition-colors"
                    >
                        Get Started
                    </a>
                </div>
            </nav>
        </header>
    );
};
