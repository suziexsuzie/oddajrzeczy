import React from "react";
import "./numbers.scss";
import SingleNumber from "../../../molecules/SingleNumber/SingleNumber";

const Numbers = () => {
    return (
        <section className="numbers">
            <SingleNumber
                number="10"
                title="Oddanych worków"
                text="Lorem ipsum dolor sit amet, consectetur adipisc
                    Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
            <SingleNumber
                number="5"
                title="Wspartych organizacji"
                text="Lorem ipsum dolor sit amet, consectetur adipisc
                    Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
            <SingleNumber
                number="7"
                title="Zorganizowanych zbiórek"
                text="Lorem ipsum dolor sit amet, consectetur adipisc
                    Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
        </section>
    )
}

export default Numbers;
