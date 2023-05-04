class User {
    private login: string;
    private password: string;
    private email?: string;


    constructor(login: string, password: string, email?: string) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
}

export default User;