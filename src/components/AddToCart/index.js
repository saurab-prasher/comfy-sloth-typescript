import React, { useState } from "react";
import { useCartContext } from "../../context/cart_context";
import {
  AddToCartAmount,
  AddToCartContainer,
  AddToCartIncBtn,
  AddToCartDecBtn,
  AddToCartSection,
  AddToCartBtn,
  ColorsBtn,
  ColorsContainer,
} from "./AddToCartElements";

import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { name, id, colors, stock, images, price: _price } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const { test } = useCartContext();
  const price = _price / 100;

  const image = images[0].thumbnails.large.url;

  const handleAmount = (value) => {
    if (value === "increment" && amount < stock) {
      setAmount(amount + 1);
    }
    if ((value === "decrement") & (amount > 1)) {
      setAmount(amount - 1);
    }
  };
  const handleAddToCartClick = () => {
    test({
      name,
      price,
      stock,
      image,
      id,
      mainColor,
      amount,
      subTotal: amount * price,
    });
  };

  return (
    <AddToCartContainer>
      <ColorsContainer>
        <p> Colors: </p>
        {colors.map((color, index) => {
          return (
            <ColorsBtn
              onClick={() => setMainColor(color)}
              key={index}
              background={color}
              className={mainColor === color ? "active-btn" : null}
            >
              {mainColor === color && <FaCheck />}
            </ColorsBtn>
          );
        })}
      </ColorsContainer>
      <AddToCartSection>
        <AddToCartDecBtn onClick={() => handleAmount("decrement")}>
          -
        </AddToCartDecBtn>
        <AddToCartAmount>{amount}</AddToCartAmount>
        <AddToCartIncBtn onClick={() => handleAmount("increment")}>
          +
        </AddToCartIncBtn>
      </AddToCartSection>
      <AddToCartBtn onClick={() => handleAddToCartClick()} to="/cart">
        Add to Cart
      </AddToCartBtn>
    </AddToCartContainer>
  );
};

export default AddToCart;
