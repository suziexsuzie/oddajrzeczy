import React from "react";
import "./button.scss";

const Button = ({text, url}) => {
    return <a className="btn" href={url}>{text}</a>


}

export default Button;
