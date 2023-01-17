import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {authReducer} from '../slices/auth/slice/auth-slice';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
