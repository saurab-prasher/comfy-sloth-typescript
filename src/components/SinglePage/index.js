import React from "react";
import { AiFillStar } from "react-icons/ai";
import ImgSrc from "../../images/product-1.jpeg";
import { useParams } from "react-router-dom";
import {
  SinglePageHeader,
  SinglePageH1,
  HomeLink,
  SinglePageImg,
  SinglePageText,
  SinglePageMain,
  ReviewsContainer,
  Img,
  HeaderInner,
  Price,
  Description,
  Available,
  SKU,
  Brand,
  Varients,
  AddToCartBtn,
  Products,
  Star,
} from "./SinglePageElements";

const SinglePage = () => {
  return (
    <>
      <SinglePageHeader>
        <HeaderInner>
          <HomeLink to="/">Home</HomeLink> / <Products>Products</Products> /
          Product Name
        </HeaderInner>
      </SinglePageHeader>

      <SinglePageMain>
        <SinglePageImg>
          <Img src={ImgSrc} />
        </SinglePageImg>

        <SinglePageText>
          <SinglePageH1>Product Name</SinglePageH1>
          <ReviewsContainer>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>(100 Customer reviews)</p>
          </ReviewsContainer>
          <Price>$ 599.99</Price>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            maiores veritatis accusamus hic esse, enim consectetur eveniet
            molestiae quos est, voluptas aut veniam nulla laboriosam minima
            fugit quidem magnam dolore sed culpa repudiandae. Id, perspiciatis
            facere!
          </Description>

          <ul>
            <li>Available: In Stock</li>
            <li>SKU: Lorem ipsum dolor sit amet.</li>
            <li>Brand: Cressa</li>
            <li>Colors: In Stock</li>
          </ul>

          <AddToCartBtn>Add To cart</AddToCartBtn>
        </SinglePageText>
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
