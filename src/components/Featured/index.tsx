import {
  FeaturedContainer,
  FeaturedH2,
  Line,
  FeaturedInner,
  FeaturedBtn,
  FeaturedCards,
} from './FeaturesElements';

import Loading from '../Loading';
import Card from '../Card';

import { useSelector } from '../../hooks/useTypedSelector';

// interface FeaturedProps {
//   featured?: any[];
//   loading?: boolean;
//   error?: boolean;
// }

const Featured: React.FC = () => {
  const {
    featuredProducts: featured,
    loading,
    error,
  } = useSelector((state) => state.allProducts);
  if (error) {
    return (
      <FeaturedContainer>
        <h1>SomeThing Went Wrong!!</h1>;
      </FeaturedContainer>
    );
  } else {
    return (
      <FeaturedContainer>
        {loading ? (
          <Loading mainPage={true} />
        ) : (
          <FeaturedInner>
            <FeaturedH2>Featured Products</FeaturedH2>
            <Line />
            <FeaturedCards>
              {featured?.slice(0, 3).map((item: any) => {
                return <Card key={item.id} {...item} />;
              })}
            </FeaturedCards>
            <FeaturedBtn to='/products'>All Products</FeaturedBtn>
          </FeaturedInner>
        )}
      </FeaturedContainer>
    );
  }
};

export default Featured;
