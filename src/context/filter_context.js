import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  category: "all",
  company: "all",
  colors: "all",
  search_term: "",
  free_shipping: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  function handleFilters(e, filterKey = "") {
    const filterValue = e.target.dataset.name || e.target.value;
    console.log("filterKey:", filterKey, "\nfilterValue:", filterValue);
    if (!filterValue) return;
    dispatch({ type: "testing", payload: { filterValue, filterKey } });
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        handleFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
