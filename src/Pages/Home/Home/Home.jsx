import React from "react";
import HeroSection from "../HeroSection";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className=" h-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>

      <About></About>
      <div className=" h-[2px]  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>
    </div>
  );
};

export default Home;
