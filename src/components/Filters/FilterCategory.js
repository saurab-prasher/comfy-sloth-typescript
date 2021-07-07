import React from "react";
import { useFilterContext } from "../../context/filter_context.js";

import { Category } from "./FiltersElements.js";

const FilterCategory = ({ categories }) => {
  const {
    handleFilters,
    filters: { category: filterCategory },
  } = useFilterContext();
  return (
    <Category className="category">
      <h3>Category</h3>
      {categories?.map((category, idx) => {
        return (
          <button
            onClick={handleFilters}
            key={idx}
            name="category"
            className={`${
              filterCategory === category ? "active-filter" : null
            }  `}
          >
            {category}
          </button>
        );
      })}
    </Category>
  );
};

export default FilterCategory;
