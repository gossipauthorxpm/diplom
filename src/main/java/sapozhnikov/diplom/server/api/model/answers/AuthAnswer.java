package sapozhnikov.diplom.server.api.model.answers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@AllArgsConstructor
public class AuthAnswer extends UserInputAnswer {
    private String accessToken;
    private String login;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Override
    public String toString() {
        return "AuthAnswer{" +
                "accessToken='" + accessToken + '\'' +
                ", login='" + login + '\'' +
                '}';
    }
}
