import React from "react";
import { ColorsBtn } from "./AddToCartElements";
import { FaCheck } from "react-icons/fa";

const ColorBtn = ({ handleMainColor, mainColor, color }) => {
  return (
    <ColorsBtn
      onClick={() => handleMainColor(color)}
      background={color}
      className={mainColor === color ? "active-btn" : null}
    >
      {mainColor === color && <FaCheck />}
    </ColorsBtn>
  );
};

export default ColorBtn;
