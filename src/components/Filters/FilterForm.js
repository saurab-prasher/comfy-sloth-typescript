import React from "react";

import { FilterFormContainer } from "./FiltersElements.js";

const FilterForm = ({ searchTerm, handleSearchTerm }) => {
  return (
    <FilterFormContainer className="form">
      <form>
        <input
          onChange={(e) => handleSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
          type="text"
        />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
