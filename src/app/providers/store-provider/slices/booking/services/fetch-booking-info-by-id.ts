import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {QuestBookingInfo} from '../../../../../../shared/types/booking-types';
import {HttpErrorMessage} from '../../../../../../shared/http-client/http-error-message';
import {getToken} from '../../../../../../shared/lib/token/token';

interface FetchBookingInfoByIdProps {
  id: number;
}

export const FetchBookingInfoById = createAsyncThunk<QuestBookingInfo, FetchBookingInfoByIdProps, {rejectValue: string}>(
  'FETCH_BOOKING_INFO_BY_ID',
  async (args, thunkAPI) => {
    try {
      const response = await axios.get<QuestBookingInfo>(
        `https://grading.design.pages.academy/escape-room/quest/${args.id}/booking`,
        {headers: {'x-token': getToken()}},
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(HttpErrorMessage.ON_FETCH_BOOKING_INFO_BY_ID_REJECTED);
    }
  }
);


