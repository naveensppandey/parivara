package com.parivara.controller;

import com.parivara.entity.ContactMessage;
import com.parivara.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> submitMessage(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = contactService.saveMessage(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
