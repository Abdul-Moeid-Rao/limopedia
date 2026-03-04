import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';

const prisma = new PrismaClient();

// Redis client initialization
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  retryDelayOnFailover: 100,
  maxRetriesPerRequest: 3,
});

export interface City {
  id: string;
  name: string;
  country: string;
  isActive: boolean;
}

export interface RoutePricing {
  id: string;
  fromCityId: string;
  toCityId: string;
  basePrice: number;
  distance: number;
  estimatedDuration: number;
}

export interface ServiceTypeWithPricing {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  isActive: boolean;
  routePricing?: (RoutePricing & { adjustedPrice?: number }) | null;
}

export class CityService {
  private static readonly CACHE_KEYS = {
    CITIES: 'cities:all',
    ACTIVE_CITIES: 'cities:active',
    ROUTE_PRICING: 'route_pricing:',
    SERVICE_TYPES: 'service_types:all',
    ACTIVE_SERVICE_TYPES: 'service_types:active',
  };

  private static readonly CACHE_TTL = {
    CITIES: 3600, // 1 hour
    ROUTE_PRICING: 1800, // 30 minutes
    SERVICE_TYPES: 1800, // 30 minutes
  };

  static async getAllCities(): Promise<City[]> {
    const cacheKey = this.CACHE_KEYS.CITIES;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for cities:', error);
    }

    const cities = await prisma.$queryRaw<City[]>`
      SELECT 
        id, 
        name, 
        country, 
        isActive
      FROM cities 
      ORDER BY name ASC
    `;

    try {
      await redis.setex(cacheKey, this.CACHE_TTL.CITIES, JSON.stringify(cities));
    } catch (error) {
      console.warn('Failed to cache cities:', error);
    }

