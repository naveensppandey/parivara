# 🌿 PARIVARA — Natural Farming • Healthy Plants

PARIVARA is a real-world, production-quality e-commerce and business platform built for a local natural gardening and farming products business serving **Varanasi** and **Mirzapur**, Uttar Pradesh, India.

---

## 📋 Table of Contents
1. [Project Overview](#1-project-overview)
2. [Key Features](#2-key-features)
3. [Technology Stack](#3-technology-stack)
4. [Folder Structure](#4-folder-structure)
5. [How to Run Frontend](#5-how-to-run-frontend)
6. [How to Run Backend](#6-how-to-run-backend)
7. [Database Setup](#7-database-setup)
8. [Environment Variables](#8-environment-variables)
9. [API Documentation](#9-api-documentation)
10. [How WhatsApp Ordering Works](#10-how-whatsapp-ordering-works)
11. [How Order Management Works](#11-how-order-management-works)
12. [How to Change Product Prices](#12-how-to-change-product-prices)
13. [How to Add a New Product](#13-how-to-add-a-new-product)
14. [How to Change Business Phone / WhatsApp](#14-how-to-change-business-phone--whatsapp)
15. [How to Change Email & Address](#15-how-to-change-email--address)
16. [Free / Low-Cost Deployment Steps](#16-free--low-cost-deployment-steps)
17. [Future Roadmap & Phase 2 Improvements](#17-future-roadmap--phase-2-improvements)

---

## 1. Project Overview
Parivara provides natural, aged cow manure and earthworm vermicompost for home balcony gardens, terrace vegetable pots, flowering plants, and fruit saplings. 

The website is designed with an original **Parivara Design System** (Deep Leaf Green `#2d7a3d`, Evergreen `#1a4125`, Soil Brown `#b17c54`, Warm Beige, and Amber Gold `#fbbf24`), optimized for high mobile conversion, fast performance, accessibility, and zero setup preview capabilities.

---

## 2. Key Features

- **Centralized Configuration**: Product prices, WhatsApp number, phone, email, delivery fees, and service areas stored in ONE single file (`src/config/business.js`).
- **Zero-Friction Preview Mode**: Frontend runs standalone with realistic fallback data when backend is offline.
- **Hero Promotional Slideshow**: 4 auto-rotating slides with arrows, dots, hover pause, and smooth transitions.
- **Gardening Category Grid**: Flowering Plants, Kitchen Garden, Indoor Plants, Trees & Garden, Home Garden, Potted Plants.
- **Featured Product Cards**: Weight, price, discount badge, availability, star rating placeholder, Add to Cart, and 1-Click WhatsApp Order button.
- **Product Detail View**: Image gallery, rating, quantity modifier, tabs for Overview, Benefits, Usage Steps, Suitable Plants, Composition, Storage, and FAQs.
- **Interactive 5-Step Usage Guide**: Soil preparation, manure measurement, mixing, watering, and maintenance.
- **Before / After Visual Comparison**: Illustrative comparison of soil enrichment and plant foliage improvement.
- **Why Parivara Section**: 6 core brand pillars highlighting natural focus and local delivery in Varanasi & Mirzapur.
- **Plant Doctor Feature**: Photo guidance request link opening prefilled WhatsApp message.
- **Product Search & Filters**: Search bar, category filter, price filter, sorting (Popularity, Price Low-High, Price High-Low, Newest), and mobile filter drawer.
- **Persistent Shopping Cart**: `localStorage` synchronized cart drawer with free delivery progress bar.
- **Structured Order Submission**: Order form collecting customer name, phone, email, address, city (Varanasi, Mirzapur, Other), and PIN code.
- **1-Click WhatsApp Order Generator**: Automatically builds prefilled itemized WhatsApp order messages.
- **Admin Dashboard**: Manage order statuses (`NEW`, `CONTACTED`, `CONFIRMED`, `OUT_FOR_DELIVERY`, `DELIVERED`, `CANCELLED`), track analytics, and manage products.
- **Plant Care Blog**: 7 articles with read times, categories, and full article view.
- **Mobile Sticky Action Bar**: Instant access to WhatsApp, Call, and Cart buttons on mobile screens.

---

## 3. Technology Stack

### Frontend
- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Language**: Java 21 JDK
- **Framework**: Spring Boot 3.2.5 (Spring Web, Spring Data JPA, Validation)
- **Database (Development)**: H2 In-Memory Database (Zero installation required)
- **Database (Production)**: PostgreSQL
- **Build Tool**: Apache Maven 3.9+

---

## 4. Folder Structure

```
c:\Users\navee\Desktop\Parivara\
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   ├── products/       # Product packaging images
│   │   │   ├── banners/        # Hero slides, before/after, plant doctor
│   │   │   ├── categories/     # Category thumbnails
│   │   │   ├── blog/           # Gardening article graphics
│   │   │   └── brand/          # Logo & assets
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer, MobileNav, AnnouncementBar, BottomActionBar
│   │   │   ├── home/           # HeroCarousel, CategoryGrid, FeaturedProducts, HowToUse, BeforeAfter, WhyParivara, PlantDoctor, LocalService, Reviews, Faq
│   │   │   ├── product/        # ProductCard
│   │   │   └── cart/           # CartDrawer
│   │   ├── config/
│   │   │   └── business.js     # CENTRAL BUSINESS & PRICE CONFIGURATION
│   │   ├── data/               # Products, Categories, Blogs, Reviews fallback datasets
│   │   ├── context/            # CartContext, AuthContext, ToastContext
│   │   ├── services/           # Axios API client, productService, orderService, contactService
│   │   ├── pages/              # HomePage, ShopPage, ProductDetailPage, CheckoutPage, OrderConfirmationPage, PlantCarePage, BlogPostPage, AboutPage, WhyParivaraPage, ContactPage, AdminLoginPage, AdminDashboardPage, NotFoundPage
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/parivara/
│   │   │   │   ├── ParivaraApplication.java
│   │   │   │   ├── config/       # WebConfig (CORS)
│   │   │   │   ├── controller/   # ProductController, OrderController, ContactController, BlogController, AdminController
│   │   │   │   ├── dto/          # AdminLoginRequest, PriceUpdateRequest
│   │   │   │   ├── entity/       # Product, CustomerOrder, OrderItem, ContactMessage, BlogPost
│   │   │   │   ├── exception/    # GlobalExceptionHandler
│   │   │   │   ├── repository/   # ProductRepository, OrderRepository, ContactRepository, BlogRepository
│   │   │   │   └── service/      # ProductService, OrderService, ContactService, BlogService, DataInitializer
│   │   │   └── resources/
│   │   │       ├── application.properties       # H2 DB development config
│   │   │       └── application-prod.properties  # PostgreSQL production profile
│   └── pom.xml
│
└── README.md
```

---

## 5. How to Run Frontend

1. Open PowerShell and navigate to `frontend`:
   ```powershell
   cd c:\Users\navee\Desktop\Parivara\frontend
   ```

2. Install dependencies (if not already installed):
   ```powershell
   npm install
   ```

3. Start Vite dev server:
   ```powershell
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`.

---

## 6. How to Run Backend

1. Open PowerShell and navigate to `backend`:
   ```powershell
   cd c:\Users\navee\Desktop\Parivara\backend
   ```

2. Compile and run Spring Boot API with Maven:
   ```powershell
   mvn spring-boot:run
   ```

3. The REST API starts at `http://localhost:8080/api/products`.
4. The H2 Console is accessible at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:parivaradb`, Username: `sa`, Password: empty).

---

## 7. Database Setup

- **Local Development**: Uses **H2 In-Memory Database**. No installation or SQL server configuration required. `DataInitializer.java` automatically seeds products, blogs, and sample orders on startup.
- **Production Setup**: Uses **PostgreSQL**. Activate production profile by starting the JAR with:
  ```powershell
  java -jar -Dspring.profiles.active=prod target/parivara-backend-1.0.0.jar
  ```

---

## 8. Environment Variables

Create `.env` or set environment variables in your deployment environment:

```env
# Backend Environment Variables
PORT=8080
DB_URL=jdbc:postgresql://your-db-host:5432/parivaranatural
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
ADMIN_EMAIL=admin@parivaranatural.com
ADMIN_PASSWORD=your_secure_admin_password
WHATSAPP_NUMBER=919876543210
```

---

## 9. API Documentation

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Fetch all products | Public |
| `GET` | `/api/products/{slug}` | Fetch single product by slug | Public |
| `GET` | `/api/products/search?query=cow` | Search products | Public |
| `POST` | `/api/orders` | Create customer order | Public |
| `GET` | `/api/orders/{id}` | Get order details by ID | Public |
| `POST` | `/api/contact` | Submit contact message | Public |
| `GET` | `/api/blogs` | Fetch all blog posts | Public |
| `GET` | `/api/blogs/{slug}` | Fetch blog post detail | Public |
| `POST` | `/api/admin/login` | Admin authentication | Admin |
| `GET` | `/api/admin/orders` | Fetch all customer orders | Admin |
| `PUT` | `/api/admin/orders/{id}/status` | Update order status | Admin |
| `PUT` | `/api/admin/products/{id}` | Update product price & stock | Admin |

---

## 10. How WhatsApp Ordering Works

1. Customer browses products or adds items to cart.
2. Tapping **WhatsApp Order** calls `getWhatsAppOrderUrl()` in `src/config/business.js`.
3. It constructs a prefilled message:
   ```text
   Hello Parivara,

   I would like to order:
   Product: Parivara Cow Manure (2 KG)
   Quantity: 2
   Estimated Total: ₹298

   Please confirm availability and delivery in Varanasi/Mirzapur.
   ```
4. The user is redirected to `wa.me/919876543210` where they can edit or send the message directly to Parivara.

---

## 11. How Order Management Works

1. Customer submits order form at `/checkout`.
2. Order is saved in database with status `NEW`.
3. Admin opens `/admin` and logs in (`admin@parivaranatural.com` / `parivara123`).
4. Admin views the Orders table and updates status as delivery progresses:
   - `NEW` → `CONTACTED` → `CONFIRMED` → `OUT_FOR_DELIVERY` → `DELIVERED`

---

## 12. How to Change Product Prices

All prices are stored in **ONE single configuration file**:

Open `frontend/src/config/business.js`:
```javascript
prices: {
  cowManure2kg: {
    price: 149,        // Change your price here
    compareAtPrice: 199,
  },
  vermicompost2kg: {
    price: 199,        // Change your price here
    compareAtPrice: 249,
  }
}
```
Updating the price here immediately updates all product cards, detail pages, cart totals, and WhatsApp message generators across the entire website!

---

## 13. How to Add a New Product

1. Open `frontend/src/data/products.js`.
2. Add a new product object to `INITIAL_PRODUCTS` array:
   ```javascript
   {
     id: 6,
     name: "Parivara Organic Cocopeat Block",
     slug: "parivara-cocopeat-5kg",
     category: "Soil Conditioners",
     categorySlug: "potted-plants",
     weight: "5 KG",
     price: 249,
     compareAtPrice: 299,
     availability: "IN_STOCK",
     featured: true,
     rating: 5.0,
     reviewCount: 12,
     badge: "New Arrival",
     shortDescription: "High expansion cocopeat block for potted root aeration.",
     images: ["/images/products/parivara-vermicompost-2kg.jpg"]
   }
   ```
3. To add it to the Spring Boot DB, update `DataInitializer.java` in backend.

---

## 14. How to Change Business Phone / WhatsApp

Open `frontend/src/config/business.js`:
```javascript
export const BUSINESS_CONFIG = {
  phone: "+91 98765 43210",       // Change business call phone number
  whatsappNumber: "919876543210", // Change WhatsApp number (digits only with country code)
};
```

---

## 15. How to Change Email & Address

Open `frontend/src/config/business.js`:
```javascript
export const BUSINESS_CONFIG = {
  email: "care@parivaranatural.com",
  address: "Parivara Hub, Near Lanka Chauraha, Varanasi, UP - 221005",
};
```

---

## 16. Free / Low-Cost Deployment Steps

### Frontend Deployment (Vercel / Netlify / Render - FREE)
1. Push `frontend/` to GitHub.
2. Log into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Connect your repository, set build directory to `frontend`, build command to `npm run build`, and output folder to `dist`.
4. Click **Deploy**.

### Backend Deployment (Render / Railway / Render Free Tier)
1. Push `backend/` to GitHub.
2. Log into [Render](https://render.com) or [Railway](https://railway.app).
3. Create a **Web Service** with Environment `Java 21` and build command `mvn clean package -DskipTests`.
4. Start command: `java -jar target/parivara-backend-1.0.0.jar`.
5. Add PostgreSQL database instance on Render/Railway and attach `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` variables.

---

## 17. Future Roadmap & Phase 2 Improvements

- **Razorpay Payment Gateway**: Online UPI/Netbanking payment integration.
- **Python AI Plant Doctor**: Image analysis service using PyTorch / TensorFlow to detect plant diseases from customer photos.
- **Customer User Accounts**: Order history tracking and saved addresses.
- **SMS & WhatsApp Automated Notifications**: Twilio / Gupshup automated order updates.
- **Nursery & Wholesale Accounts**: Bulk ordering portal for nurseries in Uttar Pradesh.
