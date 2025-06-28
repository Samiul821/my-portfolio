import React from "react";
import HeroSection from "../Hero/HeroSection";
import About from "../About/About";
import { useLoaderData } from "react-router-dom";
import Skills from "../Skils/Skils";
import Projects from "../Projects/Projects";

const Home = () => {
  const skils = useLoaderData();
  return (
    <div className="bg-slate-950">
      <div>
        <HeroSection></HeroSection>
      </div>
      <div className=" h-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>

      <div className="mt-6">
        <About></About>
      </div>
      <div className=" h-[2px]  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>
      <div className="mt-6">
        <Skills skils={skils}></Skills>
      </div>
      <div className=" h-[2px]  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>
      <div>
        <Projects></Projects>
      </div>
      <div className=" h-[2px]  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>
    </div>
  );
};

export default Home;
