import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {authReducer} from '../slices/auth/slice/auth-slice';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
