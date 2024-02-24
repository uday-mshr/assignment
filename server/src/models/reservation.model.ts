import mongoose, { Schema, Document, Types } from 'mongoose';

interface Reservation {
  hotelId: Types.ObjectId;
  guestName: string;
  checkInDate: Date;
  checkOutDate: Date;
  // Add more fields as needed
}

interface ReservationDocument extends Reservation, Document {}

const reservationSchema: Schema<ReservationDocument> = new Schema({
  hotelId: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  guestName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  // Add more fields as needed
});

const ReservationModel = mongoose.model<ReservationDocument>('Reservation', reservationSchema);

export default ReservationModel;
