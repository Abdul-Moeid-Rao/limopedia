# Deployment Guide

This guide covers deploying the Booking System API to various platforms and environments.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Local Development](#local-development)
4. [Docker Deployment](#docker-deployment)
5. [Render Deployment](#render-deployment)
6. [Vercel Deployment](#vercel-deployment)
7. [Fly.io Deployment](#flyio-deployment)
8. [CI/CD Pipeline](#cicd-pipeline)
9. [Monitoring and Health Checks](#monitoring-and-health-checks)
10. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Redis (optional, for caching and sessions)
- Docker and Docker Compose (for containerized deployment)
- Git

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/booking_system"

# JWT Secrets (generate strong secrets)
JWT_SECRET=your-super-secret-jwt-key
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

## Local Development

### Start the Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run linting
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Docker Deployment

### Using Docker Compose (Recommended for Local)

1. Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/booking_system
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=booking_system
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

2. Start the services:

```bash
docker-compose up -d
```

### Build and Run Docker Image

```bash
# Build the image
docker build -t booking-system-api .

# Run the container
docker run -p 3001:3001 \
  -e DATABASE_URL="postgresql://..." \
  -e JWT_SECRET="your-secret" \
  booking-system-api
```

## Render Deployment

### 1. Prepare for Render

1. Connect your GitHub repository to Render
2. Render will automatically detect the Node.js application

### 2. Configure Environment Variables

In Render dashboard, add these environment variables:

```
DATABASE_URL=your-postgres-connection-string
JWT_SECRET=your-jwt-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret
NODE_ENV=production
PORT=3001
```

### 3. Configure Build Command

```
npm install
npx prisma generate
npm run build
```

### 4. Configure Start Command

```
npm start
```

### 5. Database Setup

- Create a PostgreSQL database on Render
- Copy the connection string to `DATABASE_URL`
- Run migrations: `npx prisma migrate deploy`

## Vercel Deployment

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Configure Vercel

Create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/server.ts"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 3. Deploy

```bash
vercel --prod
```

### 4. Set Environment Variables

```bash
vercel env add DATABASE_URL
vercel env add JWT_SECRET
vercel env add REFRESH_TOKEN_SECRET
```

## Fly.io Deployment

### 1. Install Fly CLI

```bash
curl -L https://fly.io/install.sh | sh
```

### 2. Login to Fly

```bash
fly auth login
```

### 3. Initialize Fly App

```bash
fly launch
```

### 4. Configure `fly.toml`

```toml
app = "your-app-name"

[build]
  dockerfile = "Dockerfile"

[[services]]
  protocol = "tcp"
  internal_port = 3001

  [[services.ports]]
    port = 80
    handlers = ["http"]

  [[services.ports]]
    port = 443
    handlers = ["tls", "http"]

[env]
  NODE_ENV = "production"
```

### 5. Deploy

```bash
fly deploy
```

### 6. Set Secrets

```bash
fly secrets set DATABASE_URL="your-connection-string"
fly secrets set JWT_SECRET="your-jwt-secret"
fly secrets set REFRESH_TOKEN_SECRET="your-refresh-token-secret"
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. **Tests and Lints**: Runs on every push and PR
2. **Security Audit**: Checks for vulnerabilities
3. **Builds Docker Image**: Creates and pushes to container registry
4. **Deploys**: Automatically deploys to staging/production
5. **Health Checks**: Verifies deployment success
6. **Rollback**: Automatically rolls back on failure

### Required GitHub Secrets

- `RENDER_STAGING_SERVICE_ID`: Render staging service ID
- `RENDER_PRODUCTION_SERVICE_ID`: Render production service ID
- `RENDER_API_KEY`: Render API key
- `STAGING_URL`: Staging environment URL
- `PRODUCTION_URL`: Production environment URL
- `SLACK_WEBHOOK`: Slack webhook for notifications

### Branch Strategy

- `main`: Production deployments
- `develop`: Staging deployments
- Feature branches: Tests and builds only

## Monitoring and Health Checks

### Health Check Endpoint

- URL: `/health`
- Method: GET
- Returns: Server status, database connection, uptime

### Monitoring Endpoints

- `/metrics`: Application metrics (if enabled)
- `/api-docs`: API documentation
- `/api-docs.json`: OpenAPI specification

### Logging

- Development: Console output with pretty formatting
- Production: Structured JSON logging to files
- Log files stored in `logs/` directory

### Error Tracking

Consider integrating with:
- Sentry for error tracking
- LogRocket for session replay
- DataDog for application monitoring

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify `DATABASE_URL` is correct
   - Check database is running and accessible
   - Ensure migrations are applied

2. **JWT Authentication Issues**
   - Verify `JWT_SECRET` is set and consistent
   - Check token expiration times
   - Ensure proper token format in headers

3. **CORS Issues**
   - Verify `CORS_ORIGIN` includes frontend URL
   - Check preflight requests are handled

4. **Docker Build Failures**
   - Verify Dockerfile syntax
   - Check base image compatibility
   - Ensure all dependencies are in package.json

5. **Deployment Failures**
   - Check environment variables
   - Verify build commands
   - Review deployment logs

### Debug Mode

Enable debug logging:

```bash
DEBUG=booking-system:* npm run dev
```

### Database Migrations

```bash
# Reset database (development only)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name migration-name

# Deploy migrations (production)
npx prisma migrate deploy
```

### Performance Optimization

1. Enable Redis caching for frequently accessed data
2. Implement database connection pooling
3. Use CDN for static assets
4. Enable gzip compression
5. Monitor and optimize database queries

## Security Considerations

1. **Environment Variables**: Never commit secrets to version control
2. **Database**: Use SSL connections in production
3. **JWT**: Use strong secrets and appropriate expiration
4. **Rate Limiting**: Configure appropriate limits
5. **HTTPS**: Always use HTTPS in production
6. **Dependencies**: Regularly update and audit dependencies

## Backup and Recovery

### Database Backups

```bash
# Export database
pg_dump $DATABASE_URL > backup.sql

# Import database
psql $DATABASE_URL < backup.sql
```

### Automated Backups

Configure automated backups through your hosting provider or use tools like:

- pgBackRest
- WAL-G
- Database provider's backup service

## Scaling Considerations

1. **Horizontal Scaling**: Use load balancers and multiple instances
2. **Database Scaling**: Consider read replicas for high traffic
3. **Caching**: Implement Redis for session storage and caching
4. **CDN**: Use CDN for static assets and API responses
5. **Monitoring**: Implement comprehensive monitoring and alerting

## Support

For deployment issues:

1. Check the application logs
2. Verify environment variables
3. Test database connectivity
4. Review CI/CD pipeline logs
5. Consult platform-specific documentation

For additional help, create an issue in the repository or contact the development team.
