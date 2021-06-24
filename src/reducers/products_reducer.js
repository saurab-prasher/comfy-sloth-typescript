const product_reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };
    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};

export default product_reducer;
