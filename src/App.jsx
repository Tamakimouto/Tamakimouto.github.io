import React, { useState, useEffect } from "react";
import Home from "components/home";
import Blurb from "components/blurb";
import About from "components/about";
import "./App.css";
import Loader from "components/loader";

function App() {
    const [scrolled, setScrolled] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", updateScrolled);

        return () => window.removeEventListener("scroll", updateScrolled);
    }, []);

    const updateScrolled = () => {
        setScrolled(window.scrollY);
    };

    return (
        <div className="App">
            {loading ? (
                <Loader complete={() => setLoading(false)} />
            ) : (
                <React.Fragment>
                    <Home scrolled={scrolled} />
                    <Blurb scrolled={scrolled} />
                    <About />
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
