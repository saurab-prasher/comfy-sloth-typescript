import React, { useEffect } from "react";
import { useProductsContext } from "../../context/products_context";

import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/helper";

import Header from "../Header";
import Loading from "../Loading";
import Stars from "./Stars";
import AddToCart from "../AddToCart";
import Gallery from "../Gallery";

import {
  SinglePageH1,
  SinglePageImg,
  SinglePageText,
  SinglePageMain,
  ReviewsContainer,
  Price,
  Description,
  ProductName,
} from "./SinglePageElements";

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SinglePage = () => {
  const {
    fetchSingleProduct,
    single_product_loading,
    single_product_error,
    single_product: product,
  } = useProductsContext();

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  const {
    name,
    images,
    stars,
    price,
    description,
    id: SKU,
    company,
    reviews,
    stock,
  } = product;

  console.log(product);

  return (
    <>
      {single_product_loading ? (
        <Loading singleProduct={true} />
      ) : (
        <>
          <Header location="Products">
            <ProductName>{name}</ProductName>
          </Header>
          <SinglePageMain>
            <SinglePageImg>
              <Gallery images={images} />
            </SinglePageImg>
            <SinglePageText>
              <SinglePageH1>{name}</SinglePageH1>
              <ReviewsContainer>
                <Stars stars={stars} />
                <p>{reviews} Customer reviews)</p>
              </ReviewsContainer>
              <Price> {formatPrice(price)}</Price>
              <Description>{description}</Description>
              <ul>
                <li>Available: {stock > 0 ? "In Stock" : "out of stock"}</li>
                <li>SKU: {SKU}</li>
                <li>Brand: {company}</li>
                <hr />
              </ul>

              {stock > 0 && <AddToCart product={product} />}
            </SinglePageText>
          </SinglePageMain>
        </>
      )}
    </>
  );
};

export default SinglePage;
