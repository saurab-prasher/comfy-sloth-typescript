import axios from 'axios';
import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';

export const fetchProducts = (url: any) => async (dispatch: Dispatch) => {
  dispatch({ type: ActionTypes.GET_PRODUCTS_BEGIN });

  try {
    const response = await axios.get(url);
    const products = response.data;

    dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    dispatch({ type: ActionTypes.GET_PRODUCTS_ERROR });
  }
};

export const fetchSingleProduct =
  (url: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });

    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({
        type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_ERROR });
    }
  };
