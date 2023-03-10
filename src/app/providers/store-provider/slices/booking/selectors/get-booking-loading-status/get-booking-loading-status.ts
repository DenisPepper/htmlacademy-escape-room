import { createSelector } from '@reduxjs/toolkit';
import {getBooking} from '../get-booking/get-booking';
import {BookingSchema} from '../../types/booking-schema';

export const GetBookingLoadingStatus = createSelector(getBooking, (booking: BookingSchema) => booking.isLoaded);
