import { ActionTypes } from '../action-types';

interface ProductState {
  isSidebarOpen: boolean;
  loading: boolean;
  error: boolean;
  products: any[];
  featuredProducts: any[];
}

const initialState = {
  isSidebarOpen: false,
  loading: false,
  error: false,
  products: [],
  featuredProducts: [],
};

const reducer = (
  state: ProductState = initialState,
  action: any
): ProductState => {
  switch (action.type) {
    case ActionTypes.SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case ActionTypes.SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case ActionTypes.GET_PRODUCTS_BEGIN:
      return { ...state, loading: true };

    case ActionTypes.GET_PRODUCTS_SUCCESS:
      const featuredProducts = action.payload.filter(
        (item: { featured: boolean }) => item.featured
      );

      return {
        ...state,
        featuredProducts,
        loading: false,
        products: action.payload,
      };

    case ActionTypes.GET_PRODUCTS_ERROR:
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
