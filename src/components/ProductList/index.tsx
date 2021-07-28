import { ProductListContainer, NotFoundH1 } from './ProductElements';

import Header from '../Header';
import ProductGridView from './ProductGridView';
import ProductGridBtns from './ProductGridBtns';
import ProductListView from './ProductListView';
import Filters from '../Filters';
import Loading from '../Loading';

import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

// interface ProductListProps {
//   products?: any;
//   sort?: any;
//   loading?: any;
//   view?: any;
//   handleProductView?: any;
//   updateSort?: any;
// }

const ProductList: React.FC = () => {
  const { loading, error } = useSelector((state) => state.allProducts);

  const { productsView, sort, filterProducts } = useSelector(
    (state) => state.filter
  );

  const { updateSort, changeView } = useActions();

  if (error) {
    return <h1>Something Went Wrong!</h1>;
  }

  return (
    <>
      <Header location='products' />
      <ProductListContainer>
        <Filters />
        {loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns
              products={filterProducts}
              updateSort={updateSort}
              sort={sort}
              handleProductView={changeView}
              view={productsView}
            />

            {filterProducts.length < 1 ? (
              <NotFoundH1>Sorry, no products matched your search.</NotFoundH1>
            ) : productsView === 'grid' ? (
              <ProductGridView products={filterProducts} />
            ) : (
              <ProductListView products={filterProducts} />
            )}
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
