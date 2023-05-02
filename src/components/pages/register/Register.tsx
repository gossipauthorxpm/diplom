import React, {useState} from "react";
import "./index.css";
import ServerEndpoints from "../../../api/ServerEndpoints";
import User from "../../../entity/User";
import {RegisterInterface} from "../../../api/RequestInterface";
import {motion} from "framer-motion";
import {NavigateFunction} from "react-router-dom";
import Requests from "../../../api/Requests";

type Props = {
    navigate: NavigateFunction
}

function Register(props: Props) {

    const [message, setMessage] = useState("");
    const [isResultHidden, setIsResultHidden] = useState(true)

    return <div className={'page'}>
        <div id={'register-page'}>
            <div id={'register-form'}>
                <h1 className={'element-padding'}>Регистрация</h1>
                <div className={'input-form element-padding'}>
                    <span className={'element-padding'}>ЛОГИН</span>
                    <input id={'input-login-register'} className={'input-field element-padding'} type="text"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'element-padding'}>ПАРОЛЬ</span>
                    <input id={'input-password-register'} className={'input-field element-padding'}
                           type="password"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'element-padding'}>ЭЛЕКТРОННАЯ ПОЧТА</span>
                    <input id={'input-email-register'} className={'input-field element-padding'}
                           type="text"/>
                </div>
                <div className={'element-padding'} hidden={isResultHidden}>
                    {message}
                </div>
                <motion.button
                    whileHover={{backgroundColor: "#bcccf3"}}
                    onClick={sendRequest}
                    className={'register-button element-padding'}>Зарегистрироваться
                </motion.button>
            </div>
        </div>
    </div>

    async function sendRequest(): Promise<void> {

        let inputLogin: HTMLInputElement | null = document.querySelector('#input-login-register');
        let inputPassword: HTMLInputElement | null = document.querySelector("#input-password-register");
        let inputEmail: HTMLInputElement | null = document.querySelector("#input-email-register");

        if (inputLogin === null || inputPassword === null || inputEmail === null) {
            return;
        }
        if (inputLogin.value === "" || inputPassword.value === "" || inputEmail.value === "") {
            showMessageRegister("Заполните все поля формы", false);
            return;
        }
        let user: User = new User(inputLogin.value, inputPassword.value, inputEmail.value);
        Requests.register(user, showMessageRegister)
    }

    function showMessageRegister(message: string, isResultHide: boolean) {
        setMessage(message);
        setIsResultHidden(isResultHide);
    }
}


export default Register;