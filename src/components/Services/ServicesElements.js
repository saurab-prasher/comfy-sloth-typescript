import styled, { css } from "styled-components";
import { ImCompass2 } from "react-icons/im";
import { GiStabbedNote, GiDiamondHard } from "react-icons/gi";

export const ServicesContainer = styled.section`
  background-color: #f4f6f4;
`;
export const ServicesInner = styled.div`
  margin: 0 auto;
  max-width: 124rem;
  padding: 4rem 0;
  height: 100%;
`;
export const ServicesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;

  & > * {
    flex-basis: 100%;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 3rem;
`;
export const ServicesP = styled.p`
  font-size: 1.6rem;
`;
export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2.5rem;
  transform: translateY(10rem);

  @media screen and (max-width: 800px) {
    margin: 4rem 0;
    transform: translateY(0);
  }
`;
export const ServicesCard = styled.div`
  background-color: #dcdddc;
  border-radius: 3px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const IconContainer = styled.div`
  background-color: #f4f6f4;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  margin-bottom: 1rem;
`;

const sharedIconCSS = css`
  font-size: 2.5rem;
`;

export const IconCompass = styled(ImCompass2)`
  ${sharedIconCSS}
`;
export const IconDiamond = styled(GiDiamondHard)`
  ${sharedIconCSS}
`;
export const IconNote = styled(GiStabbedNote)`
  ${sharedIconCSS}
`;

export const CardHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const CardDescription = styled.p`
  font-size: 1.6rem;
`;
