import React, { useState } from "react";
import { useUserContext } from "../../context/user_context";
import {
  NavBtn,
  BtnContainer,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
} from "./NavbarElements.js";
import { useHistory } from "react-router";

const NavBtnContainer = ({ total_items }) => {
  const { currentUser, logout } = useUserContext();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
      setError("Failed to log out");
    }
  }
  return (
    <BtnContainer>
      <NavBtn to="/cart">
        Cart
        <ShoppingCart />
        <ShoppingCartValue>{total_items}</ShoppingCartValue>
      </NavBtn>
      {currentUser ? (
        <NavBtn onClick={() => handleLogout()} to="/">
          Logout
        </NavBtn>
      ) : (
        <NavBtn to="/login">
          Login
          <UserLogin />
        </NavBtn>
      )}
    </BtnContainer>
  );
};

export default NavBtnContainer;
