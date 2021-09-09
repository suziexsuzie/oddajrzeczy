import React from "react";
import Decor from "../../atoms/Decor/Decor";
import Button from "../../atoms/Button/Button";
import "./logout.scss";

const Logout = () => {
    return <section className="logout">
        <Decor>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        </Decor>
        <Button url="/" text="Strona główna" />
    </section>
}

export default Logout;