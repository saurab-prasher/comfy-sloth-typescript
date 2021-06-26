import React, { useEffect } from "react";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
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
  Products,
  Star,
  StarFill,
  StarHalf,
  ProductName,
  AddToCartBtn,
} from "./SinglePageElements";

import AddToCart from "../AddToCart";
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

  const { test } = useCartContext();
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
    colors,
  } = product;

  console.log(product);
  return (
    <>
      <SinglePageHeader>
        <HeaderInner>
          <HomeLink to="/">Home</HomeLink> /
          <Products to="/products">Products</Products> /
          <ProductName>{name}</ProductName>
        </HeaderInner>
      </SinglePageHeader>

      <SinglePageMain>
        {single_product_loading ? (
          <Loading main={false} />
        ) : (
          <>
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
                <div className="color-container">
                  <li style={{ display: "flex", alignItems: "center" }}>
                    Colors:
                    {colors &&
                      colors.map((item, idx) => {
                        return (
                          <button
                            key={idx}
                            style={{
                              backgroundColor: `${item}`,
                              height: "1.6rem",
                              width: "1.6rem",
                              borderRadius: "50%",
                              display: "inline-block",
                              marginLeft: "0.5rem",
                              cursor: "pointer",
                              opacity: "0.5",
                            }}
                          ></button>
                        );
                      })}
                  </li>
                </div>
              </ul>

              <AddToCart stock={stock} />
              <AddToCartBtn
                onClick={() => {
                  const image = images[0].thumbnails.large.url;
                  const formattedPrice = price / 100;
                  test({ name, formattedPrice, stock, image, id: SKU });
                }}
                to="/cart"
              >
                Add To cart
              </AddToCartBtn>
            </SinglePageText>
          </>
        )}
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
