import React from "react";
import { FooterContainer, FooterText } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} ComfySloth. All rights reserved
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
