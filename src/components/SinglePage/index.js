import React, { useEffect } from "react";

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
  BackToProdbtn,
  Available,
} from "./SinglePageElements";

import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions";

const SinglePage = ({ loading, product, fetchSingleProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${process.env.REACT_APP_SINGLE_PRODUCT}${id}`);
  }, [id, fetchSingleProduct]);

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

  return (
    <>
      {loading ? (
        <Loading singleProduct={true} />
      ) : (
        <div
          style={{
            backgroundColor: "#Fafafa",
          }}
        >
          <Header location="Products">
            <ProductName>{name}</ProductName>
          </Header>
          <div
            style={{
              maxWidth: "124rem",
              padding: "0rem 3rem",
              margin: "0.75rem auto",
            }}
          >
            <BackToProdbtn to="/products">Back to Products </BackToProdbtn>
          </div>

          <SinglePageMain>
            <SinglePageImg>
              <Gallery images={images} />
            </SinglePageImg>
            <SinglePageText>
              <SinglePageH1>{name}</SinglePageH1>
              <ReviewsContainer>
                <Stars stars={stars} />
                <p>({reviews} Customer reviews)</p>
              </ReviewsContainer>
              <Price> {formatPrice(price)}</Price>
              <Description>{description}</Description>
              <Available>
                <li>
                  Available:
                  <span> {stock > 0 ? "In Stock" : "out of stock"} </span>
                </li>
                <li>
                  SKU: <span> {SKU} </span>{" "}
                </li>
                <li>
                  Brand: <span> {company} </span>{" "}
                </li>
                <hr />
              </Available>

              {stock > 0 && <AddToCart product={product} />}
            </SinglePageText>
          </SinglePageMain>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.products.single_product_loading,
    product: state.products.single_product,
  };
};
export default connect(mapStateToProps, { fetchSingleProduct })(SinglePage);
