import React from "react";
import Decor from "../../../atoms/Decor/Decor";
import "./organizations.scss";

const Organizations = () => {
    return (
        <section className="organizations" id="organizations">
            <div className="container">
                <Decor>
                    <h1>Komu pomagamy?</h1>
                </Decor>
                <div className="types">
                    <button className="foundations">Fundacjom</button>
                    <button className="non-gov">Organizacjom pozarządowym</button>
                    <button className="charity">Lokalnym zbiórkom</button>
                </div>
                <div className="description-foundation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
                <div className="description-non-gov">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim
                    veniam, quis nostrud exercitation.
                </div>
                <div className="description-charity">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </div>
            </div>
        </section>
    )
}

export default Organizations;

//use setState