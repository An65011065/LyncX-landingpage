import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Power } from "lucide-react";

interface AdvancedPowerButtonProps {
    onLockStateChange: (isLocked: boolean) => void;
    isPowerOn: boolean;
    onPowerStateChange: (isPowerOn: boolean) => void;
    isPlaying: boolean;
    isDarkMode?: boolean;
    isAuthenticated?: boolean;
}

export const AdvancedPowerButton: React.FC<AdvancedPowerButtonProps> = ({
    onLockStateChange,
    isPowerOn,
    onPowerStateChange,
    isPlaying,
    isDarkMode = false,
    isAuthenticated = false,
}) => {
    const [, setIsPressed] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handlePowerClick = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
            if (isAuthenticated) {
                // When authenticated, just notify parent that button was clicked
                // Parent will decide whether to play or pause based on current playback state
                onPowerStateChange(true);
            } else {
                // When not authenticated, toggle power state for OAuth flow
                const newPowerState = !isPowerOn;
                onPowerStateChange(newPowerState);
                onLockStateChange(!newPowerState);
            }
        }, 300);
    };

    useEffect(() => {
        let animationId: number;
        if (isPlaying) {
            const animate = () => {
                setRotation((prev) => (prev + 0.5) % 360);
                animationId = requestAnimationFrame(animate);
            };
            animationId = requestAnimationFrame(animate);
        }
        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isPlaying]);

    return (
        <div className="relative w-72 h-72">
            {/* Outer Glass Ring */}
            <div
                className={`absolute inset-0 rounded-full backdrop-blur-md border transition-all duration-500 ${
                    isDarkMode
                        ? "bg-slate-900/20 border-slate-700/30"
                        : "bg-white/20 border-orange-200/40"
                } ${
                    isPowerOn ? "shadow-2xl shadow-orange-500/20" : "shadow-lg"
                }`}
            />

            {/* Middle Glass Ring */}
            <div
                className={`absolute inset-6 rounded-full backdrop-blur-md border transition-all duration-300 ${
                    isDarkMode
                        ? "bg-slate-900/30 border-slate-700/40"
                        : "bg-white/40 border-orange-200/50"
                } ${
                    isPowerOn ? "shadow-xl shadow-orange-400/15" : "shadow-lg"
                }`}
            />

            {/* Inner Glass Ring - Main control area */}
            <div
                className={`absolute inset-12 rounded-full border transition-all duration-300 ${
                    isDarkMode
                        ? "bg-slate-900/60 border-slate-700/50"
                        : "bg-white/70 border-orange-200/60"
                } ${
                    isPowerOn ? "shadow-2xl border-orange-300/70" : "shadow-lg"
                } hover:shadow-xl`}
            >
                {/* Power button */}
                <motion.button
                    className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center ${
                        isPowerOn
                            ? "bg-[#c68346] text-white border-orange-400/60 shadow-xl shadow-orange-500/30"
                            : isDarkMode
                            ? "bg-slate-800 text-slate-400 border-slate-700/50 hover:bg-slate-700"
                            : "bg-[#fbc28c] text-gray-600 border-orange-200/50 hover:bg-gray-50"
                    }`}
                    style={{
                        x: "-50%",
                        y: "-50%",
                    }}
                    onClick={handlePowerClick}
                    transition={{ duration: 0.1 }}
                >
                    <Power size={32} className="transition-all duration-300" />
                </motion.button>

                {/* Status indicator dot */}
                {(isPowerOn || isAuthenticated) && (
                    <motion.div
                        className="absolute w-3 h-3 rounded-full bg-[#c68346] shadow-lg"
                        style={{
                            top: "20px",
                            left: "calc(50% - 6px)",
                            transformOrigin: "center 64px",
                            rotate: rotation,
                            boxShadow: "0 0 12px rgba(198, 131, 70, 0.6)",
                        }}
                    />
                )}
            </div>

            {/* Warm glow effect when playing */}
            {(isPowerOn || isAuthenticated) && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-orange-500/5 backdrop-blur-sm pointer-events-none"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={
                        isPlaying
                            ? {
                                  scale: 1,
                                  opacity: 0.6,
                              }
                            : {
                                  scale: 1,
                                  opacity: 0,
                              }
                    }
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                />
            )}

            {/* Pulsing overlay effect when playing */}
            {(isPowerOn || isAuthenticated) && isPlaying && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-orange-500/3 backdrop-blur-sm pointer-events-none"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
            )}
        </div>
    );
};