    return cities;
  }

  static async getActiveCities(): Promise<City[]> {
    const cacheKey = this.CACHE_KEYS.ACTIVE_CITIES;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for active cities:', error);
    }

    const cities = await prisma.$queryRaw<City[]>`
      SELECT 
        id, 
        name, 
        country, 
        isActive
      FROM cities 
      WHERE isActive = true
      ORDER BY name ASC
    `;

    try {
      await redis.setex(cacheKey, this.CACHE_TTL.CITIES, JSON.stringify(cities));
    } catch (error) {
      console.warn('Failed to cache active cities:', error);
    }

    return cities;
  }

  static async getRoutePricing(fromCityId: string, toCityId: string): Promise<RoutePricing | null> {
    const cacheKey = `${this.CACHE_KEYS.ROUTE_PRICING}${fromCityId}:${toCityId}`;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for route pricing:', error);
    }

    const pricing = await prisma.$queryRaw<RoutePricing[]>`
      SELECT 
        id, 
        fromCityId, 
        toCityId, 
        basePrice, 
        distance, 
        estimatedDuration
      FROM route_pricings 
      WHERE fromCityId = ${fromCityId} 
        AND toCityId = ${toCityId}
      LIMIT 1
    `;

    const result = pricing[0] || null;

    if (result) {
      try {
        await redis.setex(cacheKey, this.CACHE_TTL.ROUTE_PRICING, JSON.stringify(result));
      } catch (error) {
        console.warn('Failed to cache route pricing:', error);
      }
    }

    return result;
  }

  static async getAllServiceTypes(): Promise<ServiceTypeWithPricing[]> {
    const cacheKey = this.CACHE_KEYS.SERVICE_TYPES;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for service types:', error);
    }

    const serviceTypes = await prisma.serviceType.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        duration: true,
        price: true,
        isActive: true,
      },
      orderBy: {
        name: 'asc'
      }
    });

    const convertedServiceTypes = serviceTypes.map(st => ({
      ...st,
      price: Number(st.price)
    }));

    try {
      await redis.setex(cacheKey, this.CACHE_TTL.SERVICE_TYPES, JSON.stringify(convertedServiceTypes));
    } catch (error) {
      console.warn('Failed to cache service types:', error);
    }

    return convertedServiceTypes;
  }

  static async getActiveServiceTypes(): Promise<ServiceTypeWithPricing[]> {
    const cacheKey = this.CACHE_KEYS.ACTIVE_SERVICE_TYPES;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for active service types:', error);
    }

    const serviceTypes = await prisma.serviceType.findMany({
      where: {
        isActive: true
      },
      select: {
        id: true,
        name: true,
        description: true,
        duration: true,
        price: true,
        isActive: true,
      },
      orderBy: {
        name: 'asc'
      }
    });

    const convertedServiceTypes = serviceTypes.map(st => ({
      ...st,
      price: Number(st.price)
    }));

    try {
      await redis.setex(cacheKey, this.CACHE_TTL.SERVICE_TYPES, JSON.stringify(convertedServiceTypes));
    } catch (error) {
      console.warn('Failed to cache active service types:', error);
    }

    return convertedServiceTypes;
  }

  static async getServiceTypesWithRoutePricing(fromCityId: string, toCityId: string): Promise<ServiceTypeWithPricing[]> {
    const cacheKey = `${this.CACHE_KEYS.SERVICE_TYPES}route:${fromCityId}:${toCityId}`;
    
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.warn('Redis cache miss for service types with route pricing:', error);
    }

    const [serviceTypes, routePricing] = await Promise.all([
      this.getActiveServiceTypes(),
      this.getRoutePricing(fromCityId, toCityId)
    ]);

    const result = serviceTypes.map((serviceType: ServiceTypeWithPricing) => ({
      ...serviceType,
      routePricing: routePricing ? {
        ...routePricing,
        // Calculate total price based on route distance and service type
        adjustedPrice: this.calculateAdjustedPrice(serviceType.price, routePricing.distance, routePricing.basePrice)
      } : null
    }));

    try {
      await redis.setex(cacheKey, this.CACHE_TTL.SERVICE_TYPES, JSON.stringify(result));
    } catch (error) {
      console.warn('Failed to cache service types with route pricing:', error);
    }

    return result;
  }

  static async createCity(data: Omit<City, 'id'>): Promise<City> {
    const city = await prisma.$queryRaw<City[]>`
      INSERT INTO cities (name, country, isActive)
      VALUES (${data.name}, ${data.country}, ${data.isActive})
      RETURNING id, name, country, isActive
    `;

    if (!city[0]) {
      throw new Error('Failed to create city');
    }

    await this.invalidateCityCache();

    return city[0];
  }

  static async updateCity(id: string, data: Partial<Omit<City, 'id'>>): Promise<City> {
    const city = await prisma.$queryRaw<City[]>`
      UPDATE cities 
      SET 
        name = COALESCE(${data.name || null}, name),
        country = COALESCE(${data.country || null}, country),
        isActive = COALESCE(${data.isActive !== undefined ? data.isActive : null}, isActive)
      WHERE id = ${id}
      RETURNING id, name, country, isActive
    `;

    if (!city[0]) {
      throw new Error('City not found or update failed');
    }

    await this.invalidateCityCache();

    return city[0];
  }

  static async deleteCity(id: string): Promise<void> {
    await prisma.$queryRaw`
      DELETE FROM cities WHERE id = ${id}
    `;

    await this.invalidateCityCache();
  }

  static async createRoutePricing(data: Omit<RoutePricing, 'id'>): Promise<RoutePricing> {
    const pricing = await prisma.$queryRaw<RoutePricing[]>`
      INSERT INTO route_pricings (fromCityId, toCityId, basePrice, distance, estimatedDuration)
      VALUES (${data.fromCityId}, ${data.toCityId}, ${data.basePrice}, ${data.distance}, ${data.estimatedDuration})
      RETURNING id, fromCityId, toCityId, basePrice, distance, estimatedDuration
    `;

    if (!pricing[0]) {
      throw new Error('Failed to create route pricing');
    }

    await this.invalidateRoutePricingCache(data.fromCityId, data.toCityId);

    return pricing[0];
  }

  static async updateRoutePricing(id: string, data: Partial<Omit<RoutePricing, 'id'>>): Promise<RoutePricing> {
    const existingPricing = await prisma.$queryRaw<RoutePricing[]>`
      SELECT fromCityId, toCityId FROM route_pricings WHERE id = ${id} LIMIT 1
    `;

    if (!existingPricing[0]) {
      throw new Error('Route pricing not found');
    }

    const pricing = await prisma.$queryRaw<RoutePricing[]>`
      UPDATE route_pricings 
      SET 
        basePrice = COALESCE(${data.basePrice || null}, basePrice),
        distance = COALESCE(${data.distance || null}, distance),
        estimatedDuration = COALESCE(${data.estimatedDuration || null}, estimatedDuration)
      WHERE id = ${id}
      RETURNING id, fromCityId, toCityId, basePrice, distance, estimatedDuration
    `;

    if (!pricing[0]) {
      throw new Error('Route pricing not found');
    }

    await this.invalidateRoutePricingCache(existingPricing[0].fromCityId, existingPricing[0].toCityId);

    return pricing[0];
  }

  private static calculateAdjustedPrice(basePrice: number, distance: number, routeBasePrice: number): number {
    // Simple pricing algorithm: base price + distance factor
    const distanceFactor = distance / 100; // per 100km
    const routeMultiplier = routeBasePrice / 100; // route base price as multiplier
    return basePrice + (distanceFactor * routeMultiplier);
  }

  private static async invalidateCityCache(): Promise<void> {
    try {
      await redis.del(this.CACHE_KEYS.CITIES);
      await redis.del(this.CACHE_KEYS.ACTIVE_CITIES);
    } catch (error) {
      console.warn('Failed to invalidate city cache:', error);
    }
  }

  private static async invalidateRoutePricingCache(fromCityId: string, toCityId: string): Promise<void> {
    try {
      await redis.del(`${this.CACHE_KEYS.ROUTE_PRICING}${fromCityId}:${toCityId}`);
      await redis.del(`${this.CACHE_KEYS.ROUTE_PRICING}${toCityId}:${fromCityId}`);
      
      // Invalidate service types with route pricing cache
      const pattern = `${this.CACHE_KEYS.SERVICE_TYPES}route:${fromCityId}:*`;
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (error) {
      console.warn('Failed to invalidate route pricing cache:', error);
    }
  }

  static async closeRedisConnection(): Promise<void> {
    try {
      await redis.quit();
    } catch (error) {
      console.warn('Error closing Redis connection:', error);
    }
  }
}
