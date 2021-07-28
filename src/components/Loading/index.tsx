import React from 'react';

import { Loader } from './LoadingElements';

interface LoadingProps {
  mainPage?: boolean;
  productList?: boolean;
  singleProduct?: boolean;
}
const Loading: React.FC<LoadingProps> = ({
  mainPage,
  productList,
  singleProduct,
}) => {
  return (
    <Loader
      mainPage={mainPage}
      productList={productList}
      singleProduct={singleProduct}
    />
  );
};

export default Loading;
