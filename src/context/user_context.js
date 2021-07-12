import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
