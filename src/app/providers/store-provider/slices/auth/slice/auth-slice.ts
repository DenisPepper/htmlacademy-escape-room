import { createSlice } from '@reduxjs/toolkit';
import {AuthSchema} from '../types/auth-schema';
import {Login} from '../services/login';
import {Logout} from '../services/logout';

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
      .addCase(Login.fulfilled, (state, action) => {
        state.authorizationStatus = 'YES';
        state.userName = action.payload.email;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.authorizationStatus = 'NO';
        state.userName = '';
      });
  },
});

export const { actions: authActions } = AuthSlice;
export const { reducer: authReducer } = AuthSlice;
