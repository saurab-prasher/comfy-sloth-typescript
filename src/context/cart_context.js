import React, { useContext, useReducer, useEffect } from "react";
import { cart_reducer as reducer, initializer } from "../reducers/cart_reducer";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    { totalItem: 0, totalAmount: 0, product: [] },
    initializer
  );

  const test = (product) => {
    dispatch({ type: "TEST", payload: product });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ ...state, test, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
