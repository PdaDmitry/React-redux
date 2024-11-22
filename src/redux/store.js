import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterLogics/reducer';

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
