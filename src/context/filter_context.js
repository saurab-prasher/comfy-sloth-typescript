import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

export const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    sort: "price-lowest",
    max_range_value: 0,
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
  }, [state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
    console.log(value);
  };

  function handleFilters(e) {
    let filterKey = e.target.name;
    let filterValue =
      e.target.value || e.target.dataset.name || e.target.textContent;

    if (filterKey === "freeshipping") {
      filterValue = e.target.checked;
    }
    console.log(filterKey, filterValue);

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
