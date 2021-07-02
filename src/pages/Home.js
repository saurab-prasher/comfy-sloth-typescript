import React from "react";
import HeroSection from "../components/HeroSection";
import Featured from "../components/Featured";
import Services from "../components/Services";
import NewsLetter from "../components/NewsletterForm";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Featured />

      <Services />

      <NewsLetter />
    </>
  );
};

export default Home;
