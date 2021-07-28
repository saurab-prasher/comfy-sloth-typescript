import { Category } from './FiltersElements';

interface FilterCategoryProps {
  handleFilters: any;
  filterCategory: any;
  categories: any;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  categories,
  handleFilters,
  filterCategory,
}) => {
  return (
    <Category className='category'>
      <h3>Category</h3>
      {categories?.map((category: string, idx: number) => {
        return (
          <button
            onClick={(e) => handleFilters(e)}
            key={idx}
            name='category'
            className={`${
              filterCategory === category ? 'active-filter' : null
            }  `}
          >
            {category}
          </button>
        );
      })}
    </Category>
  );
};

export default FilterCategory;
