import { DocumentData } from 'firebase/firestore';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface RoomState {
  id: string;
  name: string;
  messages: DocumentData[];
}

const initialState: RoomState = {
  id: '',
  name: '',
  messages: [],
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state: RoomState, action) => {
      state = action.payload;
    },
    setRoomId: (state: RoomState, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setRoomName: (state: RoomState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setRoomMessages: (state: RoomState, action: PayloadAction<DocumentData[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { setRoom, setRoomId, setRoomName, setRoomMessages } = roomSlice.actions;

export const selectRoom = (state: RootState): RoomState => state.room;
export const selectRoomId = (state: RootState): string => state.room.id;
export const selectRoomName = (state: RootState): string => state.room.name;
export const selectRoomMessages = (state: RootState): DocumentData[] => state.room.messages;

export default roomSlice.reducer;
