/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const beduserSlice = createSlice({
  name: 'beduser',
  initialState: {
    selectedBedId: '',
    selectedUserId: ''
  },
  reducers: {
    selectBedId: (state, action) => {
      state.selectedBedId = action.payload.bedId;
    },
    selectUserId: (state, action) => {
      state.selectedUserId = action.payload.userId;
    },
    reset: (state) => {
      state.selectedBedId = '';
      state.selectedUserId = '';
    },
  },
});

// actions
export const { selectBedId, selectUserId, reset } = beduserSlice.actions;

// reducer
export default beduserSlice.reducer;

