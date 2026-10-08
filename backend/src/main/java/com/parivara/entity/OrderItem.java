package com.parivara.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;
    private String productName;
    private String productImage;
    private String weight;
    private Double price;
    private Integer quantity;
    private Double itemTotal;

    public OrderItem() {}

    public OrderItem(Long productId, String productName, String productImage, String weight, Double price, Integer quantity, Double itemTotal) {
        this.productId = productId;
        this.productName = productName;
        this.productImage = productImage;
        this.weight = weight;
        this.price = price;
        this.quantity = quantity;
        this.itemTotal = itemTotal;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getProductImage() { return productImage; }
    public void setProductImage(String productImage) { this.productImage = productImage; }

    public String getWeight() { return weight; }
    public void setWeight(String weight) { this.weight = weight; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }

    public Double getItemTotal() { return itemTotal; }
    public void setItemTotal(Double itemTotal) { this.itemTotal = itemTotal; }
}
