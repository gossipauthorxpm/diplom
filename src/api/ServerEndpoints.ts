class ServerEndpoints {
    public static REGISTER_ENDPOINT: string = "/api/register/"
    public static AUTH_ENDPOINT: string = "/api/login/"
    public static GET_ALL_INFO_STANDS: string = "/api/get-all-info-stands/"
    public static CREATE_STAND_FOR_KEY: string = "/api/create-stand-for-key/"
    public static CREATE_STAND_KEY: string = "/api/create-standKey/"
    public static DELETE_MONITOR: string = "/api/delete-stand-monitor/"
    public static DOWNLOAD_FILE_SCRIPT: string = "/api/get-python-script/"
    public static GET_ACCOUNT_BY_LOGIN: string = "/api/get-account-by-login/"
    public static CHANGE_PASSWORD_BY_LOGIN: string = "/api/change-password-by-login/"
    public static CHANGE_USER: string = "/api/change-user/"
    public static DELETE_USER: string = "/api/delete-user/"
}

export default ServerEndpoints;