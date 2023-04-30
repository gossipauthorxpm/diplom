package sapozhnikov.diplom.server.api.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import sapozhnikov.diplom.server.api.model.AuthDto;
import sapozhnikov.diplom.server.config.jwt_util.JwtUtil;

import java.util.Map;

@CrossOrigin(origins = OriginPath.PATH_REACT)
@RestController
@RequestMapping("/api/login/")
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @PostMapping()
    public Map<String, String> auth(@RequestBody AuthDto request) {

        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(request.getLogin(), request.getPassword());

        try {
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Bad credentials");
        }

        String jwt = jwtUtil.generateToken(request.getLogin());
        return Map.of("accessToken", jwt);
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping(value = "/profile")
    public String getCurrentUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }
}
