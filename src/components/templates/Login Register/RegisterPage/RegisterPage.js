import React from "react";
import "../loginpage.scss";
import RegisterForm from "../../../molecules/Login Register/RegisterForm/RegisterForm";
import Decor from "../../../atoms/Decor/Decor";
import LoginRegisterButtons from "../../../molecules/Login Register/LoginButtons/LoginButtons";

const RegisterPage = () => {
    return (
        <section className="logreg__page">
            <div className="content">
                <Decor>
                    <h1>Załóż konto</h1>
                </Decor>
                <RegisterForm />
            </div>
        </section>

    )
}

export default RegisterPage;
