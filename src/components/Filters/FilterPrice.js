import React from "react";
import { Price } from "./FiltersElements.js";

import { formatPrice } from "../../utils/helper";

const FilterPrice = ({ handleFilters, maxPrice, minPrice, price }) => {
  return (
    <Price className="price">
      <label htmlFor="price">Price</label>
      <p>{formatPrice(price || maxPrice)}</p>
      <input
        onChange={(e) => handleFilters(e)}
        min={minPrice}
        max={maxPrice}
        value={price || maxPrice}
        step="20"
        type="range"
        name="price"
        id="price"
      />
    </Price>
  );
};

export default FilterPrice;
