import { FilterFormContainer } from './FiltersElements';

interface FilterFormProps {
  handleFilters: any;
  searchTerm: string;
}
const FilterForm: React.FC<FilterFormProps> = ({
  handleFilters,
  searchTerm,
}) => {
  return (
    <FilterFormContainer className='form'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => handleFilters(e)}
          placeholder='Search'
          type='text'
          name='searchTerm'
          value={searchTerm || ''}
        />
      </form>
    </FilterFormContainer>
  );
};

export default FilterForm;
