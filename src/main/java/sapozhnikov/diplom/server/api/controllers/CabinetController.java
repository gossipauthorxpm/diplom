package sapozhnikov.diplom.server.api.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.model.User;
import sapozhnikov.diplom.server.api.service.CabinetService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
public class CabinetController {
    private final CabinetService cabinetService;

    @GetMapping("/api/get-account-by-login/{login}")
    public ResponseEntity<Object> getUserByLogin(@PathVariable(value = "login") String login) {
        return this.cabinetService.getUserByLogin(login);
    }

    @PostMapping("/api/change-password-by-login/")
    public ResponseEntity<String> changePasswordForLogin(@RequestParam String login, @RequestParam String oldPassword, @RequestParam String newPassword) {
        return this.cabinetService.changePasswordForLogin(login, oldPassword, newPassword);
    }

    @PutMapping("/api/change-user/")
    public ResponseEntity<String> changeUser(@RequestBody User user) {
        return this.cabinetService.changeUser(user);
    }

    @DeleteMapping("/api/delete-user/")
    public ResponseEntity<String> deleteUser(@RequestParam String login, @RequestParam String password) {
        return this.cabinetService.deleteUser(login, password);
    }

}
