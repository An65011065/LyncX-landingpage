import React, { useEffect, useRef, useState, useCallback } from "react";

interface ProblemColumn {
    headline: string;
    headlineClass: string;
    subline: string;
    sublineClass: string;
    bodyText: string;
    solution: string;
    color?: string;
}

const ProblemAgitationSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollPhase, setScrollPhase] = useState<
        "intro" | "columns" | "complete" | "final"
    >("intro");
    const [visibleColumns, setVisibleColumns] = useState<number>(0);
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const stepHeightRef = useRef<number>(0);

    const columns: ProblemColumn[] = [
        {
            headline: "MEETING-PREP PANIC",
            headlineClass: "hl1",
            subline: "The spec PDF vanished",
            sublineClass: "hl2",
            bodyText:
                "Ten minutes before the client call. That critical spec PDF? Gone. You're frantically clicking through 47 tabs—Gmail, Slack, three different Drive folders, two Notion pages. Your browser history is a graveyard of desperate searches. The meeting starts in 3 minutes and you're still tab-hopping like a maniac.",
            solution:
                "LyncX tracks your tabs so you never lose important docs again.",
        },
        {
            headline: "CHOICE OVERLOAD",
            headlineClass: "hl5",
            subline: "Decision paralysis crash",
            sublineClass: "hl6",
            bodyText:
                "Same Nike shoes. Seven retailers, seventeen tabs, three abandoned carts. You've read 43 reviews, compared prices in four currencies, checked shipping times to three addresses. Three hours later: decision fatigue has murdered your ability to choose anything. Choice overload is real and it's killing your purchasing power.",
            solution:
                "LyncX analyzes your behavior to show which option you really want.",
        },
        {
            headline: "AI OVERLOAD",
            headlineClass: "hl3",
            subline: "Tab-hopping kills flow",
            sublineClass: "hl4",
            bodyText:
                "ChatGPT for summaries. Claude for writing. Notion for notes. Slack for team chat. Gmail for clients. Calendar for meetings. Every tool switch murders your flow state. Tab-hopping is productivity poison—each context switch costs you 23 minutes of deep focus. Your brain becomes a pinball, bouncing between interfaces.",
            solution:
                "LyncX consolidates your tools to keep you in flow state longer.",
        },
        {
            headline: "SCREENSHOT GRAVEYARD",
            headlineClass: "hl3",
            subline: "PNG hoarder's nightmare",
            sublineClass: "hl4",
            bodyText:
                "Screen Shot 2025-07-10 at 4.46.23 PM (47).png. Your desktop is a crime scene of unnamed screenshots. That crucial error message? Buried somewhere in 200+ files. Explaining bugs to devs requires archaeological digs through your Downloads folder. Five screenshots to explain one simple workflow. Your desktop storage is 90% screenshots you'll never find again.",
            solution:
                "LyncX auto-organizes screenshots by context and content.",
        },
        {
            headline: "WORKDAY BLACK HOLE",
            headlineClass: "hl1",
            subline: "8 hours, zero progress",
            sublineClass: "hl4",
            bodyText:
                'Started with ambition. Killer to-do list. Eight hours later: not one item crossed off. Your screen time says "productive" but your output screams otherwise. Was that Twitter thread research? Did Reddit debugging count? Your browser history reads like an ADHD fever dream—work, distraction, work, rabbit hole, repeat. Time disappeared but results didn\'t materialize.',
            solution:
                "LyncX reveals where your time really goes with brutal honesty.",
        },
    ];

    const handleScroll = useCallback(() => {
        if (!sectionRef.current) return;

        const windowHeight = window.innerHeight;
        const currentScrollTop = window.scrollY;

        // Calculate step height once
        if (stepHeightRef.current === 0) {
            stepHeightRef.current = windowHeight * 0.5; // Each step is half a viewport height
        }

        // Determine scroll direction

        setLastScrollTop(currentScrollTop);

        // Calculate which step we're on based on scroll position
        const scrollPosition = currentScrollTop;
        const currentStep = Math.floor(scrollPosition / stepHeightRef.current);

        if (currentStep === 0) {
            setScrollPhase("intro");
            setVisibleColumns(0);
        } else if (currentStep >= 1 && currentStep <= columns.length) {
            setScrollPhase("columns");
            setVisibleColumns(currentStep);
        } else if (currentStep === columns.length + 1) {
            setScrollPhase("complete");
            setVisibleColumns(columns.length);
        } else if (currentStep > columns.length + 1) {
            setScrollPhase("final");
            setVisibleColumns(columns.length);
        }
    }, [columns.length, lastScrollTop]);

    useEffect(() => {
        // Add fonts
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic";
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);

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
            document.head.removeChild(link);
        };
    }, [handleScroll]);

    return (
        <>
            <div id="problem" />
            <style>{`
                .newspaper-container {
                    font-family: "Droid Serif", serif;
                    font-size: 14px;
                    color: #2f2f2f;
                    background-color: var(--bg);
                }

                .collumn {
                    font-size: 14px;
                    line-height: 20px;
                    background-color: var(--bg);
                    border: none;
                    padding: 20px;
                    margin-bottom: 20px;
                    position: relative;
                }

                .collumn .headline {
                    text-align: center;
                    line-height: normal;
                    font-family: "Playfair Display", serif;
                    display: block;
                    margin: 0 auto;
                    color: #2f2f2f;
                }

                .collumn .headline.hl1 {
                    font-weight: 700;
                    font-size: 30px;
                    text-transform: uppercase;
                    padding: 10px 0;
                }

                .collumn .headline.hl2 {
                    font-weight: 400;
                    font-style: italic;
                    font-size: 24px;
                    padding: 10px 0;
                    position: relative;
                }

                .collumn .headline.hl2:before {
                    border-top: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 7px;
                    display: block;
                    margin: 0 auto;
                }

                .collumn .headline.hl2:after {
                    border-bottom: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 13px;
                    display: block;
                    margin: 0 auto;
                }

                .collumn .headline.hl3 {
                    font-weight: 400;
                    font-style: italic;
                    font-size: 60px;
                    padding: 10px 0;
                }

                .collumn .headline.hl4 {
                    font-weight: 700;
                    font-size: 30px;
                    padding: 10px 0;
                    position: relative;
                }

                .collumn .headline.hl4:before {
                    border-top: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 7px;
                    display: block;
                    margin: 0 auto;
                }

                .collumn .headline.hl4:after {
                    border-bottom: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 10px;
                    display: block;
                    margin: 0 auto;
                }

                .collumn .headline.hl5 {
                    font-weight: 400;
                    font-size: 42px;
                    text-transform: uppercase;
                    font-style: italic;
                    padding: 10px 0;
                }

                .collumn .headline.hl6 {
                    font-weight: 400;
                    font-size: 18px;
                    padding: 10px 0;
                    position: relative;
                }

                .collumn .headline.hl6:before {
                    border-top: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 7px;
                    display: block;
                    margin: 0 auto;
                }

                .collumn .headline.hl6:after {
                    border-bottom: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 10px;
                    display: block;
                    margin: 0 auto;
                }

                .citation {
                    font-family: "Playfair Display", serif;
                    font-size: 36px;
                    line-height: 44px;
                    text-align: center;
                    font-weight: 400;
                    display: block;
                    margin: 40px 0;
                    position: relative;
                }

                .citation:before {
                    border-top: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 16px;
                    display: block;
                    margin: 0 auto;
                }

                .citation:after {
                    border-bottom: 1px solid #2f2f2f;
                    content: "";
                    width: 100px;
                    height: 16px;
                    display: block;
                    margin: 0 auto;
                }

                .solution-hint {
                    margin-top: 20px;
                    padding: 15px;
                    background-color: rgba(47, 47, 47, 0.05);
                    border: none;
                    font-size: 12px;
                    text-align: center;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.4s ease;
                }

                .collumn:hover .solution-hint {
                    opacity: 1;
                    transform: translateY(0);
                }

                .solution-hint strong {
                    font-weight: 700;
                    color: #2f2f2f;
                }

                .blur-background {
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    background-color: rgba(252, 252, 247, 0.8);
                }

                @media (max-width: 1200px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }

                @media (max-width: 900px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }

                @media (max-width: 600px) {
                    .grid-container {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            <section
                ref={sectionRef}
                className="relative min-h-[600vh] newspaper-container"
                style={{
                    height: `${(columns.length + 3) * 100}vh`, // +3 for intro, complete, and final
                }}
            >
                {/* Intro section */}
                <div
                    className={`sticky top-0 h-screen flex items-center justify-center transition-opacity duration-1000 ${
                        scrollPhase === "intro"
                            ? "opacity-100"
                            : "opacity-60 pointer-events-none"
                    }`}
                >
                    <div className="text-center max-w-4xl px-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-['Playfair_Display']">
                            Every browser promises to make you faster. Most just
                            make you busier.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 font-['Droid_Serif'] italic">
                            Let's look at the evidence.
                        </p>
                    </div>
                </div>

                {/* Columns section */}
                <div
                    className={`sticky top-0 h-screen flex items-center justify-center transition-opacity duration-1000 ${
                        scrollPhase === "columns" || scrollPhase === "complete"
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                >
                    <div className="w-full max-w-7xl px-8">
                        <div className="grid grid-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
                            {columns.map((column, index) => (
                                <div
                                    key={index}
                                    className={`
                                        collumn w-full max-w-[280px] h-[500px] relative flex flex-col
                                        transition-all duration-700 ease-out hover:translate-y-[-4px]
                                        ${
                                            index < visibleColumns
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-20 opacity-0"
                                        }
                                    `}
                                    style={{
                                        transitionDelay: `${index * 200}ms`,
                                    }}
                                >
                                    <div className="text-center mb-4">
                                        <span
                                            className={`headline ${column.headlineClass}`}
                                        >
                                            {column.headline}
                                        </span>
                                        <p>
                                            <span
                                                className={`headline ${column.sublineClass}`}
                                            >
                                                {column.subline}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex-grow font-['Droid_Serif'] text-sm leading-relaxed text-[#2f2f2f]">
                                        {column.bodyText}
                                    </div>

                                    <div className="solution-hint">
                                        <strong>{column.solution}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final section with blurred background */}
                <div
                    className={`sticky top-0 h-screen transition-opacity duration-1000 ${
                        scrollPhase === "final"
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    {/* Blurred background with columns */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-7xl px-8 opacity-30">
                            <div className="grid grid-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
                                {columns.map((column, index) => (
                                    <div
                                        key={index}
                                        className="collumn w-full max-w-[280px] h-[500px] relative flex flex-col"
                                    >
                                        <div className="text-center mb-4">
                                            <span
                                                className={`headline ${column.headlineClass}`}
                                            >
                                                {column.headline}
                                            </span>
                                            <p>
                                                <span
                                                    className={`headline ${column.sublineClass}`}
                                                >
                                                    {column.subline}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="flex-grow font-['Droid_Serif'] text-sm leading-relaxed text-[#2f2f2f]">
                                            {column.bodyText}
                                        </div>

                                        <div className="solution-hint opacity-100">
                                            <strong>{column.solution}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Foreground content */}
                    <div className="absolute inset-0 flex items-center justify-center blur-background">
                        <div className="text-center">
                            <h3 className="text-5xl md:text-7xl font-bold text-[#2f2f2f] mb-4 font-['Playfair_Display'] uppercase">
                                Too much to read?
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 italic">
                                With LyncX, right-click on any text and generate
                                summary instantly.
                            </p>
                            <p className="text-sm md:text-xl text-gray-600 italic">
                                And that's just the beginning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProblemAgitationSection;
