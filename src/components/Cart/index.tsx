import { CartContainer, EmptyCartH1 } from './CartElements';
import Header from '../Header';
import CartHeading from './CartHeading';
import SingleCartItem from './SingleCartItem';
import CartTotal from './CartTotal';
import CartBtns from './CartBtns';

import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export const Cart: React.FC = () => {
  const { clearCart, deleteItem, toggleCartItem } = useActions();

  const { cart, shippingFee, totalAmount } = useSelector((state) => state.cart);
  const increase = (id: string, value: number) => {
    toggleCartItem(id, value);
  };
  const decrease = (id: string, value: number) => {
    toggleCartItem(id, value);
  };

  return (
    <>
      <Header location='cart' />
      <CartContainer>
        {cart?.length === 0 ? (
          <EmptyCartH1>Add Items to the cart...</EmptyCartH1>
        ) : (
          <>
            <div>
              <CartHeading />
            </div>

            <SingleCartItem
              cart={cart}
              increase={increase}
              decrease={decrease}
              deleteItem={deleteItem}
            />

            <hr />
            <CartBtns clearCart={clearCart} />

            <CartTotal totalAmount={totalAmount} shippingFee={shippingFee} />
          </>
        )}
      </CartContainer>
    </>
  );
};
export default Cart;
