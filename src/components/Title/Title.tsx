import React from "react";
interface Props {
  title: string;
};
const Title = ({title}: Props) => {
  return (
    <div>
      <h1 className="flex items-center justify-center font-bold text-4xl text-[#212EA0] mt-10 mx-0 mb-10">
        {title}
      </h1>
    </div>
  );
};

export default Title;
