import styled from "styled-components";
export const FilterContainer = styled.aside`
  padding: 1rem;
  div {
    margin: 2rem 0;
  }

  h3,
  label {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
  }
`;
export const FilterFormContainer = styled.div`
  input {
    padding: 0.75rem;
    border: 1px solid #a4a39e;
    border-radius: 3px;
    font-size: 1.6rem;
    font-family: inherit;
    outline: none;
    width: 100%;

    @media screen and (max-width: 48em) {
      width: 22%;
    }

    &:focus {
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const FilterCategory = styled.div`
  button {
    display: block;
    background-color: transparent;
    margin: 0.75rem 0;
    font-size: 1.45rem;
    letter-spacing: 1px;
    cursor: pointer;
    color: #444;
  }
`;
export const FilterCompany = styled.div`
  select {
    background-color: #dadada;
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0.35rem;

    &:focus {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`;
export const FilterColors = styled.div`
  div {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
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

  input {
    height: 1.6rem;
    width: 1.6rem;
  }
`;
export const FilterClear = styled.div`
  button {
    background-color: #531410;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 3px;
    font-size: 1.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    &:hover {
      background-color: #fff;
      color: rgb(83, 20, 16);
      border: 1px solid rgb(83, 20, 16);
    }
  }
`;

export const FilterClearBtn = styled.button``;
