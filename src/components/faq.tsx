import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
    const [scrollPhase, setScrollPhase] = useState("intro");
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const faqs = [
        {
            question: "How does the 14-day free trial work?",
            answer: "Start with full access to any plan features for 14 days. No credit card required. After the trial, you'll be moved to the Starter plan unless you choose to upgrade.",
        },
        {
            question: "Do I need to change my browser?",
            answer: "No. LyncX works as a browser extension with all Chromium-based browsers including Chrome, Edge, Arc, and Brave. Simply install the extension and continue browsing normally.",
        },
        {
            question: "Is my browsing data private?",
            answer: "Yes. Your browsing history stays local on your device. LyncX only securely sync notes, bookmarks, and templates - never your private browsing data.",
        },
        {
            question: "Can I change plans anytime?",
            answer: "Absolutely. Upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
        },
        {
            question: "Do you offer team or enterprise plans?",
            answer: "Not yet, but we're working on team features. Reach out to questions@lyncx.ai if you're interested in early access for teams.",
        },
    ];

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
            setScrollPhase("faqs");
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
                <div className="text-center max-w-4xl px-6">
                    <h2 className="text-5xl font-semibold tracking-tight mb-6 text-[var(--text)]">
                        Frequently asked questions
                    </h2>
                    <p className="text-xl text-gray-700 font-['Playfair_Display'] font-light">
                        Everything you need to know about LyncX
                    </p>
                </div>
            </div>

            {/* FAQ section */}
            <div
                className={`sticky top-0 h-screen flex items-center justify-center transition-opacity duration-1000 ${
                    scrollPhase === "faqs"
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="w-full max-w-4xl px-6">
                    {/* FAQ Items */}
                    <div className="space-y-4 mb-16">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`
                                    bg-white rounded-2xl border border-gray-200 overflow-hidden
                                    transition-all duration-700 hover:shadow-sm
                                    ${
                                        scrollPhase === "faqs"
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    }
                                `}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                <button
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    onClick={() =>
                                        setOpenFAQ(
                                            openFAQ === index ? null : index,
                                        )
                                    }
                                >
                                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                                            openFAQ === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openFAQ === index
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div
                        className={`text-center transition-all duration-1000 delay-700 ${
                            scrollPhase === "faqs" ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <p className="text-gray-600 mb-4 font-['Playfair_Display'] font-light">
                            Still have questions?
                        </p>
                        <a
                            href="mailto:questions@lyncx.ai"
                            className="text-[var(--text)] hover:opacity-80 font-medium underline"
                        >
                            questions@lyncx.ai
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
