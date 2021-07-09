import React from "react";
import { useFilterContext } from "../../context/filter_context.js";

import { FilterFormContainer } from "./FiltersElements.js";
const FilterForm = () => {
  const { handleFilters, search_term } = useFilterContext();
  return (
    <FilterFormContainer className="form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleFilters}
          placeholder="Search"
          type="text"
          name="search_term"
          value={search_term}
        />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
