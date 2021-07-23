import React from "react";
import { formatPrice } from "../../utils/helper";

import {
  CartItem,
  CartItemImgContainer,
  Price,
  SubTotal,
  Delete,
  DeleteBtn,
  CartColorBtn,
} from "./CartElements";

import ChangeItemAmount from "./ChangeQuantity";

const SingleCartItem = ({ cart, increase, decrease, deleteItem }) => {
  return cart?.map((item) => {
    const { id, name, price, image, color, amount } = item;

    return (
      <CartItem key={id}>
        <CartItemImgContainer>
          <img src={image} alt="" />
          <div>
            <h3>{name}</h3>
            <p>
              Color :<CartColorBtn background={color}></CartColorBtn>
            </p>
          </div>
        </CartItemImgContainer>
        <Price>
          <p>{formatPrice(price)}</p>
        </Price>
        <ChangeItemAmount
          amount={amount}
          id={id}
          increase={increase}
          decrease={decrease}
        />
        <SubTotal>
          <p>{formatPrice(price * amount)}</p>
        </SubTotal>
        <Delete>
          <DeleteBtn onClick={() => deleteItem(id)} />
        </Delete>
      </CartItem>
    );
  });
};

export default SingleCartItem;
