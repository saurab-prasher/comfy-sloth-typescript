import React from "react";
import { useFilterContext } from "../../context/filter_context.js";
import { Shipping } from "./FiltersElements.js";

const FilterShipping = () => {
  const { handleFilters } = useFilterContext();
  return (
    <Shipping className="free-shipping">
      <label htmlFor="freeshipping">Free Shipping</label>
      <input
        onChange={handleFilters}
        type="checkbox"
        name="freeshipping"
        id="freeshipping"
      />
    </Shipping>
  );
};

export default FilterShipping;
