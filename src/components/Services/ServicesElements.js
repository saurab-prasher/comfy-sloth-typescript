import styled from "styled-components";
import { ImCompass2 } from "react-icons/im";
import { GiStabbedNote, GiDiamondHard } from "react-icons/gi";

export const ServicesContainer = styled.section`
  background-color: #f4f6f4;
`;
export const ServicesInner = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 4rem 0;
`;
export const ServicesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & > * {
    flex-basis: 100%;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 3rem;
`;
export const ServicesP = styled.p`
  font-size: 1.2rem;
`;
export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2.5rem;
  transform: translateY(7rem);
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
export const Icon = styled(ImCompass2, GiDiamondHard, GiStabbedNote)`
  font-size: 2rem;
`;
export const CardHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
export const CardDescription = styled.p`
  font-size: 1.2rem;
`;
