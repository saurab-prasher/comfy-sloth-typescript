import React from "react";
import { useFilterContext } from "../../context/filter_context.js";
import { Price } from "./FiltersElements.js";

import { formatPrice } from "../../utils/helper";

const FilterPrice = () => {
  const {
    handleFilters,

    filters: { price, max_price, min_price },
  } = useFilterContext();

  return (
    <Price className="price">
      <label htmlFor="price">Price</label>
      <p>{formatPrice(price || max_price)}</p>
      <input
        onChange={(e) => handleFilters(e)}
        min={min_price}
        max={max_price}
        value={price || max_price}
        step="20"
        type="range"
        name="price"
        id="price"
      />
    </Price>
  );
};

export default FilterPrice;
