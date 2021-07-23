import React from "react";
import { useUserContext } from "../../context/user_context";
import { formatPrice } from "../../utils/helper";
import {
  CartItemTotalContainer,
  CartItemTotal,
  CartItemTotalBtn,
} from "./CartElements";

const CartTotal = ({ total_amount, shipping_fee }) => {
  const { currentUser } = useUserContext();
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
      {currentUser ? (
        <CartItemTotalBtn to="/checkout">Checkout</CartItemTotalBtn>
      ) : (
        <CartItemTotalBtn to="/login">Login</CartItemTotalBtn>
      )}
    </CartItemTotalContainer>
  );
};

export default CartTotal;
