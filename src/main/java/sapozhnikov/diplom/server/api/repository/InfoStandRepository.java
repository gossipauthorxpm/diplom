package sapozhnikov.diplom.server.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sapozhnikov.diplom.server.api.model.InfoStand;

import java.util.List;

@Repository
public interface InfoStandRepository extends JpaRepository<InfoStand, Long> {
    List<InfoStand> getAllByLoginUser(String login);
}
