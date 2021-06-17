import React from "react";
import {
  NewsLetterContainer,
  NewsLetterForm,
  FormBtn,
  NewsLetterH2,
  Input,
  NewsLetterP,
  NewsLetterText,
} from "./NewsLetterElements";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetterText>
        <NewsLetterH2>Join our newsletter and get 20% off</NewsLetterH2>
        <NewsLetterP>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dicta
          voluptates nostrum pariatur excepturi assumenda numquam possimus
          eligendi sed laudantium.
        </NewsLetterP>
      </NewsLetterText>

      <NewsLetterForm>
        <Input type="email" placeholder="Enter Email" />
        <FormBtn>Subscribe</FormBtn>
      </NewsLetterForm>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
