import React from "react";

import { Loader } from "./LoadingElements";
const Loading = ({ main, productList }) => {
  return <Loader main={main} productList={productList} />;
};

export default Loading;
