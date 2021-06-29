import React from "react";
import { useCartContext } from "../../context/cart_context";

import { formatPrice } from "../../utils/helper";

import {
  CartContainer,
  CartContainerHeadings,
  CartItem,
  CartItemImgContainer,
  CartItemBtnContainer,
  CartItemTotalContainer,
  CartItemTotal,
  Price,
  SubTotal,
  Delete,
  DeleteBtn,
  BtnClear,
  BtnContinue,
  CartItemTotalBtn,
  IncreaseItem,
  DecreaseItem,
  Amount,
  ChangeQuantity,
} from "./CartElements";

import Header from "../Header";

const Cart = ({ stock }) => {
  const {
    cart,
    total_amount,
    deleteItem,
    toggleAmount,
    clearCart,
    shipping_fee,
  } = useCartContext();
  console.log(useCartContext());

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
          <h1>Add Items to cart</h1>
        ) : (
          <>
            <div>
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
            </div>

            {cart?.map((item) => {
              const { id, name, price, image, color, amount } = item;

              return (
                <CartItem key={id}>
                  <CartItemImgContainer>
                    <img src={image} alt="" />
                    <div>
                      <h3>{name}</h3>
                      <p>
                        Color :
                        <button
                          style={{
                            backgroundColor: `${color}`,
                            height: "1.4rem",
                            width: "1.4rem",
                            borderRadius: "50%",
                            display: "inline-block",
                            margin: "0 0.5rem",
                          }}
                        ></button>
                      </p>
                    </div>
                  </CartItemImgContainer>
                  <Price>
                    <p>{formatPrice(price)}</p>
                  </Price>
                  <ChangeQuantity>
                    <DecreaseItem onClick={() => decrease(id, "decrease")}>
                      -
                    </DecreaseItem>
                    <Amount>{amount} </Amount>

                    <IncreaseItem onClick={() => increase(id, "increase")}>
                      +
                    </IncreaseItem>
                  </ChangeQuantity>
                  <SubTotal>
                    <p>{formatPrice(price * amount)}</p>
                  </SubTotal>
                  <Delete>
                    <DeleteBtn onClick={() => deleteItem(id)} />
                  </Delete>
                </CartItem>
              );
            })}

            <hr />
            <CartItemBtnContainer>
              <BtnContinue to="/products">Continue Shopping</BtnContinue>
              <BtnClear onClick={clearCart}>Clear Shopping Cart</BtnClear>
            </CartItemBtnContainer>

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
                  <h2>Order Total:</h2>{" "}
                  <p>{formatPrice(total_amount + shipping_fee)}</p>
                </div>
              </CartItemTotal>
              <CartItemTotalBtn>Login</CartItemTotalBtn>
            </CartItemTotalContainer>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
