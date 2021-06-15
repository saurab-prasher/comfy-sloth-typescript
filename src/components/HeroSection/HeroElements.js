import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.section`
  display: flex;
  max-width: 1240px;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 10rem;
  height: 100vh;
  justify-content: space-between;
  color: #102941;
`;
export const HeroText = styled.article`
  flex-basis: 100%;
`;
export const HeroH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;
export const HeroP = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 2rem;
`;
export const HeroBtn = styled(Link)`
  background-color: #00c075;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
`;
export const HeroImageContainer = styled.article`
  flex-basis: 100%;
`;
export const HeroImage = styled.img``;
