package sapozhnikov.diplom.server.api.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
@RestController
public class DownloadFileController {
    @GetMapping("api/get-python-script")
    public void getPythonScript() {

    }
}
