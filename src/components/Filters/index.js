import React from "react";

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
import { useFilterContext } from "../../context/filter_context.js";

const Filters = ({ products }) => {
  const { resetFilters } = useFilterContext();
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  return (
    <FilterContainer>
      <FilterForm />

      <FilterCategory categories={categories} />
      <FilterCompany companies={companies} />
      <FilterColors colors={colors} />

      <FilterPrice />

      <FilterShipping />

      <FilterClear onClick={resetFilters} className="clear">
        <FilterClearBtn>Clear Filters</FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
