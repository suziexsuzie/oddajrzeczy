import React from "react";
import "./label.scss";

const Label = ({forHtml, text}) => {
    return (
        <label htmlFor={forHtml}>
            {text}
        </label>
    )
}

export default Label;
