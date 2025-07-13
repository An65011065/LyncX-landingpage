import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import ProblemAgitationSection from "./components/problem";
import PrivacyPage from "./components/Privacy";
import PricingPage from "./components/Pricing";
import FAQSection from "./components/faq";
import CTASection from "./components/cta";

const App: React.FC = () => {
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

export default App;
