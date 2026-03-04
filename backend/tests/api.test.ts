import request from 'supertest';
import { app } from '../src/app';

describe('API Health Check', () => {
  it('should return 200 for health endpoint', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
  });
});

describe('API Documentation', () => {
  it('should serve Swagger UI', async () => {
    await request(app)
      .get('/api-docs')
      .expect(200);
  });

  it('should serve OpenAPI JSON', async () => {
    const response = await request(app)
      .get('/api-docs.json')
      .expect(200);

    expect(response.body).toHaveProperty('openapi');
    expect(response.body).toHaveProperty('info');
    expect(response.body).toHaveProperty('paths');
  });
});

describe('Authentication Endpoints', () => {
  const testUser = {
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User'
  };

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send(testUser)
      .expect(201);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('user');
    expect(response.body.data.user.email).toBe(testUser.email);
  });

  it('should login with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      })
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('accessToken');
    expect(response.body.data).toHaveProperty('refreshToken');
  });

  it('should reject invalid credentials', async () => {
    await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: 'wrongpassword'
      })
      .expect(401);
  });
});

describe('User Endpoints', () => {
  let accessToken: string;
  let userId: string;

  beforeAll(async () => {
    // Create and login a user for protected endpoint tests
    const testUser = {
      email: 'usertest@example.com',
      password: 'password123',
      name: 'User Test'
    };

    await request(app)
      .post('/api/auth/register')
      .send(testUser);

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    accessToken = loginResponse.body.data.accessToken;
    userId = loginResponse.body.data.user.id;
  });

  it('should get current user profile', async () => {
    const response = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('user');
    expect(response.body.data.user.id).toBe(userId);
  });

  it('should reject unauthorized access', async () => {
    await request(app)
      .get('/api/auth/me')
      .expect(401);
  });
});

describe('Booking Endpoints', () => {
  let accessToken: string;

  beforeAll(async () => {
    // Create and login a user for booking tests
    const testUser = {
      email: 'bookingtest@example.com',
      password: 'password123',
      name: 'Booking Test'
    };

    await request(app)
      .post('/api/auth/register')
      .send(testUser);

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    accessToken = loginResponse.body.data.accessToken;
  });

  it('should get user bookings', async () => {
    const response = await request(app)
      .get('/api/bookings/my/bookings')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('bookings');
    expect(Array.isArray(response.body.data.bookings)).toBe(true);
  });

  it('should reject booking creation without authentication', async () => {
    await request(app)
      .post('/api/bookings')
      .send({
        serviceTypeId: 'test-service-id',
        startTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString()
      })
      .expect(401);
  });
});

describe('City Endpoints', () => {
  it('should get cities', async () => {
    const response = await request(app)
      .get('/api/cities')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('cities');
    expect(Array.isArray(response.body.data.cities)).toBe(true);
  });

  it('should get service types', async () => {
    const response = await request(app)
      .get('/api/cities/service-types')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('serviceTypes');
    expect(Array.isArray(response.body.data.serviceTypes)).toBe(true);
  });
});

describe('Internationalization Endpoints', () => {
  it('should get supported languages', async () => {
    const response = await request(app)
      .get('/api/i18n')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('supportedLanguages');
    expect(Array.isArray(response.body.data.supportedLanguages)).toBe(true);
  });

  it('should get translations for English', async () => {
    const response = await request(app)
      .get('/api/i18n/en')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('translations');
    expect(response.body.data).toHaveProperty('language', 'en');
  });

  it('should return error for unsupported language', async () => {
    await request(app)
      .get('/api/i18n/unsupported')
      .expect(404);
  });
});

describe('Error Handling', () => {
  it('should handle 404 for non-existent routes', async () => {
    const response = await request(app)
      .get('/api/non-existent')
      .expect(404);

    expect(response.body).toHaveProperty('error', 'Route not found');
  });

  it('should handle malformed JSON', async () => {
    await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send('{"invalid": json}')
      .expect(400);
  });
});
