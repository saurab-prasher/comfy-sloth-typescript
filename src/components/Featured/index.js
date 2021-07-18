import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

import {
  FeaturedContainer,
  FeaturedH2,
  Line,
  FeaturedInner,
  FeaturedBtn,
  FeaturedCards,
} from "./FeaturesElements";

import Loading from "../Loading";
import Card from "../Card";

const Featured = ({ featured, loading, error, fetchProducts }) => {
  useEffect(() => {
    fetchProducts(process.env.REACT_APP_PRODUCTS_URL);
  }, []);

  if (error) {
    return (
      <FeaturedContainer>
        <h1>SomeThing Went Wrong!!</h1>;
      </FeaturedContainer>
    );
  } else {
    return (
      <FeaturedContainer>
        {loading ? (
          <Loading mainPage={true} />
        ) : (
          <FeaturedInner>
            <FeaturedH2>Featured Products</FeaturedH2>
            <Line />
            <FeaturedCards>
              {featured.slice(0, 3).map((item) => {
                return <Card key={item.id} {...item} />;
              })}
            </FeaturedCards>
            <FeaturedBtn to="/products">All Products</FeaturedBtn>
          </FeaturedInner>
        )}
      </FeaturedContainer>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    featured: state.products.featured_products,
    loading: state.products.products_loading,
    error: state.products.products_error,
  };
};
export default connect(mapStateToProps, { fetchProducts })(Featured);
