import React from "react";

import { Colors, FilterColorBtn, SpanBtnAll } from "./FiltersElements.js";

const FilterColors = ({ colors }) => {
  return (
    <Colors className="color">
      <h3>Colors</h3>
      <div>
        {colors?.map((color, idx) =>
          color === "all" ? (
            <SpanBtnAll key={idx}>{color}</SpanBtnAll>
          ) : (
            <FilterColorBtn
              key={idx}
              background={color}
              data-name={`${color}`}
            />
          )
        )}
      </div>
    </Colors>
  );
};

export default FilterColors;
