import swaggerJsdoc from 'swagger-jsdoc';
import { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Booking System API',
    version: '1.0.0',
    description: 'A comprehensive RESTful API for a booking system with authentication, user management, booking services, and city/rate management.',
    contact: {
      name: 'API Support',
      email: 'support@example.com',
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001/api',
      description: 'Development server',
    },
    {
      url: 'https://your-production-url.com/api',
      description: 'Production server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'JWT access token',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'User unique identifier',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'User email address',
          },
          name: {
            type: 'string',
            description: 'User full name',
          },
          role: {
            type: 'string',
            enum: ['USER', 'ADMIN'],
            description: 'User role',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'User creation timestamp',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'User last update timestamp',
          },
        },
      },
      Booking: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'Booking unique identifier',
          },
          userId: {
            type: 'string',
            format: 'uuid',
            description: 'User ID who made the booking',
          },
          serviceTypeId: {
            type: 'string',
            format: 'uuid',
            description: 'Service type ID',
          },
          startTime: {
            type: 'string',
            format: 'date-time',
            description: 'Booking start time',
          },
          endTime: {
            type: 'string',
            format: 'date-time',
            description: 'Booking end time',
          },
          status: {
            type: 'string',
            enum: ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'],
            description: 'Booking status',
          },
          notes: {
            type: 'string',
            nullable: true,
            description: 'Additional booking notes',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Booking creation timestamp',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Booking last update timestamp',
          },
        },
      },
      ServiceType: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'Service type unique identifier',
          },
          name: {
            type: 'string',
            description: 'Service type name',
          },
          description: {
            type: 'string',
            nullable: true,
            description: 'Service type description',
          },
          duration: {
            type: 'integer',
            description: 'Service duration in minutes',
          },
          price: {
            type: 'number',
            format: 'decimal',
            description: 'Service base price',
          },
          isActive: {
            type: 'boolean',
            description: 'Whether the service type is active',
          },
        },
      },
      City: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'City unique identifier',
          },
          name: {
            type: 'string',
            description: 'City name',
          },
          country: {
            type: 'string',
            description: 'Country name',
          },
          isActive: {
            type: 'boolean',
            description: 'Whether the city is active',
          },
        },
      },
      RoutePricing: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'Route pricing unique identifier',
          },
          fromCityId: {
            type: 'string',
            format: 'uuid',
            description: 'Origin city ID',
          },
          toCityId: {
            type: 'string',
            format: 'uuid',
            description: 'Destination city ID',
          },
          basePrice: {
            type: 'number',
            format: 'decimal',
            description: 'Base route price',
          },
          distance: {
            type: 'number',
            format: 'decimal',
            description: 'Route distance in km',
          },
          estimatedDuration: {
            type: 'integer',
            description: 'Estimated duration in minutes',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error type',
          },
          message: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
      SuccessResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Success message',
          },
          data: {
            type: 'object',
            description: 'Response data',
          },
        },
      },
      PaginatedResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Success message',
          },
          data: {
            type: 'object',
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                },
                description: 'Array of items',
              },
              pagination: {
                type: 'object',
                properties: {
                  page: {
                    type: 'integer',
                    description: 'Current page number',
                  },
                  limit: {
                    type: 'integer',
                    description: 'Items per page',
                  },
                  total: {
                    type: 'integer',
                    description: 'Total number of items',
                  },
                  pages: {
                    type: 'integer',
                    description: 'Total number of pages',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [
    {
      name: 'Authentication',
      description: 'User authentication and authorization',
    },
    {
      name: 'Users',
      description: 'User management operations',
    },
    {
      name: 'Bookings',
      description: 'Booking management operations',
    },
    {
      name: 'Cities',
      description: 'City and route pricing operations',
    },
    {
      name: 'Internationalization',
      description: 'Translation and localization services',
    },
  ],
};

const options = {
  definition: swaggerDefinition,
  apis: [
    './src/routes/*.ts',
    './src/services/*.ts',
    './src/middleware/*.ts',
  ],
};

export const specs = swaggerJsdoc(options);
