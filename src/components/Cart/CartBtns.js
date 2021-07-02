import React from "react";

import { CartItemBtnContainer, BtnClear, BtnContinue } from "./CartElements";
const CartBtns = ({ clearCart }) => {
  return (
    <CartItemBtnContainer>
      <BtnContinue to="/products">Continue Shopping</BtnContinue>
      <BtnClear onClick={clearCart}>Clear Shopping Cart</BtnClear>
    </CartItemBtnContainer>
  );
};

export default CartBtns;
