/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    levels: [],
    floors: [],
    rooms: [],
    beds: [],
  },
  reducers: {
    setLayout: (state, action) => {
      console.log(action.payload,'layout')
      const levels = action.payload;
      state.levels = levels;
      console.log(state.levels)
    },
    getFloors: (state, action) => {
      return state.levels.keys();
    },
    getRooms: (state, action) => {
      return state.levels[action.payload.floor].keys();
    },
    getBeds: (state, action) => {
      return state.levels[action.payload.floor][action.payload.room].keys();
    },
    reset: (state) => {
      state.levels = []
    },
  },
});

// actions
export const { setLayout, getFloors, getRooms, getBeds, reset } = buildingSlice.actions;

// reducer
export default buildingSlice.reducer;

