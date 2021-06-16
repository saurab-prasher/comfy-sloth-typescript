import React, { useEffect, useRef, useState } from "react";
import {
  FeaturedContainer,
  FeaturedH2,
  Line,
  FeaturedInner,
  FeaturedBtn,
  FeaturedCards,
  Search,
} from "./FeaturesElements";
import Card from "../Card";
import data from "./Data";
const Featured = () => {
  const [show, setShow] = useState(false);
  const [center, setCenter] = useState({});

  const handleSearchIcon = (ref) => {
    const box = ref.current.getBoundingClientRect();
    const xCenter = (box.left + box.right - box.width / 2) / 2;
    const yCenter = (box.top + box.bottom) / 2;
    setCenter({ xCenter, yCenter });
    setShow(!show);
  };

  return (
    <FeaturedContainer>
      <FeaturedInner>
        <FeaturedH2>Featured Products</FeaturedH2>
        <Line />

        <FeaturedCards>
          {data.map((item) => {
            return (
              <Card
                handleSearchIcon={handleSearchIcon}
                key={item.id}
                {...item}
              />
            );
          })}
          <Search show={show ? 1 : 0} center={center} />
        </FeaturedCards>
        <FeaturedBtn to="/products">All Products</FeaturedBtn>
      </FeaturedInner>
    </FeaturedContainer>
  );
};

export default Featured;
