export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === "testing") {
    const { filterValue, filterKey } = action.payload;

    if (filterKey === "all" || filterValue === "all" || !filterValue)
      return { ...state, filtered_products: state.all_products };

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
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "company") {
      const tempArr = state.all_products?.filter(
        (item) => item[filterKey] === filterValue
      );
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    if (filterKey === "search_term" && filterValue) {
      const tempArr = state.all_products.filter((item) =>
        item.name.startsWith(filterValue)
      );

      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    return { ...state };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
