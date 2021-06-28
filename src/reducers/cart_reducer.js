const initialState = { totalItem: 1, totalAmount: 0, product: [] };

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("data")) || initialValue;

export const cart_reducer = (state, action) => {
  console.log(action.payload.amount);
  const newTotalItem = state.totalItem + action.payload.amount;
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        totalItem: newTotalItem,
        product: [...state.product, action.payload],
      };

    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};
