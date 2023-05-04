import axios, {AxiosResponse} from "axios";
import Callbacks from "./Callbacks";
import AuthRequests from "./AuthRequests";
import ServerEndpoints from "./ServerEndpoints";
import FileDownload from "js-file-download"

class InfoStandRequests {

    static async getAllInfoStands() {
        try {
            let userData = localStorage.getItem("user");
            if (userData === null) {
                return;
            }
            let userObject: UserToken = JSON.parse(userData);

            const response: AxiosResponse<any, any> = await axios.get(ServerEndpoints.GET_ALL_INFO_STANDS + userObject.login, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + userObject.accessToken
                }
            });
            return response.data
        } catch (error: any) {
            if (error.response.status === 403) {
                AuthRequests.logout()
                Callbacks.navigateCallback("/auth")
            }
        }
    }

    static async addMonitor() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);

        let response = await axios.get(ServerEndpoints.CREATE_STAND_KEY, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            }
        })
        Callbacks.setStandKey(response.data)
    }

    static async deleteMonitor() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);
        // page-stand-select-delete-monitor
        let selectDelete: HTMLSelectElement | null = document.querySelector("#page-stand-select-delete-monitor")
        let idSelectedMonitor: string | undefined = selectDelete?.value
        let response = await axios.delete(ServerEndpoints.DELETE_MONITOR + idSelectedMonitor, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            }
        })
        console.log(response.data)
    }

    static async downloadPythonScript() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);
        let response = await axios.get(ServerEndpoints.DOWNLOAD_FILE_SCRIPT, {
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            },
            responseType: 'arraybuffer'
        })
        FileDownload(response.data, "stats-parser.zip")
    }
}

export default InfoStandRequests;