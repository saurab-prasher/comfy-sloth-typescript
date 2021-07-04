import React from "react";

import { Category } from "./FiltersElements.js";

const FilterCategory = ({ categories }) => {
  return (
    <Category className="category">
      <h3>Category</h3>
      {categories?.map((category, idx) => {
        return (
          <button key={idx} data-name={`${category}`}>
            {category}
          </button>
        );
      })}
    </Category>
  );
};

export default FilterCategory;
