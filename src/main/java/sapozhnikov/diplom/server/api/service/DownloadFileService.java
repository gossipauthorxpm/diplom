package sapozhnikov.diplom.server.api.service;


import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;


@Service
public class DownloadFileService {

    public ResponseEntity<FileSystemResource> getPythonScript(String oc) {
        if (oc.equals("LINUX")){
            FileSystemResource resource = new FileSystemResource("python-script/stats-parser-linux.zip");
            return new ResponseEntity<>(resource, HttpStatus.OK);
        }
        FileSystemResource resource = new FileSystemResource("python-script/stats-parser.zip");
        return new ResponseEntity<>(resource, HttpStatus.OK);
    }
}
