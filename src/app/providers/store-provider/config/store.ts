import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {authReducer} from '../slices/auth/slice/auth-slice';
import {questsReducer} from '../slices/quests/slice/quests-slice';
import {bookingReducer} from '../slices/booking/slice/booking-slice';


export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    quests: questsReducer,
    booking: bookingReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
