import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  deleteItem,
  clearCart,
  toggleCartItem,
  countCartTotals,
} from "../../actions";

import { CartContainer } from "./CartElements";
import Header from "../Header";
import CartHeading from "./CartHeading";
import SingleCartItem from "./SingleCartItem";
import CartTotal from "./CartTotal";
import CartBtns from "./CartBtns";

const Cart = ({
  deleteItem,
  clearCart,
  cart,
  shippingFee,
  TotalAmount,
  countCartTotals,
  toggleCartItem,
}) => {
  useEffect(() => {
    countCartTotals();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increase = (id, value) => {
    toggleCartItem(id, value);
  };
  const decrease = (id, value) => {
    toggleCartItem(id, value);
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

            <CartTotal total_amount={TotalAmount} shipping_fee={shippingFee} />
          </>
        )}
      </CartContainer>
    </>
  );
};

const mapToStateProps = (state) => {
  return {
    cart: state.cart.cart,
    shippingFee: state.cart.shipping_fee,
    totamAmount: state.cart.total_amount,
    totalCartItems: state.cart.total_items,
  };
};

export default connect(mapToStateProps, {
  deleteItem,
  clearCart,
  toggleCartItem,
  countCartTotals,
})(Cart);
