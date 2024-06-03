import React from "react";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import book from "../../assets/book-alt.png";
import "./Person.css";

const Person = () => {
  return (
    <div className="m-80px auto w-90p flex items-center justify-between max-w-screen-xl mx-auto p-4 space-x-4">
      <div className="relative image">
        <img
          src={person1}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <div className="absolute bottom-0 left-0 flex items-center space-x-2 p-2 caption">
          <img src={book} className="h-6" alt="" />
          <p className="text-white">Alex</p>
        </div>
      </div>

      <div className="relative image">
        <img
          src={person2}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <div className="absolute bottom-0 left-0 flex items-center space-x-2 p-2 caption">
          <img src={book} className="h-6" alt="" />
          <p className="text-white">John</p>
        </div>
      </div>

      <div className="relative image">
        <img
          src={person3}
          alt=""
          className="w-60 h-auto rounded-md block border border-gray-500"
        />
        <div className="absolute bottom-0 left-0 flex items-center space-x-2 p-2 caption">
          <img src={book} className="h-6" alt="" />
          <p className="text-white">Bob</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
