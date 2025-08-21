package com.biteCart.foodapi.service;

import com.biteCart.foodapi.io.CartRequest;
import com.biteCart.foodapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);
    CartResponse getCart();

    void clearCart();
    CartResponse removeFromCart(CartRequest cartRequest);
}
