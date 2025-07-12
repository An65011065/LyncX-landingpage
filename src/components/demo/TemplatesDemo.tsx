import { Layout, Circle } from "lucide-react";

interface TemplatesProps {
    isDarkMode?: boolean;
}

const Templates = ({ isDarkMode = false }: TemplatesProps) => {
    // Hardcoded templates data
    const templates = [
        {
            name: "Office",
            urls: [
                "https://gmail.com",
                "https://calendar.google.com",
                "https://drive.google.com",
            ],
            backgroundColor: "#4285f4", // Blue
        },
        {
            name: "Research",
            urls: [
                "https://scholar.google.com",
                "https://arxiv.org",
                "https://pubmed.ncbi.nlm.nih.gov",
                "https://researchgate.net",
                "https://jstor.org",
                "https://springer.com",
                "https://nature.com",
            ],
            backgroundColor: "#34a853", // Green
        },
        {
            name: "NetworkSci",
            urls: [
                "https://networkx.org",
                "https://gephi.org",
                "https://cytoscape.org",
                "https://igraph.org",
            ],
            backgroundColor: "#9c27b0", // Purple
        },
    ];

    const handleAddNewClick = () => {
        // Do nothing - just visual
    };

    const handleOpenTemplate = (_template: any) => {
        // Do nothing - just visual
    };

    const displayedTemplates = templates;
    const placeholdersNeeded = Math.max(0, 3 - displayedTemplates.length);

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
                    <Layout
                        size={16}
                        className={isDarkMode ? "text-white" : "text-gray-700"}
                    />
                    <div
                        className={`
                            text-sm font-medium
                            ${isDarkMode ? "text-white" : "text-gray-900"}
                        `}
                    >
                        Templates
                    </div>
                </div>
            </div>

            {/* Templates Grid */}
            <div className="overflow-x-auto overflow-y-hidden -mx-3 px-3">
                <div
                    className="grid gap-1"
                    style={{
                        gridTemplateColumns: `repeat(${Math.max(
                            4,
                            displayedTemplates.length + 1,
                        )}, 1fr)`,
                        width:
                            displayedTemplates.length > 3
                                ? "fit-content"
                                : "100%",
                    }}
                >
                    {/* Add New Template Button */}
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
                            Add New
                        </div>
                    </div>

                    {/* Template Items */}
                    {displayedTemplates.map((template, index) => (
                        <div key={index} className="relative">
                            <div
                                onClick={() => handleOpenTemplate(template)}
                                className={`
                                    h-12 min-w-20 p-2 rounded-lg border
                                    flex flex-col items-center justify-center gap-1
                                    transition-all cursor-pointer
                                    ${
                                        isDarkMode
                                            ? "border-white/20"
                                            : "border-gray-200"
                                    }
                                `}
                                style={{
                                    backgroundColor: template.backgroundColor
                                        ? isDarkMode
                                            ? `${template.backgroundColor}80`
                                            : `${template.backgroundColor}20`
                                        : isDarkMode
                                        ? "rgba(255, 255, 255, 0.1)"
                                        : "#f9fafb",
                                    borderColor: template.backgroundColor
                                        ? `${template.backgroundColor}60`
                                        : undefined,
                                }}
                                onMouseEnter={(e) => {
                                    if (isDarkMode) {
                                        e.currentTarget.style.backgroundColor =
                                            template.backgroundColor
                                                ? `${template.backgroundColor}A6`
                                                : "rgba(255, 255, 255, 0.15)";
                                    } else {
                                        e.currentTarget.style.backgroundColor =
                                            template.backgroundColor
                                                ? `${template.backgroundColor}40`
                                                : "#f3f4f6";
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 12px rgba(0, 0, 0, 0.1)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (isDarkMode) {
                                        e.currentTarget.style.backgroundColor =
                                            template.backgroundColor
                                                ? `${template.backgroundColor}80`
                                                : "rgba(255, 255, 255, 0.1)";
                                    } else {
                                        e.currentTarget.style.backgroundColor =
                                            template.backgroundColor
                                                ? `${template.backgroundColor}20`
                                                : "#f9fafb";
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
                                                : "text-gray-900"
                                        }
                                    `}
                                >
                                    {template.name}
                                </div>
                                <div
                                    className={`
                                        text-xs text-center
                                        ${
                                            isDarkMode
                                                ? "text-white/50"
                                                : "text-gray-500"
                                        }
                                    `}
                                >
                                    {template.urls.length} tabs
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder Templates */}
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
                                    Empty
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default Templates;
