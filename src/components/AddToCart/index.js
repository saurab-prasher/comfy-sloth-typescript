import React, { useState } from "react";
import { useCartContext } from "../../context/cart_context";
import { AddToCartContainer, AddToCartBtn } from "./AddToCartElements";

import ColorsContainer from "./ColorsContainer";
import ChangeItemAmount from "../Cart/ChangeQuantity";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleMainColor = (color) => {
    setMainColor(color);
  };

  const handleAmount = (id = 0, value) => {
    if (value === "increase" && amount < stock) {
      setAmount(amount + 1);
    }
    if ((value === "decrease") & (amount > 1)) {
      setAmount(amount - 1);
    }
  };

  return (
    <AddToCartContainer>
      <ColorsContainer
        colors={colors}
        mainColor={mainColor}
        handleMainColor={handleMainColor}
      />

      <ChangeItemAmount
        singleProduct={true}
        amount={amount}
        decrease={handleAmount}
        increase={handleAmount}
      />
      <AddToCartBtn
        onClick={() => addToCart(id, mainColor, amount, product)}
        to="/cart"
      >
        Add to Cart
      </AddToCartBtn>
    </AddToCartContainer>
  );
};

export default AddToCart;
