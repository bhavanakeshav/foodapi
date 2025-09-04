package com.biteCart.foodapi.controller;
import com.biteCart.foodapi.io.UserRequest;
import com.biteCart.foodapi.io.UserResponse;
import com.biteCart.foodapi.repository.UserRepository;
import com.biteCart.foodapi.service.UserService;
import com.biteCart.foodapi.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api")

public class UserController {
    private UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);

    }

    @GetMapping("/user/profile")
    public ResponseEntity<UserResponse> getLoggedInUserProfile() {
        UserResponse response = userService.getLoggedInUserProfile();
        return ResponseEntity.ok(response);
    }


}
