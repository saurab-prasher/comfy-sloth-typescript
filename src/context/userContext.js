import React, { useContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase/firebase';
import reducer from '../state/reducers/userReducer';
import { useHistory } from 'react-router-dom';

const UserContext = React.createContext();

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  error: '',
  userLoading: true,
  loading: false,
  currentUser: '',
  message: '',
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // const updateEmail = (email) => {
  //   return currentUser.updateEmail(email);
  // };
  // const updatePassword = (email) => {
  //   return currentUser.updatePassword(email);
  // };

  // settting user if exists
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: 'SET_USER', payload: user });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // set Error timer
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: 'SET_ERROR_TIMER' });
    }, 3000);
    return () => clearTimeout(id);
  }, [state.error, state.message]);

  // handles signup
  const handleSubmitSignup = async (e, email, password, passwordConfirm) => {
    e.preventDefault();

    if (password?.current.value !== passwordConfirm?.current.value) {
      return dispatch({
        type: 'SET_SIGNUP_ERROR',
        payload: 'Passwords do not match!',
      });
    }

    try {
      dispatch({ type: 'SET_SIGNUP_BEGIN' });
      await signup(email.current.value, password.current.value);

      dispatch({ type: 'SET_SIGNUP_SUCCESS' });
      history.push('/');
    } catch (err) {
      dispatch({
        type: 'SET_SIGNUP_ERROR',
        payload: 'Email Already in use, please login',
      });
    }
  };

  // handles login
  const handleSubmitLogin = async (e, email, password) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOGIN_BEGIN' });

    try {
      await login(email.current.value, password.current.value);
      dispatch({ type: 'SET_LOGIN_SUCCESS' });
    } catch (err) {
      dispatch({
        type: 'SET_LOGIN_ERROR',
        payload: 'You have entered an invalid username or password',
      });
    }
  };

  // handles logout
  const handleLogout = async () => {
    dispatch({ type: 'SET_LOGOUT_BEGIN' });

    try {
      await logout();
      dispatch({ type: 'SET_LOGOUT_SUCCESS' });
      history.push('/login');
    } catch (err) {
      dispatch({
        type: 'SET_LOGOUT_ERROR',
        payload: 'Failed to logout, please try again!',
      });
    }
  };

  const handleResetPassword = async (e, email) => {
    e.preventDefault();

    try {
      dispatch({ type: 'SET_RESET_PASSWORD_BEGIN' });
      await resetPassword(email.current.value);
      dispatch({
        type: 'SET_RESET_PASSWORD_SUCCESS',
        payload: { message: 'Check your inbox for further instructions' },
      });
      setTimeout(() => {
        history.push('/login');
      }, 4000);
    } catch (err) {
      dispatch({
        type: 'SET_RESET_PASSWORD_ERROR',
        payload: 'Failed to reset password',
      });
    }
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        handleResetPassword,
        resetPassword,
        handleSubmitSignup,
        handleSubmitLogin,
        handleLogout,
      }}
    >
      {!state.userLoading && children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
