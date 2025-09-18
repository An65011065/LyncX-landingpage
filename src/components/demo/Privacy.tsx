import React from "react";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-sm z-50 border-b border-[var(--border)]">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6">
                    <Link
                        to="/"
                        className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]"
                    >
                        LyncX
                    </Link>
                    <Link
                        to="/"
                        className="text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        Back to Home
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-light mb-6 text-[var(--text)]">
                            Privacy{" "}
                            <span className="font-semibold text-[var(--accent-color)]">
                                Policy
                            </span>
                        </h1>
                        <p className="text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed">
                            We're committed to transparency about how LyncX
                            works and what data we handle.
                        </p>
                        <p className="text-sm text-[var(--muted-text)] mt-4">
                            Last updated: August 24, 2025
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* What We Store */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                What We Store
                            </h2>
                            <div className="space-y-4">
                                <div className="border-l-4 border-[var(--accent-color)] pl-6">
                                    <h3 className="text-lg font-medium text-[var(--text)] mb-2">
                                        Only 2 Types of Data
                                    </h3>
                                    <ul className="space-y-2 text-[var(--muted-text)]">
                                        <li>
                                            <strong>Settings Data:</strong> Your
                                            preferences and customizations
                                        </li>
                                        <li>
                                            <strong>Notes:</strong> Your saved
                                            notes are backed up so you never
                                            lose them
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                Everything Else Stays Local
                            </h2>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                <p className="text-green-800 text-sm">
                                    All your data including browsing history,
                                    tab sessions, analytics, and usage patterns
                                    stay completely local on your device.
                                    Nothing is ever transmitted to our servers
                                    except your chosen notes and settings for
                                    backup.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-medium text-[var(--text)] mb-3">
                                        Processed on Your Device Only
                                    </h3>
                                    <ul className="space-y-1 text-[var(--muted-text)] text-sm">
                                        <li>• Browsing history analysis</li>
                                        <li>
                                            • Time tracking and productivity
                                            metrics
                                        </li>
                                        <li>
                                            • Domain statistics and insights
                                        </li>
                                        <li>
                                            • Tab organization and session
                                            management
                                        </li>
                                        <li>
                                            • All AI processing and analytics
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-[var(--text)] mb-3">
                                        Complete Privacy
                                    </h3>
                                    <p className="text-[var(--muted-text)] text-sm">
                                        LyncX operates entirely offline for all
                                        core features. Your browsing patterns,
                                        productivity data, and usage analytics
                                        never leave your device. Only your
                                        explicit notes and settings sync for
                                        backup purposes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Local Processing */}

                        {/* Chrome Extension Permissions */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                Chrome Extension Permissions
                            </h2>
                            <p className="text-[var(--muted-text)] mb-6">
                                Here's exactly why LyncX needs each permission
                                and how we use them:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="space-y-3">
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Tabs & Windows
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Manage, organize, and switch between
                                            your browser tabs and windows
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            History
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Access your browsing history for
                                            local analysis and search features
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Storage
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Save your settings, notes, and
                                            preferences locally in your browser
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Active Tab
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Work with the page you're currently
                                            viewing
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Web Navigation
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Track page changes for time tracking
                                            and productivity features
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Idle Detection
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Detect when you're away to pause
                                            timers and track active time
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Downloads
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Help you save screenshots, export
                                            data, and manage file downloads
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Context Menus
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Add helpful options to your
                                            right-click menu
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Notifications
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Show you timer alerts and important
                                            updates
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Clipboard
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Copy links, text, and data when you
                                            use copy commands
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Identity & Email
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Sign you in with Google for Gmail
                                            and Calendar integration
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Sessions
                                        </h4>
                                        <p className="text-[var(--muted-text)] mt-1">
                                            Save and restore your tab sessions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* External Services */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                External Services
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Google Services
                                        </h4>
                                        <p className="text-[var(--muted-text)] text-sm mt-2">
                                            Gmail, Calendar, and authentication.
                                            We only access what you explicitly
                                            authorize.
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Spotify API
                                        </h4>
                                        <p className="text-[var(--muted-text)] text-sm mt-2">
                                            Control music playback and access
                                            your playlists when you use music
                                            commands.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            Slack Integration
                                        </h4>
                                        <p className="text-[var(--muted-text)] text-sm mt-2">
                                            Send messages and check status when
                                            you use Slack commands.
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] rounded-lg p-4">
                                        <h4 className="font-medium text-[var(--text)]">
                                            OpenAI API
                                        </h4>
                                        <p className="text-[var(--muted-text)] text-sm mt-2">
                                            Powers chat and AI features. Only
                                            processes text you explicitly choose
                                            to analyze.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Features */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                AI Features
                            </h2>
                            <div className="space-y-4">
                                <p className="text-[var(--muted-text)]">
                                    We use <strong>OpenAI's API</strong> to
                                    power our chat and AI analysis features.
                                    When you use these features:
                                </p>
                                <ul className="space-y-2 text-[var(--muted-text)] ml-4">
                                    <li>
                                        • Only the content you choose to analyze
                                        is sent to OpenAI
                                    </li>
                                    <li>
                                        • We follow OpenAI's data usage policies
                                        and privacy standards
                                    </li>
                                    <li>
                                        • No browsing history or sensitive data
                                        is included in AI requests
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Security & Transparency */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                Security & Transparency
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <h4 className="font-medium text-yellow-800 mb-2">
                                        Early Stage Transparency
                                    </h4>
                                    <p className="text-yellow-700 text-sm">
                                        LyncX is in active development. While
                                        we've implemented strong security
                                        measures and follow best practices, as
                                        with any software, there's always room
                                        for improvement. We're committed to
                                        continuous security updates and welcome
                                        your feedback to make LyncX even more
                                        secure.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-medium text-[var(--text)] mb-2">
                                            What We Do
                                        </h4>
                                        <ul className="space-y-1 text-[var(--muted-text)] text-sm">
                                            <li>
                                                • Use secure authentication
                                                methods
                                            </li>
                                            <li>
                                                • Follow OAuth 2.0 standards
                                            </li>
                                            <li>• Regular security reviews</li>
                                            <li>
                                                • Minimal data collection
                                                principle
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[var(--text)] mb-2">
                                            Your Control
                                        </h4>
                                        <ul className="space-y-1 text-[var(--muted-text)] text-sm">
                                            <li>
                                                • Pause or reset data features
                                            </li>
                                            <li>• Export your browsing data</li>
                                            <li>• Contact us with concerns</li>
                                            <li>
                                                • Full uninstall removes all
                                                data
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact & Updates */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                                Contact & Updates
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium text-[var(--text)] mb-3">
                                        Have Questions?
                                    </h4>
                                    <p className="text-[var(--muted-text)] text-sm mb-3">
                                        We're here to help with any privacy
                                        concerns or questions about how LyncX
                                        handles your data.
                                    </p>
                                    <a
                                        href="mailto:privacy@lyncx.ai"
                                        className="inline-flex items-center text-[var(--accent-color)] hover:underline text-sm"
                                    >
                                        privacy@lyncx.ai
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[var(--text)] mb-3">
                                        Policy Updates
                                    </h4>
                                    <p className="text-[var(--muted-text)] text-sm">
                                        We'll notify you of any significant
                                        changes to this privacy policy. The
                                        current version is always available on
                                        this page.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12 pt-8 border-t border-[var(--border)]">
                        <p className="text-[var(--muted-text)] text-sm max-w-2xl mx-auto">
                            LyncX is designed to be powerful while keeping your
                            personal data personal.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Privacy;
