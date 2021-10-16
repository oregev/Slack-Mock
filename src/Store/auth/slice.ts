import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import imageUrl from '../../Assets/slack-icon.png';

export interface UserData {
  id: number;
  name: string;
  image: string;
}

export interface UserState {
  user: UserData;
}

const initialState: UserState = {
  user: {
    id: 0,
    name: 'Big Daddy',
    image: imageUrl,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState): UserData => state.auth.user;

export default authSlice.reducer;
