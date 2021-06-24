import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import Data from "../Data";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [list, setList] = useState(Data);

  return (
    <FilterContext.Provider value={{ list }}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
