/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'basicProfile',
  initialState: {
    username: '',
    password: '',
    name: '',
    age: '',
    gender: '',
    profilePicture: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload.username;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
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
export const { setUserName, setPassword, setBasicProfile } = profileSlice.actions;

// reducer
export default profileSlice.reducer;

// selectors
export const selectBasicProfile = (state) => state.basicProfile;
