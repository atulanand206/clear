/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    levels: {},
    floors: [],
    rooms: [],
    beds: [],
  },
  reducers: {
    setLayout: (state, action) => {
      console.log(action.payload,'layout')
      const levels = action.payload;
      state.levels = levels;
      state.floors = Object.keys(levels);
      console.log(state.levels)
    },
    reset: (state) => {
      state.levels = []
    },
  },
});

// actions
export const { setLayout, reset } = buildingSlice.actions;

// reducer
export default buildingSlice.reducer;

