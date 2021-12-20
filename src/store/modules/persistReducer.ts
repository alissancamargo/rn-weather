import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'wit',
      storage: AsyncStorage,
      whitelist: ['weather'],
    },
    reducers,
  );
  return persistedReducer;
};
