// Firebase
import { DocumentData } from 'firebase/firestore';
// Redux
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AppState {
  channels: DocumentData[];
  toster: string | null;
}

const initialState: AppState = {
  channels: [],
  toster: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setToster: (state, action) => {
      state.toster = action.payload;
    },
    resetToster: (state) => {
      state.toster = null;
    },
  },
});

export const { setChannels, setToster, resetToster } = appSlice.actions;

export const getChannels = (state: RootState): DocumentData[] | null => state.app.channels;
export const getToster = (state: RootState): string | null => state.app.toster;

export default appSlice.reducer;
