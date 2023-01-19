import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {dropToken, getToken} from '../../../../../../shared/lib/token/token';
import {HttpErrorMessage} from '../../../../../../shared/http-client/http-error-message';

export const Logout = createAsyncThunk<void, undefined, {rejectValue: string}>(
  'LOGOUT',
  async (arg, thunkAPI) => {
    try {
      await axios.delete(
        'https://grading.design.pages.academy/escape-room/logout',
        {headers: {'x-token': getToken()}});
      dropToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(HttpErrorMessage.ON_LOGOUT_REJECTED);
    }
  }
);
