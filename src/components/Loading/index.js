import React from "react";

import { Loader } from "./LoadingElements";
const Loading = ({ mainPage, productList, singleProduct }) => {
  return (
    <Loader
      mainPage={mainPage}
      productList={productList}
      singleProduct={singleProduct}
    />
  );
};

export default Loading;
