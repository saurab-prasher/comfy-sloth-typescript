import React from 'react';
import { useUserContext } from '../../context/userContext';
import { formatPrice } from '../../utils/helper';
import {
  CartItemTotalContainer,
  CartItemTotal,
  CartItemTotalBtn,
} from './CartElements';

interface CartTotalProps {
  totalAmount: number;
  shippingFee: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, shippingFee }) => {
  const { currentUser } = useUserContext();
  return (
    <CartItemTotalContainer>
      <CartItemTotal>
        <div>
          <h3>Subtotal: </h3>
          <p> {formatPrice(totalAmount)}</p>
        </div>
        <div>
          <p>Shipping Fee: </p>
          <p> {formatPrice(shippingFee)} </p>
        </div>
        <hr />
        <div>
          <h2>Order Total:</h2>
          <p>{formatPrice(totalAmount + shippingFee)}</p>
        </div>
      </CartItemTotal>
      {currentUser ? (
        <CartItemTotalBtn to='/checkout'>Checkout</CartItemTotalBtn>
      ) : (
        <CartItemTotalBtn to='/login'>Login</CartItemTotalBtn>
      )}
    </CartItemTotalContainer>
  );
};

export default CartTotal;
