import React from "react";

import { Category } from "./FiltersElements.js";

const FilterCategory = ({ categories, handleFilters, filterCategory }) => {
  return (
    <Category className="category">
      <h3>Category</h3>
      {categories?.map((category, idx) => {
        return (
          <button
            onClick={(e) => handleFilters(e)}
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
