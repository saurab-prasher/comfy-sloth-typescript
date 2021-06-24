import React from "react";
import { useFilterContext } from "../../context/filter_context";
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

import Gallery from "../Gallery";

const SinglePage = () => {
  const { list } = useFilterContext();
  const { id } = useParams();
  const Product = list.find((item) => item.id === Number(id));

  const reviewStars = (number) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<Star />);
    }
    return stars;
  };

  const stars = reviewStars(Product.rating);

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
            {stars.map((item, idx) => {
              return <React.Fragment key={idx}> {item}</React.Fragment>;
            })}

            <p>({Product.reviews} Customer reviews)</p>
          </ReviewsContainer>
          <Price>$ {Product.price}</Price>
          <Description>{Product.description}</Description>

          <ul>
            <li>Available: {Product.available}</li>
            <li>SKU: {Product.SKU}</li>
            <li>Brand: {Product?.company}</li>
            <div className="color-container">
              <li style={{ display: "flex", alignItems: "center" }}>
                Colors:
                {Product.color.map((item, idx) => {
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
                })}
              </li>
              ;
            </div>
          </ul>

          <AddToCartBtn>Add To cart</AddToCartBtn>
        </SinglePageText>
      </SinglePageMain>
    </>
  );
};

export default SinglePage;
