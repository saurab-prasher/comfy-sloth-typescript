import React, { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const initialState = {
  totalItem: 1,
  totalAmount: 0,
  product: [],
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const test = (product) => {
    dispatch({ type: "TEST", payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, test }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
