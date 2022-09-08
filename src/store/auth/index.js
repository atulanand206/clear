/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'basicProfile',
  initialState: {
    name: '',
    age: '',
    gender: '',
    profilePicture: '',
  },
  reducers: {
    setBasicProfile: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.profilePicture = action.payload.profilePicture;
    },
    reset: (state) => {
      state.name = '';
      state.age = '';
      state.gender = '';
      state.profilePicture = '';
    },
  },
});

// actions
export const { setBasicProfile } = profileSlice.actions;

// reducer
export default profileSlice.reducer;

// selectors
export const selectBasicProfile = (state) => state.basicProfile;
