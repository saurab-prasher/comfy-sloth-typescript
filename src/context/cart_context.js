import React, { useContext, useReducer, useEffect } from "react";
import { cart_reducer as reducer } from "../reducers/cart_reducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const CartContext = React.createContext();

const initialState = {
  total_items: 0,
  total_amount: 0,
  cart: getLocalStorage(),
  shipping_fee: 534,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  // remove Item
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, value } });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, deleteItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
