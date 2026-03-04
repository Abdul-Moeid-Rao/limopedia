# Booking System Backend API

A comprehensive RESTful API for a booking system built with Express.js, TypeScript, Prisma, and Redis.

## 🚀 Features

- **Authentication**: JWT-based auth with refresh tokens
- **User Management**: Role-based access control (USER/ADMIN)
- **Booking System**: Create, manage, and track bookings
- **City & Pricing**: Dynamic pricing with Redis caching
- **Internationalization**: Multi-language support with i18n
- **Security**: Helmet, CORS, input validation
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for performance optimization
- **API Documentation**: Swagger/OpenAPI with interactive UI
- **CI/CD**: GitHub Actions pipeline with automated deployments
- **Docker**: Containerized deployment support
- **Monitoring**: Health checks and structured logging

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Redis server (optional, for caching)
- Docker and Docker Compose (for containerized deployment)
- npm or yarn

## 🛠️ Installation

### Quick Start with Docker

```bash
# Clone the repository
git clone <repository-url>
cd backend

# Start all services with Docker Compose
docker-compose up -d

# The API will be available at http://localhost:3001
# Database: http://localhost:8080 (Adminer)
# Redis: http://localhost:8081 (Redis Commander)
```

### Manual Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file with the required variables (see `.env.example` for all options).

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev --name init
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
# Build the application
npm run build

# Start the server
npm start
```

### Docker Development
```bash
# Start development environment
npm run docker:dev

# View logs
npm run docker:logs

# Stop services
npm run docker:down
```

## 📚 API Documentation

### Interactive Documentation

Visit **http://localhost:3001/api-docs** for interactive Swagger UI documentation.

### OpenAPI Specification

Access the raw OpenAPI specification at **http://localhost:3001/api-docs.json**

### Base URL
```
http://localhost:3001/api
```

### Health Check
```http
GET /health
```

### Authentication Routes

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Refresh Token
```http
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "your-refresh-token"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <access-token>
```

### User Routes

#### Get Profile
```http
GET /api/users/profile
Authorization: Bearer <access-token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

#### Change Password
```http
PUT /api/users/password
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

### Booking Routes

#### Create Booking
```http
POST /api/bookings
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "serviceTypeId": "service-type-id",
  "startTime": "2024-01-15T10:00:00Z",
  "endTime": "2024-01-15T11:00:00Z",
  "notes": "Optional notes"
}
```

#### Get User Bookings
```http
GET /api/bookings/my/bookings?page=1&limit=10
Authorization: Bearer <access-token>
```

#### Update Booking
```http
PUT /api/bookings/:bookingId
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "startTime": "2024-01-15T11:00:00Z",
  "endTime": "2024-01-15T12:00:00Z"
}
```

#### Cancel Booking
```http
PATCH /api/bookings/:bookingId/cancel
Authorization: Bearer <access-token>
```

### City & Service Routes

#### Get Cities
```http
GET /api/cities?includeInactive=false
```

#### Get Service Types
```http
GET /api/cities/service-types?includeInactive=false
```

#### Get Route Pricing
```http
GET /api/cities/route-pricing/:fromCityId/:toCityId
```

### Internationalization Routes

#### Get Translations
```http
GET /api/i18n/:lang
```

#### Get Supported Languages
```http
GET /api/i18n
```

#### Get Email Template
```http
GET /api/i18n/:lang/email/:templateName
```

#### Render Email Template
```http
POST /api/i18n/:lang/email/:templateName/render
Content-Type: application/json

