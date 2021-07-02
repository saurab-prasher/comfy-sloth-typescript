import React, { useState } from "react";

import {
  FilterContainer,
  FilterClearBtn,
  FilterClear,
} from "./FiltersElements.js";

import { getUniqueValues } from "../../utils/helper";

import FilterForm from "./FilterForm.js";
import FilterCategory from "./FilterCategory.js";
import FilterCompany from "./FilterCompany.js";
import FilterColors from "./FilterColors.js";
import FilterPrice from "./FilterPrice.js";
import FilterShipping from "./FilterShipping.js";

const Filters = ({ products }) => {
  const category = getUniqueValues(products, "category");
  const company = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(50000);

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
  };

  const handlePrice = (value) => {
    setValue(value);
  };

  return (
    <FilterContainer>
      <FilterForm searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />

      <FilterCategory category={category} />
      <FilterCompany company={company} />
      <FilterColors colors={colors} />

      <FilterPrice value={value} handlePrice={handlePrice} />

      <FilterShipping />

      <FilterClear className="clear">
        <FilterClearBtn>Clear Filters</FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
