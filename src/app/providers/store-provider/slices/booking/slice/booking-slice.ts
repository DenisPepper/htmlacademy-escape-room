import {BookingSchema} from '../types/booking-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchBookingInfoById} from '../services/fetch-booking-info-by-id';
import {BookingDate} from '../../../../../../shared/types/booking-types';


const initialState: BookingSchema = {
  isLoaded: null,
  lastLoadedBookingInfo: null,
  date: null,
  time: null,
  contactPerson: null,
  phone: null,
  withChildren: null,
  peopleCount: null,
  locationId: null,
  questId: null,
  agree: null,
};

export const BookingSlice = createSlice( {
  name: 'booking',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<BookingDate>) => {
      state.date = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setContactPerson: (state, action: PayloadAction<string>) => {
      state.contactPerson = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setWithChildren: (state, action: PayloadAction<boolean>) => {
      state.withChildren = action.payload;
    },
    setPeopleCount: (state, action: PayloadAction<number>) => {
      state.peopleCount = action.payload;
    },
    setLocationID: (state, action: PayloadAction<number>) => {
      state.locationId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FetchBookingInfoById.pending, (state, action) => {
        state.isLoaded = false;
        state.questId = null;
      })
      .addCase(FetchBookingInfoById.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.lastLoadedBookingInfo = action.payload;
        state.date = null;
        state.time = null;
        state.contactPerson = null;
        state.phone = null;
        state.withChildren = null;
        state.peopleCount = null;
        state.locationId = null;
        state.agree = false;
        state.questId = action.payload.id;
      });
  }
});

export const { actions: bookingActions } = BookingSlice;
export const { reducer: bookingReducer } = BookingSlice;
