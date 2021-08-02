import React from "react";
import HomeHeader from "../components/HomeHeader";
import CallToAction from "../components/CallToAction";
import Numbers from "../components/Numbers";
import FourSteps from "../components/FourSteps";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <CallToAction/>
            <Numbers/>
            <FourSteps/>
            <About/>

        </>
    )
}

export default Home;
