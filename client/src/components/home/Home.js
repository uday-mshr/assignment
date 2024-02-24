// src/Homepage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './Home.css';

Modal.setAppElement('#root');

const Home = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState({ location: '', minPrice: '', maxPrice: '' });
  const [bookingDetails, setBookingDetails] = useState({
    hotelId: '',
    guestName: '',
    checkInDate: '',
    checkOutDate: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/hotels/location/');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchHotels();
    fetchLocations();
  }, []);

  const handleFilter = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/hotels', {
        params: {
          location: filter.location,
          minPrice: filter.minPrice,
          maxPrice: filter.maxPrice,
        },
      });
      setHotels(response.data);
    } catch (error) {
      console.error('Error applying filter:', error);
    }
  };

  const handleBook = (hotelId) => {
    setBookingDetails({ ...bookingDetails, hotelId: hotelId });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    setIsModalOpen(false);
    postReservation();
  };

  const postReservation = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/reservations', {
        hotelId: bookingDetails.hotelId,
        guestName: bookingDetails.guestName,
        checkInDate: bookingDetails.checkInDate,
        checkOutDate: bookingDetails.checkOutDate,
      });

      console.log('Reservation Successful:', response.data);
      // Optionally, you can perform additional actions after a successful reservation

      navigate(`/reservations/${response.data._id}`); 
    } catch (error) {
      console.error('Error booking hotel:', error);
    }
  };

  return (
    <div className="home-container">
      <section className="filter-section">
        <h2>Filter Hotels</h2>
        <div className="filter-form">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={filter.minPrice}
            onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
          />

          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={filter.maxPrice}
            onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
          />

          <button onClick={handleFilter}>Apply Filters</button>
        </div>
      </section>
      <section className="hotel-list-section">
        <h2>Hotel List</h2>
        <div className="hotel-list">
          {hotels.map((hotel) => (
            <div key={hotel._id} className="hotel-card">
              <img src={`https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=`} alt={hotel.name} />
              <div className="hotel-details">
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <p> ₹ {hotel.pricePerNight}</p>
                <button onClick={() => handleBook(hotel._id)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Booking Modal"
        className="booking-modal"
      >
        <h2>Book Now</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="guestName">Guest Name:</label>
          <input
            type="text"
            id="guestName"
            value={bookingDetails.guestName}
            onChange={(e) => setBookingDetails({ ...bookingDetails, guestName: e.target.value })}
            required
          />

          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={(e) => setBookingDetails({ ...bookingDetails, checkInDate: e.target.value })}
            required
          />

          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={bookingDetails.checkOutDate}
            onChange={(e) => setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value })}
            required
          />

          <button type="submit">Book</button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
