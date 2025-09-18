import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommandDemo } from "./components/demo/CommandDemo";
import Privacy from "./components/demo/Privacy";
import Pricing from "./components/demo/Pricing";
import AuthPage from "./pages/auth";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div
                className="min-h-screen"
                style={{
                    background: "#fffbf0",
                    fontFamily: '"Nunito", sans-serif',
                }}
            >
                <Routes>
                    <Route path="/" element={<CommandDemo />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/play" element={<Player />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
