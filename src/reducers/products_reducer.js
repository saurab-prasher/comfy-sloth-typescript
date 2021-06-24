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

    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };
    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};

export default product_reducer;
