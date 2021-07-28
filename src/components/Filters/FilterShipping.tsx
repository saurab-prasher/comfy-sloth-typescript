import { Shipping } from './FiltersElements';

interface FilterShippingProps {
  handleFilters: any;
  freeshipping: boolean;
}

const FilterShipping: React.FC<FilterShippingProps> = ({
  handleFilters,
  freeshipping,
}) => {
  return (
    <Shipping className='free-shipping'>
      <label htmlFor='freeshipping'>Free Shipping</label>
      <input
        onChange={(e) => handleFilters(e)}
        type='checkbox'
        name='freeshipping'
        id='freeshipping'
        checked={freeshipping}
      />
    </Shipping>
  );
};

export default FilterShipping;
