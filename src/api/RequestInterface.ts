interface RequestInterface {
    message: string
    action: boolean
}

export interface RegisterInterface extends RequestInterface {

}

export interface LoginInterface extends RequestInterface {
    accessToken: string
    login: string
}