import request from 'supertest';
import { app } from '../src/app';

// Basic API tests to ensure functionality
describe('Basic API Tests', () => {
  it('should pass health check', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body.status).toBe('healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
  });

  it('should serve API documentation', async () => {
    await request(app)
      .get('/api-docs')
      .expect(200);
  });

  it('should serve OpenAPI spec', async () => {
    const response = await request(app)
      .get('/api-docs.json')
      .expect(200);

    expect(response.body).toHaveProperty('openapi');
    expect(response.body).toHaveProperty('info');
  });

  it('should handle 404 for unknown routes', async () => {
    const response = await request(app)
      .get('/api/unknown-route')
      .expect(404);

    expect(response.body).toHaveProperty('error', 'Route not found');
  });

  it('should handle auth registration', async () => {
    const userData = {
      email: `test-${Date.now()}@example.com`,
      password: 'password123',
      name: 'Test User'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('user');
    expect(response.body.data.user.email).toBe(userData.email);
  });

  it('should handle auth login', async () => {
    const userData = {
      email: `login-${Date.now()}@example.com`,
      password: 'password123',
      name: 'Login User'
    };

    // Register first
    await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    // Then login
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: userData.email,
        password: userData.password
      })
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('accessToken');
    expect(response.body.data).toHaveProperty('refreshToken');
  });

  it('should reject invalid login', async () => {
    await request(app)
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@example.com',
        password: 'wrongpassword'
      })
      .expect(401);
  });

  it('should get i18n languages', async () => {
    const response = await request(app)
      .get('/api/i18n')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('supportedLanguages');
    expect(Array.isArray(response.body.data.supportedLanguages)).toBe(true);
  });

  it('should get English translations', async () => {
    const response = await request(app)
      .get('/api/i18n/en')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.data).toHaveProperty('translations');
    expect(response.body.data.language).toBe('en');
  });

  it('should handle unsupported language', async () => {
    await request(app)
      .get('/api/i18n/unsupported')
      .expect(404);
  });

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

  it('should reject unauthorized access to protected routes', async () => {
    await request(app)
      .get('/api/auth/me')
      .expect(401);

    await request(app)
      .get('/api/bookings/my/bookings')
      .expect(401);
  });

  it('should handle validation errors', async () => {
    // Invalid registration data
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'invalid-email',
        password: '123', // too short
        name: ''
      })
      .expect(400);

    // Missing login data
    await request(app)
      .post('/api/auth/login')
      .send({})
      .expect(400);
  });

  it('should handle malformed requests', async () => {
    await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send('{"invalid": json}')
      .expect(400);
  });
});
