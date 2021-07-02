import React from "react";

const Sort = () => {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort By</label>
      <select name="sort" id="sort">
        <option value="lowest">Price (Lowest)</option>
        <option value="highest">Price (Highest)</option>
        <option value="a-z">Name (A-Z)</option>
        <option value="z-a">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default Sort;
