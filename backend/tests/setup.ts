import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Set test environment
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-jwt-secret';
  process.env.JWT_REFRESH_SECRET = 'test-refresh-secret';
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL || 'postgresql://postgres:password@localhost:5432/booking_system_test';

  // Reset database
  try {
    execSync('npx prisma migrate reset --force --skip-seed', { stdio: 'inherit' });
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    execSync('npx prisma generate', { stdio: 'inherit' });
  } catch (error) {
    console.error('Database setup failed:', error);
  }

  // Connect to test database
  await prisma.$connect();
});

afterAll(async () => {
  // Clean up database connections
  await prisma.$disconnect();
});

beforeEach(async () => {
  // Clean up data before each test
  const deleteUsers = prisma.user.deleteMany();
  const deleteBookings = prisma.booking.deleteMany();
  const deleteServiceTypes = prisma.serviceType.deleteMany();
  const deleteCities = prisma.city.deleteMany();
  const deleteRoutePricing = prisma.routePricing.deleteMany();

  await prisma.$transaction([
    deleteRoutePricing,
    deleteBookings,
    deleteServiceTypes,
    deleteCities,
    deleteUsers
  ]);
});

// Global test utilities
global.createTestUser = async (userData = {}) => {
  const defaultUser = {
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
    role: 'USER',
    ...userData
  };

  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash(defaultUser.password, 12);

  return prisma.user.create({
    data: {
      ...defaultUser,
      password: hashedPassword
    }
  });
};

global.createTestAdmin = async (userData = {}) => {
  const defaultAdmin = {
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Test Admin',
    role: 'ADMIN',
    ...userData
  };

  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash(defaultAdmin.password, 12);

  return prisma.user.create({
    data: {
      ...defaultAdmin,
      password: hashedPassword
    }
  });
};

global.createTestServiceType = async (serviceData = {}) => {
  const defaultService = {
    name: 'Test Service',
    description: 'Test service description',
    duration: 60,
    price: 100.00,
    isActive: true,
    ...serviceData
  };

  return prisma.serviceType.create({
    data: defaultService
  });
};

global.createTestCity = async (cityData = {}) => {
  const defaultCity = {
    name: 'Test City',
    country: 'Test Country',
    isActive: true,
    ...cityData
  };

  return prisma.city.create({
    data: defaultCity
  });
};

global.createTestBooking = async (bookingData = {}) => {
  const user = await global.createTestUser();
  const serviceType = await global.createTestServiceType();

  const defaultBooking = {
    userId: user.id,
    serviceTypeId: serviceType.id,
    startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 60 * 60 * 1000), // Tomorrow + 1 hour
    status: 'PENDING',
    ...bookingData
  };

  return prisma.booking.create({
    data: defaultBooking,
    include: {
      user: true,
      serviceType: true
    }
  });
};

global.generateTestToken = (userId: string, role: string = 'USER') => {
  const jwt = require('jsonwebtoken');
  return jwt.sign(
    { userId, role, email: 'test@example.com' },
    process.env.JWT_SECRET || 'test-jwt-secret',
    { expiresIn: '1h' }
  );
};

global.generateRefreshToken = (userId: string) => {
  const jwt = require('jsonwebtoken');
  return jwt.sign(
    { userId, type: 'refresh' },
    process.env.JWT_REFRESH_SECRET || 'test-refresh-secret',
    { expiresIn: '7d' }
  );
};
