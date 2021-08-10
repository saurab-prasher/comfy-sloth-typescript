import { initialStateType } from '../../context/userContext';
import { ActionTypes } from '../action-types';
import { ActionUser } from '../actions';

const reducer = (state: initialStateType, action: ActionUser) => {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return { ...state, currentUser: action.payload, userLoading: false };
    }
    case ActionTypes.SET_LOGIN_BEGIN: {
      return { ...state, error: '', loading: true };
    }

    case ActionTypes.SET_LOGIN_SUCCESS: {
      return { ...state, error: '', loading: false };
    }

    case ActionTypes.SET_LOGIN_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case ActionTypes.SET_LOGOUT_BEGIN: {
      return { ...state, error: '', loading: true };
    }

    case ActionTypes.SET_LOGOUT_SUCCESS: {
      return { ...state, error: '', loading: false };
    }

    case ActionTypes.SET_LOGOUT_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case ActionTypes.SET_SIGNUP_BEGIN: {
      return { ...state, error: '', loading: true };
    }

    case ActionTypes.SET_SIGNUP_SUCCESS: {
      return { ...state, error: '', loading: false };
    }

    case ActionTypes.SET_SIGNUP_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case ActionTypes.SET_RESET_PASSWORD_BEGIN: {
      return { ...state, error: '', message: '', loading: true };
    }

    case ActionTypes.SET_RESET_PASSWORD_SUCCESS: {
      const { message } = action.payload;
      return { ...state, error: '', message, loading: false };
    }

    case ActionTypes.SET_RESET_PASSWORD_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case ActionTypes.SET_ERROR_TIMER: {
      return { ...state, error: '', message: '' };
    }

    default:
      throw new Error(`No matching - action type `);
  }
};

export default reducer;
