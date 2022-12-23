/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    username: '',
    password: '',
    id: '',
    name: '',
    phone: '',
    role: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload.username;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
    setId: (state, action) => {
      state.id = action.payload.id;
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
    reset: (state) => {
      state.username = '';
      state.password = '';
      state.id = '';
      state.name = '';
      state.phone = '';
      state.role = '';
    },
  },
});

// actions
export const { setUserName, setPassword, setId, setName, setPhone, setRole, reset } = signupSlice.actions;

// reducer
export default signupSlice.reducer;

