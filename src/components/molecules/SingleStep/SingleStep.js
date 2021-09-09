import React from "react";
import "./singlestep.scss";

const SingleStep = ({ title, description }) => {
    return (
        <div className="step">
            <div className="step__icon" />
            <div className="step__title">{title}</div>
            <div className="step__description">{description}</div>
        </div>
    )
}

export default SingleStep;
