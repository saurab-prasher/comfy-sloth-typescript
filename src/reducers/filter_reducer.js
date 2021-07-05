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

    if (filterValue === "all" || filterKey === "all")
      return { ...state, filtered_products: state.all_products };

    if (filterKey === "colors" || filterKey === "colors") {
      // const tempArr = state.all_products.map((item) => item[filterKey]);

      // const tempArr1 = tempArr.filter((item) => item.filterValue);
      // console.log(tempArr1, state.filtered_products);
      return {
        ...state,
      };
    }

    if (filterKey === "category" && filterValue === "living room") {
      const tempArr = state.all_products?.filter(
        (item) => item[filterKey] === filterValue
      );
      console.log(tempArr);
      return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
    }

    const tempArr = state.all_products?.filter(
      (item) => item[filterKey] === filterValue
    );
    console.log(tempArr);
    return { ...state, [filterKey]: filterValue, filtered_products: tempArr };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
