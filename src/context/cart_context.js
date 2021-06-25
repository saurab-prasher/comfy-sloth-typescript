import React, { useContext } from "react";

const initialState = {
  totalItem: 1,
  totalAmount: 0,
  product: {},
};
const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
