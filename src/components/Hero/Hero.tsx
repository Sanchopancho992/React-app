import React from "react";
import buildings from "../../assets/buildings.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white border-gray-200 relative"
      style={{
        background: `url(${buildings})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.6,
        color: "white",
      }}
    >
      <div className="relative z-10">
        <h1 className="p-4 max-w-screen-xl mx-auto p-4 font-extrabold text-6xl text-white">
          Our company gives the best solution
        </h1>
        <p className="p-4 max-w-screen-xl mx-auto p-4 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          quaerat, tempore ex quas accusantium iste. Natus fugit nulla
          laboriosam consectetur eveniet nisi, praesentium quaerat neque
          dolorum! Ad nihil iure iusto.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <button className="btn p-4 text-xl text-black bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Hero;
