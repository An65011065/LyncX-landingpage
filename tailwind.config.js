/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.html",
        "./landing/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                accent: "#3f51b5",
                bg: "#fcfcf7",
                "card-bg": "#fefefe",
                border: "#e2e2e2",
                text: "#111",
                "muted-text": "#666",
                "light-gray": "#f8f8f8",
                productive: "#28a745",
                leisure: "#ff6b6b",
            },
            fontFamily: {
                sans: [
                    "SF Pro Text",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "sans-serif",
                ],
            },
            animation: {
                "fade-in-up": "fadeInUp 1s ease forwards",
                "slide-in": "slideIn 1.2s ease forwards",
                typing: "typing 2s steps(6) 2s forwards",
                blink: "blink 1s infinite 4s",
                "fade-in": "fadeIn 1s ease forwards",
                "draw-line": "drawLine 2s ease forwards",
                "padlock-pulse": "padlockPulse 3s ease-in-out infinite",
                "shackle-close": "shackleClose 2s ease-in-out 1s infinite",
                "typing-pulse": "typingPulse 1.5s ease-in-out infinite",
                "dot-bounce": "dotBounce 1.4s ease-in-out infinite",
                "center-pulse": "centerPulse 3s ease-in-out infinite",
                "context-menu-appear": "contextMenuAppear 0.5s ease forwards",
            },
            keyframes: {
                fadeInUp: {
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideIn: {
                    to: {
                        opacity: "1",
                        transform: "translateY(0) rotateX(0)",
                    },
                },
                typing: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                blink: {
                    "50%": { "border-color": "transparent" },
                },
                fadeIn: {
                    to: { opacity: "1" },
                },
                drawLine: {
                    from: {
                        "stroke-dasharray": "1000",
                        "stroke-dashoffset": "1000",
                        opacity: "0",
                    },
                    to: {
                        "stroke-dasharray": "1000",
                        "stroke-dashoffset": "0",
                        opacity: "1",
                    },
                },
                padlockPulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
                shackleClose: {
                    "0%, 100%": { transform: "translateX(-50%) rotate(0deg)" },
                    "50%": { transform: "translateX(-50%) rotate(-2deg)" },
                },
                typingPulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" },
                },
                dotBounce: {
                    "0%, 60%, 100%": { transform: "translateY(0)" },
                    "30%": { transform: "translateY(-8px)" },
                },
                centerPulse: {
                    "0%, 100%": {
                        transform: "translate(400px, 200px) scale(1)",
                    },
                    "50%": { transform: "translate(400px, 200px) scale(1.05)" },
                },
                contextMenuAppear: {
                    to: {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
