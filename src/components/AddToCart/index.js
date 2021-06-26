import React, { useState } from "react";
import {
  AddToCartAmount,
  AddToCartContainer,
  AddToCartIncBtn,
  AddToCartDecBtn,
  AddToCartBtn,
  AddToCartSection,
} from "./AddToCartElements";

const AddToCart = ({ stock }) => {
  const [count, setCount] = useState(1);
  const handleCount = (value) => {
    if (value === "increment" && count < stock) {
      setCount(count + 1);
    }
    if ((value === "decrement") & (count > 1)) {
      setCount(count - 1);
    }
  };
  return (
    <AddToCartContainer>
      <AddToCartSection>
        <AddToCartDecBtn onClick={() => handleCount("decrement")}>
          -
        </AddToCartDecBtn>
        <AddToCartAmount>{count}</AddToCartAmount>
        <AddToCartIncBtn onClick={() => handleCount("increment")}>
          +
        </AddToCartIncBtn>
      </AddToCartSection>
    </AddToCartContainer>
  );
};

export default AddToCart;
