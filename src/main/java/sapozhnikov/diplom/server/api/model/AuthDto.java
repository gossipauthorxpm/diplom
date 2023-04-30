package sapozhnikov.diplom.server.api.model;

import lombok.Data;

@Data
public class AuthDto {
    private String login;
    private String password;
}
