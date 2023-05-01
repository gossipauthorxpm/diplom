package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.DataStatus;
import sapozhnikov.diplom.server.api.repository.DataStatusRepository;

@Service
@RequiredArgsConstructor
public class DataStatusService {
    private final DataStatusRepository dataStatusRepository;

    public void setDataStatus(DataStatus data) {
        this.dataStatusRepository.save(data);
    }
}
