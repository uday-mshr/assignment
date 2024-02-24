import mongoose, { Schema, Document } from 'mongoose';

interface Hotel {
  name: string;
  location: string;
  pricePerNight: number;
  // Add more fields as needed
}

interface HotelDocument extends Hotel, Document {}

const hotelSchema: Schema<HotelDocument> = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  // Add more fields as needed
});

const HotelModel = mongoose.model<HotelDocument>('Hotel', hotelSchema);

export default HotelModel;
