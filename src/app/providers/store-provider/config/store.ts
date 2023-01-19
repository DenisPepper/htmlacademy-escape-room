import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {authReducer} from '../slices/auth/slice/auth-slice';
import {questsReducer} from '../slices/quests/slice/quests-slice';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    quests: questsReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
