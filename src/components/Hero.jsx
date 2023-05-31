import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[100$%] m-auto mt-20 grid lg:grid-cols-2">
      <div>
        <div className="ml-6">
          <h1 id="text" className="text-3xl font-bold md:text-6xl py-4">
            TODO APPLICATION
          </h1>
          <p className="md:text-xl py-2 pr-2 italic">
            Simple ToDo using React, tailwind, Firebase and hasura .
          </p>
        </div>
        <div className="p-6">
          <button className="bg-black text-white px-6 py-2 rounded-lg mr-4 mt-3 hover:bg-black/80 hover:text-white">
            Get Started
          </button>
          <button className="text-black border border-black px-6 py-2 rounded-lg mt-3 hover:bg-gray-200">
            TODO'S
          </button>
        </div>
      </div>
      <div>
        <img
          className="rounded-xl p-4 lg:p-0"
          src="https://images.unsplash.com/photo-1683921055230-c3ba01e70131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="iamge"
        />
      </div>
    </div>
  );
};

export default Hero;
