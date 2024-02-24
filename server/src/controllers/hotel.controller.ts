import { Request, Response } from 'express';
import HotelService from '../services/hotel.service';

class HotelController {
    static async getAllLocations(req: Request, res: Response) {
        try {
            const hotels = await HotelService.getAllLocations();
            res.json(hotels);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getAllHotels(req: Request, res: Response) {
        try {
            const { location , minPrice, maxPrice } = req.query;

            const hotels =await HotelService.getAllHotels(
                location  ? String(location) : '' ,
                isNaN(Number(minPrice)) ? 0 : Number(minPrice),
                isNaN(Number(maxPrice)) ? 0 : Number(maxPrice),
            );
            console.log("hotels", hotels);
            res.json(hotels);
        } catch (error) {
            console.log("error", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getHotelById(req: Request, res: Response) {
        const { hotelId } = req.params;
        try {
            const hotel = await HotelService.getHotelById(hotelId);
            if (!hotel) {
                return res.status(404).json({ error: 'Hotel not found' });
            }
            res.json(hotel);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async filterHotels(req: Request, res: Response) {
        const { location, minPrice, maxPrice } = req.query as {
            location: string;
            minPrice: string;
            maxPrice: string;
        };
        try {
            const filteredHotels = await HotelService.filterHotels(location, minPrice, maxPrice);
            res.json(filteredHotels);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async createHotel(req: Request, res: Response) {
        const hotelData = req.body;

        try {
            const createdHotel = await HotelService.createHotel(hotelData);
            res.status(201).json(createdHotel);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default HotelController;
