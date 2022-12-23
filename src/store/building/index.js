/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    buildingName: '',
    levels: {},
    floors: []
  },
  reducers: {
    setBuildingName: (state, action) => {
      state.buildingName = action.payload;
    },
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
export const { setBuildingName, setLayout, reset } = buildingSlice.actions;

// reducer
export default buildingSlice.reducer;

