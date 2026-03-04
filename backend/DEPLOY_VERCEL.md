# Vercel Deployment Guide

This guide will walk you through deploying your Booking System Backend API to Vercel step by step.

## 🚀 Quick Start

### Prerequisites
- Vercel account (free tier is sufficient)
- GitHub account with your repository pushed
- PostgreSQL database (Vercel Postgres or external)
- Redis (optional, for caching)

---

## 📋 Step 1: Prepare Your Project for Vercel

### 1.1 Install Vercel CLI
```bash
npm i -g vercel
```

### 1.2 Create Vercel Configuration
Create `vercel.json` in your project root:

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
  },
  "functions": {
    "src/server.ts": {
      "maxDuration": 30
    }
  }
}
```

### 1.3 Update Server Entry Point
Create `src/server.ts` (if not exists):

```typescript
import app from './app';

const port = process.env.PORT || 3001;

export default app;
```

### 1.4 Update Package.json Scripts
Ensure your package.json has these scripts:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "vercel-build": "npm run build"
  }
}
```

---

## 📋 Step 2: Set Up Database on Vercel

### Option A: Use Vercel Postgres (Recommended)
1. Go to your Vercel dashboard
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Choose your region and plan
5. Create database

### Option B: Use External PostgreSQL
1. Use Supabase, Railway, or any PostgreSQL provider
2. Get connection string
3. Add to Vercel environment variables

---

## 📋 Step 3: Configure Environment Variables

### 3.1 Required Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:

```bash
# Database
DATABASE_URL=your-postgres-connection-string
DIRECT_URL=your-postgres-connection-string

# JWT Secrets (generate strong secrets)
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_REFRESH_SECRET=your-super-secret-refresh-key-min-32-chars

# Server
NODE_ENV=production
PORT=3001

# CORS (your frontend URL)
CORS_ORIGIN=https://your-frontend-domain.vercel.app

# Optional: Redis (if using)
REDIS_URL=your-redis-connection-string

# Optional: Email (if using)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3.2 Generate JWT Secrets
Use this command to generate secure secrets:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📋 Step 4: Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

#### 4.1 Login to Vercel
```bash
vercel login
```

#### 4.2 Link Your Project
```bash
vercel link
```

#### 4.3 Deploy
```bash
vercel --prod
```

### Method 2: Using GitHub Integration

#### 4.1 Connect GitHub to Vercel
1. Go to Vercel dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings

#### 4.2 Configure Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework Preset**: Other

#### 4.3 Add Environment Variables
Add all environment variables from Step 3

#### 4.4 Deploy
Click "Deploy" - Vercel will automatically deploy on push to main branch

---

## 📋 Step 5: Database Migration

### 5.1 Run Prisma Migrations
After deployment, you need to run database migrations:

#### Option A: Using Vercel CLI
```bash
vercel env pull .env.production
npx prisma migrate deploy
```

#### Option B: Using Vercel Web Interface
1. Go to your project settings
2. Click "Functions" → "Environment Variables"
3. Copy your DATABASE_URL
4. Run migrations locally:
```bash
DATABASE_URL="your-vercel-db-url" npx prisma migrate deploy
```

### 5.2 Generate Prisma Client
```bash
npx prisma generate
```

---

## 📋 Step 6: Verify Deployment

### 6.1 Test Your API
Check these endpoints:
- Health: `https://your-app.vercel.app/health`
- API Docs: `https://your-app.vercel.app/api-docs`
- Auth Register: `https://your-app.vercel.app/api/auth/register`

### 6.2 Check Logs
In Vercel dashboard → Functions → Logs to see any errors

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: "Function Invocation Timed Out"
**Solution**: Increase function timeout in `vercel.json`:
```json
{
  "functions": {
    "src/server.ts": {
      "maxDuration": 60
    }
  }
}
```

#### Issue 2: "Database Connection Failed"
**Solution**: 
1. Verify DATABASE_URL is correct
2. Check if database allows Vercel IPs
3. Ensure SSL is enabled in connection string

#### Issue 3: "Module Not Found"
**Solution**: 
1. Check `package.json` has all dependencies
2. Ensure `vercel-build` script runs correctly
3. Check TypeScript compilation

#### Issue 4: "CORS Errors"
**Solution**: 
1. Update CORS_ORIGIN to your frontend URL
2. Check frontend is making requests to correct URL

---

## 🔄 CI/CD with Vercel

### Automatic Deployments
Vercel automatically:
1. Deploys on push to main branch
2. Creates preview URLs for pull requests
3. Rolls back on failed deployments

### Custom Domain
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## 📊 Monitoring

### Vercel Analytics
- Go to Analytics tab in Vercel dashboard
- Monitor API usage, performance, and errors

### Health Monitoring
Set up uptime monitoring for your health endpoint:
```bash
curl https://your-app.vercel.app/health
```

---

## 🚀 Production Best Practices

### Security
1. Use environment variables for all secrets
2. Enable HTTPS (Vercel does this automatically)
3. Implement rate limiting
4. Use Vercel's built-in security headers

### Performance
1. Enable Vercel Edge Functions for global distribution
2. Use Vercel KV for caching (Redis alternative)
3. Optimize database queries
4. Implement proper error handling

### Scaling
1. Monitor function execution time
2. Use Vercel Pro for higher limits
3. Consider serverless architecture for high traffic

---

## 📱 Testing Your Deployment

### Test Authentication Flow
```bash
# Register
curl -X POST https://your-app.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Login
curl -X POST https://your-app.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Test API Documentation
Visit: `https://your-app.vercel.app/api-docs`

---

## 🆘 Support

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

### Common Vercel Commands
```bash
vercel logs              # View function logs
vercel env ls           # List environment variables
vercel env pull .env    # Pull env vars locally
vercel --prod           # Deploy to production
vercel dev              # Local development
```

---

## 🎉 You're Done!

Your Booking System Backend API is now deployed on Vercel! 

**Next Steps:**
1. Update your frontend to use the new API URL
2. Set up monitoring and alerts
3. Configure custom domain (optional)
4. Set up analytics and error tracking

**Your API is live at:** `https://your-app-name.vercel.app`
