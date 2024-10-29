import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";

import { Home } from "./Pages";

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
