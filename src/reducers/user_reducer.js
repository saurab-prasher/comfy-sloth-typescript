const user_reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, currentUser: action.payload, userLoading: false };
    }
    case "SET_LOGIN_BEGIN": {
      return { ...state, error: "", loading: true };
    }

    case "SET_LOGIN_SUCCESS": {
      return { ...state, error: "", loading: false };
    }

    case "SET_LOGIN_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }

    case "SET_LOGOUT_BEGIN": {
      return { ...state, error: "", loading: true };
    }

    case "SET_LOGOUT_SUCCESS": {
      return { ...state, error: "", loading: false };
    }

    case "SET_LOGOUT_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }

    case "SET_SIGNUP_BEGIN": {
      return { ...state, error: "", loading: true };
    }

    case "SET_SIGNUP_SUCCESS": {
      return { ...state, error: "", loading: false };
    }

    case "SET_SIGNUP_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }

    case "SET_RESET_PASSWORD_BEGIN": {
      return { ...state, error: "", message: "", loading: true };
    }

    case "SET_RESET_PASSWORD_SUCCESS": {
      const { message } = action.payload;
      return { ...state, error: "", message, loading: false };
    }

    case "SET_RESET_PASSWORD_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }

    case "SET_ERROR_TIMER": {
      return { ...state, error: "", message: "" };
    }

    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};

export default user_reducer;
