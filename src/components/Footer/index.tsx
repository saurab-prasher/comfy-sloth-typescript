import { FooterContainer, FooterText } from './FooterElements';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} ComfySloth. All rights reserved
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
