import { ActionTypes } from '../action-types';
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart') || '');
  } else {
    return [];
  }
};

interface CartState {
  totalItems: number;
  totalAmount: number;
  cart: any;
  shippingFee: number;
}

const initialState = {
  totalItems: 0,
  totalAmount: 0,
  cart: getLocalStorage(),
  shippingFee: 534,
};

const cartReducer = (
  state: CartState = initialState,
  action: any
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;

      const tempItem = state.cart.find((i: any) => i.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem: any) => {
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

    case ActionTypes.DELETE_ITEM: {
      const tempCart = state.cart.filter(
        (item: any) => item.id !== action.payload
      );
      return {
        ...state,
        cart: tempCart,
      };
    }

    case ActionTypes.TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;

      const tempCart = state.cart.map((cartItem: any) => {
        if (cartItem.id === id) {
          if (value === 'increase') {
            let newAmount = cartItem.amount + 1;
            if (newAmount > cartItem.max) newAmount = cartItem.max;
            return { ...cartItem, amount: newAmount };
          }
          if (value === 'decrease') {
            let newAmount = cartItem.amount - 1;
            if (newAmount < 1) newAmount = 1;
            return { ...cartItem, amount: newAmount };
          }
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    }

    case ActionTypes.CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case ActionTypes.COUNT_CART_TOTALS: {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total: any, cartItem: any) => {
          const { price, amount } = cartItem;

          total.totalItems += amount;
          total.totalAmount += amount * price;

          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );

      return { ...state, totalAmount, totalItems };
    }
    default:
      return state;
  }
};

export default cartReducer;
