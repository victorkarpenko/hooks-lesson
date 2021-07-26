import { INCREMENT, DECREMENT, RESET } from "../types";

export const plusCounter = (payload) => ({
  type: INCREMENT,
  payload,
});

export const minusCounter = (payload) => ({
  type: DECREMENT,
  payload,
});

export const reset = () => ({
  type: RESET,
});
