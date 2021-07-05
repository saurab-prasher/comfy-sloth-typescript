import React from "react";
import { useFilterContext } from "../../context/filter_context.js";

import { Category } from "./FiltersElements.js";

const FilterCategory = ({ categories }) => {
  const { handleFilters } = useFilterContext();

  return (
    <Category className="category">
      <h3>Category</h3>
      {categories?.map((category, idx) => {
        return (
          <button
            onClick={(e) => handleFilters(e, "category")}
            key={idx}
            data-name={`${category}`}
          >
            {category}
          </button>
        );
      })}
    </Category>
  );
};

export default FilterCategory;
