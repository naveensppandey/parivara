package com.parivara.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "blog_posts")
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, unique = true)
    private String slug;

    private String category;
    private String readTime;
    private String author;
    private String date;

    @Column(length = 1000)
    private String excerpt;

    @Column(length = 5000)
    private String content;

    private String image;

    public BlogPost() {}

    public BlogPost(Long id, String title, String slug, String category, String readTime, String author, String date, String excerpt, String content, String image) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.category = category;
        this.readTime = readTime;
        this.author = author;
        this.date = date;
        this.excerpt = excerpt;
        this.content = content;
        this.image = image;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getReadTime() { return readTime; }
    public void setReadTime(String readTime) { this.readTime = readTime; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getExcerpt() { return excerpt; }
    public void setExcerpt(String excerpt) { this.excerpt = excerpt; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}
