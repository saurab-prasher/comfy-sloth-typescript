import React, { useContext, useReducer } from "react";
import reducer from "../reducers/products_reducer";

const initialState = {
  isSidebarOpen: false,
};
const ProductContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const OpenSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  return (
    <ProductContext.Provider value={"hello"}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
