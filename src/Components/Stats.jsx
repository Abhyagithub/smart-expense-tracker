import React from "react";

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
      <div className="flex flex-col md:flex-row justify-around gap-10">
        <div>
          <p className="text-4xl font-bold text-blue-600">+10K</p>
          <p>Active Users</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-blue-600">₹5Cr+</p>
          <p>Expenses Tracked</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-blue-600">4.9★</p>
          <p>User Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
