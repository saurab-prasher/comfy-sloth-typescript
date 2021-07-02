import React from "react";
import { Shipping } from "./FiltersElements.js";

const FilterShipping = () => {
  return (
    <Shipping className="free-shipping">
      <label htmlFor="freeshipping">Free Shipping</label>
      <input type="checkbox" name="freeshipping" id="freeshipping" />
    </Shipping>
  );
};

export default FilterShipping;
