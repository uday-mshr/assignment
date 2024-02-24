import HotelModel from '../models/hotel.model';

class HotelService {
  
  static getAllLocations() {
    return HotelModel.distinct('location');
  }
  static getAllHotels(location?: String, minPrice?: Number, maxPrice?: Number) {
    const filters: any = {};

    if (location && location.trim() !== '') {
        // Add location filter if provided and not empty
        filters.location = location.trim();
    }

    if (minPrice !== undefined && minPrice !== 0 && maxPrice !== undefined && maxPrice !== 0) {
        // Add price filter if both minPrice and maxPrice are provided
        filters.pricePerNight = {
            $gte: minPrice,
            $lte: maxPrice
        };
    }

    console.log("filters", filters);
    // Use the filters object in the find query
    return HotelModel.find(filters).exec();
  }

  static getHotelById(hotelId: string) {
    return HotelModel.findById(hotelId).exec();
  }

  static filterHotels(location: string, minPrice: string, maxPrice: string) {
    const query = {};
    // if (location) {
    //   query['location'] = location;
    // }
    // if (minPrice && maxPrice) {
    //   query['pricePerNight'] = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    // }
    return HotelModel.find(query).exec();
  }

  static createHotel(data: any) {
    return HotelModel.create(data);
  }
}

export default HotelService;
