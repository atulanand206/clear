/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    levels: {},
    floors: []
  },
  reducers: {
    setLayout: (state, action) => {
      const levels = action.payload;
      state.levels = levels;
      state.floors = Object.keys(levels);
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

