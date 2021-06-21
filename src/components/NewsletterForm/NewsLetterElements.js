import styled from "styled-components";

export const NewsLetterContainer = styled.div`
  background: #fafafa;
`;

export const NewsLetterSection = styled.section`
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 2.5rem;
  align-items: center;
  padding: 10rem 0;
`;

export const NewsLetterText = styled.div``;
export const NewsLetterH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
export const NewsLetterP = styled.p`
  font-size: 1.2rem;
`;

export const NewsLetterForm = styled.form`
  display: flex;
`;
export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #a4a39e;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: none;

  &:focus {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
  }
`;
export const FormBtn = styled.button`
  border: 1px solid #531410;
  background-color: #531410;
  color: #fff;
  padding: 1rem;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
