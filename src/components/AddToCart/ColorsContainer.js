import React from "react";

import { ColorContainer } from "./AddToCartElements";

import ColorBtn from "./ColorBtn";

const ColorsContainer = ({ colors, handleMainColor, mainColor }) => {
  return (
    <ColorContainer>
      <p> Colors: </p>
      {colors.map((color, index) => {
        return (
          <ColorBtn
            key={index}
            color={color}
            handleMainColor={handleMainColor}
            mainColor={mainColor}
          />
        );
      })}
    </ColorContainer>
  );
};

export default ColorsContainer;
