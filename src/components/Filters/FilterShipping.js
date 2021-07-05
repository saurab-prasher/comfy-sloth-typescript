import React from "react";
import { useFilterContext } from "../../context/filter_context.js";
import { Shipping } from "./FiltersElements.js";

const FilterShipping = () => {
  const { handleFilters, free_shipping } = useFilterContext();
  return (
    <Shipping className="free-shipping">
      <label htmlFor="freeshipping">Free Shipping</label>
      <input
        onChange={(e) => handleFilters(e, "free_shipping")}
        type="checkbox"
        name="freeshipping"
        id="freeshipping"
      />
    </Shipping>
  );
};

export default FilterShipping;
