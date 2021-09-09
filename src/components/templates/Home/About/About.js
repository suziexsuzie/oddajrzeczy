import React from "react";
import Decor from "../../../atoms/Decor/Decor";
import "./about.scss";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__background">
                <div className="about__content">
                    <Decor>
                        <h1>O nas</h1>
                    </Decor>
                    <p>
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <div className="signature">
                        <div className="about__content__sign" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
