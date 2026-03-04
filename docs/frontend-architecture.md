# Limopedia Luxury Transportation - Frontend Documentation

## 1. Overview & Technology Stack
Limopedia is a premium, enterprise-grade Next.js web application designed for a luxury chauffeured transportation company. The frontend is built to deliver a "white-glove" digital experience matching their physical services.

**Tech Stack:**
*   **Framework:** Next.js 15.1.0 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Utility-first framework)
*   **Icons:** Lucide React (SVG icon library)
*   **Fonts:** `next/font/google` (Playfair Display for headings, DM Sans for body)
*   **Utilities:** `clsx` and `tailwind-merge` for dynamic classes

## 2. Global Architecture

### Root Layout (`src/app/layout.tsx`)
The `layout.tsx` file wraps the entire application. It acts as the single source of truth for global UI elements to ensure a seamless experience across page transitions:
*   **`Navbar`**: Fixed at the top (`z-[100]`), handles desktop and mobile navigation. The body has `pt-20` padding to prevent content from overlapping under the fixed navbar.
*   **`Footer`**: Present on all pages (including specialized ones like Booking and Auth), containing full sitemap links, social icons, and contact details.

### Design System (`tailwind.config.ts` & `globals.css`)
We implemented a custom, luxury-focused design token system:
*   **Brand Colors:**
    *   `navy` (`#0A1628`): Deep, corporate blue used for backgrounds and text. Conveys trust, B2B focus, and luxury.
    *   `gold` (`#C8922A`): Primary accent color used for buttons, stars, links, and highlighting critical information.
    *   `secondary` (`#F8F9FA`): Soft off-white for segmenting page sections gracefully.
*   **Typography System:** Playfair Display provides a classic, authoritative feel for headings (H1-H6), while DM Sans provides modern readability for body text and UI labels.

## 3. Core Page Routes & Features

### 3.1 Homepage (`/`)
The landing experience designed for high conversion.
*   **Hero Section:** Full-screen video/image background with a massive, sophisticated headline.
*   **Booking Widget:** A modular component placed immediately below the hero to capture intent without requiring scrolling.
*   **Service Grid:** Visual blocks detailing Airport, Corporate, Event, and Hourly services.
*   **Featured Fleet:** A teaser carousel of the top 3 vehicles.

### 3.2 Dynamic City Pages (`/cities/[city]`)
A template designed for local SEO and targeted landing experiences.
*   **Path:** `src/app/cities/[city]/page.tsx`
*   **Behavior:** Reacts to the URL (e.g., `/cities/miami`) to display dynamic content, local map backgrounds, and area-specific service features.
*   **Reusability:** Features a centralized `CityHero` and embeds the universal `BookingWidget`.

### 3.3 The Fleet Hub (`/fleet`)
A comprehensive showcase of available vehicles.
*   **Filtering:** Client-side filtering (`activeCategory` state) by Sedan, SUV, Sprinter, etc.
*   **Vehicle Cards:** Displays specs (passengers, luggage) with two primary actions: "View Details" and "Compare".
*   **Comparison Engine (`ComparisonBar` / `ComparisonOverlay`):** Allows users to select up to 3 vehicles. Pops up a floating bar at the bottom, which expands into a full-screen side-by-side spec comparison.
*   **Vehicle Modal:** Deep dive into high-res images and detailed specs for a single car.

### 3.4 Multi-Step Booking Flow (`/book`)
A frictionless conversational checkout flow, managing complex state (`src/app/book/page.tsx`).
*   **State Management:** Holds a master `bookingData` object spanning 4 actual steps (Trip, Vehicle, Passenger, Payment) and 1 Confirmation screen.
*   **Component Modularity:** Broken down into `Step1TripDetails.tsx`, `Step2ChooseVehicle.tsx`, etc.
*   **Progress Bar:** Gives the user visual feedback on their completion percentage.
*   **No Redundant Header:** Integrated perfectly inside the global Layout navbar, avoiding stacked or confusing duplicate navigation links.

### 3.5 Authentication Hub (`/login`)
A dedicated portal for returning clients and corporate account managers.
*   **Split-Screen Layout:** Built with `AuthLayout.tsx`. The left side (40%) reinforces brand value to unauthenticated users, while the right side (60%) handles state logic.
*   **Tab System:** Seamlessly toggles between "Log In" (`LoginForm.tsx`) and "Create Account" (`RegisterForm.tsx`).
*   **Visual Password Strength:** Provides live feedback when users type their passwords.

### 3.6 Informational & B2B Pages
*   **Corporate (`/services/corporate`):** Focused on B2B clients. Highlights monthly invoicing, NDAs, and executive transport features.
*   **Affiliate Network (`/affiliate`):** Partner portal. Features a functional `RateTable` demonstrating transparency to potential travel agency partners.
*   **Cyber Insurance (`/cyber-insurance`):** A vital trust-building page for enterprise accounts, proving compliance, data protection, and PCI standards using structured icon grids.
*   **Reviews (`/reviews`):** A masonry-style grid of customer testimonials with a sticky "Leave a Review" CTA that hooks directly into a Google review link. Requires `"use client"` due to expansion state management inside `ReviewCard.tsx`.
*   **404 Error (`/not-found.tsx`):** A customized, playful ("Looks Like This Ride Got Lost") error page that keeps users in the funnel by offering massive buttons to go Home, Book, or Call.

## 4. Key Components (`src/components/`)

*   **`Navbar.tsx` & `Footer.tsx`:** Standardized layout anchors. The Navbar contains dynamic dropdowns for services, controlled via local state (`onMouseEnter` / `onMouseLeave`), and is positioned `fixed` with `z-[100]`. Dropdowns use `z-[110]` to float over hero content.
*   **`BookingWidget.tsx`:** Shared across the Homepage, generalized Cities page, and dynamic City pages. Takes input for pickup/dropoff and forwards user intent to the `/book` page.
*   **`ui/` elements:** Many generic UI blocks (buttons with `btn-gold` class, inputs, animated borders) are constructed using pure Tailwind utility classes to avoid bloated CSS bundles.

## 5. Architectural Principles Demonstrated

1.  **Server vs. Client Components:** We aggressively favor Server Components (defaults in App Router). We only opt into `"use client"` when interactivity (like `useState`, `onClick`, or hooks) is required (e.g., in `Navbar.tsx`, `FleetPage.tsx`, and `BookingPage.tsx`).
2.  **Absolute Paths:** Imports heavily utilize the `@/` alias (e.g., `import Navbar from "@/components/Navbar"`) pointing to the `src` directory to prevent fragile relative `../` traversal.
3.  **Responsive First:** The entire app utilizes Tailwind prefixes (`md:`, `lg:`) to adapt layouts. For example, the `AuthLayout` is stacked vertically on mobile but splits 40/60 horizontally on desktop.
4.  **Premium Micro-interactions:** Broad use of `transition-all`, `group-hover:scale-110`, and structural subtle CSS animations (`animate-in fade-in slide-in-from-top-2`) to give elements a "heavy", luxurious, and polished feel.
