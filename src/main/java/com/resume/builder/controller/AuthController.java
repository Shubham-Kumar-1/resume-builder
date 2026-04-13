package com.resume.builder.controller;

import java.time.Instant;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resume.builder.model.UserAccount;
import com.resume.builder.service.UserAccountService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserAccountService userAccountService;

    public AuthController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            UserAccount saved = userAccountService.register(request.fullName(), request.email(), request.password());
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new RegisterResponse("User registered successfully", saved.getId(), saved.getEmail()));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(new ErrorResponse(ex.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpSession session) {
        try {
            UserAccount user = userAccountService.login(request.email(), request.password());
            session.setAttribute("loggedInUserId", user.getId());
            session.setAttribute("loggedInUserName", user.getFullName());
            session.setAttribute("loggedInUserEmail", user.getEmail());
            return ResponseEntity.ok(new LoginResponse("Login successful", user.getId(), user.getFullName(), user.getEmail()));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse(ex.getMessage()));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(HttpSession session) {
        Object userId = session.getAttribute("loggedInUserId");
        Object fullName = session.getAttribute("loggedInUserName");
        Object email = session.getAttribute("loggedInUserEmail");

        if (userId == null || fullName == null || email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("Not logged in"));
        }

        return ResponseEntity.ok(new LoginResponse("User loaded", userId.toString(), fullName.toString(), email.toString()));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok(new MessageResponse("Logged out successfully"));
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserView>> getUsers() {
        List<UserView> users = userAccountService.getAllUsers().stream()
                .map(user -> new UserView(user.getId(), user.getFullName(), user.getEmail(), user.getCreatedAt()))
                .toList();

        return ResponseEntity.ok(users);
    }

    public record RegisterRequest(String fullName, String email, String password) {
    }

    public record LoginRequest(String email, String password) {
    }

    public record RegisterResponse(String message, String id, String email) {
    }

    public record LoginResponse(String message, String id, String fullName, String email) {
    }

    public record MessageResponse(String message) {
    }

    public record UserView(String id, String fullName, String email, Instant createdAt) {
    }

    public record ErrorResponse(String error) {
    }
}
