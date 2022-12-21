/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const configsSlice = createSlice({
  name: 'configs',
  initialState: {
    floor: 0,
    room: 0,
    bedId: '',
    userId: '',
  },
  reducers: {
    setFloor: (state, action) => {
      // state.floor = action.payload.floor;
    },
    setRoom: (state, action) => {
      // state.room = action.payload.room;
    },
    setBedId: (state, action) => {
      // state.bedId = action.payload.bedId;
    },
    setUserId: (state, action) => {
      // state.userId = action.payload.userId;
    },
    clear: (state) => {
      state.floor = 0;
      state.room = 0;
      state.bedId = '';
      state.userId = '';
    },
  },
});

// actions
export const { setFloor, setRoom, setBedId, setUserId, clear } = configsSlice.actions;

// reducer
export default configsSlice.reducer;

