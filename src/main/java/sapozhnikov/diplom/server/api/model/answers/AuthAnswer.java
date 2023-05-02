package sapozhnikov.diplom.server.api.model.answers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@AllArgsConstructor
public class AuthAnswer extends UserInputAnswer {
    private String accessToken;
    private String login;

    @Override
    public String toString() {
        return "AuthAnswer{" +
                "accessToken='" + accessToken + '\'' +
                ", login='" + login + '\'' +
                '}';
    }
}
