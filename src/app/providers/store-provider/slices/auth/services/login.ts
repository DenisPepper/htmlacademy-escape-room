import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {LoginData} from '../types/auth-schema';

export interface LoginProps {
  email: string;
  password: string;
}

export const Login = createAsyncThunk<LoginData, LoginProps>(
  'LOGIN',
  async (args, thunkAPI) => {
    const response = await axios.post<LoginData>('https://grading.design.pages.academy/escape-room/login', args);
    return response.data;
  }
);
