package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.repository.UsersRepository;

@Service
@RequiredArgsConstructor
public class CabinetService {
    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<Object> getUserByLogin(String login) {
        User user = this.usersRepository.getUserByLogin(login);
        if (user == null) {
            return new ResponseEntity<>("Пользователь не найден", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    public ResponseEntity<String> changePasswordForLogin(String login, String password) {
        User user = this.usersRepository.getUserByLogin(login);
        if (user == null) {
            return new ResponseEntity<>("Пользователь не найден", HttpStatus.NOT_FOUND);
        }
        user.setPassword(this.bCryptPasswordEncoder.encode(password));
        this.usersRepository.save(user);
        return new ResponseEntity<>("Пароль успешно заменен", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteUser(String login, String password) {
        User user = this.usersRepository.getUserByLogin(login);
        if (user == null) {
            return new ResponseEntity<>("Пользователь не найден", HttpStatus.NOT_FOUND);
        }

        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(login, password);

        try {
            this.authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Доступ запрещен", HttpStatus.FORBIDDEN);
        }

        this.usersRepository.delete(user);
        return new ResponseEntity<>("Пользователь успешно удален", HttpStatus.OK);


    }

    public ResponseEntity<String> changeUser(User user) {
        User userOriginal = this.usersRepository.getById(user.getId());
        userOriginal.setAge(user.getAge());
        userOriginal.setCity(user.getCity());
        userOriginal.setEmail(user.getEmail());
        userOriginal.setWorkPlace(user.getWorkPlace());
        userOriginal.setCountry(user.getCountry());
        this.usersRepository.save(userOriginal);
        return new ResponseEntity<>("Пользователь изменен", HttpStatus.OK);
    }
}
