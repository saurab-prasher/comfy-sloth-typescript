import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";
// import { useProductsContext } from "./products_context";

export const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",

  products_view: "grid",
  filters: {
    category: "all",
    company: "all",
    color: "all",
    max_price: 0,
    min_price: 0,
    price: 0,
    search_term: "",
    freeshipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch({ type: "LOAD_PRODUCTS", payload: products });
  // }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTERING_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.filters, state.sort]);

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

  const resetFilters = () => {
    dispatch({ type: "RESET_FILTERS", payload: state.all_products });
  };

  const handleProductView = (view) => {
    dispatch({ type: "SET_PRODUCTS_VIEW", payload: view });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        handleFilters,
        resetFilters,
        updateSort,
        handleProductView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
