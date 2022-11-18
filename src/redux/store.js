import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { financeReducer } from './finance/finance-slice';
import { sessionReducer } from './session/session-slice';

const persistSession = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    session: persistReducer(persistSession, sessionReducer),
    finance: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistedStore = persistStore(store);
export { store, persistedStore };
