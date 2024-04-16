import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCatogories from "../components/ProductCatogories";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCatogories />
    </>
  );
};

export default HomePage;
