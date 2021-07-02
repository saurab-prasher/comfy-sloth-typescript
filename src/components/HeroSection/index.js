import React from "react";

import heroImg1 from "../../images/heroImg1.jpg";
import heroImg2 from "../../images/heroImg2.jpg";
import heroImg3 from "../../images/heroImg3.jpg";

import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroText,
} from "./HeroElements";

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

      <div className="heroImageContainer">
        <img className="heroImg-1" src={heroImg1} alt=" heroimage1" />
        <img className="heroImg-2" src={heroImg2} alt=" heroimage2" />
        <img className="heroImg-3" src={heroImg3} alt=" heroimage3" />
      </div>
    </HeroContainer>
  );
};

export default Hero;
