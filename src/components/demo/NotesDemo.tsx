import React, { useState, useRef } from "react";
import {
    FileText,
    Search,
    ChevronRight,
    Calendar,
    Plus,
    ArrowLeft,
    Save,
    Copy,
    Tag,
    ExternalLink,
} from "lucide-react";

const NotesOverview = ({ isDarkMode = false }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [newNoteDomain, setNewNoteDomain] = useState("");
    const [newNoteContent, setNewNoteContent] = useState("");
    const [selectedNote, setSelectedNote] = useState(null);
    const [isSaving, setSaving] = useState(false);
    const [copyMessage, setCopyMessage] = useState("");
    const textareaRef = useRef(null);
    const searchInputRef = useRef(null);

    // Hardcoded notes data
    const notes = [
        {
            domain: "x.com",
            content: "Check out the new AI research thread by @elonmusk about neural interfaces and brain-computer connectivity breakthroughs",
            lastModified: Date.now() - 3600000, // 1 hour ago
            createdAt: Date.now() - 86400000, // 1 day ago
        },
        {
            domain: "arxiv.org",
            content: "Interesting paper on transformer architecture improvements - potential 40% efficiency gains in language models",
            lastModified: Date.now() - 7200000, // 2 hours ago
            createdAt: Date.now() - 172800000, // 2 days ago
        },
        {
            domain: "canvas.instructure.com",
            content: "Assignment deadline: Machine Learning project due Friday 11:59 PM - remember to submit both code and documentation",
            lastModified: Date.now() - 10800000, // 3 hours ago
            createdAt: Date.now() - 259200000, // 3 days ago
        },
        {
            domain: "dashboard.shutterstock.com",
            content: "Downloaded high-res images for client project - reference numbers: SS-12345, SS-67890 for marketing campaign",
            lastModified: Date.now() - 14400000, // 4 hours ago
            createdAt: Date.now() - 345600000, // 4 days ago
        },
        {
            domain: "github.com",
            content: "Fix the authentication bug in user login flow - issue #247 needs to be resolved before next sprint",
            lastModified: Date.now() - 18000000, // 5 hours ago
            createdAt: Date.now() - 432000000, // 5 days ago
        }
    ];

    const handleSaveNote = (domain, content) => {
        setSaving(true);
        // Simulate saving delay
        setTimeout(() => {
            setSaving(false);
            if (selectedNote) {
                setSelectedNote(prev => ({
                    ...prev,
                    content,
                    lastModified: Date.now(),
                }));
            }
        }, 500);
    };

    const handleAddNote = () => {
        if (!newNoteDomain.trim() || !newNoteContent.trim()) return;
        
        setNewNoteDomain("");
        setNewNoteContent("");
        setIsAddingNote(false);
    };

    const handleCopyNote = async (content) => {
        if (content.trim()) {
            try {
                await navigator.clipboard.writeText(content);
                setCopyMessage("Note copied to clipboard");
                setTimeout(() => setCopyMessage(""), 2000);
            } catch (err) {
                console.error("Failed to copy note:", err);
            }
        }
    };

    const addTimestamp = (content, setContent) => {
        const timestamp = new Date().toLocaleString();
        const newText = content + (content ? "\n\n" : "") + `--- ${timestamp} ---\n`;
        setContent(newText);
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newText.length;
            }
        }, 0);
    };

    const formatLastModified = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    const getPreviewText = (content) => {
        if (!content || typeof content !== "string") {
            return "";
        }
        const firstLine = content.split("\n")[0];
        return firstLine.length > 80 ? firstLine.slice(0, 80) + "..." : firstLine;
    };

    const openLink = (domain) => {
        window.open(`https://${domain}`, "_blank");
    };

    const handleSearchIconClick = () => {
        if (isSearchExpanded) {
            setSearchQuery("");
            setIsSearchExpanded(false);
        } else {
            setIsSearchExpanded(true);
        }
    };

    const filteredNotes = notes.filter(
        (note) =>
            note.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Render note editor (used for both viewing and editing)
    const renderNoteEditor = (note, onClose, isNew = false) => {
        const editorClasses = `absolute inset-0 ${
            isDarkMode
                ? "bg-black bg-opacity-95 border-white border-opacity-20"
                : "bg-white border-gray-200"
        } rounded-2xl flex flex-col p-5 border shadow-xl backdrop-blur-sm`;
        
        return (
            <div className={editorClasses}>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg transition-colors ${
                                isDarkMode
                                    ? "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <div
                                className={`text-lg font-medium flex items-center gap-2 ${
                                    isDarkMode ? "text-white" : "text-black"
                                }`}
                            >
                                <Tag size={16} />
                                {isNew ? (
                                    <input
                                        type="text"
                                        value={newNoteDomain}
                                        onChange={(e) => setNewNoteDomain(e.target.value)}
                                        placeholder="Enter domain..."
                                        className={`bg-transparent border-none outline-none text-lg placeholder-gray-400 ${
                                            isDarkMode ? "text-white" : "text-black"
                                        }`}
                                    />
                                ) : (
                                    note.domain
                                )}
                            </div>
                            <div
                                className={`text-sm flex items-center gap-2 ${
                                    isDarkMode
                                        ? "text-white text-opacity-60"
                                        : "text-gray-500"
                                }`}
                            >
                                {isSaving ? (
                                    <>
                                        <Save size={12} />
                                        Saving...
                                    </>
                                ) : (
                                    formatLastModified(note.lastModified)
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                addTimestamp(
                                    isNew ? newNoteContent : note.content,
                                    isNew
                                        ? setNewNoteContent
                                        : (content) => handleSaveNote(note.domain, content),
                                )
                            }
                            className={`p-2 rounded-lg transition-colors ${
                                isDarkMode
                                    ? "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                            }`}
                            title="Add timestamp"
                        >
                            <Calendar size={16} />
                        </button>
                        <button
                            onClick={() => handleCopyNote(isNew ? newNoteContent : note.content)}
                            className={`p-2 rounded-lg transition-colors ${
                                isDarkMode
                                    ? "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                            }`}
                            title="Copy note"
                        >
                            <Copy size={16} />
                        </button>
                        <button
                            onClick={() => openLink(note.domain)}
                            className={`p-2 rounded-lg transition-colors ${
                                isDarkMode
                                    ? "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                            }`}
                            title="Open website"
                        >
                            <ExternalLink size={16} />
                        </button>
                    </div>
                </div>
                {/* Copy Message */}
                {copyMessage && (
                    <div
                        className={`p-2 rounded-lg text-sm mb-3 text-center border ${
                            isDarkMode
                                ? "bg-green-500 bg-opacity-20 text-green-400 border-green-400 border-opacity-30"
                                : "bg-green-50 text-green-700 border-green-200"
                        }`}
                    >
                        {copyMessage}
                    </div>
                )}
                {/* Text Editor */}
                <textarea
                    ref={textareaRef}
                    value={isNew ? newNoteContent : note.content}
                    onChange={(e) => {
                        if (isNew) {
                            setNewNoteContent(e.target.value);
                        } else {
                            handleSaveNote(note.domain, e.target.value);
                        }
                    }}
                    placeholder={`Write your note about ${note.domain}...`}
                    className={`flex-1 p-4 rounded-lg resize-none text-sm leading-relaxed outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDarkMode
                            ? "bg-white bg-opacity-5 border-white border-opacity-10 text-white placeholder-gray-400"
                            : "bg-gray-50 border-gray-200 text-black placeholder-gray-400"
                    } border`}
                />
                {isNew && (
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            onClick={onClose}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                                isDarkMode
                                    ? "border-white border-opacity-20 bg-transparent text-white hover:bg-white hover:bg-opacity-10"
                                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                            } border`}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAddNote}
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
                        >
                            Add Note
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const containerClasses = `${
        isDarkMode
            ? "bg-white bg-opacity-5 border-white border-opacity-10"
            : "bg-white border-gray-200"
    } rounded-2xl border shadow-lg p-3 h-full flex flex-col gap-3 relative backdrop-blur-sm`;

    return (
        <div className={containerClasses}>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <FileText
                        size={16}
                        className={isDarkMode ? "text-white" : "text-gray-700"}
                    />
                    <h3
                        className={`text-sm font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Site Notes
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    {/* Search Icon/Bar */}
                    <div
                        className="relative flex items-center transition-all duration-300"
                        style={{ width: isSearchExpanded ? "200px" : "32px" }}
                    >
                        {isSearchExpanded && (
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search notes..."
                                className={`w-full py-1 px-3 pr-8 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    isDarkMode
                                        ? "bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-gray-400"
                                        : "bg-gray-100 border-gray-200 text-black placeholder-gray-400"
                                } border`}
                            />
                        )}
                        <button
                            onClick={handleSearchIconClick}
                            className={`${
                                isSearchExpanded ? "absolute right-2" : ""
                            } p-1 rounded transition-colors ${
                                isDarkMode
                                    ? "text-white hover:bg-white hover:bg-opacity-10"
                                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                        >
                            <Search size={16} />
                        </button>
                    </div>
                    {/* New Note Button */}
                    <button
                        onClick={() => setIsAddingNote(true)}
                        className={`p-1 rounded transition-colors ${
                            isDarkMode
                                ? "text-white hover:bg-white hover:bg-opacity-15"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        }`}
                        title="New Note"
                    >
                        <Plus size={18} />
                    </button>
                </div>
            </div>

            {/* Notes List */}
            <div className="flex-1 overflow-y-auto">
                {filteredNotes.map((note, index) => (
                    <div key={note.domain}>
                        <div
                            onClick={() => setSelectedNote(note)}
                            className={`py-1.5 cursor-pointer rounded-lg px-2 -mx-2 transition-colors ${
                                isDarkMode
                                    ? "hover:bg-white hover:bg-opacity-10"
                                    : "hover:bg-gray-50"
                            }`}
                        >
                            <div className="flex items-center justify-between mb-0.5">
                                <div
                                    className={`text-sm font-semibold truncate flex-1 mr-2 ${
                                        isDarkMode ? "text-white" : "text-black"
                                    }`}
                                >
                                    {note.domain}
                                </div>
                                <div
                                    className={`flex items-center gap-1 text-xs flex-shrink-0 ${
                                        isDarkMode
                                            ? "text-white text-opacity-50"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {formatLastModified(note.lastModified)}
                                    <ChevronRight size={12} />
                                </div>
                            </div>
                            <div
                                className={`text-xs truncate ${
                                    isDarkMode
                                        ? "text-white text-opacity-70"
                                        : "text-gray-600"
                                }`}
                            >
                                {getPreviewText(note.content)}
                            </div>
                        </div>
                        {index < filteredNotes.length - 1 && (
                            <div
                                className={`h-px my-1 ${
                                    isDarkMode
                                        ? "bg-white bg-opacity-10"
                                        : "bg-gray-200"
                                }`}
                            />
                        )}
                    </div>
                ))}
                {filteredNotes.length === 0 && !isAddingNote && (
                    <div
                        className={`py-4 text-center text-sm ${
                            isDarkMode
                                ? "text-white text-opacity-50"
                                : "text-gray-500"
                        }`}
                    >
                        {searchQuery ? "No matching notes found" : "No notes yet"}
                    </div>
                )}
            </div>

            {/* Note Editor Modal */}
            {selectedNote && renderNoteEditor(selectedNote, () => setSelectedNote(null))}
            
            {/* New Note Modal */}
            {isAddingNote &&
                renderNoteEditor(
                    {
                        domain: newNoteDomain,
                        content: newNoteContent,
                        lastModified: Date.now(),
                        createdAt: Date.now(),
                    },
                    () => {
                        setIsAddingNote(false);
                        setNewNoteDomain("");
                        setNewNoteContent("");
                    },
                    true,
                )}
        </div>
    );
};

export default NotesOverview;