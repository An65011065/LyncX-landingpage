import React, { useState, useEffect, useRef, useCallback } from "react";

const CTASection = () => {
    const [scrollPhase, setScrollPhase] = useState("intro");
    const sectionRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Calculate progress through this section (0 to 1)
        const progress = Math.max(
            0,
            Math.min(1, -sectionTop / (sectionHeight - windowHeight)),
        );

        // Determine phase based on progress through the section
        if (progress < 0.5) {
            setScrollPhase("intro");
        } else {
            setScrollPhase("cta");
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

        // Initialize
        handleScroll();

        return () => {
            window.removeEventListener("scroll", requestTick);
            window.removeEventListener("resize", requestTick);
        };
    }, [handleScroll]);

    return (
        <section
            ref={sectionRef}
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
                <div className="text-center max-w-5xl px-6">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text)] leading-[0.9]">
                        Your brain becomes a
                        <span className="block font-black italic">
                            pinball,
                        </span>
                        bouncing between interfaces.
                    </h2>
                </div>
            </div>

            {/* CTA section */}
            <div
                className={`sticky top-0 h-screen flex flex-col items-center justify-center transition-opacity duration-1000 ${
                    scrollPhase === "cta"
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="text-center max-w-4xl px-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[var(--text)] mb-12 leading-tight">
                        Find the missng
                        <span className="font-black"> lync.</span>
                    </h3>

                    <button className="bg-[var(--text)] text-white px-12 py-5 rounded-2xl text-xl font-medium hover:bg-opacity-90 transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                        Install today
                    </button>

                    <p className="text-gray-600 mt-6 text-lg font-['Playfair_Display'] font-light">
                        Available for all Chromium browsers.
                    </p>
                </div>

                {/* Footer content */}
                <div className="w-full px-6 pb-8">
                    <div className="text-center space-y-2">
                        <p className="text-gray-500 text-sm font-medium tracking-wide">
                            © 2025 LyncX. All rights reserved.
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
        </section>
    );
};

export default CTASection;
