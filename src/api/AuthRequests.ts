import User from "../entity/User";
import {LoginInterface} from "./RequestInterface";
import ServerEndpoints from "./ServerEndpoints";
import Callbacks from "./Callbacks";


export default class AuthRequests {
    static auth(user: User, callback: any, setUserCallback: any) {
        fetch(ServerEndpoints.AUTH_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': "application/json;charset=UTF-8",
                'Connection': "keep-alive",
                'Accept': '*/*',
                'Accept-Encoding': "gzip, deflate, br"
            },
            body: JSON.stringify(user)
        }).then(result => {
            if (result.status === 403) {
                callback("Ошибка авторизации. Неверный логин или пароль.")
            }
            let answer: Promise<LoginInterface> = result.json();
            console.log(result)
            answer.then(result => {
                localStorage.setItem('user', JSON.stringify(result));
                setUserCallback(result)
                callback("Успех авторизации!", false);
            });
        })
    }

    static logout() {
        localStorage.removeItem("user")
        Callbacks.setUserCallback(null)
        Callbacks.setIsUserLoginCallback(false)
    }

    static register(user: User, callback: any) {
        fetch(ServerEndpoints.REGISTER_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': "application/json;charset=UTF-8",
                'Connection': "keep-alive",
                'Accept': '*/*',
                'Accept-Encoding': "gzip, deflate, br"
            },
            body: JSON.stringify(user)
        }).then(res => res.json().then(answer => {
            callback(answer.message, false)
        }))
    }
}