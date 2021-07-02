import React from "react";

import {
  IncreaseItem,
  DecreaseItem,
  Amount,
  ChangeQuantity,
} from "./CartElements";
const ChangeItemAmount = ({
  amount,
  increase,
  decrease,
  id,
  singleProduct,
}) => {
  return (
    <ChangeQuantity singleProduct={singleProduct}>
      <DecreaseItem onClick={() => decrease(id, "decrease")}>-</DecreaseItem>
      <Amount>{amount} </Amount>

      <IncreaseItem onClick={() => increase(id, "increase")}>+</IncreaseItem>
    </ChangeQuantity>
  );
};

export default ChangeItemAmount;
