package com.parivara.dto;

public class PriceUpdateRequest {
    private Double price;
    private String availability;

    public PriceUpdateRequest() {}

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }
}
