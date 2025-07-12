import { useState } from "react";
import { Timer, Circle, Trash2 } from "lucide-react";

interface TimersProps {
    isDarkMode?: boolean;
}

const Timers = ({ isDarkMode = false }: TimersProps) => {
    const [isDeleteMode, setIsDeleteMode] = useState(false);

    // Hardcoded timers data - static times that don't tick down
    const timers = [
        {
            id: "youtube.com",
            name: "youtube.com",
            endTime: Date.now() + 25 * 60 * 1000, // 25 minutes from now
            minutes: 25,
            timeRemaining: "25:00",
        },
        {
            id: "x.com",
            name: "x.com",
            endTime: Date.now() + 30 * 60 * 1000, // 30 minutes from now
            minutes: 30,
            timeRemaining: "30:00",
        },
    ];

    const handleAddNewClick = () => {
        // Do nothing - just visual
    };

    const formatTimeRemaining = (timeRemaining: string) => {
        return timeRemaining;
    };

    const placeholdersNeeded = Math.max(0, 3 - timers.length);

    return (
        <div
            className={`
                h-full flex flex-col relative transition-all duration-300 p-3 gap-2
                ${
                    isDarkMode
                        ? "bg-white/5 border border-white/10 backdrop-blur-sm"
                        : "bg-white border border-gray-200 shadow-sm"
                }
                rounded-2xl
            `}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Timer
                        size={16}
                        className={isDarkMode ? "text-white" : "text-gray-700"}
                    />
                    <div
                        className={`
                            text-sm font-medium
                            ${isDarkMode ? "text-white" : "text-gray-900"}
                        `}
                    >
                        Timers
                    </div>
                </div>

                {/* Delete mode toggle */}
                <button
                    onClick={() => setIsDeleteMode(!isDeleteMode)}
                    className={`
                        p-1 rounded-lg transition-colors
                        ${
                            isDarkMode
                                ? "hover:bg-white/10"
                                : "hover:bg-gray-100"
                        }
                    `}
                >
                    <Trash2
                        size={14}
                        className={
                            isDeleteMode
                                ? "text-red-500"
                                : isDarkMode
                                ? "text-white/50"
                                : "text-gray-400"
                        }
                    />
                </button>
            </div>

            {/* Timers Grid */}
            <div className="overflow-x-auto overflow-y-hidden -mx-3 px-3">
                <div
                    className="grid gap-1"
                    style={{
                        gridTemplateColumns: `repeat(${Math.max(
                            4,
                            timers.length + 1,
                        )}, 1fr)`,
                        width: timers.length > 3 ? "fit-content" : "100%",
                    }}
                >
                    {/* Add New Timer Button */}
                    <div
                        onClick={handleAddNewClick}
                        className={`
                            h-12 min-w-20 p-2 rounded-lg border cursor-pointer
                            flex flex-col items-center justify-center gap-1
                            transition-all
                            ${
                                isDarkMode
                                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                                    : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                            }
                        `}
                    >
                        <div
                            className={`
                                text-xs font-medium text-center
                                ${
                                    isDarkMode
                                        ? "text-white/70"
                                        : "text-gray-600"
                                }
                            `}
                        >
                            Add Timer
                        </div>
                    </div>

                    {/* Timer Items */}
                    {timers.map((timer) => {
                        return (
                            <div key={timer.id} className="relative">
                                <div
                                    className={`
                                        h-12 min-w-20 p-2 rounded-lg border
                                        flex flex-col items-center justify-center gap-1
                                        transition-all cursor-pointer
                                        ${
                                            isDarkMode
                                                ? "border-white/20"
                                                : "bg-orange-50 border-orange-200"
                                        }
                                    `}
                                    style={
                                        isDarkMode
                                            ? {
                                                  background:
                                                      "rgba(249, 115, 22, 0.2)",
                                              }
                                            : {}
                                    }
                                    onMouseEnter={(e) => {
                                        if (isDarkMode) {
                                            e.currentTarget.style.background =
                                                "rgba(249, 115, 22, 0.3)";
                                        } else {
                                            e.currentTarget.style.backgroundColor =
                                                "#fed7aa40";
                                            e.currentTarget.style.boxShadow =
                                                "0 4px 12px rgba(0, 0, 0, 0.1)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (isDarkMode) {
                                            e.currentTarget.style.background =
                                                "rgba(249, 115, 22, 0.2)";
                                        } else {
                                            e.currentTarget.style.backgroundColor =
                                                "#fff7ed";
                                            e.currentTarget.style.boxShadow =
                                                "none";
                                        }
                                    }}
                                >
                                    <div
                                        className={`
                                            text-xs font-medium text-center break-words leading-tight
                                            ${
                                                isDarkMode
                                                    ? "text-white"
                                                    : "text-orange-700"
                                            }
                                        `}
                                    >
                                        {timer.name}
                                    </div>
                                    <div
                                        className={`
                                            text-xs text-center font-medium
                                            ${
                                                isDarkMode
                                                    ? "text-white/50"
                                                    : "text-orange-600"
                                            }
                                        `}
                                    >
                                        {formatTimeRemaining(
                                            timer.timeRemaining,
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Placeholder Timers */}
                    {Array.from({ length: placeholdersNeeded }).map(
                        (_, index) => (
                            <div
                                key={`placeholder-${index}`}
                                className={`
                                    h-12 min-w-20 p-2 rounded-lg border
                                    flex flex-col items-center justify-center gap-1
                                    ${
                                        isDarkMode
                                            ? "bg-white/5 border-white/10"
                                            : "bg-gray-25 border-gray-100"
                                    }
                                `}
                            >
                                <Circle
                                    size={16}
                                    className={
                                        isDarkMode
                                            ? "text-white/30"
                                            : "text-gray-300"
                                    }
                                />
                                <div
                                    className={`
                                        text-xs text-center
                                        ${
                                            isDarkMode
                                                ? "text-white/30"
                                                : "text-gray-400"
                                        }
                                    `}
                                >
                                    Add Timer
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timers;
