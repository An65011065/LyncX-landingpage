import React, { useEffect, useRef } from "react";

interface StorySectionProps {
    id: string;
    title: string;
    description: string;
}

export const StorySection: React.FC<StorySectionProps> = ({
    id,
    title,
    description,
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0",
                        );
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px",
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="py-32 px-6 max-w-7xl mx-auto opacity-0 transform translate-y-12 transition-all duration-800 ease-out"
        >
            <h2 className="text-4xl font-semibold tracking-tight text-center mb-6">
                {title}
            </h2>
            <p className="text-lg text-[var(--muted-text)] text-center max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </section>
    );
};
