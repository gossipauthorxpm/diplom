package sapozhnikov.diplom.server.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sapozhnikov.diplom.server.api.model.User;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    User getAccountByLogin(String login);

    User getAccountByEmail(String email);

    Optional<User> findByLogin(String login);
}

