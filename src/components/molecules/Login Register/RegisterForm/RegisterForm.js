import React, {useState} from "react";
import Label from "../../../atoms/Label/Label";
import Button from "../../../atoms/Button/Button";
import "../loginform.scss";
import "../../../atoms/Button/button.scss";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState("");
    const [pass, setPass] = useState("");
    const [passValidator, setPassValidator] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [passConfirmValidator, setPassConfirmValidator] = useState("");

    const handleSubmit = function (event, email, password, password2) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        console.log(password2)
    };

    const validateEmail = (mail) => {
        if (mail.indexOf("@") !== -1) {
            console.log("Jest ok");
            setEmailValidator("");
        } else {
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

    const validatePasswordConfirm = (password, password2) => {
        if (password2 === password) {
            setPassConfirmValidator("");
            console.log("Hasła ok");
        } else {
            setPassConfirmValidator("Hasła nie są identyczne")
        }
    }

    return <div className="logreg__form">
        <form onSubmit={e => handleSubmit(e, email, pass, passConfirm)}>
            <div className="background">
                <Label forHtml="email" text="E-mail"/>
                <input
                    required
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
                    required
                    name="password"
                    type="text"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    onBlur={() => {validatePassword(pass); validatePasswordConfirm(pass, passConfirm)}}
                />
                <span className={passValidator === "" ? "none" : "pass-error"}
                      style={{
                          fontSize: "0.8rem",
                          color: "red",
                          textTransform: "lowercase",
                          textAlign: "center"
                      }}>{passValidator}</span>

                <Label forHtml="password2" text="Powtórz hasło"/>
                <input
                    required
                    name="password2"
                    type="text"
                    value={passConfirm}
                    onChange={e => setPassConfirm(e.target.value)}
                    onBlur={() => validatePasswordConfirm(passConfirm, pass)}
                />
                <span className={passConfirmValidator === "" ? "none" : "pass2-error"}
                      style={{
                          fontSize: "0.8rem",
                          color: "red",
                          textTransform: "lowercase",
                          textAlign: "center"
                      }}>{passConfirmValidator}</span>
            </div>
            <div className="buttons">
                <div><Button url="/logowanie " text="Zaloguj się" /></div>
               <div> <button className="btn" type="submit" id="btn-submit btn" style={{
                    cursor: "pointer"
            }}>Załóż konto</button></div>
            </div>
        </form>
    </div>

}

export default RegisterForm;
