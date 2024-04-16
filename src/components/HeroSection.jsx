import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: "../assets/hero.png",
    title: "Shop",
    description: "Buy the best products from our store",
  },
  {
    image: "../assets/hero.png",
    title: "Shop",
    description: "Buy the best products from our store",
  },
  {
    image: "../assets/hero.png",
    title: "Shop",
    description: "Buy the best products from our store",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroSection;
