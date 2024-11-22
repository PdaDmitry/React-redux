import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

const initialState = {
  counterNow: 0,
  stepNow: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counterNow: state.counterNow + state.stepNow,
      };
    case DECREMENT:
      return {
        ...state,
        counterNow: state.counterNow - state.stepNow,
      };
    case RESET:
      return {
        ...state,
        counterNow: 0,
        stepNow: 1,
      };
    case CHANGE_STEP:
      return {
        ...state,
        stepNow: action.payload,
      };
    default:
      return state;
  }
};
