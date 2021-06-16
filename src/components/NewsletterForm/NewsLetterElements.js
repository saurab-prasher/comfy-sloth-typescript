import styled from "styled-components";

export const NewsLetterContainer = styled.section`
  max-width: 1280px;
  margin: 12rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    flex-basis: 100%;
  }
`;
export const NewsLetterText = styled.div``;
export const NewsLetterH2 = styled.h2`
  font-size: 3rem;
`;
export const NewsLetterP = styled.p`
  font-size: 1.2rem;
`;

export const NewsLetterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  padding: 0.75rem;
`;
export const FormBtn = styled.button`
  border: none;
  background-color: #10c784;
  color: #fff;
  padding: 0.7rem;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`;
