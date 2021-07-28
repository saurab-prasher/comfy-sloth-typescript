interface SortProps {
  sort: string;
  updateSort: () => void;
}
const Sort: React.FC<SortProps> = ({ sort, updateSort }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='sort'>
      <label style={{ marginRight: '1.5rem' }} htmlFor='sort'>
        Sort By
      </label>
      <select value={sort} onChange={updateSort} name='sort' id='sort'>
        <option value='price-lowest'>Price (Lowest)</option>
        <option value='price-highest'>Price (Highest)</option>
        <option value='name-a'>Name (A-Z)</option>
        <option value='name-z'>Name (Z-A)</option>
      </select>
    </form>
  );
};

export default Sort;
