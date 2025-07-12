import React, { useEffect } from "react";

const Timeline: React.FC = () => {
    useEffect(() => {
        // Magnetic effect
        const handleMagnetic = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const el = mouseEvent.currentTarget as HTMLElement;
            const rect = el.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            el.style.transform = `perspective(1000px) rotateX(${
                deltaY * 5
            }deg) rotateY(${deltaX * 5}deg) translateZ(20px)`;
        };

        const handleMagneticLeave = (e: Event) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
        };

        document.querySelectorAll(".magnetic").forEach((el) => {
            el.addEventListener("mousemove", handleMagnetic);
            el.addEventListener("mouseleave", handleMagneticLeave);
        });

        return () => {
            document.querySelectorAll(".magnetic").forEach((el) => {
                el.removeEventListener("mousemove", handleMagnetic);
                el.removeEventListener("mouseleave", handleMagneticLeave);
            });
        };
    }, []);

    return (
        <section className="timeline-section">
            <style>{`
                /* Timeline Section */
                .timeline-section {
                    padding: 8rem 0;
                    background: #fff 100%);
                    position: relative;
                }
                .timeline-header {
                    text-align: center;
                    margin-bottom: 6rem;
                    opacity: 0;
                    transform: translateY(30px);
                }
                .timeline-header h2 {
                    font-size: 3rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #1a1a1a;
                }
                .timeline-header p {
                    font-size: 1.3rem;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .timeline {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem 0;
                }
                .timeline::before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(to bottom, #667eea, #764ba2);
                    transform: translateX(-50%);
                    border-radius: 2px;
                }
                .timeline-item {
                    position: relative;
                    margin: 4rem 0;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: all 0.6s ease;
                }
                .timeline-item:nth-child(odd) {
                    padding-right: 50%;
                    text-align: right;
                }
                .timeline-item:nth-child(even) {
                    padding-left: 50%;
                    text-align: left;
                }
                .timeline-item::before {
                    content: attr(data-time);
                    position: absolute;
                    top: 0;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #667eea;
                    background: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border: 2px solid #667eea;
                    white-space: nowrap;
                }
                .timeline-item:nth-child(odd)::before {
                    right: calc(50% + 2rem);
                }
                .timeline-item:nth-child(even)::before {
                    left: calc(50% + 2rem);
                }
                .timeline-dot {
                    position: absolute;
                    top: 1rem;
                    left: 50%;
                    width: 20px;
                    height: 20px;
                    background: #667eea;
                    border-radius: 50%;
                    transform: translateX(-50%);
                    border: 4px solid white;
                    box-shadow: 0 0 0 3px #667eea;
                    transition: all 0.3s ease;
                }
                .timeline-item:hover .timeline-dot {
                    transform: translateX(-50%) scale(1.3);
                    background: #764ba2;
                    box-shadow: 0 0 0 3px #764ba2, 0 0 20px rgba(102, 126, 234, 0.5);
                }
                .timeline-content {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e9ecef;
                    margin-top: 3rem;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .timeline-content::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(to bottom, #667eea, #764ba2);
                    transform: scaleY(0);
                    transition: transform 0.3s ease;
                    transform-origin: top;
                }
                .timeline-item:hover .timeline-content::before {
                    transform: scaleY(1);
                }
                .timeline-item:hover .timeline-content {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
                }
                .scenario {
                    font-size: 1.4rem;
                    font-style: italic;
                    color: #1a1a1a;
                    margin-bottom: 1.5rem;
                    line-height: 1.4;
                    position: relative;
                }
                .scenario::before {
                    content: '"';
                    font-size: 3rem;
                    color: #667eea;
                    position: absolute;
                    left: -2rem;
                    top: -1rem;
                    opacity: 0.3;
                }
                .scenario::after {
                    content: '"';
                    font-size: 3rem;
                    color: #667eea;
                    position: absolute;
                    right: -1rem;
                    bottom: -2rem;
                    opacity: 0.3;
                }
                .solution {
                    font-size: 1.1rem;
                    color: #666;
                    line-height: 1.6;
                }
                .solution strong {
                    color: #667eea;
                    font-weight: 600;
                }
                /* Arrow connectors */
                .timeline-item:nth-child(odd) .timeline-content::after {
                    content: "";
                    position: absolute;
                    top: 2rem;
                    right: -10px;
                    width: 0;
                    height: 0;
                    border-left: 10px solid white;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
                .timeline-item:nth-child(even) .timeline-content::after {
                    content: "";
                    position: absolute;
                    top: 2rem;
                    left: -10px;
                    width: 0;
                    height: 0;
                    border-right: 10px solid white;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
                /* Animation classes */
                .timeline-animate {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                /* Responsive timeline */
                @media (max-width: 768px) {
                    .timeline::before {
                        left: 2rem;
                    }
                    .timeline-item {
                        padding-left: 4rem !important;
                        padding-right: 0 !important;
                        text-align: left !important;
                    }
                    .timeline-item::before {
                        left: 0 !important;
                        right: auto !important;
                    }
                    .timeline-dot {
                        left: 2rem !important;
                    }
                    .timeline-item .timeline-content::after {
                        left: -10px !important;
                        right: auto !important;
                        border-right: 10px solid white !important;
                        border-left: none !important;
                    }
                    .timeline-header h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
            <div className="container">
                <div className="timeline-header">
                    <p>
                        We've all been through the messiness of digital life.{" "}
                        <br />
                        Here's how LyncX helps throughout your day.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline-item magnetic" data-time="9:30 AM">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="scenario">
                                "I was supposed to be working on something
                                else..."
                            </div>
                            <div className="solution">
                                <strong>Smart Website Locks</strong> keep you on
                                track with gentle boundaries
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item magnetic" data-time="2:15 PM">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="scenario">
                                "I saw this earlier but I can't find it..."
                            </div>
                            <div className="solution">
                                <strong>Browsing Network Graph</strong>
                                shows exactly how you found any page
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item magnetic" data-time="6:45 PM">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="scenario">
                                "Wait, I need to remember what that article
                                said..."
                            </div>
                            <div className="solution">
                                <strong>One-Click Summaries</strong> and
                                <strong>Website Notes</strong> capture
                                everything
                            </div>
                        </div>
                    </div>

                    <div
                        className="timeline-item magnetic"
                        data-time="11:30 PM"
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="scenario">
                                "How is it already 1am? Where did my time go?"
                            </div>
                            <div className="solution">
                                <strong>Deep Insights Dashboard</strong>
                                shows where every minute went
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
