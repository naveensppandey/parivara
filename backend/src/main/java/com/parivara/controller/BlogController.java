package com.parivara.controller;

import com.parivara.entity.BlogPost;
import com.parivara.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public ResponseEntity<List<BlogPost>> getAllPosts() {
        return ResponseEntity.ok(blogService.getAllPosts());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<BlogPost> getPostBySlug(@PathVariable String slug) {
        return blogService.getPostBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
