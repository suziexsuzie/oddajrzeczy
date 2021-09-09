import React from "react";
import Decor from "../../../atoms/Decor/Decor";
import Button from "../../../atoms/Button/Button";
import SingleStep from "../../../molecules/SingleStep/SingleStep";
import "./foursteps.scss";

const FourSteps = () => {
    return (
        <section className="four-steps" id="four-steps">
            <Decor>
                <h1>Wystarczą 4 proste kroki</h1>
            </Decor>
            <div className="content">
                <div className="container">
                    <SingleStep
                        title="Wybierz rzeczy"
                        description="ubrania, zabawki, sprzęt i inne"/>
                    <SingleStep
                        title="Spakuj je"
                        description="skorzystaj z worków na śmieci"/>
                    <SingleStep
                        title="Zdecyduj komu chcesz pomóc"
                        description="wybierz zaufane miejsce"/>
                    <SingleStep
                        title="Zamów kuriera"
                        description="kurier przyjedzie w dogodnym terminie"/>
                </div></div>
                <Button url="/logowanie" text="Oddaj rzeczy"/>

        </section>
    )
}

export default FourSteps;
