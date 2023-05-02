import axios, {AxiosResponse} from "axios";


class InfoStandRequests {
    static async getAllInfoStands() {
        let userData = localStorage.getItem("user");
        if (userData === null) {
            return;
        }
        let userObject: UserToken = JSON.parse(userData);

        const response: AxiosResponse<any, any> = await axios.get("/api/get-all-info-stands/" + userObject.login, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + userObject.accessToken
            }
        });
        return response.data
    }
}

export default InfoStandRequests;