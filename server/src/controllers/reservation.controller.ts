import { Request, Response } from 'express';
import ReservationService from '../services/reservation.service';

class ReservationController {
  static async getAllReservations(req: Request, res: Response) {
    try {
      const reservations = await ReservationService.getAllReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getReservationById(req: Request, res: Response) {
    const { reservationId } = req.params;
    try {
      const reservation = await ReservationService.getReservationById(reservationId);
      if (!reservation) {
        return res.status(404).json({ error: 'Reservation not found' });
      }
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async createReservation(req: Request, res: Response) {
    const reservationData = req.body;
    try {
      const createdReservation = await ReservationService.createReservation(reservationData);
      res.status(201).json(createdReservation);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateReservation(req: Request, res: Response) {
    const { reservationId } = req.params;
    const updatedData = req.body;
    try {
      const updatedReservation = await ReservationService.updateReservation(reservationId, updatedData);
      if (!updatedReservation) {
        return res.status(404).json({ error: 'Reservation not found' });
      }
      res.json(updatedReservation);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteReservation(req: Request, res: Response) {
    const { reservationId } = req.params;
    try {
      const deletedReservation = await ReservationService.deleteReservation(reservationId);
      if (!deletedReservation) {
        return res.status(404).json({ error: 'Reservation not found' });
      }
      res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ReservationController;
