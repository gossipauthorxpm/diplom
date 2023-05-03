package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.service.UserService;
import sapozhnikov.diplom.server.api.model.answers.RegisterAnswer;
import sapozhnikov.diplom.server.errros.RegisterException;


@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
@Slf4j
@AllArgsConstructor
@RestController("/api/register/")
public class RegisterController {
    private final UserService userService;

    @PostMapping("/api/register/")
    public RegisterAnswer register(@RequestBody User user) {
        try {
            return this.userService.registerUser(user);
        }catch (RegisterException error){
            log.warn("Ошибка регистрации: {}", error.toString());
            return new RegisterAnswer(error.toString(), false);
        }
    }
}
