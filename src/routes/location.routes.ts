import { Router } from 'express';
import { addLocation, getAllLocations, getSingleLocation } from '../controllers/location.controller';

const router = Router();

router.get('/locations', getAllLocations);
router.get('/locations/:id', getSingleLocation);
router.post('/locations/add', addLocation);



export default router;
