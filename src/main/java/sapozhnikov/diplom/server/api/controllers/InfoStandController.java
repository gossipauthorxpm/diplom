package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.model.InfoStand;
import sapozhnikov.diplom.server.api.service.InfoStandService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(OriginPath.PATH_REACT)
public class InfoStandController {
    private final InfoStandService infoStandService;

    @PostMapping("/api/set-info-stand-data/")
    public ResponseEntity<String> setDataStatus(@RequestBody InfoStand stand) {
        this.infoStandService.setInfoStandData(stand);
        return new ResponseEntity<String>("Stand is saved", HttpStatus.OK);
    }

    @GetMapping("/api/get-all-info-stands/{login}")
    public List<InfoStand> getAllInfoStands(@PathVariable(value = "login") String login) {
        return this.infoStandService.getAllInfoStandForUser(login);
    }

    @PostMapping("/api/create-stand-for-key/")
    public ResponseEntity<String> createStandForKey(@RequestBody String key) {
        return this.infoStandService.createStandForKey(key);
    }

    @GetMapping("/api/is-stand-into-base/{key}")
    public ResponseEntity<String> isKeyIntoBase(@PathVariable(value = "key") String key) {
        return this.infoStandService.isStandForKey(key);
    }

    @GetMapping("/api/create-standKey/")
    public ResponseEntity<String> createStandKey() {
        return this.infoStandService.createStandKey();
    }
    @DeleteMapping("/api/delete-stand-monitor/{id}")
    public ResponseEntity<String> deleteStandMonitor(@PathVariable(value = "id") Long id){
        return this.infoStandService.deleteStandMonitor(id);
    }
}
