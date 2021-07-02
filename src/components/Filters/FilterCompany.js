import React from "react";
import { Company } from "./FiltersElements.js";

const FilterCompany = ({ company }) => {
  return (
    <Company className="company">
      <h3>Company</h3>
      <select name="company" id="company">
        {company.map((company, idx) => {
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
