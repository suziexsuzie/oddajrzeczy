import React, {useState} from "react";
import Label from "../../../atoms/Label/Label";
import Button from "../../../atoms/Button/Button";
import "../loginform.scss";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState("");
    const [pass, setPass] = useState("");
    const [passValidator, setPassValidator] = useState("");

    const handleSubmit = function (event, email, password) {
        event.preventDefault();
        console.log(email);
        console.log(password);
    };

    const validateEmail = (mail) => {
        if (mail.indexOf("@") !== -1) {
            console.log("Jest ok");
            setEmailValidator("");
        }
        if (mail.indexOf(".") !== -1) {
            console.log("Ok");
            setEmailValidator("");
        }
        else {
            setEmailValidator("Niepoprawny email");
        }
    }

    const validatePassword = (password) => {
        if (password.length >= 6) {
            console.log("Wporzo hasło");
            setPassValidator("")
        } else {
            setPassValidator("Hasło musi mieć przynajmniej 6 znaków")
        }
    }
    return <div className="logreg__form">
        <form onSubmit={e => handleSubmit(e, email, pass)}>
            <div className="background">
                <Label forHtml="email" text="E-mail"/>
                <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => validateEmail(email)}
                />
                <span className={emailValidator === "" ? "none" : "email-error"}
                      style={{
                          fontSize: "0.8rem",
                          color: "red",
                          textTransform: "lowercase",
                          textAlign: "center"
                      }}>{emailValidator}</span>

                <Label forHtml="password" text="Hasło"/>
                <input
                    name="password"
                    type="text"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    onBlur={() => validatePassword(pass)}
                />
                <span className={passValidator === "" ? "none" : "pass-error"}
                      style={{
                          fontSize: "0.8rem",
                          color: "red",
                          textTransform: "lowercase",
                          textAlign: "center"
                      }}>{passValidator}</span>
            </div>
            <div className="buttons">
                <Button url="/rejestracja " text="Załóż konto"/>
                <button className="btn" type="submit" id="btn-submit btn">Zaloguj się</button>
            </div>
        </form>
    </div>

}

export default LoginForm;
