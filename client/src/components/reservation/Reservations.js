// src/Reservations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Reserations.css';

const Reservations = () => {

    // const navigate = useNavigate();
    const { reservationId } = useParams();
    const [reservationData, setReservationData] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/reservations/${reservationId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log("response.data", response.data);
                setReservationData(response.data);
            } catch (error) {
                console.error('Error fetching reservation data:', error);
                // Optionally, you can handle errors or redirect to another page
            }
        };

        fetchData();
    }, [reservationId]);

    function formatDate(inputDate) {
        // const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(inputDate);

        const day = date.toLocaleString('en-US', { day: 'numeric', timeZone: 'UTC' });
        const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
        const year = date.toLocaleString('en-US', { year: 'numeric', timeZone: 'UTC' });

        return `${day} ${month} ${year}`;
    }

    function countDaysBetweenDates(checkInDate, checkOutDate) {
        const startDate = new Date(checkInDate);
        const endDate = new Date(checkOutDate);
      
        // Calculate the difference in milliseconds
        const timeDifference = endDate - startDate;
      
        // Calculate the number of days by dividing milliseconds by the number of milliseconds in a day
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      
        // Round the result to handle potential daylight saving time issues
        return Math.round(daysDifference);
      }

      
    function calculatePrice(checkInDate, checkOutDate, price) {
        const days = countDaysBetweenDates(checkInDate, checkOutDate);
        return days * price;
    }

    return (
        <div className="center-container">
            <div className="reservation-card">
                <h2>Reservation Details</h2>
                {reservationData ? (
                    <div className="reservation-details">
                        <p><strong>Hotel Name:</strong>  {reservationData.hotelId.name}</p>
                        <p><strong>Hotel Location:</strong>  {reservationData.hotelId.location}</p>
                        <p><strong>Guest Name:</strong>  {reservationData.guestName}</p>
                        <p><strong>Check-in Date:</strong> {formatDate(reservationData.checkInDate)}</p>
                        <p><strong>Check-out Date:</strong> {formatDate(reservationData.checkOutDate)}</p>
                        <p><strong>Total Cost:</strong> ₹ {calculatePrice(reservationData.checkInDate, reservationData.checkOutDate, reservationData.hotelId.pricePerNight)}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

                <Link to="/" className="back-link">Back to Hotel List</Link>
            </div>
        </div>
    );
};

export default Reservations;
