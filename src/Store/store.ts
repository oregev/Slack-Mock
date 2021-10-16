// Core
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// Slice
import appReducer from './app/slice';
import authReducer from './auth/slice';
import roomReducer from './room/slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    room: roomReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
