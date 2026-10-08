package com.parivara.service;

import com.parivara.entity.BlogPost;
import com.parivara.entity.CustomerOrder;
import com.parivara.entity.OrderItem;
import com.parivara.entity.Product;
import com.parivara.repository.BlogRepository;
import com.parivara.repository.OrderRepository;
import com.parivara.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final BlogRepository blogRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public DataInitializer(ProductRepository productRepository, BlogRepository blogRepository, OrderRepository orderRepository) {
        this.productRepository = productRepository;
        this.blogRepository = blogRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            System.out.println("🌱 Seeding initial Parivara products into database...");

            Product p1 = new Product(
                    null,
                    "Parivara Cow Manure",
                    "parivara-cow-manure-2kg",
                    "Organic Fertilizers",
                    "home-garden",
                    "2 KG",
                    149.0,
                    199.0,
                    "Aged, natural organic manure for home gardens, potted plants, kitchen gardens, and trees.",
                    "Parivara Cow Manure is a carefully aged and processed natural organic manure designed to restore soil vitality for home gardens in Varanasi and Mirzapur. It enriches the soil with vital organic matter, improves water retention, and promotes healthy microbial activity around root zones without synthetic chemicals.",
                    "IN_STOCK",
                    true,
                    4.9,
                    48,
                    "Bestseller",
                    "/images/products/parivara-cow-manure-2kg.jpg"
            );

            Product p2 = new Product(
                    null,
                    "Parivara Vermicompost",
                    "parivara-vermicompost-2kg",
                    "Soil Conditioners",
                    "potted-plants",
                    "2 KG",
                    199.0,
                    249.0,
                    "Premium earthworm castings enriched organic plant manure for home gardens & saplings.",
                    "Parivara Vermicompost is high-grade earthworm-processed organic plant nutrient manure. Rich in humus and bio-available micro-nutrients, it conditions soil structure, prevents compaction in pots, and gives young saplings and flowering plants the gentle organic nourishment they need.",
                    "IN_STOCK",
                    true,
                    4.95,
                    62,
                    "Top Rated",
                    "/images/products/parivara-vermicompost-2kg.jpg"
            );

            Product p3 = new Product(
                    null,
                    "Parivara Neem Cake Powder",
                    "parivara-neem-cake-1kg",
                    "Plant Care & Protection",
                    "indoor-plants",
                    "1 KG",
                    179.0,
                    220.0,
                    "Natural organic soil conditioner & neem meal for root protection and soil care.",
                    "Parivara Neem Cake Powder is derived from cold-pressed neem seeds. It acts as a natural soil conditioner while protecting roots from harmful soil pests and nematodes in home gardens.",
                    "UPCOMING",
                    false,
                    4.8,
                    19,
                    "Coming Soon",
                    "/images/banners/plant-doctor.jpg"
            );

            Product p4 = new Product(
                    null,
                    "Parivara Enriched Potting Mix",
                    "parivara-potting-mix-5kg",
                    "Soil Conditioners",
                    "kitchen-garden",
                    "5 KG",
                    299.0,
                    399.0,
                    "Ready-to-use potting mix enriched with Parivara Vermicompost & Coco peat.",
                    "Lightweight, ready-to-use premium potting soil ideal for urban balcony pots and indoor planters.",
                    "UPCOMING",
                    false,
                    4.85,
                    24,
                    "Coming Soon",
                    "/images/banners/hero-slide-3.jpg"
            );

            Product p5 = new Product(
                    null,
                    "Parivara Organic Garden Starter Kit",
                    "parivara-garden-starter-kit",
                    "Kits & Bundles",
                    "flowering-plants",
                    "4.5 KG",
                    499.0,
                    699.0,
                    "Complete organic plant care bundle: 2KG Cow Manure + 2KG Vermicompost + Spray Bottle.",
                    "The perfect starter pack for home gardening beginners in Varanasi & Mirzapur! Includes 2KG Parivara Cow Manure, 2KG Parivara Vermicompost, and an easy gardening guide.",
                    "IN_STOCK",
                    true,
                    5.0,
                    31,
                    "Value Pack",
                    "/images/products/parivara-cow-manure-2kg.jpg"
            );

            productRepository.saveAll(List.of(p1, p2, p3, p4, p5));
        }

        if (orderRepository.count() == 0) {
            System.out.println("🌱 Seeding sample customer orders into database...");

            CustomerOrder demo1 = new CustomerOrder();
            demo1.setId("PAR-100241");
            demo1.setCustomerName("Rahul Kumar");
            demo1.setPhone("9305762044");
            demo1.setEmail("rahul.k@example.com");
            demo1.setAddress("House No. 12, Civil Lines Near Court");
            demo1.setCity("Mirzapur");
            demo1.setPincode("231001");
            demo1.setDeliveryPreference("Standard Doorstep Delivery");
            demo1.setNotes("Call before coming");
            demo1.setSubtotal(348.0);
            demo1.setDeliveryFee(40.0);
            demo1.setTotalAmount(388.0);
            demo1.setStatus("NEW");
            demo1.setPaymentMethod("Cash / UPI on Delivery");
            demo1.setCreatedAt(LocalDateTime.now().minusDays(1));

            OrderItem item1 = new OrderItem(1L, "Parivara Cow Manure", "/images/products/parivara-cow-manure-2kg.jpg", "2 KG", 149.0, 1, 149.0);
            OrderItem item2 = new OrderItem(2L, "Parivara Vermicompost", "/images/products/parivara-vermicompost-2kg.jpg", "2 KG", 199.0, 1, 199.0);
            demo1.setItems(List.of(item1, item2));

            CustomerOrder demo2 = new CustomerOrder();
            demo2.setId("PAR-100242");
            demo2.setCustomerName("Sanjay Verma");
            demo2.setPhone("7007751458");
            demo2.setEmail("sanjay.v@example.com");
            demo2.setAddress("B-12/45, Lanka Chauraha");
            demo2.setCity("Varanasi");
            demo2.setPincode("221005");
            demo2.setDeliveryPreference("Standard Doorstep Delivery");
            demo2.setNotes("Leave at front porch if absent");
            demo2.setSubtotal(499.0);
            demo2.setDeliveryFee(0.0);
            demo2.setTotalAmount(499.0);
            demo2.setStatus("CONFIRMED");
            demo2.setPaymentMethod("Cash / UPI on Delivery");
            demo2.setCreatedAt(LocalDateTime.now());

            OrderItem item3 = new OrderItem(5L, "Parivara Organic Garden Starter Kit", "/images/products/parivara-cow-manure-2kg.jpg", "4.5 KG", 499.0, 1, 499.0);
            demo2.setItems(List.of(item3));

            orderRepository.saveAll(List.of(demo1, demo2));
        }

        if (blogRepository.count() == 0) {
            System.out.println("🌱 Seeding gardening blog articles into database...");

            BlogPost b1 = new BlogPost(
                    null,
                    "How to Improve Soil for Home Plants in Pots",
                    "how-to-improve-soil-for-home-plants",
                    "Soil Health",
                    "4 min read",
                    "Parivara Organic Team",
                    "October 5, 2026",
                    "Discover simple natural techniques to revive compacted pot soil and increase nutrient availability for balcony plants.",
                    "<p>Container soil in potted plants loses its structure and organic nutrients over time due to frequent watering and limited space. Mixing aged organic manure like Parivara Cow Manure or Vermicompost replenishes essential carbon and micronutrients naturally.</p>",
                    "/images/banners/hero-slide-2.jpg"
            );

            BlogPost b2 = new BlogPost(
                    null,
                    "Cow Manure vs. Vermicompost: Which is Best for Your Garden?",
                    "cow-manure-vs-vermicompost",
                    "Product Comparison",
                    "5 min read",
                    "Parivara Agriculture Advisory",
                    "October 1, 2026",
                    "Understand the subtle differences between cow manure and worm compost so you can give your plants the exact diet they need.",
                    "<p>Both cow manure and vermicompost are wonderful natural soil amendments. Cow manure adds rich organic structure for long-term health, while vermicompost provides fine worm castings with fast bio-available nutrients.</p>",
                    "/images/products/parivara-vermicompost-2kg.jpg"
            );

            blogRepository.saveAll(List.of(b1, b2));
        }
    }
}
