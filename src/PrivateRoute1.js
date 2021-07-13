import React from "react";

import { Route, Redirect } from "react-router";
import { useUserContext } from "./context/user_context";

const PrivateRoute1 = ({ component: Component, ...rest }) => {
  const { currentUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
export default PrivateRoute1;
