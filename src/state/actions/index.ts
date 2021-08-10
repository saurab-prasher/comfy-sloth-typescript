import { ActionTypes } from '../action-types';

export type ActionCart =
  | {
      type: ActionTypes.ADD_TO_CART;
      payload: {
        id: string;
        color: string;
        amount: number;
        product: any;
      };
    }
  | {
      type: ActionTypes.CLEAR_CART;
    }
  | {
      type: ActionTypes.COUNT_CART_TOTALS;
    }
  | {
      type: ActionTypes.DELETE_ITEM;
      payload: string;
    }
  | {
      type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT;
      payload: {
        id: string;
        value: string;
      };
    };

export type ActionFilter =
  | {
      type: ActionTypes.SETTING_FILTERS;
      payload: {
        filterKey: string;
        filterValue: string;
      };
    }
  | {
      type: ActionTypes.FILTERING_PRODUCTS;
    }
  | {
      type: ActionTypes.RESET_FILTERS;
    }
  | {
      type: ActionTypes.UPDATE_SORT;
      payload: any;
    }
  | {
      type: ActionTypes.SORT_PRODUCTS;
    }
  | {
      type: ActionTypes.LOAD_PRODUCTS;
      payload: any;
    }
  | {
      type: ActionTypes.SET_PRODUCTS_VIEW;
      payload: string;
    };

export type ActionFetchProducts =
  | {
      type: ActionTypes.SIDEBAR_OPEN;
    }
  | {
      type: ActionTypes.SIDEBAR_CLOSE;
    }
  | {
      type: ActionTypes.GET_PRODUCTS_BEGIN;
    }
  | {
      type: ActionTypes.GET_PRODUCTS_SUCCESS;
      payload: any;
    }
  | {
      type: ActionTypes.GET_PRODUCTS_ERROR;
    }
  | {
      type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN;
    }
  | {
      type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS;
      payload: any;
    }
  | {
      type: ActionTypes.GET_SINGLE_PRODUCT_ERROR;
    };

export type ActionUser =
  | {
      type: ActionTypes.SET_USER;
      payload: any;
    }
  | {
      type: ActionTypes.SET_LOGIN_BEGIN;
    }
  | {
      type: ActionTypes.SET_LOGIN_SUCCESS;
    }
  | {
      type: ActionTypes.SET_LOGIN_ERROR;
      payload: any;
    }
  | {
      type: ActionTypes.SET_LOGOUT_BEGIN;
    }
  | {
      type: ActionTypes.SET_LOGOUT_SUCCESS;
    }
  | {
      type: ActionTypes.SET_LOGOUT_ERROR;
      payload: string;
    }
  | {
      type: ActionTypes.SET_SIGNUP_BEGIN;
    }
  | {
      type: ActionTypes.SET_SIGNUP_SUCCESS;
    }
  | {
      type: ActionTypes.SET_SIGNUP_ERROR;
      payload: any;
    }
  | {
      type: ActionTypes.SET_RESET_PASSWORD_BEGIN;
    }
  | {
      type: ActionTypes.SET_RESET_PASSWORD_SUCCESS;
      payload: any;
    }
  | {
      type: ActionTypes.SET_RESET_PASSWORD_ERROR;
      payload: string;
    }
  | {
      type: ActionTypes.SET_ERROR_TIMER;
    };
