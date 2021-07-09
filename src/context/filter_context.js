import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

export const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",
  max_range_value: 0,
  filters: {
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    search_term: "",
    freeshipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTERING_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.filters, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  function handleFilters(e) {
    let filterKey = e.target.name || e.target.dataset.color;
    let filterValue =
      e.target.value ||
      e.target.textContent ||
      e.target.getAttribute("data-color");

    if (filterKey === "freeshipping") {
      filterValue = e.target.checked;
    }

    dispatch({ type: "SETTING_FILTERS", payload: { filterKey, filterValue } });
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
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
