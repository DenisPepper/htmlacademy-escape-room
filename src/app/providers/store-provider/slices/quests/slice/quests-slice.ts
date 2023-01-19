import {QuestsSchema} from '../types/quests-schema';
import {createSlice} from '@reduxjs/toolkit';
import {FetchQuests} from '../services/fetch-quests';

const initialState: QuestsSchema = {
  list: []
};

export const QuestsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchQuests.fulfilled, (state, action) => {
        state.list = action.payload;
      }
      );
  }
});

export const { actions: questsActions } = QuestsSlice;
export const { reducer: questsReducer } = QuestsSlice;
