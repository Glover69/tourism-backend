"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocation = exports.getSingleLocation = exports.getAllLocations = void 0;
const location_models_1 = require("../models/location.models");
// GET all products
const getAllLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield location_models_1.LocationModel.find();
        res.json(locations);
    }
    catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllLocations = getAllLocations;
// GET a location based on its ID
const getSingleLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { id } = req.params;
        const id = req.params.id;
        const query = { id: id };
        const location = yield location_models_1.LocationModel.findOne(query);
        if (!location) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.json(location);
    }
    catch (error) {
        console.error('Error fetching location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getSingleLocation = getSingleLocation;
// ADD a location
const addLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, locationName, mainImage, description, images, videos, locationFacts } = req.body;
        if (!id || !locationName || !mainImage || !description || !images || !videos || !locationFacts) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newLocation = new location_models_1.LocationModel({
            _id: id,
            locationName,
            mainImage,
            description,
            images,
            videos,
            locationFacts,
        });
        const savedLocation = yield newLocation.save();
        res.status(201).json(savedLocation);
    }
    catch (error) {
        console.error('Error adding location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.addLocation = addLocation;
