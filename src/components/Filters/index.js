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
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  const [value, setValue] = useState(50000);

  return (
    <FilterContainer>
      <FilterForm />

      <FilterCategory categories={categories} />
      <FilterCompany companies={companies} />
      <FilterColors colors={colors} />

      <FilterPrice value={value} />

      <FilterShipping />

      <FilterClear className="clear">
        <FilterClearBtn>Clear Filters</FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
