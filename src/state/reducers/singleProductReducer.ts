import { ActionTypes } from '../action-types';

interface SingleProductState {
  loading: boolean;
  error: boolean;
  singleProduct: any;
}

const initialState = {
  loading: false,
  error: false,
  singleProduct: {},
};

const reducer = (
  state: SingleProductState = initialState,
  action: any
): SingleProductState => {
  switch (action.type) {
    case ActionTypes.GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionTypes.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };

    case ActionTypes.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
