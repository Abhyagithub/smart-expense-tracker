import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </div>
  );
};

export default Home;

