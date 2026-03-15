import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

// Get all destinations (with optional filtering)
router.get('/destinations', async (req, res) => {
  try {
    const { category, region, search } = req.query;
    
    // Build query object
    let query = {};
    
    if (category && category !== 'All') {
      query.category = category;
    }
    
    if (region && region !== 'All') {
      query.region = region;
    }

    if (search) {
      query.title = { $regex: search, $options: 'i' }; // Case-insensitive search
    }

    const destinations = await Destination.find(query);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destinations', error: error.message });
  }
});

// Get a single destination by ID
router.get('/destinations/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination', error: error.message });
  }
});

export default router;
