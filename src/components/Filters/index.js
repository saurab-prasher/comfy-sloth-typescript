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

import { connect } from "react-redux";
import { settingFilters } from "../../actions/index.js";
import { resetFilters } from "../../actions/index.js";

const Filters = ({ products, filters, resetFilters, settingFilters }) => {
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  return (
    <FilterContainer>
      <FilterForm
        handleFilters={settingFilters}
        searchTerm={filters.search_term}
      />

      <FilterCategory
        filterCategory={filters.category}
        handleFilters={settingFilters}
        categories={categories}
      />
      <FilterCompany
        filterCompany={filters.company}
        companies={companies}
        handleFilters={settingFilters}
      />
      <FilterColors
        filterColor={filters.color}
        handleFilters={settingFilters}
        colors={colors}
      />

      <FilterPrice
        maxPrice={filters.max_price}
        minPrice={filters.min_price}
        price={filters.price}
        handleFilters={settingFilters}
      />

      <FilterShipping
        handleFilters={settingFilters}
        freeshipping={filters.freeshipping}
      />

      <FilterClear className="clear">
        <FilterClearBtn onClick={() => resetFilters()}>
          Clear Filters
        </FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filter.filters,
    products: state.products.products,
  };
};
export default connect(mapStateToProps, {
  resetFilters,
  settingFilters,
})(Filters);
