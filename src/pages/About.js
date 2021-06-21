import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/product-1.jpeg";

const AboutHeader = styled.header`
  background-color: #eaded7;
`;
const AboutInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 500;
  color: #453227;
  padding: 5rem 0;
  margin-bottom: 4rem;
`;

const HomeLink = styled(Link)`
  color: inherit;
`;
const AboutLink = styled.a``;

const AboutSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 3rem;
  margin-bottom: 13rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImgContainer = styled.div``;

const AboutImg = styled.img``;
const AboutTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #102a47;
`;

const AboutH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const AboutP = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
`;
const Line = styled.div`
  height: 4px;
  margin-bottom: 2rem;
  width: 8rem;
  background-color: #531410;
  align-self: center;
`;

const About = () => {
  return (
    <>
      <AboutHeader>
        <AboutInner>
          <HomeLink to="/">Home</HomeLink> / <AboutLink>About</AboutLink>
        </AboutInner>
      </AboutHeader>

      <AboutSection>
        <AboutImgContainer>
          <AboutImg src={img} />
        </AboutImgContainer>

        <AboutTextContainer>
          <AboutH1>Our Story</AboutH1>
          <Line />

          <AboutP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            dolores debitis dolore nemo officia repellendus excepturi laboriosam
            ipsum rerum, possimus similique sint reiciendis culpa enim. Saepe
            quasi in ullam doloribus, incidunt consequuntur dolores deserunt
            labore cupiditate voluptatum est ducimus! Dicta explicabo vel
            corrupti enim sed itaque. Harum vero a laudantium. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Ratione, aliquam! Dicta
            soluta accusantium quis sunt hic alias molestias laboriosam error,
            illum, illo omnis ad quo eligendi culpa velit mollitia sequi?
          </AboutP>
        </AboutTextContainer>
      </AboutSection>
    </>
  );
};

export default About;
