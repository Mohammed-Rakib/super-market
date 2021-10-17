import React from "react";
import { createContext } from "react";
import useFirebase from "../firebase/useFirebase";
import useProducts from "../products/useProducts";
import UseReducer from "../reducer/useReducer";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = UseReducer();
  const { currentUser } = useFirebase();
  const { products } = useProducts();

  return (
    <CartContext.Provider value={{ state, dispatch, currentUser, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
