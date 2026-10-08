package com.parivara.service;

import com.parivara.entity.CustomerOrder;
import com.parivara.entity.OrderItem;
import com.parivara.entity.Product;
import com.parivara.repository.OrderRepository;
import com.parivara.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    public CustomerOrder createOrder(CustomerOrder order) {
        if (order.getId() == null || order.getId().trim().isEmpty()) {
            order.setId("PAR-" + (100000 + new Random().nextInt(900000)));
        }
        if (order.getStatus() == null) {
            order.setStatus("NEW");
        }
        if (order.getCreatedAt() == null) {
            order.setCreatedAt(LocalDateTime.now());
        }

        // Validate items & calculate totals on backend (source of truth)
        double calculatedSubtotal = 0.0;
        List<OrderItem> validatedItems = new ArrayList<>();

        if (order.getItems() != null) {
            for (OrderItem incomingItem : order.getItems()) {
                int qty = incomingItem.getQuantity() != null && incomingItem.getQuantity() > 0 ? incomingItem.getQuantity() : 1;
                
                // Lookup product in database to obtain authoritative price and metadata
                Optional<Product> dbProductOpt = Optional.empty();
                if (incomingItem.getProductId() != null) {
                    dbProductOpt = productRepository.findById(incomingItem.getProductId());
                }
                if (dbProductOpt.isEmpty() && incomingItem.getProductName() != null) {
                    dbProductOpt = productRepository.searchProducts(incomingItem.getProductName()).stream().findFirst();
                }

                if (dbProductOpt.isPresent()) {
                    Product dbProduct = dbProductOpt.get();
                    double unitPrice = dbProduct.getPrice();
                    double itemSubtotal = unitPrice * qty;
                    calculatedSubtotal += itemSubtotal;

                    OrderItem validatedItem = new OrderItem(
                            dbProduct.getId(),
                            dbProduct.getName(),
                            dbProduct.getPrimaryImage(),
                            dbProduct.getWeight(),
                            unitPrice,
                            qty,
                            itemSubtotal
                    );
                    validatedItems.add(validatedItem);
                } else {
                    // Fallback for custom or starter items with clean snapshot
                    double unitPrice = incomingItem.getPrice() != null ? incomingItem.getPrice() : 0.0;
                    double itemSubtotal = unitPrice * qty;
                    calculatedSubtotal += itemSubtotal;

                    incomingItem.setPrice(unitPrice);
                    incomingItem.setQuantity(qty);
                    incomingItem.setItemTotal(itemSubtotal);
                    if (incomingItem.getProductImage() == null) {
                        incomingItem.setProductImage("/images/products/parivara-cow-manure-2kg.jpg");
                    }
                    validatedItems.add(incomingItem);
                }
            }
        }

        order.setItems(validatedItems);
        order.setSubtotal(calculatedSubtotal);

        // Calculate delivery fee on backend
        double deliveryFee = (calculatedSubtotal >= 499.0 || calculatedSubtotal == 0.0) ? 0.0 : 40.0;
        order.setDeliveryFee(deliveryFee);
        order.setTotalAmount(calculatedSubtotal + deliveryFee);

        return orderRepository.save(order);
    }

    public List<CustomerOrder> getAllOrders() {
        return orderRepository.findAllByOrderByCreatedAtDesc();
    }

    public Optional<CustomerOrder> getOrderById(String id) {
        return orderRepository.findById(id);
    }

    public CustomerOrder updateOrderStatus(String id, String status) {
        CustomerOrder order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
        order.setStatus(status);
        return orderRepository.save(order);
    }
}
