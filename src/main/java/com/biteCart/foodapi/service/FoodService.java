package com.biteCart.foodapi.service;

import com.biteCart.foodapi.io.FoodRequest;
import com.biteCart.foodapi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

}
