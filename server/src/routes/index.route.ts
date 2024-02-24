import { Router } from 'express';

import hotelRoute from './hotel.route';
import reservationRoute from './reservation.route';

const router = Router();

router.use("/hotels", hotelRoute);
router.use("/reservations", reservationRoute);


export default router;