/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const configsSlice = createSlice({
  name: 'configs',
  initialState: {
    floor: 1,
    room: 101,
    bedId: 1,
    userId: ' ',
    view: 'Login'
  },
  reducers: {
    setFloor: (state, action) => {
      state.floor = action.payload.floor;
    },
    setRoom: (state, action) => {
      state.room = action.payload.room;
    },
    setBedId: (state, action) => {
      state.bedId = action.payload.bedId;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
    setView: (state, action) => {
      state.view = action.payload.view;
    },
    clear: (state) => {
      state.floor = 1;
      state.room = 101;
      state.bedId = 1;
      state.userId = ' ';
      state.view = 'Login';
    },
  },
});

// actions
export const { setFloor, setRoom, setBedId, setUserId, setView, clear } = configsSlice.actions;

// reducer
export default configsSlice.reducer;

