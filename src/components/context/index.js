import { configureStore } from '@reduxjs/toolkit';
import heartSlice from './Heart/HeartSlice';
import cartSlice from './Cart/CartSlice';
import { api } from './api/api';
import AuthS from './slice/AuthSlice/AuthS';

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    auth: AuthS,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
