import { ActionTypes } from '../action-types';

export const addToCart = (id: any, color: any, amount: any, product: any) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { id, color, amount, product },
  };
};

export const deleteItem = (id: any) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: id,
  };
};

export const toggleCartItem = (id: any, value: any) => {
  return {
    type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT,
    payload: { id, value },
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const countCartTotals = () => {
  return {
    type: ActionTypes.COUNT_CART_TOTALS,
  };
};
