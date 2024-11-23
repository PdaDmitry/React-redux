import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterLogics/slice'; //we change import
// import { counterReducer } from './counterLogics/reducer';

export const store = configureStore({
  reducer: {
    count: counterReducer, // 'count' must match the name slice in slice.js
  },
});
