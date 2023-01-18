import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getToken} from '../../../../../../shared/lib/token/token';
import {LoginData} from '../types/auth-schema';
import {HttpErrorMessage} from '../../../../../../shared/http-client/http-client';

export const CheckAuth = createAsyncThunk<LoginData, undefined, {rejectValue: string}>(
  'CHECK_AUTH',
  async (_args, thunkAPI) => {
    try {
      const response = await axios.get<LoginData>(
        'https://grading.design.pages.academy/escape-room/login',
        {headers: {'x-token': getToken()}});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(HttpErrorMessage.ON_CHECK_AUTH_REJECTED);
    }
  }
);
