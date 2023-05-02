interface RequestInterface {
    message: string
    action: boolean
}

export interface RegisterInterface extends RequestInterface {

}

export interface LoginInterface {
    accessToken: string
    login: string
}