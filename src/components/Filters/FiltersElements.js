import styled from "styled-components";
export const FilterContainer = styled.aside`
  padding: 2rem 3rem;

  div {
    margin: 2rem 0;
  }

  h3,
  label {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
`;
export const FilterFormContainer = styled.div`
  input {
    padding: 0.75rem;
    font-size: 1.5rem;
    border-radius: 3px;
    border: 1px solid #dadada;
    width: 100%;
  }
`;
export const FilterCategory = styled.div`
  button {
    display: block;
    background-color: transparent;
    margin: 0.75rem 0;
    font-size: 1.4rem;
    letter-spacing: 1px;
    cursor: pointer;
    color: #444;
  }
`;
export const FilterCompany = styled.div`
  select {
    background-color: #dadada;
  }
`;
export const FilterColors = styled.div``;

const Button = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
`;
export const FilterColorBtnRed = styled(Button)`
  background-color: red;
`;
export const FilterColorBtnGreen = styled(Button)`
  background-color: green;
`;
export const FilterColorBtnBlue = styled(Button)`
  background-color: blue;
`;
export const FilterColorBtnBlack = styled(Button)`
  background-color: black;
`;
export const FilterColorBtnYellow = styled(Button)`
  background-color: gold;
`;
export const FilterPrice = styled.div`
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;
export const FilterShipping = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;
export const FilterClear = styled.div`
  button {
    background-color: #531410;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 3px;
  }
`;

export const FilterClearBtn = styled.button``;