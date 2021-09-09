import React from "react";
import "./singlenumber.scss";

const SingleNumber = ({number, title, text}) => {
    return <div className="numbers__single">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}

export default SingleNumber;
