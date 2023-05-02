class UserToken {
    private _accessToken: string
    private _login: string

    constructor(accessToken: string, login: string) {
        this._accessToken = accessToken;
        this._login = login;
    }

    get accessToken(): string {
        return this._accessToken;
    }

    set accessToken(value: string) {
        this._accessToken = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }
}