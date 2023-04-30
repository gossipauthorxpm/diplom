package sapozhnikov.diplom.server.config.jwt_util;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.repository.UsersRepository;
import sapozhnikov.diplom.server.api.service.UsersDetails;

import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class UsersDetailsService implements UserDetailsService {

    private final UsersRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> users = repository.findByLogin(username);


        if (users.isEmpty()) {
            throw new UsernameNotFoundException("This user is not present");
        }


        return new UsersDetails(users.get());
    }
}