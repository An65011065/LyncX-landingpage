import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
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
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light mb-6 text-[var(--text)]">
                            Simple{" "}
                            <span className="font-semibold text-[var(--accent-color)]">
                                Pricing
                            </span>
                        </h1>
                        <p className="text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed">
                            Choose the plan that works best for you.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Basic Plan */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8 hover:border-[var(--accent-color)]/30 transition-all duration-300">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                                    Basic
                                </h2>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-[var(--text)]">$6.99</span>
                                    <span className="text-[var(--muted-text)] ml-2">/month</span>
                                </div>
                                <div className="text-[var(--muted-text)] mb-6">
                                    <span className="text-lg font-medium text-[var(--text)]">$90</span>
                                    <span className="ml-1">/year (save 2 months)</span>
                                </div>
                                <p className="text-sm text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                    Rate limits apply
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Command bar for all websites</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Basic productivity tracking</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Tab management & sessions</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Basic integrations (Gmail, Calendar)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Limited AI chat interactions</span>
                                </div>
                            </div>

                            <button className="w-full px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white">
                                Get Basic
                            </button>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border-2 border-[var(--accent-color)] p-8 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-[var(--accent-color)] text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Recommended
                                </span>
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                                    Pro
                                </h2>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-[var(--text)]">$9.99</span>
                                    <span className="text-[var(--muted-text)] ml-2">/month</span>
                                </div>
                                <div className="text-[var(--muted-text)] mb-6">
                                    <span className="text-lg font-medium text-[var(--text)]">$119</span>
                                    <span className="ml-1">/year (save 1 month)</span>
                                </div>
                                <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg p-3">
                                    No rate limits
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)]">Everything in Basic</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)] font-medium">Unlimited AI chat interactions</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)] font-medium">Advanced analytics & insights</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)] font-medium">Premium integrations (Slack, Spotify)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)] font-medium">Custom commands & automation</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[var(--text)] font-medium">Priority support</span>
                                </div>
                            </div>

                            <button className="w-full px-6 py-3 bg-[var(--accent-color)] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg">
                                Get Pro
                            </button>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-light text-center mb-12 text-[var(--text)]">
                            Frequently Asked{" "}
                            <span className="font-semibold text-[var(--accent-color)]">
                                Questions
                            </span>
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-6">
                                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                                    What are rate limits?
                                </h3>
                                <p className="text-[var(--muted-text)] leading-relaxed">
                                    Rate limits control how frequently you can use AI-powered features and certain integrations. 
                                    The Basic plan includes reasonable limits for everyday use, while Pro removes all restrictions.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-6">
                                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                                    Can I change plans anytime?
                                </h3>
                                <p className="text-[var(--muted-text)] leading-relaxed">
                                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-6">
                                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                                    Is there a free trial?
                                </h3>
                                <p className="text-[var(--muted-text)] leading-relaxed">
                                    Yes! LyncX offers a 7-day free trial of the Pro plan so you can experience all features before committing.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-6">
                                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                                    What payment methods do you accept?
                                </h3>
                                <p className="text-[var(--muted-text)] leading-relaxed">
                                    We accept all major credit cards, PayPal, and offer yearly billing discounts for both plans.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 pt-8 border-t border-[var(--border)]">
                        <p className="text-[var(--muted-text)] text-sm max-w-2xl mx-auto">
                            Questions about pricing or need a custom plan? 
                            <a href="mailto:hello@lyncx.ai" className="text-[var(--accent-color)] hover:underline ml-1">
                                Contact us
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pricing;