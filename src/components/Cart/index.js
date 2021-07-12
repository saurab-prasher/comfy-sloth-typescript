import React from "react";
import { useCartContext } from "../../context/cart_context";
import { CartContainer } from "./CartElements";

import Header from "../Header";
import CartHeading from "./CartHeading";
import SingleCartItem from "./SingleCartItem";
import CartTotal from "./CartTotal";
import CartBtns from "./CartBtns";

const Cart = () => {
  const {
    cart,
    total_amount,
    deleteItem,
    toggleAmount,
    clearCart,
    shipping_fee,
  } = useCartContext();

  const increase = (id, value) => {
    toggleAmount(id, value);
  };
  const decrease = (id, value) => {
    toggleAmount(id, value);
  };

  return (
    <>
      <Header location="cart" />
      <CartContainer>
        {cart?.length === 0 ? (
          <h1
            style={{
              fontSize: "3rem",
              margin: "4rem 2rem",
              height: "50rem",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Add Items to the cart...
          </h1>
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

            <CartTotal
              total_amount={total_amount}
              shipping_fee={shipping_fee}
            />
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
