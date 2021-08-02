import React from "react";

const FourSteps = () => {
    return (
        <section className="four-steps">
            <div className="container">
              <h1>Wystarczą 4 proste kroki</h1>
                <div className="decor"/>
                <div className="content">
                    <div className="step">
                        <div className="title">Wybierz rzeczy</div>
                        <div className="description">ubrania, zabawki, sprzęt i inne</div>
                    </div>
                    <div className="step">
                        <div className="title">Spakuj je</div>
                        <div className="description">skorzystaj z worków na śmieci</div>
                    </div>
                    <div className="step">
                        <div className="title">Zdecyduj komu chcesz pomóc</div>
                        <div className="description">wybierz zaufane miejsce</div>
                    </div>
                    <div className="step">
                        <div className="title">Zamów kuriera</div>
                        <div className="description">kurier przyjedzie w dogodnym terminie</div>
                    </div>
                </div>
                <a href="" className="btn btn-cta">Oddaj rzeczy</a>
            </div>
        </section>
    )
}

export default FourSteps;
