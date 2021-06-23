import React from "react";
import heroImage from "../../images/hero-bcg.jpeg";
import {
  HeroContainer,
  HeroImage,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroText,
  HeroImageContainer,
} from "./HeroElements";

HeroImage.defaultProps = {
  src: heroImage,
};
const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroH1>Design Your Comfort Zone</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          ullam velit, eum non quisquam quis itaque rem omnis harum sint vitae
          sunt similique. Autem, animi? Beatae non, dolorum rerum nihil quos
          pariatur repellat error numquam.
        </HeroP>
        <HeroBtn to="/products">Shop Now</HeroBtn>
      </HeroText>

      <HeroImageContainer>
        <HeroImage />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
