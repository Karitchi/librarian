package com.karitchi.library.service;

import com.karitchi.library.dto.LoginRequest;
import com.karitchi.library.dto.LoginResponse;
import com.karitchi.library.model.User;
import com.karitchi.library.repository.UserRepository;
import com.karitchi.library.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtUtil jwtUtil;

  private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public LoginResponse authenticate(LoginRequest request) {
    // Find user by email
    User user = userRepository.findByEmail(request.getEmail())
        .orElseThrow(() -> new RuntimeException("Invalid email or password"));

    // Check password
    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
      throw new RuntimeException("Invalid email or password");
    }

    // Generate JWT token
    String token = jwtUtil.generateToken(
        user.getEmail(),
        user.getRole().getName(),
        user.getId());

    System.out.println("✅ User logged in: " + user.getEmail() + " (Role: " + user.getRole().getName() + ")");

    return new LoginResponse(
        token,
        user.getId(),
        user.getEmail(),
        user.getRole().getName());
  }
}
