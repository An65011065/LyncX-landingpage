import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import ProblemAgitationSection from "./components/problem";
import PrivacyPage from "./components/Privacy";
import PricingPage from "./components/Pricing";
import FAQSection from "./components/faq";
import CTASection from "./components/cta";
import AuthPage from "./pages/auth";

// Landing page component
const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <ProblemAgitationSection />
            <Features />
            <PrivacyPage />
            <PricingPage />
            <FAQSection />
            <CTASection />
        </>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[var(--bg)]">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
