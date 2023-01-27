/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FetchedBookings } from '../../redux/bookings/bookings';
import CardBooking from '../CardBooking/CardBooking';
import './ListBookings.css';

const ListBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.data);
  useEffect(() => {
    dispatch(FetchedBookings());
  }, [dispatch]);
  return (
    <div className="container-booking">
      <div className="booking-header">
        <p className="th">Animal Name</p>
        <p className="th">Animal Type</p>
        <p className="th">Checking In</p>
        <p className="th">Checking Out</p>
      </div>
      {bookings.map((booking) => (
        <CardBooking key={booking.id} booking={booking} />
      ))}
    </div>
  );
};

export default ListBookings;
