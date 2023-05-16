package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.repository.UsersRepository;
import sapozhnikov.diplom.server.errros.ResponseException;

@Service
@Slf4j
@RequiredArgsConstructor
public class CabinetService {
    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<Object> getUserByLogin(String login) {
        User user = this.usersRepository.getUserByLogin(login);
        if (user == null) {
            log.warn("Find user for login {} - not found", login);
            return new ResponseEntity<>("Пользователь не найден", HttpStatus.NOT_FOUND);
        }
        log.info("Find user for login {} - found", login);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    public ResponseEntity<String> changePasswordForLogin(String login, String oldPassword, String newPassword) {
        if (newPassword.equals("")) {
            log.warn("User by login {} - new password has empty", login);
            return new ResponseEntity<>("Пароль не может быть пустым", HttpStatus.LENGTH_REQUIRED);
        }
        try {
            User user = this.getUserByLoginAndCheckAccess(login, oldPassword);

            user.setPassword(this.bCryptPasswordEncoder.encode(newPassword));
            this.usersRepository.save(user);
            log.info("User by login {} password has changed success", login);
            return new ResponseEntity<>("Пароль успешно заменен", HttpStatus.OK);
        } catch (ResponseException responseException) {
            return responseException.getResponseEntity();
        }

    }

    public ResponseEntity<String> deleteUser(String login, String password) {
        try {
            User user = this.getUserByLoginAndCheckAccess(login, password);
            this.usersRepository.delete(user);
            log.info("User by login {} - has deleted", login);
            return new ResponseEntity<>("Пользователь успешно удален", HttpStatus.OK);
        } catch (ResponseException responseException) {
            return responseException.getResponseEntity();
        }
    }

    public ResponseEntity<String> changeUser(User user) {
        User userOriginal = this.usersRepository.getById(user.getId());

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getLogin(), user.getPassword());
        try {
            this.authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {

            log.warn("User by login `{}` - access close", user.getLogin());
            return new ResponseEntity<>("Доступ запрещен", HttpStatus.FORBIDDEN);
        }

        userOriginal.setAge(user.getAge());
        userOriginal.setCity(user.getCity());
        userOriginal.setEmail(user.getEmail());
        userOriginal.setWorkPlace(user.getWorkPlace());
        userOriginal.setCountry(user.getCountry());
        this.usersRepository.save(userOriginal);
        log.info("User by login `{}` - change user data success", user.getLogin());
        return new ResponseEntity<>("Пользователь изменен", HttpStatus.OK);
    }

    private User getUserByLoginAndCheckAccess(String login, String password) throws ResponseException {
        User user = this.usersRepository.getUserByLogin(login);
        if (user == null) {
            log.warn("User by login `{}` - not found", login);
            throw new ResponseException(new ResponseEntity<>("Пользователь не найден", HttpStatus.NOT_FOUND));
        }
        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(login, password);
            this.authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            log.warn("User by login `{}` - access close", login);
            throw new ResponseException(new ResponseEntity<>("Доступ запрещен", HttpStatus.FORBIDDEN));
        }
        return user;
    }
}
