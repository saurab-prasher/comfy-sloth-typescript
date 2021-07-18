import React from "react";
import { Shipping } from "./FiltersElements.js";

const FilterShipping = ({ handleFilters, freeshipping }) => {
  return (
    <Shipping className="free-shipping">
      <label htmlFor="freeshipping">Free Shipping</label>
      <input
        onChange={(e) => handleFilters(e)}
        type="checkbox"
        name="freeshipping"
        id="freeshipping"
        checked={freeshipping}
      />
    </Shipping>
  );
};

export default FilterShipping;
