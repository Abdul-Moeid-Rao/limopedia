import { AuthService } from '../../src/services/auth';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock dependencies
jest.mock('@prisma/client');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
} as any;

(PrismaClient as jest.Mock).mockImplementation(() => mockPrisma);

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    jest.clearAllMocks();
    authService = new AuthService();
    process.env.JWT_SECRET = 'test-jwt-secret';
    process.env.JWT_REFRESH_SECRET = 'test-refresh-secret';
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
      };

      const hashedPassword = 'hashed-password';
      (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);

      const createdUser = {
        id: 'user-id',
        email: userData.email,
        name: userData.name,
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockPrisma.user.create.mockResolvedValue(createdUser);

      const result = await authService.register(userData);

      expect(bcrypt.hash).toHaveBeenCalledWith(userData.password, 12);
      expect(mockPrisma.user.create).toHaveBeenCalledWith({
        data: {
          email: userData.email,
          password: hashedPassword,
          name: userData.name,
          role: 'USER'
        }
      });
      expect(result).toEqual(createdUser);
    });

    it('should throw error if user already exists', async () => {
      const userData = {
        email: 'existing@example.com',
        password: 'password123',
        name: 'Test User'
      };

      mockPrisma.user.findUnique.mockResolvedValue({ id: 'existing-user' });

      await expect(authService.register(userData)).rejects.toThrow('User already exists');
    });
  });

  describe('login', () => {
    it('should login user successfully', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'password123'
      };

      const user = {
        id: 'user-id',
        email: loginData.email,
        password: 'hashed-password',
        name: 'Test User',
        role: 'USER'
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const accessToken = 'access-token';
      const refreshToken = 'refresh-token';
      (jwt.sign as jest.Mock)
        .mockReturnValueOnce(accessToken)
        .mockReturnValueOnce(refreshToken);

      const result = await authService.login(loginData);

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: loginData.email }
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(loginData.password, user.password);
      expect(jwt.sign).toHaveBeenCalledWith(
        { userId: user.id, role: user.role, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
      );
      expect(jwt.sign).toHaveBeenCalledWith(
        { userId: user.id, type: 'refresh' },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
      );
      expect(result).toEqual({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        },
        accessToken,
        refreshToken
      });
    });

    it('should throw error for invalid credentials', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'wrong-password'
      };

      const user = {
        id: 'user-id',
        email: loginData.email,
        password: 'hashed-password',
        name: 'Test User',
        role: 'USER'
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(authService.login(loginData)).rejects.toThrow('Invalid credentials');
    });

    it('should throw error if user not found', async () => {
      const loginData = {
        email: 'nonexistent@example.com',
        password: 'password123'
      };

      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(authService.login(loginData)).rejects.toThrow('Invalid credentials');
    });
  });

  describe('refreshToken', () => {
    it('should refresh token successfully', async () => {
      const refreshToken = 'valid-refresh-token';
      const userId = 'user-id';

      const user = {
        id: userId,
        email: 'test@example.com',
        name: 'Test User',
        role: 'USER'
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      (jwt.verify as jest.Mock).mockReturnValue({ userId, type: 'refresh' });

      const newAccessToken = 'new-access-token';
      (jwt.sign as jest.Mock).mockReturnValue(newAccessToken);

      const result = await authService.refreshToken(refreshToken);

      expect(jwt.verify).toHaveBeenCalledWith(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
      );
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: userId }
      });
      expect(jwt.sign).toHaveBeenCalledWith(
        { userId: user.id, role: user.role, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
      );
      expect(result).toEqual({ accessToken: newAccessToken });
    });

    it('should throw error for invalid refresh token', async () => {
      const refreshToken = 'invalid-refresh-token';

      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await expect(authService.refreshToken(refreshToken)).rejects.toThrow('Invalid refresh token');
    });

    it('should throw error if user not found during refresh', async () => {
      const refreshToken = 'valid-refresh-token';
      const userId = 'nonexistent-user-id';

      (jwt.verify as jest.Mock).mockReturnValue({ userId, type: 'refresh' });
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(authService.refreshToken(refreshToken)).rejects.toThrow('User not found');
    });
  });

  describe('validateToken', () => {
    it('should validate token successfully', async () => {
      const token = 'valid-token';
      const payload = {
        userId: 'user-id',
        role: 'USER',
        email: 'test@example.com'
      };

      (jwt.verify as jest.Mock).mockReturnValue(payload);

      const result = await authService.validateToken(token);

      expect(jwt.verify).toHaveBeenCalledWith(token, process.env.JWT_SECRET);
      expect(result).toEqual(payload);
    });

    it('should throw error for invalid token', async () => {
      const token = 'invalid-token';

      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await expect(authService.validateToken(token)).rejects.toThrow('Invalid token');
    });
  });

  describe('changePassword', () => {
    it('should change password successfully', async () => {
      const userId = 'user-id';
      const currentPassword = 'current-password';
      const newPassword = 'new-password';

      const user = {
        id: userId,
        password: 'hashed-current-password'
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      const newHashedPassword = 'new-hashed-password';
      (bcrypt.hash as jest.Mock).mockResolvedValue(newHashedPassword);

      mockPrisma.user.update.mockResolvedValue({ ...user, password: newHashedPassword });

      await authService.changePassword(userId, currentPassword, newPassword);

      expect(bcrypt.compare).toHaveBeenCalledWith(currentPassword, user.password);
      expect(bcrypt.hash).toHaveBeenCalledWith(newPassword, 12);
      expect(mockPrisma.user.update).toHaveBeenCalledWith({
        where: { id: userId },
        data: { password: newHashedPassword }
      });
    });

    it('should throw error if current password is incorrect', async () => {
      const userId = 'user-id';
      const currentPassword = 'wrong-current-password';
      const newPassword = 'new-password';

      const user = {
        id: userId,
        password: 'hashed-current-password'
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(authService.changePassword(userId, currentPassword, newPassword))
        .rejects.toThrow('Current password is incorrect');
    });

    it('should throw error if user not found', async () => {
      const userId = 'nonexistent-user-id';
      const currentPassword = 'current-password';
      const newPassword = 'new-password';

      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(authService.changePassword(userId, currentPassword, newPassword))
        .rejects.toThrow('User not found');
    });
  });
});
