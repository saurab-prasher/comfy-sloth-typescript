import React from "react";

import { Price } from "./FiltersElements.js";

import { formatPrice } from "../../utils/helper";

const FilterPrice = ({ value, handlePrice }) => {
  return (
    <Price className="price">
      <label htmlFor="price">Price</label>
      <p>{formatPrice(value)}</p>
      <input
        min="0"
        max="300000"
        defaultValue={value}
        step="1"
        onChange={(e) => handlePrice(e.target.value)}
        type="range"
        name="price"
        id="price"
      />
    </Price>
  );
};

export default FilterPrice;
