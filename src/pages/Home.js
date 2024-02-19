import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features/index";
import { Content } from "../components/Content";
import { heroOne, heroThree, heroTwo } from "../data/HeroData";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne}/>
      <Content {...heroTwo}/>
      <Content {...heroThree}/>
      
    </>
  );
}

export default Home;
