import { createStore } from "redux";
import rootReducer from "../src/reducers";

export default function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState
  );
}
