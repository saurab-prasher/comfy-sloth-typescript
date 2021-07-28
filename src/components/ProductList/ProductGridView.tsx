import { ProductGridSection } from './ProductElements';

import Card from '../Card';

interface ProductView {
  products: any[];
}

const ProductGridView: React.FC<ProductView> = ({ products }) => {
  return (
    <ProductGridSection>
      {products?.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </ProductGridSection>
  );
};

export default ProductGridView;
