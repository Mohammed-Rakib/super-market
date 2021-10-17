import { useReducer } from "react";
import cartContext from "./cartContext";

const UseReducer = () => {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(cartContext, initialState);
  return [state, dispatch];
};

export default UseReducer;
