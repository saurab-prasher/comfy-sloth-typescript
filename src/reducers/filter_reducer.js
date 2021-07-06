export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }

  if (action.type === "CALCULATE_TOTALS") {
    const maxValue = state.all_products?.map((item) => item.price);
    let max = 0;
    maxValue.forEach((item) => {
      if (item > max) max = item;
    });

    return {
      ...state,
      max_range_value: max,
    };
  }

  if (action.type === "SETTING_FILTERS") {
    const { filterValue, filterKey } = action.payload;

    if (
      filterValue === "all" ||
      !filterValue ||
      (filterKey === "free_shipping" && filterValue === "on")
    ) {
      return {
        ...state,
        [filterKey]: filterValue,
      };
    }

    if (filterKey === "colors" || filterValue === "colors") {
      return {
        ...state,
        [filterKey]: filterValue,
      };
    }

    if (filterKey === "category") {
      return { ...state, [filterKey]: filterValue };
    }

    if (filterKey === "company") {
      return { ...state, [filterKey]: filterValue };
    }

    if (filterKey === "search_term" && filterValue) {
      return { ...state, [filterKey]: filterValue };
    }

    if (filterKey === "price") {
      return { ...state, [filterKey]: filterValue };
    }

    if (filterKey === "free_shipping" && filterValue === true) {
      const tempArr = state.filtered_products?.filter(
        (item) => item.shipping === filterValue
      );

      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }
  }

  if (action.type === "FILTERING_PRODUCTS") {
    if (state.search_term) {
      const tempArr = state.all_products?.filter((item) =>
        item.name?.startsWith(state.search_term)
      );
      return { ...state, filtered_products: tempArr };
    }
    if (state.company === "all" && state.category === "all") {
      return { ...state, filtered_products: state.all_products };
    } else if (state.company === "all") {
      const tempArr = state.all_products?.filter(
        (item) => item.category === state.category
      );

      return { ...state, filtered_products: tempArr };
    } else if (state.category === "all") {
      const tempArr = state.all_products?.filter(
        (item) => item.company === state.company
      );

      return { ...state, filtered_products: tempArr };
    } else if (state.company !== "all") {
      const tempArr = state.all_products?.filter(
        (item) =>
          item.company === state.company && item.category === state.category
      );
      return { ...state, filtered_products: tempArr };
    }
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
