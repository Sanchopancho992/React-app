import React, { createRef, useRef, useState } from "react";
import arrowr from "../../assets/arrow-right.png";
import arrowl from "../../assets/arrow-left.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef<HTMLUListElement>(null);
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
      if (slider.current) {
        slider.current.style.transform = `translateX(${tx}%)`;
      }
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      if (slider.current) {
        slider.current.style.transform = `translateX(${tx}%)`;
      }
    }
  };

  return (
    <div className="relative">
      <img
        src={arrowr}
        className="h-10 w-10 absolute translate-x-10 -translate-y-1/2 rounded-full bg-sky-500 p-3 top-1/2 right-0 cursor-pointer"
        alt="Right Arrow"
        onClick={slideforward}
      />
      <img
        src={arrowl}
        className="h-10 w-10 absolute -translate-x-10 -translate-y-1/2 rounded-full bg-sky-500 p-3 top-1/2 left-0 cursor-pointer"
        alt="Left Arrow"
        onClick={slideBackward}
      />
      <div className="overflow-hidden">
        <ul
          className="flex w-[200%] overflow-x-hidden transition duration-500 list-none"
          ref={slider}
        >
          <li className="w-6/12 p-5">
            <div className="shadow-md rounded-lg text-gray-600 leading-relaxed p-10	">
              <div className="flex items-center mb-5">
                <img
                  alt=""
                  src={user1}
                  className="w-65 h-65 rounded-full mr-10 border-4 border-solid testimonial-image"
                />
                <div>
                  <h3 className="text-myBlue font-bold">William</h3>
                  <span>USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                suscipit quidem aperiam minima cumque consequatur totam error,
                expedita eius commodi sit in eaque exercitationem. Inventore
                nisi dolorum iusto. Fuga, dolorum.
              </p>
            </div>
          </li>
          <li className="w-6/12 p-5">
            <div className="shadow-md rounded-lg text-gray-600 leading-relaxed p-10	">
              <div className="flex items-center mb-5">
                <img
                  alt="Testimonial"
                  src={user2}
                  className="w-65 h-65 rounded-full mr-10 border-4 border-solid testimonial-image"
                />
                <div>
                  <h3 className="text-myBlue font-bold">William</h3>
                  <span>USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                suscipit quidem aperiam minima cumque consequatur totam error,
                expedita eius commodi sit in eaque exercitationem. Inventore
                nisi dolorum iusto. Fuga, dolorum.
              </p>
            </div>
          </li>
          <li className="w-6/12 p-5">
            <div className="shadow-md rounded-lg text-gray-600 leading-relaxed p-10	">
              <div className="flex items-center mb-5">
                <img
                  alt="Testimonial"
                  src={user3}
                  className="w-65 h-65 rounded-full mr-10 border-4 border-solid testimonial-image"
                />
                <div>
                  <h3 className="text-myBlue font-bold">William</h3>
                  <span>USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                suscipit quidem aperiam minima cumque consequatur totam error,
                expedita eius commodi sit in eaque exercitationem. Inventore
                nisi dolorum iusto. Fuga, dolorum.
              </p>
            </div>
          </li>
          <li className="w-6/12 p-5">
            <div className="shadow-md rounded-lg text-gray-600 leading-relaxed p-10	">
              <div className="flex items-center mb-5">
                <img
                  alt="Testimonial"
                  src={user4}
                  className="w-65 h-65 rounded-full mr-10 border-4 border-solid testimonial-image"
                />
                <div>
                  <h3 className="text-myBlue font-bold">William</h3>
                  <span>USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                suscipit quidem aperiam minima cumque consequatur totam error,
                expedita eius commodi sit in eaque exercitationem. Inventore
                nisi dolorum iusto. Fuga, dolorum.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
