# Backend Implementation Plan

## Overview
We need a robust backend to support the fully internationalized frontend (English & Russian). The backend will handle data storage, authentication, booking logic, and expose API endpoints consumed by the Next.js frontend.

## Technology Stack
- **Node.js (v20) + TypeScript**
- **Express** (or **NestJS** for a more structured approach – we’ll use **Express** for simplicity)
- **Prisma** ORM
- **PostgreSQL** (cloud‑hosted on **Supabase** or **Neon**)
- **Redis** (caching city lists, rates, etc.)
- **JWT** (access & refresh tokens, stored in HttpOnly cookies)
- **Docker** (containerised dev & prod)
- **GitHub Actions** (CI/CD)
- **Swagger** (OpenAPI docs)

## Step‑by‑Step Tasks

1. **Initialize Backend Repository**
   - `mkdir backend && cd backend`
   - `npm init -y`
   - Install core deps: `express cors helmet morgan jsonwebtoken bcryptjs dotenv`
   - Install dev deps: `typescript ts-node-dev @types/express @types/node @types/jsonwebtoken @types/bcryptjs`
   - Add `tsconfig.json` (strict mode).

2. **Setup Prisma & PostgreSQL**
   - `npm i -D prisma @prisma/client`
   - `npx prisma init`
   - Add `DATABASE_URL` in `.env`.
   - Define data model (User, Booking, ServiceType, etc.) in `prisma/schema.prisma`.
   - Run migration: `npx prisma migrate dev --name init`.
   - Generate client: `npx prisma generate`.

3. **Implement Core Services**
   - **Auth Service** (`src/auth.ts`): register, login, password hashing, JWT issuance, refresh token endpoint.
   - **User Service** (`src/user.ts`): profile CRUD, role‑based access.
   - **Booking Service** (`src/booking.ts`): create/read/update/cancel bookings; service‑specific validation.
   - **City & Rate Service** (`src/city.ts`): expose city lists, route pricing; use Redis cache.

4. **Define API Routes (Express Router)**
   - Create routers: `routes/auth.ts`, `routes/users.ts`, `routes/bookings.ts`, `routes/cities.ts`.
   - Apply middlewares: `cors`, `helmet`, `morgan`, `express.json()`, custom `authMiddleware`.

5. **Internationalisation Support on Backend**
   - Store static translatable content (e.g., email templates) in `src/i18n/templates.json`.
   - Endpoint `/api/i18n/:lang` returns translation dictionary (mirrors frontend `translations.ts`).

6. **Testing Strategy**
   - **Unit Tests** with **Jest** (`npm i -D jest ts-jest @types/jest`).
   - **Integration Tests** with **Supertest**.
   - Add `test` script in `package.json`.

7. **Dockerisation**
   - `Dockerfile` (multi‑stage build).
   - `docker-compose.yml` to spin up **PostgreSQL** and **Redis** alongside the API.

8. **CI/CD Pipeline (GitHub Actions)**
   - `.github/workflows/ci.yml`: install deps, lint, run tests, build Docker image, push to registry, deploy to Render/Fly.io.

9. **Environment & Secrets Management**
   - `.env` for local dev.
   - Production secrets via hosting platform (Vercel/Render): `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, `SMTP_*`, etc.

10. **Documentation & OpenAPI Spec**
    - Swagger UI (`swagger-ui-express`) with generated `swagger.json`.
    - `README.md` with setup, dev commands, deployment steps.

## Final Checklist
- [ ] Initialise repo & install core deps
- [ ] Configure Prisma + PostgreSQL schema & migrations
- [ ] Implement authentication (register/login/refresh)
- [ ] Build user, booking, city, and rate services
- [ ] Expose REST API routes with validation & auth middleware
- [ ] Add i18n endpoint for translation dictionary
- [ ] Write unit & integration tests (≥80% coverage)
- [ ] Dockerise the app and compose with DB & Redis
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Prepare production environment variables & secrets
- [ ] Generate Swagger/OpenAPI documentation
- [ ] Update README with full developer guide

Once completed, the backend will serve the fully internationalized frontend, handle bookings, store data securely, and be deployable in a containerised, CI‑enabled workflow.
