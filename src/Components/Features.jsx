import React from "react";
import { FaRegEdit, FaMagic, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaRegEdit className="text-4xl text-blue-600 animate-bounce mb-4" />,
    title: "Easy Expense Input",
    desc: "Log your daily expenses quickly and effortlessly from any device.",
  },
  {
    icon: <FaMagic className="text-4xl text-purple-600 animate-pulse mb-4" />,
    title: "Smart Categorization",
    desc: "Automatically sort your expenses into categories for better insights.",
  },
  {
    icon: <FaChartLine className="text-4xl text-green-600 animate-spin-slow mb-4" />,
    title: "Real-Time Analytics",
    desc: "Visual dashboards to track spending habits and financial goals.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-xl shadow text-center hover:shadow-lg transition duration-300"
        >
          {feature.icon}
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
