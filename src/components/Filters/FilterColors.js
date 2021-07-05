import React from "react";

import { useFilterContext } from "../../context/filter_context.js";
import { Colors, FilterColorBtn, SpanBtnAll } from "./FiltersElements.js";
const FilterColors = ({ colors }) => {
  const { handleFilters } = useFilterContext();
  return (
    <Colors className="color">
      <h3>Colors</h3>
      <div>
        {colors?.map((color, idx) =>
          color === "all" ? (
            <SpanBtnAll
              onClick={(e) => handleFilters(e, "all")}
              data-name={`${color}`}
              key={idx}
            >
              {color}
            </SpanBtnAll>
          ) : (
            <FilterColorBtn
              key={idx}
              background={color}
              data-name={`${color}`}
              onClick={(e) => handleFilters(e, "colors")}
            />
          )
        )}
      </div>
    </Colors>
  );
};

export default FilterColors;
