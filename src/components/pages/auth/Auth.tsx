import React, {useState} from "react";
import "./index.css";
import User from "../../../entity/User";
import AuthError from "../../../api/errors/ApiErrors";
import AuthRequests from "../../../api/AuthRequests";
import Callbacks from "../../../api/Callbacks";

function Auth() {

    const [message, setMessage] = useState("");
    const [isResultHidden, setIsResultHidden] = useState(true);

    return <div className={'page'}>
        <div id={'auth-page'}>
            <div id={'auth-form'}>
                <h1 className={'prose text-4xl font-sans'}>Авторизация</h1>
                <div className={'input-form element-padding'}>
                    <span className={'prose text-xl font-sans element-padding'}>ЛОГИН</span>
                    <input id={'input-login-auth'} className="input input-bordered input-secondary w-full max-w-xs" type="text"/>
                </div>
                <div className={'input-form element-padding'}>
                    <span className={'prose text-xl font-sans element-padding'}>ПАРОЛЬ</span>
                    <input id={'input-password-auth'} className="input input-bordered input-secondary w-full max-w-xs"
                           type="password"/>
                </div>
                <div className={'element-padding'} hidden={isResultHidden}>
                    {message}
                </div>
                <button
                    className="btn btn-outline btn-secondary" onClick={sendRequest}
                >Вход
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
            AuthRequests.auth(user, showMessageRegister, Callbacks.userCallback)
            Callbacks.isUserSeeCabinetCallback(false)
            Callbacks.isUserLoginCallback(true)
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