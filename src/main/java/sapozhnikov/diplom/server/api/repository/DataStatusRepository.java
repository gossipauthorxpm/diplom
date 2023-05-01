package sapozhnikov.diplom.server.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sapozhnikov.diplom.server.api.model.DataStatus;

@Repository
public interface DataStatusRepository extends JpaRepository<DataStatus, Long> {

}
