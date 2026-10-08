package com.parivara;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ParivaraApplication {

    public static void main(String[] args) {
        SpringApplication.run(ParivaraApplication.class, args);
        System.out.println("==================================================");
        System.out.println("   🌱 PARIVARA Spring Boot Backend Started!");
        System.out.println("   API URL: http://localhost:8080/api/products");
        System.out.println("   H2 DB Console: http://localhost:8080/h2-console");
        System.out.println("==================================================");
    }
}
