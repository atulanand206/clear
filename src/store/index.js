import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './auth/index';
import beduserReducer from './beduser/index';
import machineReducer from './machine/index';
import buildingReducer from './building/index';
import configsReducer from './configs/index';
import signupReducer from './signup/index';

export const store = configureStore({
  reducer: {
    authStore: authReducer,
    signupStore: signupReducer,
    beduserStore: beduserReducer,
    configsStore: configsReducer,
    machinesStore: machineReducer,
    buildingStore: buildingReducer
  },
});

store.subscribe(() => {});

setupListeners(store.dispatch);

export default store;
