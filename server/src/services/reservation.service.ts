import ReservationModel from '../models/reservation.model';

class ReservationService {
  static getAllReservations() {
    return ReservationModel.find().exec();
  }

  static getReservationById(reservationId: string) {
    return ReservationModel.findById(reservationId).populate('hotelId').exec();
  }

  static createReservation(data: any) {
    return ReservationModel.create(data);
  }

  static updateReservation(reservationId: string, data: any) {
    return ReservationModel.findByIdAndUpdate(reservationId, data, { new: true }).exec();
  }

  static deleteReservation(reservationId: string) {
    return ReservationModel.findByIdAndDelete(reservationId).exec();
  }
}

export default ReservationService;
