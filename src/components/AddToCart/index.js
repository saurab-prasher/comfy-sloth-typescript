import React, { useState } from "react";
import {
  AddToCartAmount,
  AddToCartContainer,
  AddToCartIncBtn,
  AddToCartDecBtn,
  AddToCartSection,
} from "./AddToCartElements";

const AddToCart = ({ stock, handleCount, count }) => {
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
