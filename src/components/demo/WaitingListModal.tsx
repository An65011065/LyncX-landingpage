import React, { useEffect, useState } from "react";

interface WaitingListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitingListModal: React.FC<WaitingListModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Auto close after success
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setEmail("");
        }, 2000);
    };

    const resetModal = () => {
        setIsSubmitted(false);
        setEmail("");
    };

    useEffect(() => {
        if (!isOpen) {
            resetModal();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative bg-[var(--bg)] rounded-2xl border border-[var(--border)] w-full max-w-md mx-4 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="p-8">
                    {!isSubmitted ? (
                        <>
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-light text-[var(--text)] mb-3 tracking-tight">
                                    Join the Waiting List
                                </h2>
                                <p className="text-[var(--muted-text)] leading-relaxed font-light">
                                    Get early access when LyncX launches.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-4 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted-text)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] transition-all duration-200 font-light text-base"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || !email.trim()}
                                    className="w-full bg-[var(--accent-color)] text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span className="font-light">Joining...</span>
                                        </div>
                                    ) : (
                                        "Join Waiting List"
                                    )}
                                </button>
                            </form>

                        </>
                    ) : (
                        /* Success State */
                        <div className="text-center py-8">
                            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-light text-[var(--text)] mb-3 tracking-tight">
                                You're In!
                            </h2>
                            <p className="text-[var(--muted-text)] font-light leading-relaxed">
                                Thanks for joining! We'll notify you when LyncX is ready.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};