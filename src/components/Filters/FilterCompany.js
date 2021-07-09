import React from "react";
import { Company } from "./FiltersElements.js";
import { useFilterContext } from "../../context/filter_context.js";
const FilterCompany = ({ companies }) => {
  const { handleFilters } = useFilterContext();

  return (
    <Company className="company">
      <h3>Company</h3>
      <select onChange={handleFilters} name="company" id="company">
        {companies.map((company, idx) => {
          return (
            <option key={idx} data-name={`${company}`} value={`${company}`}>
              {company}
            </option>
          );
        })}
      </select>
    </Company>
  );
};

export default FilterCompany;
