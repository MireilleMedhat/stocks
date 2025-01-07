import { configureStore } from '@reduxjs/toolkit';
import { stockApi } from './stockApi';

const store = configureStore({
  reducer: {
    [stockApi.reducerPath]: stockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stockApi.middleware),
});

export default store;
