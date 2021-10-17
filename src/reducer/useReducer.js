import { useReducer } from "react";
import { cartReducer } from "./cartReducer";

const UseReducer = () => {
  // initial state for useReducer
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return [state, dispatch];
};

export default UseReducer;
