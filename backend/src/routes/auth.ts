import { Router, Request, Response } from 'express';
import { AuthService } from '../src/auth';
import { AuthenticatedRequest } from '../src/middleware/auth';

const router = Router();

// Register new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    // Basic validation
    if (!email || !password || !name) {
      return res.status(400).json({ 
        error: 'Email, password, and name are required' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password must be at least 6 characters long' 
      });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    const result = await AuthService.register({ email, password, name });

    res.status(201).json({
      message: 'User registered successfully',
      data: result
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'User already exists') {
        return res.status(409).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Registration failed',
      message: 'Internal server error'
    });
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }

    const result = await AuthService.login({ email, password });

    res.json({
      message: 'Login successful',
      data: result
    });
  } catch (error) {
    console.error('Login error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Invalid credentials') {
        return res.status(401).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Login failed',
      message: 'Internal server error'
    });
  }
});

// Refresh token
router.post('/refresh', async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ 
        error: 'Refresh token is required' 
      });
    }

    const tokens = await AuthService.refreshToken(refreshToken);

    res.json({
      message: 'Token refreshed successfully',
      data: tokens
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Invalid refresh token' || error.message === 'User not found') {
        return res.status(401).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Token refresh failed',
      message: 'Internal server error'
    });
  }
});

// Get current user profile (protected route)
router.get('/me', async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    res.json({
      message: 'Profile retrieved successfully',
      data: req.user
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve profile',
      message: 'Internal server error'
    });
  }
});

// Logout (client-side token removal, but we can track if needed)
router.post('/logout', async (req: AuthenticatedRequest, res: Response) => {
  try {
    // In a real implementation, you might want to:
    // 1. Add the token to a blacklist
    // 2. Track logout events
    // 3. Clear any server-side sessions
    
    res.json({
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      error: 'Logout failed',
      message: 'Internal server error'
    });
  }
});

export default router;
