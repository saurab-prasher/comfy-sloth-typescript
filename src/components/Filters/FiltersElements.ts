import styled from 'styled-components';
export const FilterContainer = styled.aside`
  padding: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    margin: 0.8rem 0;
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
    text-transform: capitalize;

    @media screen and (min-width: 48em), (max-width: 25em) {
      width: 100%;
    }

    &:focus {
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const Category = styled.div`
  button {
    display: block;
    background-color: transparent;
    margin-bottom: 1.25rem;
    font-size: 1.45rem;
    letter-spacing: 1px;
    cursor: pointer;
    color: #444;
    text-transform: capitalize;
  }
`;
export const Company = styled.div`
  select {
    background-color: #dadada;
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0.35rem;
    text-transform: capitalize;

    &:focus {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`;
export const Colors = styled.div`
  width: 85%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 48em) {
      justify-content: flex-start;
    }
  }
`;

const Button = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  margin-right: 1rem;
  opacity: 0.5;
  cursor: pointer;
`;

export const SpanBtnAll = styled(Button)`
  background-color: transparent;
  border-radius: 0;
  opacity: 1;
  color: #444;
  font-weight: 500;
  position: relative;
  z-index: 1;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  margin-right: 1.5rem;
  line-height: 0;
`;
interface FilterColorBtnProps {
  background?: string;
}

export const FilterColorBtn = styled(Button)<FilterColorBtnProps>`
  height: 2rem;
  width: 2.6rem;
  background-color: ${({ background }) => (background ? background : '#444')};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;

  @media screen and (max-width: 48em) {
    height: 2.3rem;
    width: 2.3rem;
  }
`;

export const Price = styled.div`
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;
export const Shipping = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-bottom: 0;
    margin-right: 1rem;
    cursor: pointer;
  }

  input {
    cursor: pointer;
    height: 1.6rem;
    width: 1.6rem;
  }
`;
export const FilterClear = styled.div``;

export const FilterClearBtn = styled.button`
  background-color: #531410;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 3px;
  font-size: 1.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
