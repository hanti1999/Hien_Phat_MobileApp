import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/cartSlice';
import UserReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;