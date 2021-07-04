export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === "just_checking") {
    console.log(action.payload);
    return { ...state };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
