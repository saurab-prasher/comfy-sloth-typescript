import React from "react";

import {
  FilterContainer,
  FilterFormContainer,
  FilterCategory,
  FilterCompany,
  FilterColors,
  FilterPrice,
  FilterShipping,
  FilterClearBtn,
  FilterClear,
  FilterColorBtn,
  SpanBtnAll,
} from "./FiltersElements.js";

import { getUniqueValues } from "../../utils/helper";

const Filters = ({ products }) => {
  const category = getUniqueValues(products, "category");
  const company = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  console.log(colors);
  return (
    <FilterContainer>
      <FilterFormContainer className="form">
        <form>
          <input placeholder="Search" type="text" />
        </form>
      </FilterFormContainer>

      <FilterCategory className="category">
        <h3>Category</h3>
        {category?.map((item, idx) => {
          return (
            <button key={idx} data-name={`${item}`}>
              {item}
            </button>
          );
        })}
      </FilterCategory>

      <FilterCompany className="company">
        <h3>Company</h3>
        <select name="company" id="company">
          {company.map((item, idx) => {
            return (
              <option key={idx} data-name={`${item}`} value={`${item}`}>
                {item}
              </option>
            );
          })}
        </select>
      </FilterCompany>

      <FilterColors className="color">
        <h3>Colors</h3>
        <div>
          {colors.map((item, idx) =>
            item === "all" ? (
              <SpanBtnAll>{item}</SpanBtnAll>
            ) : (
              <FilterColorBtn
                key={idx}
                background={item}
                data-name={`${item}`}
              />
            )
          )}
        </div>
      </FilterColors>

      <FilterPrice className="price">
        <label htmlFor="price">Price</label>
        <p>$3,339.99</p>
        <input type="range" name="price" id="price" />
      </FilterPrice>

      <FilterShipping className="free-shipping">
        <label htmlFor="freeshipping">Free Shipping</label>
        <input type="checkbox" name="freeshipping" id="freeshipping" />
      </FilterShipping>
      <FilterClear className="clear">
        <FilterClearBtn>Clear Filters</FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
