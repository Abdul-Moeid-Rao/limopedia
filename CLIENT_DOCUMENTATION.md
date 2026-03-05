# 🚀 Limopedia Website - Complete Setup & Deployment Guide

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting the Code](#getting-the-code)
3. [Local Development Setup](#local-development-setup)
4. [Database Setup](#database-setup)
5. [Environment Configuration](#environment-configuration)
6. [Running the Application](#running-the-application)
7. [Deployment to Vercel](#deployment-to-vercel)
8. [Backend API Deployment](#backend-api-deployment)
9. [Troubleshooting](#troubleshooting)
10. [Maintenance & Updates](#maintenance--updates)

---

## 🔧 Prerequisites

### Required Software
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)
- **VS Code** (recommended IDE)
- **Supabase Account** (for database)

### Optional Tools
- **Postman** (for API testing)
- **Vercel CLI** (for deployment)
- **GitHub Desktop** (optional Git GUI)

---

## 📥 Getting the Code

### Option 1: Clone via Git (Recommended)

1. **Open Terminal/Command Prompt**
   ```bash
   # Navigate to your desired directory
   cd /path/to/your/projects
   ```

2. **Clone the Repository**
   ```bash
   git clone https://github.com/Abdul-Moeid-Rao/limopedia.git
   ```

3. **Navigate to Project Directory**
   ```bash
   cd limopedia
   ```

### Option 2: Download ZIP

1. Go to the GitHub repository: `https://github.com/Abdul-Moeid-Rao/limopedia`
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Navigate to the extracted folder

---

## 💻 Local Development Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Return to root directory
cd ..
```

### 2. Verify Node.js Version

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version
```

---

## 🗄️ Database Setup (Supabase)

### 1. Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" and sign up
3. Verify your email address

### 2. Create New Project

1. Click "New Project"
2. Select your organization
3. Fill in project details:
   - **Project Name**: `limopedia-website`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait for project setup (2-3 minutes)

### 3. Get Database Connection Details

1. Go to **Settings** → **Database**
2. Copy the **Connection string** (starts with `postgresql://`)
3. Also copy the **Connection pooling** string

### 4. Run Database Migrations

1. Go to **SQL Editor** in Supabase dashboard
2. Create the following tables by running these SQL commands:

```sql
-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    pickup_location TEXT NOT NULL,
    dropoff_location TEXT NOT NULL,
    pickup_date DATE NOT NULL,
    pickup_time TIME NOT NULL,
    vehicle_type VARCHAR(50) NOT NULL,
    passengers INTEGER NOT NULL,
    luggage INTEGER DEFAULT 0,
    price DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'pending',
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create vehicles table
CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    passengers INTEGER NOT NULL,
    luggage INTEGER NOT NULL,
    price_per_hour DECIMAL(10,2),
    image_url TEXT,
    features TEXT[],
    available BOOLEAN DEFAULT true
);

-- Insert sample vehicles
INSERT INTO vehicles (name, type, passengers, luggage, price_per_hour, image_url, features) VALUES
('Executive Sedan', 'sedan', 4, 3, 95.00, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d', ARRAY['Leather Seats', 'Climate Control', 'WiFi']),
('Luxury SUV', 'suv', 7, 5, 150.00, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2', ARRAY['Premium Audio', 'Sunroof', 'Entertainment System']),
('Stretch Limousine', 'limousine', 10, 6, 250.00, 'https://images.unsplash.com/photo-1542362567-b07e54358753', ARRAY['Bar', 'LED Lighting', 'Privacy Partition']),
('Party Bus', 'bus', 20, 10, 350.00, 'https://images.unsplash.com/photo-1570126474972-45c003edd2be', ARRAY['Sound System', 'Dance Floor', 'LED Lights']);
```

---

## ⚙️ Environment Configuration

### 1. Frontend Environment Variables

Create a `.env.local` file in the **root directory**:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-supabase

# Optional: API URL (when backend is deployed)
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
```

**Get Supabase Keys:**
1. Go to Supabase Dashboard → **Settings** → **API**
2. Copy the **Project URL** and **anon public** key

### 2. Backend Environment Variables

Create a `.env.local` file in the **backend directory**:

```bash
# Database Configuration (Supabase)
DATABASE_URL=postgresql://postgres.your-project-ref:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.your-project-ref:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres

# Server Configuration
PORT=3001
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-super-secret-refresh-key-min-32-chars
REFRESH_TOKEN_EXPIRES_IN=30d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Generate JWT Secrets:**
```bash
# Generate secure secrets
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
node -e "console.log('REFRESH_TOKEN_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
```

---

## 🚀 Running the Application

### 1. Start Frontend Development Server

```bash
# In root directory
npm run dev
```

The frontend will be available at: `http://localhost:3000`

### 2. Start Backend Development Server

Open a **new terminal window**:

```bash
# Navigate to backend directory
cd backend

# Start backend server
npm run dev
```

The backend API will be available at: `http://localhost:3001`

### 3. Verify Everything is Working

1. **Frontend**: Open `http://localhost:3000` in your browser
2. **Backend API**: Open `http://localhost:3001/health` - should return `{"status": "ok"}`
3. **Database**: Test the booking form to ensure data saves to Supabase

---

## 🌐 Deployment to Vercel

### 1. Prepare for Deployment

1. **Commit all changes** to Git:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Create Vercel Account**:
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up with your GitHub account

### 2. Deploy Frontend

1. **Import Project**:
   - In Vercel dashboard, click "New Project"
   - Import your GitHub repository
   - Select the `limopedia` repository

2. **Configure Build Settings**:
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

3. **Add Environment Variables**:
   In Vercel project settings → Environment Variables, add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your frontend will be live at a `.vercel.app` URL

### 3. Deploy Backend API

1. **Create New Vercel Project**:
   - Click "New Project" again
   - Import the same repository
   - Set **Root Directory** to `./backend`

2. **Configure Backend Settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Framework Preset**: Other

3. **Add Backend Environment Variables**:
   ```
   DATABASE_URL=postgresql://postgres.your-project-ref:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true
   DIRECT_URL=postgresql://postgres.your-project-ref:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres
   JWT_SECRET=your-jwt-secret
   REFRESH_TOKEN_SECRET=your-refresh-secret
   NODE_ENV=production
   PORT=3001
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

4. **Deploy Backend**:
   - Click "Deploy"
   - Your backend API will be live at its own `.vercel.app` URL

---

## 🔗 Connect Frontend to Backend

1. **Update Frontend Environment**:
   In your frontend Vercel project, update:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
   ```

2. **Update CORS in Backend**:
   In your backend Vercel project, update:
   ```
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

3. **Redeploy both projects** with updated environment variables.

---

## 🛠️ Backend API Deployment Details

### Vercel Configuration Files

The backend includes these deployment files:

#### `vercel.json` (Backend Root)
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

#### `src/server.ts` (Entry Point)
The server is configured to work with Vercel's serverless functions.

### API Endpoints

Once deployed, your API will have these endpoints:

- **Health Check**: `GET /health`
- **User Registration**: `POST /api/auth/register`
- **User Login**: `POST /api/auth/login`
- **Create Booking**: `POST /api/bookings`
- **Get Bookings**: `GET /api/bookings`
- **Get Vehicles**: `GET /api/vehicles`

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. Frontend Build Fails
**Problem**: Build errors during deployment
**Solution**:
- Check all environment variables are set
- Ensure all dependencies are installed
- Check for TypeScript errors

#### 2. Backend Database Connection Failed
**Problem**: Can't connect to Supabase
**Solution**:
- Verify DATABASE_URL is correct
- Check if password is correct
- Ensure Supabase project is active

#### 3. CORS Errors
**Problem**: Frontend can't access backend API
**Solution**:
- Update CORS_ORIGIN to your frontend URL
- Ensure both frontend and backend are deployed

#### 4. Environment Variables Not Working
**Problem**: API keys or secrets not loading
**Solution**:
- Restart the development server after changing .env files
- In Vercel, ensure variables are added to the correct environment

#### 5. Database Migrations Fail
**Problem**: Tables not created properly
**Solution**:
- Run SQL commands manually in Supabase SQL Editor
- Check for syntax errors in SQL

### Getting Help

1. **Check Logs**:
   - Vercel: Dashboard → Functions → Logs
   - Local: Terminal output

2. **Test API**:
   Use Postman or curl to test endpoints:
   ```bash
   curl https://your-backend-url.vercel.app/health
   ```

3. **Verify Database**:
   Check Supabase dashboard for table creation and data

---

## 🔄 Maintenance & Updates

### Regular Tasks

#### 1. Update Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update
```

#### 2. Backup Database
- Export data from Supabase regularly
- Keep SQL schema files safe

#### 3. Monitor Performance
- Check Vercel analytics
- Monitor API response times
- Track database usage

#### 4. Security Updates
- Update Node.js to latest LTS
- Keep dependencies updated
- Rotate JWT secrets periodically

### Making Changes

#### 1. Development Workflow
```bash
# Create new branch for changes
git checkout -b feature/new-feature

# Make changes and test locally
npm run dev

# Commit and push
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Deploy to Vercel (preview)
```

#### 2. Production Updates
```bash
# Merge to main branch
git checkout main
git merge feature/new-feature

# Push to trigger deployment
git push origin main
```

---

## 📞 Support & Resources

### Useful Links
- **Vercel Documentation**: https://vercel.com/docs
- **Supabase Documentation**: https://supabase.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev

### Project Structure
```
limopedia/
├── src/                 # Frontend source code
│   ├── components/      # React components
│   ├── app/            # Next.js app router pages
│   └── lib/            # Utilities and helpers
├── backend/            # Backend API source code
│   ├── src/            # API routes and logic
│   ├── prisma/         # Database schema
│   └── package.json    # Backend dependencies
├── public/             # Static assets
└── docs/              # Documentation files
```

### Environment Variables Reference

#### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_URL=your-backend-api-url
```

#### Backend (.env.local)
```
DATABASE_URL=your-database-connection-string
DIRECT_URL=your-direct-database-connection-string
JWT_SECRET=your-jwt-secret-key
REFRESH_TOKEN_SECRET=your-refresh-secret-key
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

---

## 🎉 Congratulations!

You now have a fully functional Limopedia website running locally and deployed to Vercel! 

### What You've Accomplished:
✅ Cloned the repository  
✅ Set up local development environment  
✅ Configured Supabase database  
✅ Set up environment variables  
✅ Ran the application locally  
✅ Deployed frontend to Vercel  
✅ Deployed backend API to Vercel  
✅ Connected frontend to backend  

### Next Steps:
1. Customize the design and content
2. Add your own branding
3. Set up custom domain
4. Configure analytics and monitoring
5. Set up automated backups

For any questions or issues, refer to the troubleshooting section or contact support.

---

**Happy Coding! 🚀**
