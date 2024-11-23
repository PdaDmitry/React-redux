import { createReducer } from '@reduxjs/toolkit';
import { changeStep, decrement, increment, reset } from './actions';
// import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

const initialState = {
  counterNow: 0,
  stepNow: 1,
};

export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increment, (state, action) => {
      state.counterNow += state.stepNow;
    })
    .addCase(decrement, (state, action) => {
      state.counterNow -= state.stepNow;
    })
    .addCase(reset, (state, action) => {
      return initialState;
    })
    .addCase(changeStep, (state, action) => {
      state.stepNow = action.payload;
    });
});

//we can use this construction
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case INCREMENT:  // <= when we use constants
//     case increment.type:
//       return {
//         ...state,
//         counterNow: state.counterNow + state.stepNow,
//       };
//     // case DECREMENT:
//     case decrement.type:
//       return {
//         ...state,
//         counterNow: state.counterNow - state.stepNow,
//       };
//     // case RESET:
//     case reset.type:
//       return {
//         ...state,
//         counterNow: 0,
//         stepNow: 1,
//       };
//     // case CHANGE_STEP:
//     case changeStep.type:
//       return {
//         ...state,
//         stepNow: action.payload,
//       };
//     default:
//       return state;
//   }
// };
