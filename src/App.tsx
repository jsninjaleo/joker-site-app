import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Modal } from "./Element/Modal";

import { Home } from "./Pages";

function App() {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
        <>
            <div className="relative overflow-x-hidden">
                <Header toggleModal={toggle} />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
                <Footer toggleModal={toggle} />
            </div>
            {isOpen && <Modal toggleModal={toggle} />}
        </>
    );
}

export default App;
