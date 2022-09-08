import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './auth/index';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.subscribe(() => {});

setupListeners(store.dispatch);

export default store;
