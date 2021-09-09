import React from "react";
import "./input.scss";

const Input = ({type, id, name, placeholder, value}) => {
    return <input type={type} id={id} name={name} placeholder={placeholder} value={value} />
}

export default Input;
