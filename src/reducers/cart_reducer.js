const initialState = {
  total_item: 0,
  total_amount: 0,
  cart: [],
  shipping_fee: 534,
};

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("data")) || initialValue;

export const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id + color);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product?.name,
        color,
        amount,
        image: product?.images[0].url,
        price: product?.price,
        max: product?.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "DELETE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);

    console.log(tempCart);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
