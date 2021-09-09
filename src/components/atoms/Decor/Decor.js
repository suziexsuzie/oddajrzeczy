import React from "react";
import "./decor.scss";

export default function Decor(props) {
    return <div className="decor">
        {props.children}
        <div className="decor__icon" />
    </div>
}
