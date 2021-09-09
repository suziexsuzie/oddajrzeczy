import React from "react";
import Decor from "../../../atoms/Decor/Decor";
import "./cta.scss";
import HomeHeader from "../HomeHeader/HomeHeader";

const CallToAction = () => {
    return (
        <>
            <HomeHeader/>
            <section className="cta">
                <div className="container">
                    <div className="content">
                        <Decor>
                            <h1>Zacznij pomagać!</h1>
                            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        </Decor>
                        <div className="buttons">
                            <a href="/logowanie" className="btn">Oddaj rzeczy</a>
                            <a href="/logowanie" className="btn">Zorganizuj zbiórkę</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default CallToAction;
