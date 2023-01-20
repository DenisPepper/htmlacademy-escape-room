import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {HttpErrorMessage as errors} from '../../../../../../shared/http-client/http-error-message';
import {QuestReducedInfo} from '../../../../../../shared/types/quest-types';

export const FetchAllQuests = createAsyncThunk<QuestReducedInfo[], undefined, {rejectValue: string}>(
  'FETCH_ALL_QUESTS',
  async (_args, thunkAPI) => {
    try {
      const response = await axios.get<QuestReducedInfo[]>(
        'https://grading.design.pages.academy/escape-room/quest'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errors.ON_FETCH_ALL_QUESTS_REJECTED);
    }
  }
);
