import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './config/store';
import { StateSchema } from './config/state-schema';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export default function StoreProvider(props: StoreProviderProps): JSX.Element {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
}
