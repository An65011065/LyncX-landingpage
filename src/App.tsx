import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import PrivacyPage from "./components/Privacy";
import PricingPage from "./components/Pricing";
import FAQSection from "./components/faq";
import CTASection from "./components/cta";
import AuthPage from "./pages/auth";
import Player from "./pages/Player";

// Landing page component
const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
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
            <div className="min-h-screen" style={{ background: "#fffbf0", fontFamily: '"Nunito", sans-serif' }}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/play" element={<Player />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
