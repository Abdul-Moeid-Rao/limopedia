import { PrismaClient, BookingStatus } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateBookingInput {
  serviceTypeId: string;
  startTime: Date;
  endTime: Date;
  notes?: string;
}

export interface UpdateBookingInput {
  startTime?: Date;
  endTime?: Date;
  notes?: string;
}

export class BookingService {
  static async createBooking(userId: string, input: CreateBookingInput) {
    // Validate service type exists and is active
    const serviceType = await prisma.serviceType.findUnique({
      where: { id: input.serviceTypeId }
    });

    if (!serviceType) {
      throw new Error('Service type not found');
    }

    if (!serviceType.isActive) {
      throw new Error('Service type is not available');
    }

    // Validate time range
    if (input.startTime >= input.endTime) {
      throw new Error('Start time must be before end time');
    }

    // Check for booking conflicts
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        serviceTypeId: input.serviceTypeId,
        status: {
          in: [BookingStatus.PENDING, BookingStatus.CONFIRMED]
        },
        OR: [
          {
            AND: [
              { startTime: { lte: input.startTime } },
              { endTime: { gt: input.startTime } }
            ]
          },
          {
            AND: [
              { startTime: { lt: input.endTime } },
              { endTime: { gte: input.endTime } }
            ]
          },
          {
            AND: [
              { startTime: { gte: input.startTime } },
              { endTime: { lte: input.endTime } }
            ]
          }
        ]
      }
    });

    if (conflictingBooking) {
      throw new Error('Time slot is already booked');
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        serviceTypeId: input.serviceTypeId,
        startTime: input.startTime,
        endTime: input.endTime,
        notes: input.notes || null,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    return booking;
  }

  static async getBooking(bookingId: string, userId?: string, isAdmin = false) {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    // Check access permissions
    if (!isAdmin && booking.userId !== userId) {
      throw new Error('Access denied');
    }

    return booking;
  }

  static async getUserBookings(userId: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where: { userId },
        skip,
        take: limit,
        include: {
          serviceType: true
        },
        orderBy: {
          startTime: 'desc'
        }
      }),
      prisma.booking.count({
        where: { userId }
      })
    ]);

    return {
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async getAllBookings(page = 1, limit = 10, status?: BookingStatus) {
    const skip = (page - 1) * limit;
    const where = status ? { status } : {};

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          serviceType: true
        },
        orderBy: {
          startTime: 'desc'
        }
      }),
      prisma.booking.count({ where })
    ]);

    return {
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async updateBooking(
    bookingId: string,
    input: UpdateBookingInput,
    userId?: string,
    isAdmin = false
  ) {
    const existingBooking = await this.getBooking(bookingId, userId, isAdmin);

    // Check if booking can be updated
    if (existingBooking.status === BookingStatus.CANCELLED || 
        existingBooking.status === BookingStatus.COMPLETED) {
      throw new Error('Cannot update cancelled or completed bookings');
    }

    // Validate time range if provided
    if (input.startTime && input.endTime && input.startTime >= input.endTime) {
      throw new Error('Start time must be before end time');
    }

    // Check for conflicts if time is being updated
    if (input.startTime || input.endTime) {
      const newStartTime = input.startTime || existingBooking.startTime;
      const newEndTime = input.endTime || existingBooking.endTime;

      const conflictingBooking = await prisma.booking.findFirst({
        where: {
          id: { not: bookingId },
          serviceTypeId: existingBooking.serviceTypeId,
          status: {
            in: [BookingStatus.PENDING, BookingStatus.CONFIRMED]
          },
          OR: [
            {
              AND: [
                { startTime: { lte: newStartTime } },
                { endTime: { gt: newStartTime } }
              ]
            },
            {
              AND: [
                { startTime: { lt: newEndTime } },
                { endTime: { gte: newEndTime } }
              ]
            },
            {
              AND: [
                { startTime: { gte: newStartTime } },
                { endTime: { lte: newEndTime } }
              ]
            }
          ]
        }
      });

      if (conflictingBooking) {
        throw new Error('Time slot is already booked');
      }
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: input,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    return updatedBooking;
  }

  static async cancelBooking(bookingId: string, userId?: string, isAdmin = false) {
    const booking = await this.getBooking(bookingId, userId, isAdmin);

    if (booking.status === BookingStatus.CANCELLED) {
      throw new Error('Booking is already cancelled');
    }

    if (booking.status === BookingStatus.COMPLETED) {
      throw new Error('Cannot cancel completed bookings');
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.CANCELLED },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    return updatedBooking;
  }

  static async confirmBooking(bookingId: string) {
    const booking = await this.getBooking(bookingId);

    if (booking.status !== BookingStatus.PENDING) {
      throw new Error('Only pending bookings can be confirmed');
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.CONFIRMED },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    return updatedBooking;
  }

  static async completeBooking(bookingId: string) {
    const booking = await this.getBooking(bookingId);

    if (booking.status !== BookingStatus.CONFIRMED) {
      throw new Error('Only confirmed bookings can be completed');
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.COMPLETED },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        serviceType: true
      }
    });

    return updatedBooking;
  }
}
