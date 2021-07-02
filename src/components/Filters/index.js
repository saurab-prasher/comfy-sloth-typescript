import React, { useState } from "react";

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

import { formatPrice, getUniqueValues } from "../../utils/helper";
const Filters = ({ products }) => {
  const category = getUniqueValues(products, "category");
  const company = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(50000);

  return (
    <FilterContainer>
      <FilterFormContainer className="form">
        <form>
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            placeholder="Search"
            type="text"
          />
        </form>
      </FilterFormContainer>

      <FilterCategory className="category">
        <h3>Category</h3>
        {category?.map((category, idx) => {
          return (
            <button key={idx} data-name={`${category}`}>
              {category}
            </button>
          );
        })}
      </FilterCategory>

      <FilterCompany className="company">
        <h3>Company</h3>
        <select name="company" id="company">
          {company.map((company, idx) => {
            return (
              <option key={idx} data-name={`${company}`} value={`${company}`}>
                {company}
              </option>
            );
          })}
        </select>
      </FilterCompany>

      <FilterColors className="color">
        <h3>Colors</h3>
        <div>
          {colors.map((color, idx) =>
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
      </FilterColors>

      <FilterPrice className="price">
        <label htmlFor="price">Price</label>
        <p>{formatPrice(value)}</p>
        <input
          min="0"
          max="300000"
          defaultValue={value}
          step="1"
          onChange={(e) => setValue(e.target.value)}
          type="range"
          name="price"
          id="price"
        />
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
