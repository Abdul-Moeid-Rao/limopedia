# 🚀 Limopedia - Premium Transportation Booking System

A modern, full-stack transportation booking application built with Next.js, TypeScript, and Supabase.

## 🌟 Features

- **Modern UI/UX**: Responsive design with Tailwind CSS
- **Multi-language Support**: English and Russian
- **Real-time Booking**: Instant booking confirmation
- **User Authentication**: Secure JWT-based authentication
- **Admin Dashboard**: Manage bookings and users
- **Mobile Responsive**: Works perfectly on all devices
- **API Documentation**: Complete OpenAPI/Swagger documentation

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **Prisma** - Modern database ORM
- **JWT** - Authentication tokens
- **Swagger** - API documentation

### Database
- **Supabase** - PostgreSQL hosting with real-time features
- **PostgreSQL** - Robust relational database

### Deployment
- **Vercel** - Frontend hosting
- **Vercel Functions** - Serverless API deployment

## 📁 Project Structure

```
limopedia/
├── src/                          # Frontend source
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/               # About page
│   │   ├── book/                # Booking flow
│   │   ├── cities/              # Cities served
│   │   ├── fleet/               # Vehicle fleet
│   │   ├── pricing/             # Pricing information
│   │   └── reviews/             # Customer reviews
│   ├── components/              # Reusable components
│   │   ├── booking/             # Booking flow components
│   │   ├── about/               # About page components
│   │   ├── cities/              # Cities page components
│   │   ├── fleet/               # Fleet page components
│   │   └── ...                  # Other components
│   ├── lib/                     # Utilities and helpers
│   └── styles/                  # Global styles
├── backend/                     # Backend API
│   ├── src/
│   │   ├── routes/              # API routes
│   │   │   ├── auth.ts          # Authentication endpoints
│   │   │   ├── bookings.ts      # Booking management
│   │   │   ├── cities.ts        # Cities data
│   │   │   ├── i18n.ts          # Internationalization
│   │   │   └── users.ts         # User management
│   │   ├── middleware/          # Express middleware
│   │   ├── app.ts               # Express app configuration
│   │   └── server.ts            # Server entry point
│   ├── prisma/                  # Database schema
│   │   └── schema.prisma        # Prisma schema file
│   ├── vercel.json              # Vercel deployment config
│   └── DATABASE_SETUP.sql       # Database setup script
├── public/                      # Static assets
├── docs/                        # Documentation
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Supabase account

### 1. Clone the Repository
```bash
git clone https://github.com/Abdul-Moeid-Rao/limopedia.git
cd limopedia
```

### 2. Install Dependencies
```bash
# Frontend dependencies
npm install

# Backend dependencies
cd backend
npm install
cd ..
```

### 3. Set Up Database
1. Create a new project on [Supabase](https://supabase.com)
2. Run the `DATABASE_SETUP.sql` script in Supabase SQL Editor
3. Get your database connection strings from Supabase settings

### 4. Environment Variables

#### Frontend (.env.local)
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### Backend (.env.local)
```bash
DATABASE_URL=your-supabase-database-url
DIRECT_URL=your-supabase-direct-url
JWT_SECRET=your-jwt-secret
REFRESH_TOKEN_SECRET=your-refresh-secret
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

### 5. Run the Application
```bash
# Start frontend (in root directory)
npm run dev

# Start backend (in new terminal)
cd backend
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🗄️ Database Schema

### Users Table
- `id` - Primary key
- `email` - User email (unique)
- `password` - Hashed password
- `name` - User full name
- `role` - USER or ADMIN
- `created_at` - Account creation time
- `updated_at` - Last update time

### Service Types Table
- `id` - Primary key
- `name` - Service name
- `description` - Service description
- `duration` - Service duration in minutes
- `price` - Service price
- `is_active` - Whether service is available

### Bookings Table
- `id` - Primary key
- `user_id` - Foreign key to users
- `service_type_id` - Foreign key to service_types
- `start_time` - Booking start time
- `end_time` - Booking end time
- `status` - PENDING, CONFIRMED, CANCELLED, COMPLETED
- `notes` - Additional notes
- `pickup_location` - Pickup address
- `dropoff_location` - Drop-off address
- `passengers` - Number of passengers
- `luggage` - Number of luggage items
- `total_price` - Total booking price

## 🔐 Authentication

The application uses JWT-based authentication:
- **Access Tokens**: 7 days expiration
- **Refresh Tokens**: 30 days expiration
- **Secure Password Hashing**: bcrypt with salt rounds
- **Role-based Access**: USER and ADMIN roles

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Cities
- `GET /api/cities` - Get served cities
- `GET /api/cities/:id` - Get city details

### Service Types
- `GET /api/service-types` - Get available services
- `GET /api/service-types/:id` - Get service details

## 🌍 Internationalization

The application supports multiple languages:
- **English** (en)
- **Russian** (ru)

Translation files are located in `src/lib/i18n/`

## 🎨 UI Components

### Key Components
- `Navbar` - Responsive navigation with mobile menu
- `Hero` - Hero sections with background images
- `BookingFlow` - Multi-step booking process
- `VehicleCard` - Vehicle display cards
- `TestimonialCard` - Customer testimonials

### Design System
- **Colors**: Navy (#0F172A), Gold (#C8922A), White
- **Fonts**: Playfair Display (headings), Inter (body)
- **Spacing**: Tailwind's spacing scale
- **Animations**: Framer Motion for smooth transitions

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Add environment variables
4. Deploy

### Backend Deployment (Vercel Functions)
1. Create new Vercel project
2. Set root directory to `backend`
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Add environment variables
5. Deploy

## 🔧 Development

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

#### Backend
```bash
npm run dev          # Start development server
npm run build        # Build TypeScript
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check DATABASE_URL in .env.local
   - Verify Supabase project is active
   - Ensure password is correct

2. **CORS Errors**
   - Update CORS_ORIGIN environment variable
   - Ensure frontend and backend URLs match

3. **Build Failures**
   - Check all environment variables are set
   - Ensure all dependencies are installed
   - Check for TypeScript errors

4. **Authentication Issues**
   - Verify JWT secrets are set
   - Check token expiration
   - Ensure cookies are enabled

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the troubleshooting section

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database by [Supabase](https://supabase.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Happy Coding! 🚀**
