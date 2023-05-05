import React, {useState} from "react";
import "./index.css";
import User from "../../../entity/User";
import {motion} from "framer-motion";
import {NavigateFunction} from "react-router-dom";
import AuthRequests from "../../../api/AuthRequests";

type Props = {
    navigate: NavigateFunction
}

function Register(props: Props) {

    const [message, setMessage] = useState("");
    const [isResultHidden, setIsResultHidden] = useState(true)

    return <div className={'page'}>
        <div id={'register-page'}>
            <div id={'register-form'}>
                <h1 className={'prose text-4xl font-sans'}>Регистрация</h1>
                <div className={'input-form element-padding'}>
                    <span className={'prose text-xl font-sans element-padding'}>ЛОГИН</span>
                    <input id={'input-login-register'} className={'input input-bordered input-secondary w-full max-w-xs'} type="text"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'prose text-xl font-sans element-padding'}>ПАРОЛЬ</span>
                    <input id={'input-password-register'} className={'input input-bordered input-secondary w-full max-w-xs'}
                           type="password"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'prose text-xl font-sans element-padding'}>ЭЛЕКТРОННАЯ ПОЧТА</span>
                    <input id={'input-email-register'} className={'input input-bordered input-secondary w-full max-w-xs'}
                           type="text"/>
                </div>
                <div className={'element-padding'} hidden={isResultHidden}>
                    {message}
                </div>
                <button
                    onClick={sendRequest}
                    className="btn btn-outline btn-secondary">Зарегистрироваться
                </button>
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
        AuthRequests.register(user, showMessageRegister)
    }

    function showMessageRegister(message: string, isResultHide: boolean) {
        setMessage(message);
        setIsResultHidden(isResultHide);
    }
}


export default Register;