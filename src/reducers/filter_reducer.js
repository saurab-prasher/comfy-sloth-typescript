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

  if (action.type === "testing") {
    const { filterValue, filterKey } = action.payload;

    if (
      filterValue === "all" ||
      !filterValue ||
      (filterKey === "free_shipping" && filterValue === "on")
    ) {
      return {
        ...state,
        filtered_products: state.all_products,
        [filterKey]: filterValue,
      };
    }

    if (filterKey === "colors" || filterValue === "colors") {
      // const tempArr = state.all_products.map((item) => item[filterKey]);

      // const tempArr1 = tempArr.filter((item) => item.filterValue);
      // console.log(tempArr1, state.filtered_products);
      return {
        ...state,
        [filterKey]: filterValue,
      };
    }

    if (filterKey === "category" || filterKey === "company") {
      console.log(state);
      const tempArr = state.all_products?.filter(
        (item) => item[filterKey] === filterValue
      );

      console.log(tempArr);
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "company") {
      const tempArr = state.all_products?.filter(
        (item) => item[filterKey] === filterValue
      );
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "search_term" && filterValue) {
      const tempArr = state.all_products?.filter((item) =>
        item.name?.startsWith(filterValue)
      );

      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "price") {
      const tempArr = state.all_products?.filter(
        (item) => item.price <= Number(filterValue)
      );
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "free_shipping" && filterValue === true) {
      const tempArr = state.all_products?.filter(
        (item) => item.shipping === filterValue
      );

      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
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
