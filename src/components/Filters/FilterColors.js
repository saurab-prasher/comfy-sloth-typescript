import React from "react";

import { useFilterContext } from "../../context/filter_context.js";
import { Colors, FilterColorBtn, SpanBtnAll } from "./FiltersElements.js";
import { FaCheck } from "react-icons/fa";

const FilterColors = ({ colors }) => {
  const { handleFilters, colors: filterColor } = useFilterContext();
  return (
    <Colors className="color">
      <h3>Colors</h3>
      <div>
        {colors?.map((color, idx) =>
          color === "all" ? (
            <SpanBtnAll
              onClick={handleFilters}
              data-name={`${color}`}
              key={idx}
              name="color"
              className={`${filterColor === "all" ? "active-filter" : null}`}
            >
              {color}
            </SpanBtnAll>
          ) : (
            <FilterColorBtn
              key={idx}
              background={color}
              data-name={`${color}`}
              className={`${filterColor === color ? "active-btn" : null}`}
              onClick={(e) => handleFilters(e, "colors")}
            >
              {filterColor === color && <FaCheck />}
            </FilterColorBtn>
          )
        )}
      </div>
    </Colors>
  );
};

export default FilterColors;
