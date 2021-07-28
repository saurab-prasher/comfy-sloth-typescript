import { ActionTypes } from '../action-types';

export const handleProductView = (view: string) => {
  return {
    type: ActionTypes.SET_PRODUCTS_VIEW,
    payload: view,
  };
};
