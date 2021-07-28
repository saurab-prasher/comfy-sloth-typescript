import { CartContainerHeadings } from './CartElements';

const CartHeading = () => {
  return (
    <>
      <CartContainerHeadings>
        <div>
          <p>Item</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Subtotal</p>
        </div>
      </CartContainerHeadings>
      <hr />
    </>
  );
};

export default CartHeading;
