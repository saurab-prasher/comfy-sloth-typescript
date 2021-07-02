import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }`;

export const Loader = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 15em;
  height: 15em;

  border-radius: 50%;
  background: #531410;
  background: -moz-linear-gradient(left, #531410 10%, rgba(83, 20, 16, 0) 42%);
  background: -webkit-linear-gradient(
    left,
    #531410 10%,
    rgba(83, 20, 16, 0) 42%
  );
  background: -o-linear-gradient(left, #531410 10%, rgba(83, 20, 16, 0) 42%);
  background: -ms-linear-gradient(left, #531410 10%, rgba(83, 20, 16, 0) 42%);
  background: linear-gradient(to right, #531410 10%, rgba(83, 20, 16, 0) 42%);
  position: relative;
  animation: ${animation} 1.4s infinite linear;
  transform: translateZ(0);

  position: absolute;
  top: ${({ mainPage, productList, singleProduct }) =>
    (mainPage && "26%") || (productList && "10%") || (singleProduct && "350%")};
  left: ${({ productList, singleProduct, mainPage }) =>
    (mainPage && "45%") || (productList && "55%") || (singleProduct && "45%")};

  @media screen and (max-width: 48em) {
    top: ${({ mainPage, productList, singleProduct }) =>
      (mainPage && "20%") ||
      (productList && "10%") ||
      (singleProduct && "200%")};
    left: ${({ productList, singleProduct, mainPage }) =>
      (mainPage && "30%") ||
      (productList && "55%") ||
      (singleProduct && "35%")};
  }

  &:before {
    width: 50%;
    height: 50%;
    background: #531410;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &:after {
    background: ${({ mainPage }) => (mainPage ? "#eae9e1" : "#fff")};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
