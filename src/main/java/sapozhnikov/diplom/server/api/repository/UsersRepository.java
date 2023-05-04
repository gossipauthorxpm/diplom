package sapozhnikov.diplom.server.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sapozhnikov.diplom.server.api.model.User;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    User getUserByLogin(String login);

    User getUserByEmail(String email);

    Optional<User> findByLogin(String login);
}

