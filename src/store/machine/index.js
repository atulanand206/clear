/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const machineSlice = createSlice({
  name: 'machine',
  initialState: {
    machines: []
  },
  reducers: {
    setMachines: (state, action) => {
      console.log(action.payload,'machines')
      state.machines = action.payload;
    },
    reset: (state) => {
      state.machines = []
    },
  },
});

// actions
export const { setMachines, reset } = machineSlice.actions;

// reducer
export default machineSlice.reducer;

