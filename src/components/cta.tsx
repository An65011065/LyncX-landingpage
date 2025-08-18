import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section
            className="py-20 px-6"
            style={{ 
                background: "#fffbf0",
                fontFamily: '"Nunito", sans-serif'
            }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 
                    className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
                    style={{ color: "#2d1810" }}
                >
                    Ready to browse with intention?
                </h2>
                
                <p 
                    className="text-xl mb-8 max-w-2xl mx-auto"
                    style={{ color: "#8b4513" }}
                >
                    Install LyncX and discover how intentional browsing transforms your online experience.
                </p>

                <button
                    onClick={() => navigate("/auth")}
                    className="px-8 py-4 rounded-lg text-lg font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg mb-6"
                    style={{
                        background: "#c68346",
                        color: "white"
                    }}
                >
                    Install Free
                </button>

                <p 
                    className="text-sm"
                    style={{ color: "#8b4513", opacity: 0.8 }}
                >
                    Available for all Chromium browsers • Free to use
                </p>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t" style={{ borderColor: "rgba(139, 69, 19, 0.2)" }}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p 
                            className="text-sm"
                            style={{ color: "#8b4513", opacity: 0.7 }}
                        >
                            © 2025 LyncX. All rights reserved.
                        </p>
                        <a
                            href="mailto:questions@lyncx.ai"
                            className="text-sm transition-colors hover:opacity-80"
                            style={{ color: "#c68346" }}
                        >
                            questions@lyncx.ai
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
