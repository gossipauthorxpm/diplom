package sapozhnikov.diplom.server.api.controllers;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sapozhnikov.diplom.server.api.service.DownloadFileService;

import java.io.FileNotFoundException;


@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
@RestController
@RequiredArgsConstructor
public class DownloadFileController {
    private final DownloadFileService downloadFileService;

    @GetMapping(value = "/api/get-python-script/")
    public ResponseEntity<FileSystemResource > getPythonScript(){
        return this.downloadFileService.getPythonScript();
    }


}
