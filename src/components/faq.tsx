import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
    subQuestion?: string;
    subAnswer?: string;
}

const FAQSection = () => {
    const [scrollPhase, setScrollPhase] = useState("intro");
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const faqs: FAQItem[] = [
        {
            question: "How does LyncX work?",
            answer: "Simply type '/' on any tab to bring up the command bar. Then type what you want to do - like 'spotify' for music, 'history' to find past pages, or 'help' to see all available options. It's designed to feel natural and intuitive.",
        },
        {
            question: "Does LyncX monitor my browser history?",
            answer: "No, your browsing history never leaves your browser. Everything stays completely private on your device. We believe your data should remain yours.",
            subQuestion: "How does AI analyze the data then?",
            subAnswer: "The AI simply picks the most appropriate function for what you're trying to do. All analysis and calculations happen locally on your computer - nothing is sent to our servers.",
        },
        {
            question: "Can I turn off data features?",
            answer: "Absolutely! LyncX is completely modular. Through the settings, you can turn off or customize any features you don't want. You have full control over your experience.",
        },
        {
            question: "Can I download my data?",
            answer: "Yes! There's a download feature right in the settings where you can export all your LyncX data anytime you want. Your data belongs to you.",
        },
        {
            question: "How can I request new features or integrations?",
            answer: "We'd love to hear your ideas! Send us a message at service@lyncx.ai and we'll consider adding the features that matter most to our community.",
        },
        {
            question: "Is LyncX free?",
            answer: "Yes, LyncX is completely free for now! We're focused on building something amazing for you first. If we ever introduce paid features, we'll never charge you without clear notice and your explicit consent.",
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
                                            ? "max-h-60 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {faq.answer}
                                        </p>
                                        {faq.subQuestion && (
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-sm font-medium text-gray-800 mb-2">
                                                    {faq.subQuestion}
                                                </p>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {faq.subAnswer}
                                                </p>
                                            </div>
                                        )}
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
                            href="mailto:service@lyncx.ai"
                            className="text-[var(--text)] hover:opacity-80 font-medium underline"
                        >
                            service@lyncx.ai
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
