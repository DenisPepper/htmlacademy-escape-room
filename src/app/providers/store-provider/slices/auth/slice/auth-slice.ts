import { createSlice } from '@reduxjs/toolkit';
import {AuthSchema} from '../types/auth-schema';
import {Login} from '../services/login';

const initialState:AuthSchema = {
  authorizationStatus: 'UNKNOWN',
  userName: ''
};

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(Login.pending, (state, action) => {
        state.authorizationStatus = 'UNKNOWN';
        state.userName = '';
      })

      .addCase(Login.fulfilled, (state, action) => {
        state.authorizationStatus = 'YES';
        state.userName = action.payload.email;
      })

      .addCase(Login.rejected, (state, action) => {
        state.authorizationStatus = 'NO';
        state.userName = '';
      });
  },
});

export const { actions: authActions } = AuthSlice;
export const { reducer: authReducer } = AuthSlice;
