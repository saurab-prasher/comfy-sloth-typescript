import axios from "axios";
export const addToCart = (id, color, amount, product) => {
  return {
    type: "ADD_TO_CART",
    payload: { id, color, amount, product },
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

export const toggleCartItem = (id, value) => {
  return {
    type: "TOGGLE_CART_ITEM_AMOUNT",
    payload: { id, value },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const countCartTotals = () => {
  return {
    type: "COUNT_CART_TOTALS",
  };
};

export const openSidebar = () => {
  return {
    type: "SIDEBAR_OPEN",
  };
};

export const closeSidebar = () => {
  return {
    type: "SIDEBAR_CLOSE",
  };
};

export const fetchProducts = (url) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_BEGIN" });

  try {
    const response = await axios.get(url);
    const products = response.data;

    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
  } catch (err) {
    dispatch({ type: "GET_PRODUCTS_ERROR" });
  }
};

export const fetchSingleProduct = (url) => async (dispatch) => {
  dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });

  try {
    const response = await axios.get(url);
    const singleProduct = response.data;
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: singleProduct });
  } catch (error) {
    console.log(error);

    dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
  }
};
