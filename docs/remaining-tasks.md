# Limopedia - Remaining Features & Missing Pages

This document outlines the final pieces required to complete the entire Limopedia web experience. Based on a comprehensive audit of the `Navbar`, `Footer`, and `src/app` directory, the following pages and integrations are missing.

---

## Step 1: Complete Individual Service Sub-Pages
*Currently, only the `/services/corporate` page exists. The other 5 core services linked in the Navbar/Footer need dedicated landing pages following the same premium design language.*

- [x] **1. Airport Transfers** (`/services/airport-transfers`)
    - *Purpose:* SEO landing page for MIA, FLL, and PBI airport pickups. Includes meet-and-greet details, flight tracking info, and baggage policies.
- [x] **2. Events & Weddings** (`/services/events-weddings`)
    - *Purpose:* Large-tier luxury transport. Needs to feature Sprinters/Buses and focus on coordination, red-carpet service, and group logistics.
- [x] **3. Hourly Hire (As Directed)** (`/services/hourly-hire`)
    - *Purpose:* Page explaining the flexibility of hourly booking. Good for shopping trips, executive roadshows, and flexible itineraries.
- [x] **4. Group & Party Bus** (`/services/group-party-bus`)
    - *Purpose:* Highlighting Sprinters and mini-coaches. Focus on nightlife, tailgating, and corporate retreats.
- [x] **5. City Tours** (`/services/city-tours`)
    - *Purpose:* Specialized guided tours. Needs distinct pricing info and standard 4-8 hour itineraries around major Florida hubs.

---

## Step 2: Implement Legal & Compliance Pages
*Currently, the Footer contains placeholder `#` links for legal requirements.*

- [x] **1. Privacy Policy** (`/privacy-policy`)
    - *Required:* Crucial for B2B/Corporate clients. Document detailing data collection (cookies, booking data, GDPR/CCPA compliance).
- [x] **2. Terms of Service** (`/terms-of-service`)
    - *Required:* Document detailing cancellation policies, wait time grace periods, cleaning fees, and liability limitations.

---

## Step 3: Backend & Database Integration (The Booking Engine)
*The frontend `/book` multi-step flow captures state beautifully, but it does not submit anywhere yet.*

- [ ] **1. Connect the Dispatch Server/CRM:**
    - The final step of `BookingPage` must `POST` the `bookingData` state object to a backend API (Next.js App Router API route or external service like LimoAnywhere).
- [ ] **2. Payment Gateway Integration:**
    - Step 4 (Payment) needs integration with a real processor like Stripe or Square for holds/authorizations.

---

## Step 4: Authentication & User Accounts Wiring
*The `/login` visual layout is complete, but it’s currently a dummy interface.*

- [ ] **1. Hookup NextAuth / Supabase:**
    - Wire `LoginForm.tsx` and `RegisterForm.tsx` to handle secure JWT issuance.
- [x] **2. Build the User Dashboard (`/dashboard`)**
    - The page users see after a successful login. Must display:
        - Upcoming rides
        - Past ride history
        - Stored payment methods
        - Downloadable PDF receipts/invoices

---

## Step 5: Content Management System (CMS) / Admin Panel
*Currently, data like the Fleet list (`src/data/fleet.ts`) and Reviews (`src/data/reviews.ts`) are hardcoded TypeScript objects.*

- [ ] **1. Dynamic Data Sourcing:**
    - Move `fleet` and `reviews` into a database (Postgres/MongoDB) or Headless CMS (Sanity/Contentful) so the exact prices and vehicle names can be safely edited by Limopedia staff without code redeployment.

---

## Conclusion & Recommended Next Step
To prioritize building momentum, **Step 1 (The remaining Service pages)** should be built first. This will instantly eliminate all dead links from the Navbar and Footer, making the frontend completely whole from a navigational perspective.
