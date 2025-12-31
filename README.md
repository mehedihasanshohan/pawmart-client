# 🐾 PawMart — Pet Adoption & Supply Portal

**Live Site:** https://paw-mart.web.app <br/>
**Server API:** https://pawmart-server.vercel.app <br/>
**Client Repo:** https://github.com/yourusername/pawmart-client <br/>
**Server Repo:** https://github.com/yourusername/pawmart-server

---

## 🐶 About PawMart

**PawMart** is a community-driven web application that connects **pet owners, breeders, and animal lovers**.
Users can list pets for **adoption** or **sell pet supplies** such as food, toys, and accessories.
Buyers and adopters can browse listings, view details, and directly place adoption or purchase orders.

> “Adopt, Don’t Shop — Give a Pet a Loving Home.” ❤️

---

## ✨ Key Features

- 🔐 **Firebase Authentication** (Email/Password + Google Login)
- 🐕 **Add Listing** — List pets or products for adoption/sale
- 📋 **My Listings** — Manage, update, or delete your own listings
- 💌 **My Orders** — View and download your adoption/purchase history as PDF
- 🛍️ **Category Filtering & Search** — Easily browse by Pets, Food, Accessories, or Care Products
- 📄 **Listing Details Page** — View full product/pet details & place orders
- 🎨 **Dark/Light Mode Toggle** — Tailwind-based theme switcher
- 🚀 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🔔 **react-hot-toast Alerts** for success/error notifications
- ⚙️ **Dynamic Routing & Page Titles** via React Router DOM
- 🕓 **Loading Spinners** during API calls for smooth UX

---

## **Tech Stack**

- **React** (frontend framework)
- **TailwindCSS & DaisyUI** (UI/Styling)
- **React Router DOM** (Routing)
- **TanStack Query** (Data fetching & caching)
- **React Hook Form** (Form handling)
- **Axios** (API requests)
- **JWT** (Authentication)
- **Sweet Alert / Toast** (Notifications)
- **LocalStorage** (Theme preference persistence)
- **Vercel  & Netlify** (Hosting)

---

## 📂 Pages Overview

| Page | Type | Description |
|------|------|--------------|
| **Home** | Public | Hero banner, categories, recent listings, awareness, and hero sections |
| **Pets & Supplies** | Public | All listings with search and category filter |
| **Listing Details** | Private | Full details + Order modal form |
| **Add Listing** | Private | Form to add new pet/product listing |
| **My Listings** | Private | User’s listings with edit & delete options |
| **My Orders** | Private | All user orders with “Download Report” (PDF) |
| **Login / Register** | Public | Firebase Authentication system |
| **404 Page** | Public | Custom page without navbar/footer |

---

## **Dependencies**
- axios
- react-router-dom
- react-hook-form
- sweetalert2
- react-hot-toast
- framer-motion
- lucide-react
- react-datepicker

---

## **Setup & Installation**

```bash
git clone https://github.com/mehedihasanshohan/pawmart-client.git
cd pawmart-client
npm install
npm run dev
