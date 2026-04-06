# 🛒 EazyCart

### Modern Multi-Vendor E-Commerce Platform

_Empowering organizations with seamless shopping, selling, and marketplace solutions._

[![🔥 LIVE](https://img.shields.io/badge/🔥-EAZYCART-red?style=for-the-badge)](https://geteazycart.vercel.app/)
[![⚛️ NEXT.JS](https://img.shields.io/badge/⚛️-NEXT.JS-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![15.5.6](https://img.shields.io/badge/15.5.6-green?style=for-the-badge)](https://nextjs.org/)
[![⚛️ REACT](https://img.shields.io/badge/⚛️-REACT-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![19.0](https://img.shields.io/badge/19.0-blue?style=for-the-badge)](https://reactjs.org/)
[![🌊 TAILWIND](https://img.shields.io/badge/🌊-TAILWIND-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![4.0](https://img.shields.io/badge/4.0-teal?style=for-the-badge)](https://tailwindcss.com/)
[![� CLERK](https://img.shields.io/badge/�-CLERK-purple?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![AUTH](https://img.shields.io/badge/AUTH-blueviolet?style=for-the-badge)](https://clerk.com/)

[![💳 STRIPE](https://img.shields.io/badge/💳-STRIPE-blueviolet?style=flat-square&logo=stripe)](#)
[![PAYMENTS](https://img.shields.io/badge/PAYMENTS-6772E5?style=flat-square)](#)
[![🗄️ PRISMA](https://img.shields.io/badge/🗄️_PRISMA-2D3748?style=flat-square&logo=prisma)](#)
[![ORM](https://img.shields.io/badge/ORM-2D3748?style=flat-square)](#)
[![🐘 POSTGRESQL](https://img.shields.io/badge/🐘_POSTGRESQL-336791?style=flat-square&logo=postgresql)](#)
[![DATABASE](https://img.shields.io/badge/DATABASE-4169E1?style=flat-square)](#)
[![🖼️ IMAGEKIT](https://img.shields.io/badge/🖼️_IMAGEKIT-FF6B6B?style=flat-square)](#)
[![CDN](https://img.shields.io/badge/CDN-FF6B6B?style=flat-square)](#)
[![🤖 OPENAI](https://img.shields.io/badge/🤖_OPENAI-412991?style=flat-square&logo=openai)](#)
[![AI](https://img.shields.io/badge/AI-74AA9C?style=flat-square)](#)
[![▲ VERCEL](https://img.shields.io/badge/▲_VERCEL-000000?style=flat-square&logo=vercel)](#)
[![HOSTING](https://img.shields.io/badge/HOSTING-000000?style=flat-square)](#)

![Version 0.1.0](https://img.shields.io/badge/Version-0.1.0-blue)
![Status Production](https://img.shields.io/badge/Status-Production-green)
![Build Passing](https://img.shields.io/badge/Build-Passing-brightgreen)
![Dependencies Up to Date](https://img.shields.io/badge/Dependencies-Up_to_Date-success)

</div>

---

## 📋 Overview

**EazyCart** is a full-featured, open-source multi-vendor e-commerce platform that enables multiple sellers to manage their own stores on a unified marketplace. Built with modern web technologies, it offers a seamless shopping experience for customers, comprehensive tools for vendors, and powerful admin controls for platform management.

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center"><b>Homepage</b></td>
    <td align="center"><b>Dashboard</b></td>
  </tr>
  <tr>
    <td><img src="./screenshots/screenshot-homepage.webp" alt="Homepage" height="300"></td>
    <td><img src="./screenshots/screenshot-dashboard.png" alt="Dashboard" height="300"></td>
  </tr>
</table>

---

## ✨ Key Features

### 🛍️ For Customers

- 🔍 Browse products from multiple vendors
- 🛒 Smart shopping cart with real-time updates
- 💳 Secure payments via Stripe & Cash on Delivery
- 📦 Order tracking and history
- ⭐ Product ratings and reviews
- 🎟️ Coupon code support
- 📍 Multiple address management

### 🏪 For Vendors

- 📊 Comprehensive store dashboard
- 📦 Product management (CRUD operations)
- 🤖 AI-powered product listing (OpenAI integration)
- 📈 Sales analytics and order tracking
- 🖼️ Image upload with ImageKit integration
- 📋 Inventory management

### 👨‍💼 For Admins

- 🎛️ Full platform control
- ✅ Store approval system
- 🎫 Coupon management
- 📊 Analytics and reporting
- 🔧 Store management and monitoring

---

## 🛠️ Tech Stack

### Core Technologies

- ⚡ **Next.js 15.5** - React framework with App Router
- ⚛️ **React 19** - UI library
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🗄️ **PostgreSQL** - Database (via Neon serverless)
- 🔐 **Clerk** - Authentication & user management

### State & Data

- 🔄 **Redux Toolkit** - State management
- 🗃️ **Prisma** - ORM for database operations

### Payment & Media

- 💰 **Stripe** - Payment processing
- 🖼️ **ImageKit** - Image optimization & CDN
- 🤖 **OpenAI** - AI-powered product descriptions

### Additional Tools

- 📮 **Inngest** - Background job processing
- 📊 **Recharts** - Data visualization
- 🔥 **React Hot Toast** - Notifications
- 🎨 **Lucide React** - Icon library

---

## 📦 Dependencies

<details>
<summary>Click to expand full dependency list</summary>

### Production Dependencies

```json
{
  "@clerk/nextjs": "^6.33.7",
  "@imagekit/nodejs": "^7.1.1",
  "@neondatabase/serverless": "^1.0.2",
  "@prisma/adapter-neon": "^6.17.1",
  "@prisma/client": "^6.17.1",
  "@reduxjs/toolkit": "^2.8.2",
  "axios": "^1.12.2",
  "date-fns": "^4.1.0",
  "imagekit": "^6.0.0",
  "inngest": "^3.44.3",
  "lucide-react": "^0.525.0",
  "next": "^15.5.6",
  "openai": "^6.7.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hot-toast": "^2.5.2",
  "react-redux": "^9.2.0",
  "recharts": "^3.1.2",
  "stripe": "^19.2.0",
  "ws": "^8.18.3"
}
```

### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "@types/ws": "^8.18.1",
  "prisma": "^6.17.1",
  "tailwindcss": "^4"
}
```

</details>

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- Clerk account for authentication
- Stripe account for payments
- ImageKit account for image hosting
- OpenAI API key (optional, for AI features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Purab2001/EazyCart.git
   cd EazyCart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="your_postgresql_url"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
   STRIPE_SECRET_KEY="your_stripe_secret_key"
   STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"

   # ImageKit
   IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
   IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
   IMAGEKIT_URL_ENDPOINT="your_imagekit_url"

   # OpenAI (Optional)
   OPENAI_API_KEY="your_openai_api_key"
   OPENAI_MODEL="gpt-4o"

   # Other
   NEXT_PUBLIC_CURRENCY_SYMBOL="$"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

---

<div align="center">

### Made with ❤️ by [Purab](https://github.com/Purab2001)

⭐ Star this repo if you find it helpful!

</div>
