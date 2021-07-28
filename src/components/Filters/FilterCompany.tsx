import { Company } from './FiltersElements';

interface FilterCompanyProps {
  handleFilters: any;
  filterCompany: any;
  companies: any;
}

const FilterCompany: React.FC<FilterCompanyProps> = ({
  companies,
  handleFilters,
  filterCompany,
}) => {
  return (
    <Company className='company'>
      <h3>Company</h3>
      <select
        value={filterCompany || ''}
        onChange={(e) => handleFilters(e)}
        name='company'
        id='company'
      >
        {companies.map((company: string, idx: number) => {
          return (
            <option key={idx} data-name={`${company}`} value={`${company}`}>
              {company}
            </option>
          );
        })}
      </select>
    </Company>
  );
};

export default FilterCompany;
