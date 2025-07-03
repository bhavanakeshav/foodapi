package com.biteCart.foodapi.service;

import com.biteCart.foodapi.io.FoodRequest;
import com.biteCart.foodapi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> readFoods();
    //To fetch single food item using id
    FoodResponse readFood(String id);

    boolean deleteFile(String filename);

    void deleteFood(String id);
}
