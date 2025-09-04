import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-40 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Smart Expense Tracker</h1>
      <p className="text-lg md:text-xl mb-6">Track your spending. Control your budget. Achieve your goals.</p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
