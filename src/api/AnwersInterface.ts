interface AnswerInterface{
    message: string
    action: boolean
}

export interface RegisterInterface extends AnswerInterface{

}
export interface LoginInterface extends AnswerInterface{
    accessToken: string
}