"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_controller_1 = require("../controllers/location.controller");
const router = (0, express_1.Router)();
router.get('/locations', location_controller_1.getAllLocations);
router.get('/locations/:id', location_controller_1.getSingleLocation);
router.post('/locations/add', location_controller_1.addLocation);
exports.default = router;
