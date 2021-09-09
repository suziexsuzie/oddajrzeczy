import React from "react";
import "../loginpage.scss";
import Decor from "../../../atoms/Decor/Decor";
import LoginForm from "../../../molecules/Login Register/LoginForm/LoginForm";
import LoginRegisterButtons from "../../../molecules/Login Register/LoginButtons/LoginButtons";


const LoginPage = () => {
    return (
        <section className="logreg__page">
            <div className="content">
                <Decor>
                    <h1>Zaloguj się</h1>
                </Decor>
                <LoginForm/>
            </div>
        </section>
    )
}

export default LoginPage;
