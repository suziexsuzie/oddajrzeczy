import React, {useState} from "react";
import "./contact.scss";
import Decor from "../../../atoms/Decor/Decor";
import HomeFooter from "../HomeFooter/HomeFooter";
import Label from "../../../atoms/Label/Label";
import SocialMedia from "../../../atoms/SocialMedia/SocialMedia";

const Contact = () => {
    const [name, setName] = useState("");
    const [nameValidator, setNameValidator] = useState("");
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState("");
    const [message, setMessage] = useState("");
    const [messageValidator, setMessageValidator] = useState("");

    const handleSubmit = function (event, name, email, message) {
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message)
    };
    const validateName = (name) => {
        if (name.indexOf("") !== -1) {
            console.log("Jest ok");
            setNameValidator("");
        } else {
            setNameValidator("Imię nie może zawierać cyfr");
        }
    }
    const validateEmail = (mail) => {
        if (mail.indexOf("@") !== -1 && mail.indexOf(".") !== -1) {
            console.log("Jest ok");
            setEmailValidator("");
        } else {
            setEmailValidator("Niepoprawny email");
        }
    }
    const validateMessage = (message) => {
        if (!message) {
            setMessageValidator("Nie można wysłać pustej wiadomości")
        } else {
            setMessageValidator("");
        }
    }
    return (
        <section className="contact" id="contact">
            <div className="background">
                <div className="container">
                    <div className="form">
                        <Decor>
                            <h1>Skontaktuj się z nami</h1>
                        </Decor>
                        <form onSubmit={e => handleSubmit(e, name, email, message)}>

                            <div className="form__personal">
                                <div className="personal__name">
                                    <Label forHtml="name" text="Wpisz swoje imię"/>
                                    <input required
                                           type="text"
                                           name="name"
                                           placeholder="Twoje imię"
                                           value={name}
                                           onChange={e => setName(e.target.value)}
                                           onBlur={() => validateName(name)}/>
                                    <span className={nameValidator === "" ? "none" : "name-error"}
                                          style={{
                                              fontSize: "0.8rem",
                                              color: "red",
                                              textTransform: "lowercase",
                                              textAlign: "center"
                                          }}>{nameValidator}</span>
                                </div>
                                <div className="personal__email">
                                    <Label forHtml="email" text="Wpisz swój e-mail"/>
                                    <input type="email"
                                           name="email"
                                           placeholder="adres@xyz.pl"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           onBlur={() => validateEmail(email)}/>
                                    <span className={emailValidator === "" ? "none" : "email-error"}
                                          style={{
                                              fontSize: "0.8rem",
                                              color: "red",
                                              textTransform: "lowercase",
                                              textAlign: "center"
                                          }}>{emailValidator}</span>
                                </div>
                            </div>
                            <Label forHtml="message" text="Wpisz swoją wiadomość"/>
                            <textarea
                                minLength={120}
                                name="message"
                                id="message"
                                placeholder="Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat."
                                onChange={e => setMessage(e.target.value)}
                                onBlur={() => {
                                    validateMessage(message)
                                }}/>
                            <span className={messageValidator === "" ? "none" : "message-error"}
                                  style={{
                                      fontSize: "0.8rem",
                                      color: "red",
                                      textTransform: "lowercase",
                                      textAlign: "center"
                                  }}>{messageValidator}</span>
                            <input className="btn-submit" type="submit" value="Wyślij"/>
                        </form>
                    </div>
                </div>
                <HomeFooter/>
                <SocialMedia />
            </div>

        </section>
    )
}

export default Contact;
