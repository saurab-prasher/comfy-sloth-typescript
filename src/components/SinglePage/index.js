import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

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
          <Img />
        </SinglePageImg>

        <SinglePageText>
          <SinglePageH1>Product Name</SinglePageH1>
          <ReviewsContainer>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            (100 Customer reviews)
          </ReviewsContainer>
          <Price />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            maiores veritatis accusamus hic esse, enim consectetur eveniet
            molestiae quos est, voluptas aut veniam nulla laboriosam minima
            fugit quidem magnam dolore sed culpa repudiandae. Id, perspiciatis
            facere!
          </Description>

          <Available>: In Stock</Available>
          <SKU>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</SKU>
          <Brand>: Gucci</Brand>

          <Varients>Colors: 1</Varients>

          <Container> - 1 +</Container>

          <AddToCartBtn>Add To cart</AddToCartBtn>
        </SinglePageText>
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
