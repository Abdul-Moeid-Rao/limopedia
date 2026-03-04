import { Router, Request, Response } from 'express';
import { UserService } from '../src/user';
import { authMiddleware, adminMiddleware, AuthenticatedRequest, AdminRequest } from '../src/middleware/auth';

const router = Router();

// Get current user profile
router.get('/profile', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const profile = await UserService.getProfile(req.user.id);

    res.json({
      message: 'Profile retrieved successfully',
      data: profile
    });
  } catch (error) {
    console.error('Get profile error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'User not found') {
        return res.status(404).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to retrieve profile',
      message: 'Internal server error'
    });
  }
});

// Update current user profile
router.put('/profile', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { name, email } = req.body;

    // Basic validation
    if (!name && !email) {
      return res.status(400).json({ 
        error: 'At least one field (name or email) must be provided' 
      });
    }

    if (email && !email.includes('@')) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    const updatedProfile = await UserService.updateProfile(req.user.id, { name, email });

    res.json({
      message: 'Profile updated successfully',
      data: updatedProfile
    });
  } catch (error) {
    console.error('Update profile error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'User not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Email already in use') {
        return res.status(409).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to update profile',
      message: 'Internal server error'
    });
  }
});

// Change password
router.put('/password', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { currentPassword, newPassword } = req.body;

    // Basic validation
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        error: 'Current password and new password are required' 
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ 
        error: 'New password must be at least 6 characters long' 
      });
    }

    const result = await UserService.changePassword(req.user.id, { 
      currentPassword, 
      newPassword 
    });

    res.json({
      message: 'Password changed successfully',
      data: result
    });
  } catch (error) {
    console.error('Change password error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'User not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Current password is incorrect') {
        return res.status(401).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to change password',
      message: 'Internal server error'
    });
  }
});

// Get all users (admin only)
router.get('/all', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({ 
        error: 'Invalid pagination parameters' 
      });
    }

    const result = await UserService.getAllUsers(req.user!.id, page, limit);

    res.json({
      message: 'Users retrieved successfully',
      data: result
    });
  } catch (error) {
    console.error('Get all users error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Admin access required') {
        return res.status(403).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to retrieve users',
      message: 'Internal server error'
    });
  }
});

// Update user role (admin only)
router.put('/:userId/role', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (!userId || !role) {
      return res.status(400).json({ 
        error: 'User ID and role are required' 
      });
    }

    if (!['USER', 'ADMIN'].includes(role)) {
      return res.status(400).json({ 
        error: 'Invalid role. Must be USER or ADMIN' 
      });
    }

    const updatedUser = await UserService.updateUserRole(userId as string, role as any, req.user!.id);

    res.json({
      message: 'User role updated successfully',
      data: updatedUser
    });
  } catch (error) {
    console.error('Update user role error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Admin access required') {
        return res.status(403).json({ error: error.message });
      }
      if (error.message === 'User not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Cannot change your own role') {
        return res.status(400).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to update user role',
      message: 'Internal server error'
    });
  }
});

// Delete user (admin only)
router.delete('/:userId', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ 
        error: 'User ID is required' 
      });
    }

    const result = await UserService.deleteUser(userId as string, req.user!.id);

    res.json({
      message: 'User deleted successfully',
      data: result
    });
  } catch (error) {
    console.error('Delete user error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Admin access required') {
        return res.status(403).json({ error: error.message });
      }
      if (error.message === 'User not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Cannot delete your own account') {
        return res.status(400).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to delete user',
      message: 'Internal server error'
    });
  }
});

export default router;
