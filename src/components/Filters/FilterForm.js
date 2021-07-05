import React from "react";
import { useFilterContext } from "../../context/filter_context.js";

import { FilterFormContainer } from "./FiltersElements.js";
const FilterForm = () => {
  const { handleFilters } = useFilterContext();
  return (
    <FilterFormContainer className="form">
      <form>
        <input
          onChange={(e) => handleFilters(e, "search_term")}
          placeholder="Search"
          type="text"
        />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
