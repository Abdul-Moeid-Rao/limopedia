import { Router, Request, Response } from 'express';
import { CityService } from '../src/city';
import { optionalAuthMiddleware, adminMiddleware, AuthenticatedRequest, AdminRequest } from '../src/middleware/auth';

const router = Router();

// Get all cities
router.get('/', optionalAuthMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const includeInactive = req.query.includeInactive === 'true';
    
    const cities = includeInactive 
      ? await CityService.getAllCities()
      : await CityService.getActiveCities();

    res.json({
      message: 'Cities retrieved successfully',
      data: cities
    });
  } catch (error) {
    console.error('Get cities error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve cities',
      message: 'Internal server error'
    });
  }
});

// Get all service types
router.get('/service-types', optionalAuthMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const includeInactive = req.query.includeInactive === 'true';
    
    const serviceTypes = includeInactive 
      ? await CityService.getAllServiceTypes()
      : await CityService.getActiveServiceTypes();

    res.json({
      message: 'Service types retrieved successfully',
      data: serviceTypes
    });
  } catch (error) {
    console.error('Get service types error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve service types',
      message: 'Internal server error'
    });
  }
});

// Get route pricing between two cities
router.get('/route-pricing/:fromCityId/:toCityId', optionalAuthMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { fromCityId, toCityId } = req.params;

    if (!fromCityId || !toCityId) {
      return res.status(400).json({ 
        error: 'From city ID and to city ID are required' 
      });
    }

    const [routePricing, serviceTypesWithPricing] = await Promise.all([
      CityService.getRoutePricing(fromCityId as string, toCityId as string),
      CityService.getServiceTypesWithRoutePricing(fromCityId as string, toCityId as string)
    ]);

    res.json({
      message: 'Route pricing retrieved successfully',
      data: {
        routePricing,
        serviceTypes: serviceTypesWithPricing
      }
    });
  } catch (error) {
    console.error('Get route pricing error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve route pricing',
      message: 'Internal server error'
    });
  }
});

// Get service types with route pricing
router.get('/service-types/:fromCityId/:toCityId', optionalAuthMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { fromCityId, toCityId } = req.params;

    if (!fromCityId || !toCityId) {
      return res.status(400).json({ 
        error: 'From city ID and to city ID are required' 
      });
    }

    const serviceTypes = await CityService.getServiceTypesWithRoutePricing(
      fromCityId as string, 
      toCityId as string
    );

    res.json({
      message: 'Service types with pricing retrieved successfully',
      data: serviceTypes
    });
  } catch (error) {
    console.error('Get service types with pricing error:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve service types with pricing',
      message: 'Internal server error'
    });
  }
});

// Create new city (admin only)
router.post('/', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { name, country, isActive = true } = req.body;

    if (!name || !country) {
      return res.status(400).json({ 
        error: 'City name and country are required' 
      });
    }

    const city = await CityService.createCity({ name, country, isActive });

    res.status(201).json({
      message: 'City created successfully',
      data: city
    });
  } catch (error) {
    console.error('Create city error:', error);
    res.status(500).json({ 
      error: 'Failed to create city',
      message: 'Internal server error'
    });
  }
});

// Update city (admin only)
router.put('/:cityId', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { cityId } = req.params;
    const { name, country, isActive } = req.body;

    if (!cityId) {
      return res.status(400).json({ 
        error: 'City ID is required' 
      });
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (country !== undefined) updateData.country = country;
    if (isActive !== undefined) updateData.isActive = isActive;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ 
        error: 'At least one field must be provided for update' 
      });
    }

    const city = await CityService.updateCity(cityId as string, updateData);

    res.json({
      message: 'City updated successfully',
      data: city
    });
  } catch (error) {
    console.error('Update city error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'City not found or update failed') {
        return res.status(404).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to update city',
      message: 'Internal server error'
    });
  }
});

// Delete city (admin only)
router.delete('/:cityId', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { cityId } = req.params;

    if (!cityId) {
      return res.status(400).json({ 
        error: 'City ID is required' 
      });
    }

    await CityService.deleteCity(cityId as string);

    res.json({
      message: 'City deleted successfully'
    });
  } catch (error) {
    console.error('Delete city error:', error);
    res.status(500).json({ 
      error: 'Failed to delete city',
      message: 'Internal server error'
    });
  }
});

// Create route pricing (admin only)
router.post('/route-pricing', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { fromCityId, toCityId, basePrice, distance, estimatedDuration } = req.body;

    if (!fromCityId || !toCityId || basePrice === undefined || distance === undefined || estimatedDuration === undefined) {
      return res.status(400).json({ 
        error: 'From city ID, to city ID, base price, distance, and estimated duration are required' 
      });
    }

    if (typeof basePrice !== 'number' || basePrice < 0) {
      return res.status(400).json({ 
        error: 'Base price must be a positive number' 
      });
    }

    if (typeof distance !== 'number' || distance < 0) {
      return res.status(400).json({ 
        error: 'Distance must be a positive number' 
      });
    }

    if (typeof estimatedDuration !== 'number' || estimatedDuration < 0) {
      return res.status(400).json({ 
        error: 'Estimated duration must be a positive number' 
      });
    }

    const routePricing = await CityService.createRoutePricing({
      fromCityId,
      toCityId,
      basePrice,
      distance,
      estimatedDuration
    });

    res.status(201).json({
      message: 'Route pricing created successfully',
      data: routePricing
    });
  } catch (error) {
    console.error('Create route pricing error:', error);
    res.status(500).json({ 
      error: 'Failed to create route pricing',
      message: 'Internal server error'
    });
  }
});

// Update route pricing (admin only)
router.put('/route-pricing/:pricingId', adminMiddleware, async (req: AdminRequest, res: Response) => {
  try {
    const { pricingId } = req.params;
    const { basePrice, distance, estimatedDuration } = req.body;

    if (!pricingId) {
      return res.status(400).json({ 
        error: 'Pricing ID is required' 
      });
    }

    const updateData: any = {};
    if (basePrice !== undefined) {
      if (typeof basePrice !== 'number' || basePrice < 0) {
        return res.status(400).json({ 
          error: 'Base price must be a positive number' 
        });
      }
      updateData.basePrice = basePrice;
    }
    
    if (distance !== undefined) {
      if (typeof distance !== 'number' || distance < 0) {
        return res.status(400).json({ 
          error: 'Distance must be a positive number' 
        });
      }
      updateData.distance = distance;
    }
    
    if (estimatedDuration !== undefined) {
      if (typeof estimatedDuration !== 'number' || estimatedDuration < 0) {
        return res.status(400).json({ 
          error: 'Estimated duration must be a positive number' 
        });
      }
      updateData.estimatedDuration = estimatedDuration;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ 
        error: 'At least one field must be provided for update' 
      });
    }

    const routePricing = await CityService.updateRoutePricing(pricingId as string, updateData);

    res.json({
      message: 'Route pricing updated successfully',
      data: routePricing
    });
  } catch (error) {
    console.error('Update route pricing error:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Route pricing not found') {
        return res.status(404).json({ error: error.message });
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to update route pricing',
      message: 'Internal server error'
    });
  }
});

export default router;
