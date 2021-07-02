import React from "react";
import { formatPrice } from "../../utils/helper";
import {
  CartItemTotalContainer,
  CartItemTotal,
  CartItemTotalBtn,
} from "./CartElements";

const CartTotal = ({ total_amount, shipping_fee }) => {
  return (
    <CartItemTotalContainer>
      <CartItemTotal>
        <div>
          <h3>Subtotal: </h3>
          <p> {formatPrice(total_amount)}</p>
        </div>
        <div>
          <p>Shipping Fee: </p>
          <p> {formatPrice(shipping_fee)} </p>
        </div>
        <hr />
        <div>
          <h2>Order Total:</h2>
          <p>{formatPrice(total_amount + shipping_fee)}</p>
        </div>
      </CartItemTotal>
      <CartItemTotalBtn>Login</CartItemTotalBtn>
    </CartItemTotalContainer>
  );
};

export default CartTotal;
