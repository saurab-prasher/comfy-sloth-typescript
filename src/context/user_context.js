import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, signup, login, logout, resetPassword }}
    >
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
