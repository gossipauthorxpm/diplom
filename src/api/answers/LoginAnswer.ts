class LoginAnswer {
    private message: string
    private action: boolean
    constructor(message: string, action: boolean) {
        this.message = message
        this.action = action
    }
    getMessage(){
        return this.message
    }
    getAction(){
        return this.action
    }
}

export default LoginAnswer;