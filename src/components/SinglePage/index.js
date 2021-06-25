import React, { useEffect } from "react";
import { useProductsContext } from "../../context/products_context";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/helper";
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
  StarFill,
  StarHalf,
} from "./SinglePageElements";

import Gallery from "../Gallery";

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <React.Fragment key={index}>
        {stars >= index + 1 ? (
          <StarFill />
        ) : stars >= number ? (
          <StarHalf />
        ) : (
          <Star />
        )}
      </React.Fragment>
    );
  });

  return tempStars;
};

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

  return (
    <>
      <SinglePageHeader>
        <HeaderInner>
          <HomeLink to="/">Home</HomeLink> / <Products>Products</Products> /
          {product.heading}
        </HeaderInner>
      </SinglePageHeader>

      <SinglePageMain>
        {single_product_loading ? (
          <Loading main={false} />
        ) : (
          <>
            <SinglePageImg>
              <Gallery images={product.images} />
            </SinglePageImg>
            <SinglePageText>
              <SinglePageH1>{product.name}</SinglePageH1>
              <ReviewsContainer>
                <Stars stars={product.stars} />
                <p>{product.reviews} Customer reviews)</p>
              </ReviewsContainer>
              <Price> {formatPrice(product.price)}</Price>
              <Description>{product.description}</Description>

              <ul>
                <li>
                  Available: {product.stock > 0 ? "In Stock" : "out of stock"}
                </li>
                <li>SKU: {product.id}</li>
                <li>Brand: {product.company}</li>
                <div className="color-container">
                  <li style={{ display: "flex", alignItems: "center" }}>
                    Colors:
                    {/* {product.color.map((item, idx) => {
                return (
                  <button
                    style={{
                      backgroundColor: `${
                        item === "yellow" ? "gold" : `${item}`
                      }`,
                      height: "1.6rem",
                      width: "1.6rem",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginLeft: "0.5rem",
                      cursor: "pointer",
                    }}
                    key={idx}
                  ></button>
                );
              })} */}
                  </li>
                </div>
              </ul>

              <AddToCartBtn>Add To cart</AddToCartBtn>
            </SinglePageText>
          </>
        )}
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
