package sapozhnikov.diplom.server.api.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.model.AuthDto;
import sapozhnikov.diplom.server.api.model.answers.AuthAnswer;
import sapozhnikov.diplom.server.config.jwt_util.JwtUtil;

@CrossOrigin(origins = CrossOriginPath.PATH_REACT)
@RestController
@RequestMapping("/api/login/")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @PostMapping()
    public AuthAnswer auth(@RequestBody AuthDto request) {

        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(request.getLogin(), request.getPassword());

        try {
            authenticationManager.authenticate(authenticationToken);
            log.info("Пользователь с логином {} прошел аутентификацию", request.getLogin());
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Bad credentials");
        }

        String jwt = jwtUtil.generateToken(request.getLogin());
//        System.out.println(jwt);
        return new AuthAnswer(jwt, request.getLogin());
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping(value = "/profile")
    public String getCurrentUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }
}
