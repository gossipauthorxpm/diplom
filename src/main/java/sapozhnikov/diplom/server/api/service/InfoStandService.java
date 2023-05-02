package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.InfoStand;
import sapozhnikov.diplom.server.api.repository.InfoStandRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InfoStandService {
    private final InfoStandRepository infoStandRepository;

    public void setDataStatus(InfoStand data) {
        this.infoStandRepository.save(data);
    }

    public List<InfoStand> getAllInfoStandForUser(String login) {
        return this.infoStandRepository.getAllByLoginUser(login);
    }
}
