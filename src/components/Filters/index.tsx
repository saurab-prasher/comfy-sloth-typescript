import {
  FilterContainer,
  FilterClearBtn,
  FilterClear,
} from './FiltersElements';

import { getUniqueValues } from '../../utils/helper';

import FilterForm from './FilterForm';
import FilterCategory from './FilterCategory';
import FilterCompany from './FilterCompany';
import FilterColors from './FilterColors';
import FilterPrice from './FilterPrice';
import FilterShipping from './FilterShipping';

import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

// interface FilterProps {
//   products?: any;
//   filters?: any;
//   resetFilters?: any;
//   settingFilters?: any;
// }

const Filters: React.FC = () => {
  const { filters } = useSelector((state) => state.filter);
  const { products } = useSelector((state) => state.allProducts);
  const { settingFilters, resetFilters } = useActions();

  const categories = getUniqueValues(products, 'category');
  const companies = getUniqueValues(products, 'company');
  const colors = getUniqueValues(products, 'colors');

  return (
    <FilterContainer>
      <FilterForm
        handleFilters={settingFilters}
        searchTerm={filters.searchTerm}
      />

      <FilterCategory
        filterCategory={filters.category}
        handleFilters={settingFilters}
        categories={categories}
      />
      <FilterCompany
        filterCompany={filters.company}
        companies={companies}
        handleFilters={settingFilters}
      />
      <FilterColors
        filterColor={filters.color}
        handleFilters={settingFilters}
        colors={colors}
      />

      <FilterPrice
        maxPrice={filters.maxPrice}
        minPrice={filters.minPrice}
        price={filters.price}
        handleFilters={settingFilters}
      />

      <FilterShipping
        handleFilters={settingFilters}
        freeshipping={filters.freeshipping}
      />

      <FilterClear className='clear'>
        <FilterClearBtn onClick={() => resetFilters()}>
          Clear Filters
        </FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
