package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.model.InfoStand;
import sapozhnikov.diplom.server.api.service.InfoStandService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(OriginPath.PATH_REACT)
public class InfoStandController {
    private final InfoStandService infoStandService;

    @PostMapping("/api/set-data-status/")
    public String setDataStatus(@RequestBody InfoStand data) {
        System.out.println(data.toString());
        this.infoStandService.setDataStatus(data);
        return "111";
    }

    @CrossOrigin(origins = {OriginPath.PATH_REACT}, methods = {RequestMethod.GET})
    @GetMapping("/api/get-all-info-stands/{login}")
    public List<InfoStand> getAllInfoStands(@PathVariable(value = "login") String login) {
        return this.infoStandService.getAllInfoStandForUser(login);
    }
}
