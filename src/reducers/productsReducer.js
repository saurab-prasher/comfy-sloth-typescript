const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_OPEN":
      return { ...state, isSidebarOpen: true };

    case "SIDEBAR_CLOSE":
      return { ...state, isSidebarOpen: false };

    case "GET_PRODUCTS_BEGIN":
      return { ...state, products_loading: true };

    case "GET_PRODUCTS_SUCCESS":
      const featured_products = action.payload.filter((item) => item.featured);
      return {
        ...state,
        featured_products,
        products_loading: false,
        products: action.payload,
      };

    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };

    case "GET_SINGLE_PRODUCT_BEGIN":
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };

    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };

    case "GET_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    default:
      return state;
  }
};

export default productReducer;
