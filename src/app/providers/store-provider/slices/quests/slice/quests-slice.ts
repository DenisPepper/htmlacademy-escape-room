import {QuestsSchema} from '../types/quests-schema';
import {createSlice} from '@reduxjs/toolkit';
import {FetchAllQuests} from '../services/fetch-all-quests';
import {FetchQuestById} from '../services/fetch-quest-by-id';


const initialState: QuestsSchema = {
  list: [],
  lastLoaded: null,
  loading: false,
};

export const QuestsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchAllQuests.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(FetchQuestById.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchQuestById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(FetchQuestById.fulfilled, (state, action) => {
        state.lastLoaded = action.payload;
        state.loading = false;
      });
  }
});

export const { actions: questsActions } = QuestsSlice;
export const { reducer: questsReducer } = QuestsSlice;
