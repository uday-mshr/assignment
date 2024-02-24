import express from 'express';
import HotelController from '../controllers/hotel.controller';


const router = express.Router();

router.get('/', HotelController.getAllHotels);
router.get('/location/', HotelController.getAllLocations);
// router.get('/filter', HotelController.filterHotels);
// router.get('/:hotelId', HotelController.getHotelById);

router.post('/', HotelController.createHotel);
export default router;