import React from "react";
import { useUserContext } from "../../context/user_context";

const Checkout = () => {
  const { currentUser } = useUserContext();
  console.log(currentUser.email);
  return <main>{currentUser.email}</main>;
};

export default Checkout;
