const initialState = { totalItem: 1, totalAmount: 0, product: [] };

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("data")) || initialValue;

const helper = (array) => {
  const itemCount = array
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr);

  const itemsubTotal = array
    .map((item) => item.subTotal)
    .reduce((acc, curr) => acc + curr);

  return [itemCount, itemsubTotal];
};

export const cart_reducer = (state, action) => {
  if (action.type === "TEST") {
    const [itemCount, itemsubTotal] = helper([action.payload]);
    const newTotalItem = state?.totalItem + itemCount;
    const newsubTotal = state?.totalAmount + itemsubTotal;

    console.log(state.totalAmount, state.totalItem, itemCount, itemsubTotal);

    return {
      ...state,
      totalItem: newTotalItem,
      totalAmount: newsubTotal,
      product: [...state.product, action.payload],
    };
  }

  if (action.type === "DELETE_ITEM") {
    const oldList = state.product.filter((item) => item.id === action.payload);
    const [itemCount, itemsubTotal] = helper(oldList);
    console.log(itemCount, itemsubTotal);
    const newTotalItem = state?.totalItem - itemCount;
    const newsubTotal = parseFloat(state?.totalAmount - itemsubTotal).toFixed(
      2
    );
    const newList = state.product.filter((item) => item.id !== action.payload);

    console.log(newList);
    return {
      ...state,
      totalItem: newTotalItem,
      totalAmount: newsubTotal,
      product: newList,
    };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
