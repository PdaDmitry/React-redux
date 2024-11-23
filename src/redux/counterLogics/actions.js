import { createAction } from '@reduxjs/toolkit';
// import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

// export const increment = () => {
//   return { type: INCREMENT };
// };

// export const decrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// export const reset = () => {
//   return { type: RESET };
// };

// export const changeStep = step => {
//   return { type: CHANGE_STEP, payload: step };
// };

// export const increment = createAction(INCREMENT);
// If you need to change the name of an action type,
//   you just need to correct it in one place - in the constants.js file.
// This is especially useful on large projects.

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep');
