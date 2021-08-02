import React from "react";
import {Link} from "gatsby";

import Home from "../pages/Home";
import About from "./About";
import Contact from "./Contact";


const HomeHeader = () => {
    return (
        <header>
            <div className="container">
                <nav className="login">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </nav>
                <nav className="menu">
                    <Link to="/" component={Home}>Start</Link>
                    <Link to="/">O co chodzi?</Link>
                    <Link to="/">O nas</Link>
                    <Link to="/">Fundacja i organizacje</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </nav>
            </div>
        </header>
    )
}

export default HomeHeader;
