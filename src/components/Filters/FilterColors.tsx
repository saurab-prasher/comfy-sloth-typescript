import { Colors, FilterColorBtn, SpanBtnAll } from './FiltersElements';
import { FaCheck } from 'react-icons/fa';

interface FilterColorProps {
  handleFilters: any;
  filterColor: any;
  colors: any;
}

const FilterColors: React.FC<FilterColorProps> = ({
  colors,
  handleFilters,
  filterColor,
}) => {
  return (
    <Colors className='color'>
      <h3>Colors</h3>
      <div>
        {colors?.map((color: string, idx: number) =>
          color === 'all' ? (
            <SpanBtnAll
              onClick={(e) => handleFilters(e)}
              data-color={color}
              key={idx}
              name='color'
              className={`${filterColor === 'all' ? 'active-filter' : null}`}
            >
              {color}
            </SpanBtnAll>
          ) : (
            <FilterColorBtn
              key={idx}
              name='color'
              background={color}
              data-color={color}
              className={`${filterColor === color ? 'active-btn' : null}`}
              onClick={(e) => handleFilters(e, 'colors')}
            >
              {filterColor === color && <FaCheck />}
            </FilterColorBtn>
          )
        )}
      </div>
    </Colors>
  );
};

export default FilterColors;
