import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

import img from "../images/heroImg3.jpg";

const AboutSection = styled.section`
  max-width: 124rem;
  padding: 0 3rem;
  margin: 0 auto;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  align-items: start;
  min-height: calc(80vh - 14rem);
  @media screen and (max-width: 64em) {
    display: flex;
    grid-gap: 0;
  }
`;

const AboutImgContainer = styled.div``;

const AboutImg = styled.img`
  width: 100%;
  border-radius: 5px;

  @media screen and (max-width: 64em) {
    display: none;
  }
`;
const AboutTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  justify-self: end;
`;

const AboutH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const AboutP = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
const Line = styled.div`
  height: 4px;
  width: 12rem;
  margin-bottom: 2rem;
  background-color: #531410;
  align-self: center;
`;

const About = () => {
  return (
    <>
      <Header Home="Home" location="About" />
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
