const cart_reducer = (state, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state, product: [...state.product, action.payload] };

    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};

export default cart_reducer;
