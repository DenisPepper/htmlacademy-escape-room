import { createSelector } from '@reduxjs/toolkit';
import {getBooking} from '../get-booking/get-booking';
import {BookingSchema} from '../../types/booking-schema';

export const GetBookingDate = createSelector(getBooking, (booking: BookingSchema) => booking.date);
