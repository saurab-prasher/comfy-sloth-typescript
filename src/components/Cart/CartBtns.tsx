import { CartItemBtnContainer, BtnClear, BtnContinue } from './CartElements';

interface CartBtnsProps {
  clearCart: () => void;
}
const CartBtns: React.FC<CartBtnsProps> = ({ clearCart }) => {
  return (
    <CartItemBtnContainer>
      <BtnContinue to='/products'>Continue Shopping</BtnContinue>
      <BtnClear onClick={clearCart}>Clear Shopping Cart</BtnClear>
    </CartItemBtnContainer>
  );
};

export default CartBtns;
