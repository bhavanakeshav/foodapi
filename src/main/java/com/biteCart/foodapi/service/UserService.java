package com.biteCart.foodapi.service;

import com.biteCart.foodapi.io.UserRequest;
import com.biteCart.foodapi.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);

    String findByUserId();

    UserResponse getLoggedInUserProfile();

}
