import { Router, Request, Response } from 'express';
import { BookingService } from '../src/booking';
import { authMiddleware, adminMiddleware, AuthenticatedRequest, AdminRequest } from '../src/middleware/auth';

const router = Router();

// Create new booking
router.post('/', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { serviceTypeId, startTime, endTime, notes } = req.body;

    // Basic validation
    if (!serviceTypeId || !startTime || !endTime) {
      return res.status(400).json({ 
        error: 'Service type ID, start time, and end time are required' 
      });
    }

    const start = new Date(startTime);
    const end = new Date(endTime);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ 
        error: 'Invalid date format for start or end time' 
      });
    }

    if (start >= end) {
      return res.status(400).json({ 
        error: 'Start time must be before end time' 
      });
    }

    if (start < new Date()) {
      return res.status(400).json({ 
        error: 'Start time cannot be in the past' 
      });
    }

    const booking = await BookingService.createBooking(req.user.id, {
      serviceTypeId,
      startTime: start,
      endTime: end,
      notes
    });

    res.status(201).json({
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Service type not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Service type is not available') {
        return res.status(400).json({ error: error.message });
      }
      if (error.message === 'Time slot is already booked') {
        return res.status(409).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to create booking',
      message: 'Internal server error'
    });
  }
});

// Get specific booking
router.get('/:bookingId', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { bookingId } = req.params;
    const isAdmin = req.user.role === 'ADMIN';

    const booking = await BookingService.getBooking(
      bookingId as string, 
      req.user.id, 
      isAdmin
    );

    res.json({
      message: 'Booking retrieved successfully',
      data: booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Booking not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Access denied') {
        return res.status(403).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to retrieve booking',
      message: 'Internal server error'
    });
  }
});

// Get current user's bookings
router.get('/my/bookings', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({ 
        error: 'Invalid pagination parameters' 
      });
    }

    const result = await BookingService.getUserBookings(req.user.id, page, limit);

    res.json({
      message: 'Bookings retrieved successfully',
      data: result
    });
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve bookings',
      message: 'Internal server error'
    });
  }
});

// Get all bookings (admin only)
router.get('/all', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;

    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({ 
        error: 'Invalid pagination parameters' 
      });
    }

    const result = await BookingService.getAllBookings(page, limit, status as any);

    res.json({
      message: 'All bookings retrieved successfully',
      data: result
    });
  } catch (error) {
    console.error('Get all bookings error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve bookings',
      message: 'Internal server error'
    });
  }
});

// Update booking
router.put('/:bookingId', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { bookingId } = req.params;
    const { startTime, endTime, notes } = req.body;
    const isAdmin = req.user.role === 'ADMIN';

    // Validate date formats if provided
    let start, end;
    if (startTime) {
      start = new Date(startTime);
      if (isNaN(start.getTime())) {
        return res.status(400).json({ 
          error: 'Invalid date format for start time' 
        });
      }
    }

    if (endTime) {
      end = new Date(endTime);
      if (isNaN(end.getTime())) {
        return res.status(400).json({ 
          error: 'Invalid date format for end time' 
        });
      }
    }

    const updateData: any = {};
    if (startTime !== undefined) updateData.startTime = start;
    if (endTime !== undefined) updateData.endTime = end;
    if (notes !== undefined) updateData.notes = notes;

    const booking = await BookingService.updateBooking(
      bookingId as string,
      updateData,
      req.user.id,
      isAdmin
    );

    res.json({
      message: 'Booking updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Update booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Booking not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Access denied') {
        return res.status(403).json({ error: error.message });
      }
      if (error.message === 'Cannot update cancelled or completed bookings') {
        return res.status(400).json({ error: error.message });
      }
      if (error.message === 'Start time must be before end time') {
        return res.status(400).json({ error: error.message });
      }
      if (error.message === 'Time slot is already booked') {
        return res.status(409).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to update booking',
      message: 'Internal server error'
    });
  }
});

// Cancel booking
router.patch('/:bookingId/cancel', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { bookingId } = req.params;
    const isAdmin = req.user.role === 'ADMIN';

    const booking = await BookingService.cancelBooking(
      bookingId as string,
      req.user.id,
      isAdmin
    );

    res.json({
      message: 'Booking cancelled successfully',
      data: booking
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Booking not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Access denied') {
        return res.status(403).json({ error: error.message });
      }
      if (error.message === 'Booking is already cancelled') {
        return res.status(400).json({ error: error.message });
      }
      if (error.message === 'Cannot cancel completed bookings') {
        return res.status(400).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to cancel booking',
      message: 'Internal server error'
    });
  }
});

// Confirm booking (admin only)
router.patch('/:bookingId/confirm', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { bookingId } = req.params;

    const booking = await BookingService.confirmBooking(bookingId as string);

    res.json({
      message: 'Booking confirmed successfully',
      data: booking
    });
  } catch (error) {
    console.error('Confirm booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Booking not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Only pending bookings can be confirmed') {
        return res.status(400).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to confirm booking',
      message: 'Internal server error'
    });
  }
});

// Complete booking (admin only)
router.patch('/:bookingId/complete', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { bookingId } = req.params;

    const booking = await BookingService.completeBooking(bookingId as string);

    res.json({
      message: 'Booking completed successfully',
      data: booking
    });
  } catch (error) {
    console.error('Complete booking error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Booking not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Only confirmed bookings can be completed') {
        return res.status(400).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to complete booking',
      message: 'Internal server error'
    });
  }
});

export default router;
