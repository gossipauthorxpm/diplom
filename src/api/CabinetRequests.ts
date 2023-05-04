import axios, {AxiosError, AxiosResponse} from "axios";
import ServerEndpoints from "./ServerEndpoints";
import UserUpdate from "../entity/UserUpdate";
import Callbacks from "./Callbacks";

class CabinetRequests {
    static async getUserForLogin(callback: any) {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);

        let response = await axios.get(ServerEndpoints.GET_ACCOUNT_BY_LOGIN + userObject.login, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            }
        })
        callback(response.data)
    }

    static async updatePassword() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);
        let login = document.querySelector("#cabinet-input-login");
        let oldPassword = document.querySelector("#cabinet-input-oldPassword");
        let newPassword = document.querySelector("#cabinet-input-newPassword");

        await axios.post(ServerEndpoints.CHANGE_PASSWORD_BY_LOGIN, null, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            }, params: {
                //@ts-ignore
                login: login.value,
                //@ts-ignore
                oldPassword: oldPassword.value,
                //@ts-ignore
                newPassword: newPassword.value
            }
        }).then(res => {
            if (res.request.status === 200) {
                Callbacks.setResponsePassword("Пароль обновлен")
            }
        }).catch((res: AxiosError<AxiosResponse, any>) => {
            // @ts-ignore
            Callbacks.setResponsePassword(res.response.data)
        })

    }

    static async updateUser() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);

        let id = document.querySelector("#cabinet-input-id");
        let login = document.querySelector("#cabinet-input-login");
        let email = document.querySelector("#cabinet-input-email");
        let age = document.querySelector("#cabinet-input-age");
        let country = document.querySelector("#cabinet-input-country");
        let city = document.querySelector("#cabinet-input-city");
        let workPlace = document.querySelector("#cabinet-input-workPlace");
        let password = document.querySelector("#cabinet-input-password");

        //@ts-ignore
        let user: UserUpdate = new UserUpdate(Number(age.value), city.value, country.value, email.value, Number(id.value), login.value, workPlace.value, password.value)


        await axios.put(ServerEndpoints.CHANGE_USER, JSON.stringify(user), {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken,
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.request.status === 200) {
                Callbacks.setResponse("Данные обновлены")
            }
        }).catch((res: AxiosError<AxiosResponse, any>) => {
            // @ts-ignore
            Callbacks.setResponse(res.response.data)
        })
    }

    static async deleteUser() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);

        let login = document.querySelector("#cabinet-input-login");
        let password = document.querySelector("#cabinet-input-password");


        await axios.delete(ServerEndpoints.DELETE_USER, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken,
            },
            params: {
                //@ts-ignore
                login: login.value,
                //@ts-ignore
                password: password.value
            }
        }).then(res => {
            if (res.request.status === 200) {
                Callbacks.setResponse("Данные обновлены")
            }
        }).catch((res: AxiosError<AxiosResponse, any>) => {
            // @ts-ignore
            Callbacks.setResponse(res.response.data)
        })
    }
}

export default CabinetRequests;