/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'basicProfile',
  initialState: {
    username: '',
    password: '',
    id: '',
    name: '',
    phone: '',
    role: '',
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
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    setRole: (state, action) => {
      state.role = action.payload.role;
    },
    setLoginProfile: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
    },
    reset: (state) => {
      state.username = '';
      state.password = '';
      state.id = '';
      state.name = '';
      state.phone = '';
      state.role = '';
      state.age = '';
      state.gender = '';
      state.profilePicture = '';
    },
  },
});

// actions
export const { setUserName, setPassword, setLoginProfile, setName, setPhone, setRole } = profileSlice.actions;

// reducer
export default profileSlice.reducer;

// selectors
export const selectBasicProfile = (state) => state.basicProfile;
