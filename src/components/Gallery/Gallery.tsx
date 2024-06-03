import React from "react";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import arrow from "../../assets/arrow-right.png";

const Gallery = () => {
  return (
    <div className="mt-20 text-center">
      <div className="flex justify-between mb-10">
        <img
          src={gallery1}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <img
          src={gallery2}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <img
          src={gallery3}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <img
          src={gallery4}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
          See more here
          <img src={arrow} className="h-6 translate-x-2" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
