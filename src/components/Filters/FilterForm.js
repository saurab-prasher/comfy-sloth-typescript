import React from "react";

import { FilterFormContainer } from "./FiltersElements.js";

const FilterForm = ({ searchTerm }) => {
  return (
    <FilterFormContainer className="form">
      <form>
        <input placeholder="Search" type="text" />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
