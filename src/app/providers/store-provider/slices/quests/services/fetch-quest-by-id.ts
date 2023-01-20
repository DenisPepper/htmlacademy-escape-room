import {createAsyncThunk} from '@reduxjs/toolkit';
import {QuestInfo} from '../../../../../../shared/types/quest-types';
import {HttpErrorMessage as errors} from '../../../../../../shared/http-client/http-error-message';
import axios from 'axios';

interface FetchQuestByIdProps {
  id: number;
}

export const FetchQuestById = createAsyncThunk<QuestInfo, FetchQuestByIdProps, {rejectValue: string}>(
  'FETCH_QUEST_BY_ID',
  async (FetchQuestByIdProps, thunkAPI) => {
    const {id} = FetchQuestByIdProps;
    try {
      const response = await axios.get<QuestInfo>(
        `https://grading.design.pages.academy/escape-room/quest/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errors.ON_FETCH_QUEST_BY_ID_REJECTED);
    }
  }
);
