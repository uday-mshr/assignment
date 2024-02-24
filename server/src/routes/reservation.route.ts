import express from 'express';
import ReservationController from '../controllers/reservation.controller';

const router = express.Router();

router.get('/', ReservationController.getAllReservations);
router.get('/:reservationId', ReservationController.getReservationById);
router.post('/', ReservationController.createReservation);
router.put('/:reservationId', ReservationController.updateReservation);
router.delete('/:reservationId', ReservationController.deleteReservation);

export default router;
