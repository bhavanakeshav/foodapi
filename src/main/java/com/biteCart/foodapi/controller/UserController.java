package com.biteCart.foodapi.controller;
import com.biteCart.foodapi.io.UserRequest;
import com.biteCart.foodapi.io.UserResponse;
import com.biteCart.foodapi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
}
