import { Request, Response } from "express";
import { LocationModel } from '../models/location.models';


// GET all products
export const getAllLocations = async (req: Request, res: Response) => {
    try {
      const locations = await LocationModel.find();
      res.json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET a location based on its ID
export const getSingleLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const location = await LocationModel.findById(id);
        if (!location) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.json(location);
    } catch (error) {
        console.error('Error fetching location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}