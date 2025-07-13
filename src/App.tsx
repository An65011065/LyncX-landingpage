import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import ProblemAgitationSection from "./components/problem";
import PrivacyPage from "./components/Privacy";
import PricingPage from "./components/Pricing";
import FAQSection from "./components/faq";
import CTASection from "./components/cta";
import AuthPage from "./pages/auth";

// Landing Page Component
const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <Header />
            <Hero />
            <ProblemAgitationSection />
            <Features />
            <PrivacyPage />
            <PricingPage />
            <FAQSection />
            <CTASection />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Landing page route */}
                <Route path="/" element={<LandingPage />} />

                {/* Auth page route */}
                <Route path="/auth" element={<AuthPage />} />

                {/* Catch-all route - redirect to landing page */}
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
