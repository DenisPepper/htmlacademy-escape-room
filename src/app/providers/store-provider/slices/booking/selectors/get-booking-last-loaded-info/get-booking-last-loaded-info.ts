import { createSelector } from '@reduxjs/toolkit';
import {getBooking} from '../get-booking/get-booking';
import {BookingSchema} from '../../types/booking-schema';

export const GetBookingLastLoadedInfo = createSelector(getBooking, (booking: BookingSchema) => booking.lastLoadedBookingInfo);
