import React, { useState } from 'react'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

const App = () => {
    const [currentTab, setCurrentTab] = useState(true);

    const loadTab = () => {
        switch (currentTab) {
            case "Home":
                return <Home />;
            case "About Me":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact Me":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <Home />;
        }
    }

    return (
        <>
            <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <>{loadTab}</>
            {/* <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} /> */}
        </>
    )
}

export default App;