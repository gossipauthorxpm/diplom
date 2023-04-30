package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.model.answers.RegisterAnswer;
import sapozhnikov.diplom.server.api.model.enums.UserRole;
import sapozhnikov.diplom.server.api.repository.UsersRepository;
import sapozhnikov.diplom.server.errros.RegisterException;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository accountsRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public RegisterAnswer registerUser(User user) throws RegisterException {
        User userForLogin = this.accountsRepository.getAccountByLogin(user.getLogin());
        User userForEmail = this.accountsRepository.getAccountByEmail(user.getEmail());
        user.setRole(UserRole.ROLE_USER);
        if (userForLogin != null) {
            throw new RegisterException(String.format("Аккаунт с данным логином \"%s\" уже зарегистрирован в системе", userForLogin.getLogin()));
        }
        if(userForEmail != null) {
            throw new RegisterException(String.format("Аккаунт с данным email \"%s\" уже зарегистрирован в системе", userForEmail.getEmail()));
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        this.accountsRepository.save(user);
        log.info("Аккаунт {} зарегистрирован", user);
        return new RegisterAnswer("Успешная регистрация", true);
    }
}
