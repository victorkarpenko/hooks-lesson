import { INCREMENT, DECREMENT, RESET } from "../types";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};
