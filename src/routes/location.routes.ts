import { Router } from 'express';
import { getAllLocations } from '../controllers/location.controller';

const router = Router();

router.get('/locations', getAllLocations);
router.get('/locations/:id', getAllLocations);


export default router;
