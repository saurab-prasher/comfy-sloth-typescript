const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "user":
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
