import React from "react";
import { useUserContext } from "../../context/user_context";
import {
  NavBtn,
  BtnContainer,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
} from "./NavbarElements.js";

const NavBtnContainer = ({ total_items }) => {
  const { currentUser, logout } = useUserContext();
  return (
    <BtnContainer>
      <NavBtn to="/cart">
        Cart
        <ShoppingCart />
        <ShoppingCartValue>{total_items}</ShoppingCartValue>
      </NavBtn>
      {currentUser ? (
        <NavBtn onClick={() => logout()} to="/">
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
