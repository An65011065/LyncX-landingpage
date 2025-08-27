import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
    subQuestion?: string;
    subAnswer?: string;
}

const FAQDemo: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "How does LyncX work?",
            answer: "Simply type '/' on any tab to bring up the command bar. Then type what you want to do - like 'note' for adding notes to a website, 'history' to find past pages, or 'timer' to set focus timers.",
        },
        {
            question: "Is my browsing private with LyncX?",
            answer: "Yes, your browsing history never leaves your browser. Everything stays completely private on your device.",
            subQuestion: "How does AI analyze the data then?",
            subAnswer:
                "The AI simply picks the most appropriate function for what you're trying to do. All analysis and calculations happen locally on your computer - nothing is sent to our servers.",
        },
        {
            question: "Can I turn off data features?",
            answer: "Absolutely! LyncX is completely modular. You can turn data features off in the settings.",
        },
        {
            question: "Can I download my data?",
            answer: "Yes! There's a download feature right in the settings where you can export all your network data in CSV - super handy for your next data science project :)",
        },
        {
            question: "How can I request new features or integrations?",
            answer: "We'd love to hear your ideas! Send us a message at service@lyncx.ai and we'll consider adding it.",
        },
        {
            question: "Is LyncX free?",
            answer: "Yes, LyncX is completely free for now! We're focused on building something amazing for you first. If we ever introduce paid features, we'll never charge you without clear notice and your explicit consent.",
        },
    ];

    return (
        <section className="pt-8 sm:pt-24 pb-0 bg-[var(--bg)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-6 text-[var(--text)]">
                        Frequently asked questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="mb-8 sm:mb-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-[var(--border)] last:border-b-0"
                        >
                            <button
                                className="w-full py-4 sm:py-6 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
                                onClick={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                }
                            >
                                <h3 className="text-lg sm:text-xl font-medium text-[var(--text)] pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-[var(--muted-text)] transition-transform duration-300 flex-shrink-0 ${
                                        openFAQ === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === index
                                        ? "max-h-96 opacity-100 pb-4 sm:pb-6"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div>
                                    <p
                                        className="text-[var(--muted-text)] leading-relaxed mb-1 text-sm font-medium whitespace-pre-line"
                                        style={{ fontFamily: "system-ui" }}
                                    >
                                        {faq.answer}
                                    </p>
                                    {faq.subQuestion && (
                                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[var(--border)]">
                                            <p className="text-sm font-semibold text-[var(--text)] mb-2">
                                                {faq.subQuestion}
                                            </p>
                                            <p
                                                className="text-sm text-[var(--muted-text)] leading-relaxed font-medium"
                                                style={{
                                                    fontFamily: "system-ui",
                                                }}
                                            >
                                                {faq.subAnswer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQDemo;
