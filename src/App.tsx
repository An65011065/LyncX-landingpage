import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ExtensionsSection } from "./components/ExtensionsSection";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import ProblemAgitationSection from "./components/problem";
import PrivacyPage from "./components/Privacy";
import PricingPage from "./components/Pricing";
import FAQSection from "./components/faq";
import CTASection from "./components/cta";
import Footer from "./components/footer";

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
            {/* <Footer /> */}
        </div>
    );
};

export default App;
