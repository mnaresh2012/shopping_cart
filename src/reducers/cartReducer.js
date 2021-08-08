import { INCREMENT, DECREMENT } from "../actions/types";

const initialState = { cartItems: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { cartItems: state.cartItems + 1 };
    case DECREMENT:
      return { cartItems: state.cartItems - 1 };
    default:
      return state;
  }
}