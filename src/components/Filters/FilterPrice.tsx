import { Price } from './FiltersElements';

import { formatPrice } from '../../utils/helper';

interface FilterPriceProps {
  handleFilters: any;
  maxPrice: number;
  minPrice: number;
  price: number;
}

const FilterPrice: React.FC<FilterPriceProps> = ({
  handleFilters,
  maxPrice,
  minPrice,
  price,
}) => {
  return (
    <Price className='price'>
      <label htmlFor='price'>Price</label>
      <p>{formatPrice(price || maxPrice)}</p>
      <input
        onChange={(e) => handleFilters(e)}
        min={minPrice}
        max={maxPrice}
        value={price || maxPrice}
        step='20'
        type='range'
        name='price'
        id='price'
      />
    </Price>
  );
};

export default FilterPrice;
