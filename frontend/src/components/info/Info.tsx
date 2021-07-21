import React from "react";

interface Prop {
  stepNumber: number;
  title: string;
  info: string;
}

const Info = ({ stepNumber, title, info }: Prop) => {
  return (
    <div className=" ml-2 mr-2 bg-white  mt-2 mb-2 shadow-lg  bg-opacity-50 rounded-lg flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row  items-center pt-2 pb-2  transform duration-100 hover:scale-105 ">
      <div className="mr-4 pl-4 ">
        <h3 className="text-sm 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-light-cherry  font-bold w-28">
          Step {stepNumber}:
        </h3>
      </div>
      <div className="pr-2 pl-2">
        <h1 className="text-sm 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl  font-bold">
          {title}
        </h1>
        <h2 className="pt-1 text-gray-500">{info}</h2>
      </div>
    </div>
  );
};

export default Info;
