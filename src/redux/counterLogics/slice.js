import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counterNow: 0,
  stepNow: 1,
};

const slice = createSlice({
  name: 'count', //must match the name of the reducer in store.js
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counterNow += state.stepNow;
    },
    decrement: (state, action) => {
      state.counterNow -= state.stepNow;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.stepNow = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
