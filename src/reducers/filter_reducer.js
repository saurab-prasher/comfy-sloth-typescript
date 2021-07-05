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
      filterKey === "all" ||
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

    if (filterKey === "category") {
      const tempArr = state.all_products?.filter(
        (item) => item[filterKey] === filterValue
      );

      const tempArr1 = state.all_products?.filter((item) => {
        return (
          item[filterKey] === filterValue &&
          item?.company === (state.company === "all" ? "" : state.company)
        );
      });

      console.log(tempArr1);

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

    return { ...state };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
