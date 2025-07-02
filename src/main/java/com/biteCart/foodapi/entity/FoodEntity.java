package com.biteCart.foodapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collation = "foods")
public class FoodEntity {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String imageUrl;

}
