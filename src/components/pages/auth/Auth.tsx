import React, {useState} from "react";
import "./index.css";
import User from "../../../entity/User";
import AuthError from "../../../api/errors/ApiErrors";
import Requests from "../../../api/Requests";
import Callbacks from "../../../api/Callbacks";

function Auth() {

    const [message, setMessage] = useState("");
    const [isResultHidden, setIsResultHidden] = useState(true);

    return <div className={'page'}>
        <div id={'auth-page'}>
            <div id={'auth-form'}>
                <h1 className={'element-padding'}>Авторизация</h1>
                <div className={'input-form element-padding'}>
                    <span className={'element-padding'}>ЛОГИН</span>
                    <input id={'input-login-auth'} className={'input-field element-padding'} type="text"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'element-padding'}>ПАРОЛЬ</span>
                    <input id={'input-password-auth'} className={'input-field element-padding'}
                           type="password"/>
                </div>
                <div className={'element-padding'} hidden={isResultHidden}>
                    {message}
                </div>
                <button onClick={sendRequest}
                        className={'auth-button element-padding'}>Вход
                </button>
            </div>
        </div>
    </div>

    function sendRequest() {
        try {
            let inputLogin: HTMLInputElement | null = document.querySelector('#input-login-auth');
            let inputPassword: HTMLInputElement | null = document.querySelector("#input-password-auth");
            if (inputLogin === null || inputPassword === null) {
                throw new AuthError("Ошибка: Заполните поля ввода данных.")
            }
            if (inputLogin.value === "" || inputPassword.value === "") {
                throw new AuthError("Ошибка: Заполните поля ввода данных.")
            }

            let user: User = new User(inputLogin.value, inputPassword.value);
            Requests.auth(user, showMessageRegister, Callbacks.setUserCallback)
            Callbacks.setIsUserSeeCabinetCallback(false)
            Callbacks.setIsUserLoginCallback(true)
        } catch (error: any) {
            if (error instanceof AuthError) {
                showMessageRegister(error.message, false);
            } else {
                showMessageRegister("Ошибка сервиса. Повторите попытку позже.", false);
            }
        }

        function showMessageRegister(message: string, isHidden: boolean) {
            setMessage(message);
            setIsResultHidden(isHidden);
        }
    }
}

export default Auth;