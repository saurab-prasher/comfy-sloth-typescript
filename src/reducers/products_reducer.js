const product_reducer = (state, action) => {
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
        products_loading: false,
        featured_products,
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
      throw new Error(`No matching "${action.type}" - action type `);
  }
};

export default product_reducer;
