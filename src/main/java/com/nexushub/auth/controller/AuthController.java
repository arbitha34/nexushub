package com.nexushub.auth.controller;

import com.nexushub.auth.dto.LoginRequest;
import com.nexushub.auth.dto.LoginResponse;
import com.nexushub.auth.dto.RegisterRequest;
import com.nexushub.auth.dto.RegisterResponse;
import com.nexushub.auth.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public RegisterResponse register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }
}