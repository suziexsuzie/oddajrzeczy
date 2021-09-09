import React from "react";
import CallToAction from "../components/templates/Home/CTA/CallToAction";
import Numbers from "../components/templates/Home/Numbers/Numbers";
import FourSteps from "../components/templates/Home/FourSteps/FourSteps";
import About from "../components/templates/Home/About/About";
import Contact from "../components/templates/Home/Contact/Contact";
import Organizations from "../components/templates/Home/Organizations/Organizations";

const HomePage = () => {
    return (
        <>
            <CallToAction />
            <Numbers />
            <FourSteps />
            <About />
            <Organizations />
            <Contact />
        </>
    )
}

export default HomePage;
