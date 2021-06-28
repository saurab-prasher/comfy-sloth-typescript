import React, { useState } from "react";
import { useCartContext } from "../../context/cart_context";

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

const Cart = ({ stock }) => {
  const { product } = useCartContext();

  return (
    <CartContainer>
      {product.length === 0 ? (
        <h1>Add Items to cart</h1>
      ) : (
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

          {product.map((item) => {
            const { id, name, price, image, mainColor, amount, subTotal } =
              item;
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
                          backgroundColor: `${mainColor}`,
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
                  <p>${price}</p>
                </Price>
                <ChangeQuantity>
                  <DecreaseItem>-</DecreaseItem>
                  <Amount>{amount} </Amount>

                  <IncreaseItem>+</IncreaseItem>
                </ChangeQuantity>
                <SubTotal>
                  <p>${subTotal}</p>
                </SubTotal>
                <Delete>
                  <DeleteBtn />
                </Delete>
              </CartItem>
            );
          })}

          <hr />
          <CartItemBtnContainer>
            <BtnContinue>Continue Shopping</BtnContinue>
            <BtnClear>Clear Shopping Cart</BtnClear>
          </CartItemBtnContainer>

          <CartItemTotalContainer>
            <CartItemTotal>
              <div>
                <h3>Subtotal: </h3>
                <p> $1,030.97</p>
              </div>
              <div>
                <p>Shipping Fee: </p>
                <p> $5.34 </p>
              </div>
              <hr />
              <div>
                <h2>Order Total:</h2> <p>$1,036.31</p>
              </div>
            </CartItemTotal>
            <CartItemTotalBtn>Login</CartItemTotalBtn>
          </CartItemTotalContainer>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
