# 🧱 Tile Gallery Website

A modern and responsive **Tile Gallery Web Application** built with Next.js. This project allows users to explore different types of tiles, view details, and manage their profile with authentication.

---

## 🌐 Live Website

🔗 https://tiles-gallery-web.vercel.app/

---

## 📌 Project Purpose

The purpose of this project is to create a clean and interactive tile gallery platform where users can:

* Browse different types of tiles
* Search and explore tile collections
* View detailed information about each tile
* Manage their personal profile

---

## 🚀 Key Features

### 🏠 Home Page

* Beautiful banner with CTA button
* Marquee (scrolling text section)
* Featured Tiles (Top 4 tiles)

### 🧱 Tile Gallery

* All Tiles page with search functionality
* Responsive tile cards
* Dynamic routing for tile details (`/allTiles/[id]`)

### 🔍 Search System

* Search tiles by title
* Instant filtering

### 🔐 Authentication System

* User Login (Email & Password)
* User Registration
* Google Login
* Error handling with toast

### 👤 User Profile

* My Profile page (private route)
* Update user name and image

### 🔒 Route Protection

* Private routes:

  * `/allTiles/[id]`
  * `/my-profile`

### 📱 Responsiveness

* Fully responsive for:

  * Mobile
  * Tablet
  * Desktop

---

## 🛠️ Technologies Used

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS + DaisyUI
* 🔐 BetterAuth
* 🗄️ MongoDB
* 🎞️ React Fast Marquee
* 📦 React Icons

---

## 🧾 Data Management

* Tiles data stored in JSON format
* Dynamic rendering using `.map()`
* Easy to scale for future API integration

---

## 📦 NPM Packages Used

* react-fast-marquee
* daisyui
* tailwindcss
* better-auth
* mongodb

---

## 🚀 Deployment

This project is deployed using **Vercel**.

* SPA routing supported
* No reload issues on routes
* Optimized performance

---

## 🔧 Installation & Setup

```bash
git clone https://github.com/kawserali-64/tiles-gallery-web
cd tiles-gallery-web
npm install
npm run dev
```

---

## 📖 Additional Features

* Loading spinner on data fetch
* Custom 404 Not Found page
* Clean UI with modern design
* Unique layout and user experience

---

