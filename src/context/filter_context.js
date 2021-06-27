import React, { useContext } from "react";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value={"hellow"}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
