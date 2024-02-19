import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features/index";
import { Content } from "../components/Content";
import { heroOne, heroThree, heroTwo } from "../data/HeroData";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne}/>
      <Content {...heroTwo}/>
      <Content {...heroThree}/>
      <Carousel/>
      
    </>
  );
}

export default Home;
