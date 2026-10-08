package com.parivara.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    private String category;
    private String categorySlug;
    private String weight;

    @Column(nullable = false)
    private Double price;
    private Double compareAtPrice;

    @Column(length = 2000)
    private String description;

    @Column(length = 500)
    private String shortDescription;

    private String availability; // IN_STOCK, OUT_OF_STOCK, UPCOMING
    private Boolean featured = false;
    private Double rating = 4.9;
    private Integer reviewCount = 0;
    private String badge;
    private String primaryImage;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Product() {}

    public Product(Long id, String name, String slug, String category, String categorySlug, String weight, Double price, Double compareAtPrice, String shortDescription, String description, String availability, Boolean featured, Double rating, Integer reviewCount, String badge, String primaryImage) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.category = category;
        this.categorySlug = categorySlug;
        this.weight = weight;
        this.price = price;
        this.compareAtPrice = compareAtPrice;
        this.shortDescription = shortDescription;
        this.description = description;
        this.availability = availability;
        this.featured = featured;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.badge = badge;
        this.primaryImage = primaryImage;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getCategorySlug() { return categorySlug; }
    public void setCategorySlug(String categorySlug) { this.categorySlug = categorySlug; }

    public String getWeight() { return weight; }
    public void setWeight(String weight) { this.weight = weight; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Double getCompareAtPrice() { return compareAtPrice; }
    public void setCompareAtPrice(Double compareAtPrice) { this.compareAtPrice = compareAtPrice; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getShortDescription() { return shortDescription; }
    public void setShortDescription(String shortDescription) { this.shortDescription = shortDescription; }

    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }

    public Boolean getFeatured() { return featured; }
    public void setFeatured(Boolean featured) { this.featured = featured; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getReviewCount() { return reviewCount; }
    public void setReviewCount(Integer reviewCount) { this.reviewCount = reviewCount; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public String getPrimaryImage() { return primaryImage; }
    public void setPrimaryImage(String primaryImage) { this.primaryImage = primaryImage; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
}
