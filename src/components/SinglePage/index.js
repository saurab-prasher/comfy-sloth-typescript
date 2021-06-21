import React from "react";
import { useParams } from "react-router-dom";
import {
  SinglePageHeader,
  SinglePageH1,
  HomeLink,
  SinglePageImg,
  SinglePageText,
  SinglePageMain,
  ReviewsContainer,
  HeaderInner,
  Price,
  Description,
  AddToCartBtn,
  Products,
  Star,
} from "./SinglePageElements";
import Data from "../../Data";
import Gallery from "../Gallery";

const SinglePage = () => {
  const { id } = useParams();
  const Product = Data.find((item) => item.id === Number(id));
  return (
    <>
      <SinglePageHeader>
        <HeaderInner>
          <HomeLink to="/">Home</HomeLink> / <Products>Products</Products> /
          {Product.heading}
        </HeaderInner>
      </SinglePageHeader>

      <SinglePageMain>
        <SinglePageImg>
          <Gallery src={Product.img.default} />
        </SinglePageImg>

        <SinglePageText>
          <SinglePageH1>{Product.heading}</SinglePageH1>
          <ReviewsContainer>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>({Product.reviews} Customer reviews)</p>
          </ReviewsContainer>
          <Price>$ {Product.price}</Price>
          <Description>{Product.description}</Description>

          <ul>
            <li>Available: {Product.available}</li>
            <li>SKU: {Product.SKU}</li>
            <li>Brand: {Product?.company}</li>
            <li>Colors: {Product.color}</li>
          </ul>

          <AddToCartBtn>Add To cart</AddToCartBtn>
        </SinglePageText>
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
