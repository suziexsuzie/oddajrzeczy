import React from "react";
import {Link} from "gatsby";
import "./homeheader.scss";
import {Link as Scroll} from "react-scroll";

const HomeHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="login">
                    <Link to="/logowanie">Zaloguj się</Link>
                    <Link to="/rejestracja">Zarejestruj się</Link>
                </div>

                <nav className="menu">
                    <Scroll
                            exact
                            to="/"
                            className="menu__link"
                            spy={true}
                            smooth={true}
                            duration={300}>
                        Start
                    </Scroll>
                    <Scroll to="four-steps"
                            className="menu__link"
                            spy={true}
                            smooth={true}
                            duration={300}>
                        O co chodzi?
                    </Scroll>
                    <Scroll to="about"
                            className="menu__link"
                            spy={true}
                            smooth={true}
                            duration={300}>
                        O nas
                    </Scroll>
                    <Scroll to="organizations"
                            className="menu__link"
                            spy={true}
                            smooth={true}
                            duration={300}>
                        Fundacja i organizacje
                    </Scroll>
                    <Scroll to="contact"
                            className="menu__link"
                            spy={true}
                            smooth={true}
                            duration={300}>
                        Kontakt
                    </Scroll>
                </nav>
            </div>
        </header>
    )
}

export default HomeHeader;
