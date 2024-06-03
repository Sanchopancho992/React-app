import React from "react";
import office from "../../assets/office.jpg";
import play from "../../assets/play.png";

const About = () => {
  return (
    <div className="m-auto flex items-start justify-between w-90 mt-8">
      <div className="flex-40 relative">
        <img src={office} alt="" className="w-full rounded-lg translate-y-4" />
        <img
          src={play}
          alt=""
          className="w-10 absolute top-1/2 left-1/2 -translate-x-5 -translate-y-1"
        />
      </div>
      <div className="flex-56 ml-6 ">
        <h3 className="mt-2 font-bold text-3xl">ABOUT COMPANY</h3>
        <h2 className="text-2xl mb-4">Our company gives the best solution</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          laboriosam ad voluptatem ab alias, magnam dolorem voluptatibus
          reiciendis, fugiat unde totam adipisci ullam recusandae molestias vero
          deserunt laudantium molestiae odio Lorem ipsum dolor sit, amet
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto a
          rerum omnis quae, nam quos exercitationem officia reiciendis molestias
          id repudiandae debitis molestiae sit sapiente magnam ducimus adipisci,
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quidem, maiores quae vero fugiat aperiam ratione modi. Debitis neque
        </p>
      </div>
    </div>
  );
};

export default About;
