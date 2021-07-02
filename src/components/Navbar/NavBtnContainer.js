import React from "react";

import {
  NavBtn,
  BtnContainer,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
} from "./NavbarElements.js";

const NavBtnContainer = ({ total_items }) => {
  return (
    <BtnContainer>
      <NavBtn to="/cart">
        Cart
        <ShoppingCart />
        <ShoppingCartValue>{total_items}</ShoppingCartValue>
      </NavBtn>
      <NavBtn to="/login">
        Login
        <UserLogin />
      </NavBtn>
    </BtnContainer>
  );
};

export default NavBtnContainer;
