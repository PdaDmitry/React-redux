export const selectCounter = state => state.count.counterNow; //count - must match the name of the reducer in store.js and the name name: 'count' in slice.js
export const selectStep = state => state.count.stepNow;
