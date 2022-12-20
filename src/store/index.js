import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './auth/index';
import machineReducer from './machine/index';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    machinesStore: machineReducer,

  },
});

store.subscribe(() => {});

setupListeners(store.dispatch);

export default store;
