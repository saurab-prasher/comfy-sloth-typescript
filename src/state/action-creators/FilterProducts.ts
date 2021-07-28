import { ActionTypes } from '../action-types';

export const filteringProducts = () => {
  return {
    type: ActionTypes.FILTERING_PRODUCTS,
  };
};

export const loadProducts = (products: any) => {
  return {
    type: ActionTypes.LOAD_PRODUCTS,
    payload: products,
  };
};

//! PASS ONLY KEY AND VALUE NOT THE event handler
export const settingFilters = (e: any) => {
  let filterKey = e.target.name || e.target.dataset.color;
  let filterValue =
    e.target.value ||
    e.target.textContent ||
    e.target.getAttribute('data-color');

  if (filterKey === 'freeshipping') {
    filterValue = e?.target.checked;
  }

  return {
    type: ActionTypes.SETTING_FILTERS,
    payload: { filterKey, filterValue },
  };
};

export const resetFilters = () => {
  return {
    type: ActionTypes.RESET_FILTERS,
  };
};
