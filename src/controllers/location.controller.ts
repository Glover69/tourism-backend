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
        // const { id } = req.params;
        const id = req.params.id;

        const query = { id: id };
        const location = await LocationModel.findOne(query);
        if (!location) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.json(location);
    } catch (error) {
        console.error('Error fetching location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// ADD a location
export const addLocation = async (req: Request, res: Response) => {
    try {
        const { id, locationName, mainImage, description, images, videos, locationFacts } = req.body;

        if ( !id || !locationName || !mainImage || !description || !images || !videos || !locationFacts) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newLocation = new LocationModel({
            _id: id,
            locationName,
            mainImage,
            description,
            images,
            videos,
            locationFacts,
        });

        const savedLocation = await newLocation.save();

        res.status(201).json(savedLocation);
    } catch (error) {
        console.error('Error adding location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
