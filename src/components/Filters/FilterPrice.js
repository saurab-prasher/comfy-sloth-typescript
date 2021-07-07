import React from "react";
import { useFilterContext } from "../../context/filter_context.js";
import { Price } from "./FiltersElements.js";

import { formatPrice } from "../../utils/helper";

const FilterPrice = () => {
  const { handleFilters, max_range_value, price } = useFilterContext();

  return (
    <Price className="price">
      <label htmlFor="price">Price</label>
      <p>{formatPrice(price || max_range_value)}</p>
      <input
        onChange={handleFilters}
        min="0"
        max={`${max_range_value}`}
        defaultValue={price || max_range_value}
        step="20"
        type="range"
        name="price"
        id="price"
      />
    </Price>
  );
};

export default FilterPrice;
