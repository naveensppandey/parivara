package com.parivara.dto;

import jakarta.validation.constraints.NotBlank;

public class AdminLoginRequest {

    @NotBlank(message = "Email/Username is required")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    public AdminLoginRequest() {}

    public AdminLoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
