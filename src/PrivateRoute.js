import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "./context/user_context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
