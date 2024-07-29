import mongoose, { Document, Schema } from "mongoose";

interface LocationDocument extends Document {
    id: string;
    locationName: string;
    mainImage: string;
    description: string;
    images: string[];
    videos: string[];
    locationFacts: string[];
}

const LocationSchema = new Schema<LocationDocument>({
    id: { type: String, required: true, unique: true },
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


const LocationModel = mongoose.model<LocationDocument>("locations", LocationSchema);
export { LocationDocument, LocationModel };