import React from "react";
import { useProductsContext } from "../../context/products_context";
import {
  ProductListSection,
  ProductListImage,
  ProductListText,
  ProductListDetailBtn,
} from "./ProductElements";
import { formatPrice } from "../../utils/helper";

const ProductListView = () => {
  const { products } = useProductsContext();
  return products.map((item) => {
    const { id, image, name, description, price } = item;
    return (
      <ProductListSection key={id}>
        <ProductListImage>
          <img src={image} alt="fsd" />
        </ProductListImage>
        <ProductListText>
          <h1>{name}</h1>
          <h3>{formatPrice(price)}</h3>
          <p>{description.slice(0, 150)}</p>
          <ProductListDetailBtn to={`/products/${id}`}>
            Details
          </ProductListDetailBtn>
        </ProductListText>
      </ProductListSection>
    );
  });
};

export default ProductListView;
