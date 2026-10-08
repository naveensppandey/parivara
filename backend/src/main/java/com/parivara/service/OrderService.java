package com.parivara.service;

import com.parivara.entity.CustomerOrder;
import com.parivara.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public CustomerOrder createOrder(CustomerOrder order) {
        if (order.getId() == null || order.getId().trim().isEmpty()) {
            order.setId("PAR-" + (100000 + new Random().nextInt(900000)));
        }
        if (order.getStatus() == null) {
            order.setStatus("NEW");
        }
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
