package com.parivara.service;

import com.parivara.entity.BlogPost;
import com.parivara.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<BlogPost> getAllPosts() {
        return blogRepository.findAll();
    }

    public Optional<BlogPost> getPostBySlug(String slug) {
        return blogRepository.findBySlug(slug);
    }

    public BlogPost savePost(BlogPost post) {
        return blogRepository.save(post);
    }
}
