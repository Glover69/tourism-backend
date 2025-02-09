"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const LocationSchema = new mongoose_1.Schema({
    _id: { type: String, required: true }, // Use your custom id as the _id field
    locationName: { type: String, required: true },
    mainImage: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    videos: { type: [String], required: true },
    locationFacts: { type: [String], required: true }
});
// Add the toJSON transformation
LocationSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret._id = ret.id;
        delete ret._id;
        delete ret.__v;
    }
});
const LocationModel = mongoose_1.default.model("locations", LocationSchema);
exports.LocationModel = LocationModel;
