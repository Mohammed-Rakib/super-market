import React from "react";
import { createContext } from "react";
import UseReducer from "../reducer/useReducer";

export const MarketContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = UseReducer();
  return (
    <MarketContext.Provider value={[state, dispatch]}>
      {children}
    </MarketContext.Provider>
  );
};

export default Context;
