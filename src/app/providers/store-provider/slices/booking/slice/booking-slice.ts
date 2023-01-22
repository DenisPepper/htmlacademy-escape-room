import {BookingSchema} from '../types/booking-schema';
import {createSlice} from '@reduxjs/toolkit';
import {FetchBookingInfoById} from '../services/fetch-booking-info-by-id';

const initialState: BookingSchema = {
  isLoaded: false,
  lastLoadedBookingInfo: null,
};

export const BookingSlice = createSlice( {
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchBookingInfoById.pending, (state, action) => {
        state.isLoaded = false;
      })
      .addCase(FetchBookingInfoById.fulfilled, (state, action) => {
        state.lastLoadedBookingInfo = action.payload;
        state.isLoaded = true;
      })
      .addCase(FetchBookingInfoById.rejected, (state, action) => {
        state.isLoaded = false;
      });
  }
});

export const { actions: bookingActions } = BookingSlice;
export const { reducer: bookingReducer } = BookingSlice;
