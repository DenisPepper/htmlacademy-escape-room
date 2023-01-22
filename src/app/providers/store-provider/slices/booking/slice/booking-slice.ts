import {BookingSchema} from '../types/booking-schema';
import {createSlice} from '@reduxjs/toolkit';

const initialState: BookingSchema = {
  loading: false,
  lastLoadedBookingInfo: null,
};

export const BookingSlice = createSlice( {
  name: 'booking',
  initialState,
  reducers: {},
});

export const { actions: bookingActions } = BookingSlice;
export const { reducer: bookingReducer } = BookingSlice;

/*

  extraReducers(builder) {
  builder
    .addCase(________.fulfilled, (state, action) => {
      state.list = action.payload;
    })

    });
}
 */
