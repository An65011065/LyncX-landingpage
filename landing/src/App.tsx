import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ExtensionsSection } from "./components/ExtensionsSection";
import { StorySection } from "./components/StorySection";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <Header />
            <Hero />
            <ExtensionsSection />
            <StorySection
                id="section3"
                title="See your browsing patterns like never before"
                description="Our network graphs reveal the hidden connections in your web browsing. Watch how you move from site to site, discover unexpected patterns, and export all your data anytime you want."
            />
        </div>
    );
};

export default App;
