package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.service.DownloadFileService;

import java.io.FileNotFoundException;


@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
@RestController
@RequiredArgsConstructor
public class DownloadFileController {
    private final DownloadFileService downloadFileService;

    @GetMapping(value = "/api/get-python-script/{oc}")
    public ResponseEntity<FileSystemResource > getPythonScript(@PathVariable(value = "oc") String oc){
        return this.downloadFileService.getPythonScript(oc);
    }


}
