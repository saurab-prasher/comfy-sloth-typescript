export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      max_range_value: maxPrice,
    };
  }

  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "SETTING_FILTERS") {
    const { filterValue, filterKey } = action.payload;

    if (filterKey === "freeshipping") {
      return {
        ...state,
        filters: { ...state.filters, [filterKey]: filterValue },
      };
    }

    return {
      ...state,
      filters: { ...state.filters, [filterKey]: filterValue },
    };
  }

  if (action.type === "FILTERING_PRODUCTS") {
    return { ...state };
  }

  if (action.type === "RESET_FILTERS") {
    return {
      ...state,
      filtered_products: state.all_products,
      category: "all",
      company: "all",
      colors: "all",
      price: 0,
      max_range_value: 0,
      search_term: "",
      free_shipping: false,
    };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
