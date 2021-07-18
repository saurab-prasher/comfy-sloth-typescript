import React from "react";

import { FilterFormContainer } from "./FiltersElements.js";
const FilterForm = ({ handleFilters, searchTerm }) => {
  return (
    <FilterFormContainer className="form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => handleFilters(e)}
          placeholder="Search"
          type="text"
          name="search_term"
          value={searchTerm || ""}
        />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
