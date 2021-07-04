import React from "react";

import { Price } from "./FiltersElements.js";

import { formatPrice } from "../../utils/helper";

const FilterPrice = ({ value }) => {
  return (
    <Price className="price">
      <label htmlFor="price">Price</label>
      <p>{formatPrice(value)}</p>
      <input
        min="0"
        max="300000"
        // defaultValue={value}
        step="1"
        type="range"
        name="price"
        id="price"
      />
    </Price>
  );
};

export default FilterPrice;
