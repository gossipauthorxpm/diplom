package sapozhnikov.diplom.server.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sapozhnikov.diplom.server.api.model.InfoStand;
import sapozhnikov.diplom.server.api.repository.InfoStandRepository;

import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class InfoStandService {
    private final InfoStandRepository infoStandRepository;

    public void setInfoStandData(InfoStand data) {
        InfoStand infoStand = this.infoStandRepository.getByKeyStand(data.getKeyStand());
        data.setId(infoStand.getId());
        this.infoStandRepository.save(data);

    }

    public List<InfoStand> getAllInfoStandForUser(String login) {
        return this.infoStandRepository.getAllByLoginUser(login);
    }

    public ResponseEntity<String> createStandForKey(String key) {
        try {
            InfoStand infoStand = new InfoStand();
            infoStand.setKeyStand(key);
            this.infoStandRepository.save(infoStand);
        } catch (DataIntegrityViolationException sqlException) {
            return new ResponseEntity<String>("Stand now in base", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<String>("Stand created", HttpStatus.OK);
    }

    public ResponseEntity<String> isStandForKey(String key) {
        InfoStand infoStand = this.infoStandRepository.getByKeyStand(key);
        if (infoStand == null) {
            return new ResponseEntity<String>("Key not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>("Key is system", HttpStatus.OK);
    }

    public ResponseEntity<String> createStandKey() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 64;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        InfoStand infoStand = new InfoStand();
        infoStand.setKeyStand(generatedString);
        this.infoStandRepository.save(infoStand);

        return new ResponseEntity<>(generatedString, HttpStatus.OK);
    }

    public ResponseEntity<String> deleteStandMonitor(Long id) {
        InfoStand infoStand = this.infoStandRepository.getById(id);
        this.infoStandRepository.delete(infoStand);
        return new ResponseEntity<>("Monitor has deleted", HttpStatus.OK);
    }
}
