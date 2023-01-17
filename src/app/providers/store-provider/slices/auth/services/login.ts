import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {LoginData} from '../types/auth-schema';
import {saveToken} from '../../../../../../shared/lib/token/token';
import {HttpErrorMessage} from '../../../../../../shared/http-client/http-client';

export interface LoginProps {
  email: string;
  password: string;
}

export const Login = createAsyncThunk<LoginData, LoginProps, {rejectValue: string}>(
  'LOGIN',
  async (args, thunkAPI) => {
    try {
      const response = await axios.post<LoginData>('https://grading.design.pages.academy/escape-room/login', args);
      saveToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(HttpErrorMessage.ON_LOGIN_REJECTED);
    }
  }
);
