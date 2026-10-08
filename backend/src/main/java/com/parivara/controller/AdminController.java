package com.parivara.controller;

import com.parivara.dto.AdminLoginRequest;
import com.parivara.dto.PriceUpdateRequest;
import com.parivara.entity.ContactMessage;
import com.parivara.entity.CustomerOrder;
import com.parivara.entity.Product;
import com.parivara.service.ContactService;
import com.parivara.service.OrderService;
import com.parivara.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final OrderService orderService;
    private final ProductService productService;
    private final ContactService contactService;

    @Value("${parivara.admin.email}")
    private String adminEmail;

    @Value("${parivara.admin.password}")
    private String adminPassword;

    @Autowired
    public AdminController(OrderService orderService, ProductService productService, ContactService contactService) {
        this.orderService = orderService;
        this.productService = productService;
        this.contactService = contactService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AdminLoginRequest request) {
        if ((request.getEmail().equalsIgnoreCase(adminEmail) || request.getEmail().equalsIgnoreCase("admin"))
                && request.getPassword().equals(adminPassword)) {
            Map<String, Object> response = new HashMap<>();
            response.put("token", "admin-auth-token-" + System.currentTimeMillis());
            response.put("role", "ADMIN");
            response.put("email", adminEmail);
            return ResponseEntity.ok(response);
        }
        Map<String, String> error = new HashMap<>();
        error.put("message", "Invalid admin credentials");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<CustomerOrder>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PutMapping("/orders/{id}/status")
    public ResponseEntity<CustomerOrder> updateOrderStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> payload) {
        String newStatus = payload.get("status");
        if (newStatus == null) {
            return ResponseEntity.badRequest().build();
        }
        CustomerOrder updated = orderService.updateOrderStatus(id, newStatus);
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @RequestBody PriceUpdateRequest request) {
        Product updated = productService.updatePriceAndAvailability(id, request.getPrice(), request.getAvailability());
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
}
