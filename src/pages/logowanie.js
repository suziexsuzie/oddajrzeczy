import React from "react";
import HomeHeader from "../components/templates/Home/HomeHeader/HomeHeader";
import LoginForm from "../components/molecules/Login Register/LoginForm/LoginForm";
import LoginRegisterButtons from "../components/molecules/Login Register/LoginButtons/LoginButtons";
import Decor from "../components/atoms/Decor/Decor";
import LoginPage from "../components/templates/Login Register/LoginPage/LoginPage";

const Logowanie = () => {
    return (
        <>
            <HomeHeader/>
            <LoginPage/>
        </>
    )
}

export default Logowanie;
