import {BookingSchema} from '../types/booking-schema';
import {createSlice} from '@reduxjs/toolkit';
import {FetchBookingInfoById} from '../services/fetch-booking-info-by-id';

const initialState: BookingSchema = {
  loading: false,
  lastLoadedBookingInfo: null,
};

export const BookingSlice = createSlice( {
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchBookingInfoById.fulfilled, (state, action) => {
        state.lastLoadedBookingInfo = action.payload;
      });
  }
});

export const { actions: bookingActions } = BookingSlice;
export const { reducer: bookingReducer } = BookingSlice;