{
  "name": "John Doe",
  "bookingId": "12345"
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Access Token**: Short-lived (15 minutes)
2. **Refresh Token**: Long-lived (7 days)

Include the access token in the `Authorization` header:
```
Authorization: Bearer <your-access-token>
```

## 🌍 Internationalization

The API supports multiple languages (English, Spanish, French) with:

- **Static translations** stored in `src/i18n/templates.json`
- **Email templates** with parameter interpolation
- **Validation messages** in multiple languages
- **Error messages** localized by language

Supported languages: `en`, `es`, `fr`

## 🏛️ Role-Based Access Control

- **USER**: Can manage own profile and bookings
- **ADMIN**: Full access to all resources

## 🗄️ Database Schema

### Users
- `id`: Unique identifier
- `email`: Email address (unique)
- `password`: Hashed password
- `name`: User's full name
- `role`: USER or ADMIN

### Service Types
- `id`: Unique identifier
- `name`: Service name
- `description`: Service description
- `duration`: Duration in minutes
- `price`: Base price
- `isActive`: Availability status

### Bookings
- `id`: Unique identifier
- `userId`: User reference
- `serviceTypeId`: Service type reference
- `startTime`: Booking start time
- `endTime`: Booking end time
- `status`: PENDING, CONFIRMED, CANCELLED, COMPLETED

### Cities
- `id`: Unique identifier
- `name`: City name
- `country`: Country name
- `isActive`: Availability status

### Route Pricing
- `id`: Unique identifier
- `fromCityId`: Origin city
- `toCityId`: Destination city
- `basePrice`: Base route price
- `distance`: Distance in km
- `estimatedDuration`: Estimated duration

## 🚀 Deployment

### Supported Platforms

- **Render** (Recommended)
- **Vercel**
- **Fly.io**
- **Docker** (any cloud provider)

### Quick Deployment with Render

1. Connect your GitHub repository to Render
2. Render will auto-detect the Node.js application
3. Configure environment variables in Render dashboard
4. Deploy automatically

### Environment Variables

Required environment variables for production:

```bash
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# JWT Secrets
JWT_SECRET=your-production-secret
JWT_REFRESH_SECRET=your-production-refresh-secret

# Redis (optional)
REDIS_URL=redis://...

# Server
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://your-frontend.com

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Docker Deployment

```bash
# Build image
npm run docker:build

# Run container
npm run docker:run

# Or with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that:

- **Tests**: Runs linting, type checking, and tests on every push
- **Security**: Performs security audit of dependencies
- **Build**: Creates Docker image and pushes to registry
- **Deploy**: Automatically deploys to staging/production environments
- **Health Checks**: Verifies deployment success
- **Rollback**: Automatically rolls back on failure
- **Notifications**: Sends Slack notifications for deployment status

### Branch Strategy

- `main`: Production deployments
- `develop`: Staging deployments
- Feature branches: Tests and builds only

### Required GitHub Secrets

- `RENDER_STAGING_SERVICE_ID`
- `RENDER_PRODUCTION_SERVICE_ID`
- `RENDER_API_KEY`
- `STAGING_URL`
- `PRODUCTION_URL`
- `SLACK_WEBHOOK`

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server

# Database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run migrations
npm run db:reset         # Reset database
npm run db:deploy        # Deploy migrations (prod)
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio

# Docker
npm run docker:build     # Build Docker image
npm run docker:run       # Run Docker container
npm run docker:dev       # Start Docker Compose
npm run docker:down      # Stop Docker Compose
npm run docker:logs      # View Docker logs

# Quality
npm run lint             # Run linting
npm run lint:fix         # Fix linting issues
npm test                 # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
```

### Database Migrations
```bash
# Create new migration
npx prisma migrate dev --name migration-name

# Reset database
npx prisma migrate reset

# Generate Prisma client
npx prisma generate

# View database
npx prisma studio
```

### Code Quality
```bash
# Type checking
npm run build

# Linting
npm run lint

# Testing
npm test
```

## 📝 Error Handling

The API returns consistent error responses:

```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `500`: Internal Server Error

## 🔄 Caching Strategy

Redis is used to cache:
- Cities (1 hour TTL)
- Service types (30 minutes TTL)
- Route pricing (30 minutes TTL)

Cache is automatically invalidated when data changes.

## 📊 Monitoring

### Health Checks

- **Endpoint**: `/health`
- **Returns**: Server status, database connection, uptime
- **Docker**: Built-in health check with 30s interval

### Logging

- **Development**: Pretty console output
- **Production**: Structured JSON logging to `logs/` directory
- **Levels**: error, warn, info, debug

### Metrics

Consider integrating with:
- **Sentry**: Error tracking
- **DataDog**: Application monitoring
- **LogRocket**: Session replay

## 🔒 Security

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Request validation
- **JWT**: Secure authentication
- **Password Hashing**: bcrypt with salt rounds
- **Environment Variables**: Secure configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add JSDoc comments for public APIs
- Include tests for new features

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:

1. Check the [API Documentation](http://localhost:3001/api-docs)
2. Review the [Deployment Guide](./DEPLOYMENT.md)
3. Search existing [GitHub Issues](../../issues)
4. Create a new issue with detailed information

## 📞 Contact

- **Documentation**: [API Docs](http://localhost:3001/api-docs)
- **Issues**: [GitHub Issues](../../issues)
- **Email**: support@example.com
