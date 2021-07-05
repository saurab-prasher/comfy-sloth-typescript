import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

export const initialState = {
  filtered_products: [],
  all_products: [],
  category: "all",
  company: "all",
  colors: "all",
  price: 0,
  max_range_value: 0,
  search_term: "",
  free_shipping: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [products]);

  function handleFilters(e, filterKey = "") {
    const filterValue =
      e.target.dataset.name || e.target.checked || e.target.value;
    console.log("filterKey:", filterKey, "\nfilterValue:", filterValue);
    dispatch({ type: "testing", payload: { filterKey, filterValue } });
  }

  function resetFilters() {
    dispatch({ type: "RESET_FILTERS" });
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        handleFilters,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
