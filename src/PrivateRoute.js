import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "./context/user_context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currrentUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currrentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
