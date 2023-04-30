package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sapozhnikov.diplom.server.api.model.DataStatus;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = OriginPath.PATH_REACT)
public class ParseDataStatusController {
    @PostMapping("/api/set-data-status/")
    public String setDataStatus(@RequestBody DataStatus data) {
        System.out.println(data.toString());
        return "111";
    }
}
