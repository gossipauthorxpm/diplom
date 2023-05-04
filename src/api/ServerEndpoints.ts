class ServerEndpoints {
    public static REGISTER_ENDPOINT: string = "http://192.168.0.112:8080/api/register/"
    public static AUTH_ENDPOINT: string = "http://192.168.0.112:8080/api/login/"
    public static GET_ALL_INFO_STANDS: string = "/api/get-all-info-stands/"
    public static CREATE_STAND_FOR_KEY: string = "/api/create-stand-for-key/"
    public static CREATE_STAND_KEY: string = "/api/create-standKey/"
    public static DELETE_MONITOR: string = "/api/delete-stand-monitor/"
    public static DOWNLOAD_FILE_SCRIPT: string = "/api/get-python-script/"
}

export default ServerEndpoints;