package com.biteCart.foodapi.service;

import com.biteCart.foodapi.io.OrderRequest;
import com.biteCart.foodapi.io.OrderResponse;
import com.razorpay.RazorpayException;

import java.util.List;
import java.util.Map;

public interface OrderService {

    OrderResponse createOrderWithPayment(OrderRequest request) throws RazorpayException;

    void verifyPayment(Map<String, String> paymentData, String status);

    List<OrderResponse> getUserOrders();

    void removeOrder(String orderId);

    //admin: to fetch all the orders

    List<OrderResponse> getOrdersOfAllUsers();

    //method to modify the order status by admin
    void updateOrderStatus(String orderId, String status);



}
