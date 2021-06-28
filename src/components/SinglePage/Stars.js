import React from "react";
import { Star, StarFill, StarHalf } from "./SinglePageElements";

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

export default Stars;
