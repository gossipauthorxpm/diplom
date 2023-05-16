package sapozhnikov.diplom.server.errros;

import org.springframework.http.ResponseEntity;

public class ResponseException extends Exception {
    ResponseEntity<String> responseEntity;

    public ResponseException(ResponseEntity<String> responseEntity) {
        this.responseEntity = responseEntity;
    }

    public ResponseEntity<String> getResponseEntity() {
        return responseEntity;
    }

    public void setResponseEntity(ResponseEntity<String> responseEntity) {
        this.responseEntity = responseEntity;
    }
}
