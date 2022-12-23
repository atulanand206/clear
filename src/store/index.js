import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './auth/index';
import machineReducer from './machine/index';
import buildingReducer from './building/index';
import configsReducer from './configs/index';

export const store = configureStore({
  reducer: {
    authStore: authReducer,
    configsStore: configsReducer,
    machinesStore: machineReducer,
    buildingStore: buildingReducer
  },
});

store.subscribe(() => {});

setupListeners(store.dispatch);

export default store;
