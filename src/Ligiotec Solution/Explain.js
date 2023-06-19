import React from "react";
import laptop from "./assets/pexels-olia-danilevich-8145335.jpg";
import semi from "./assets/quotation-mark-svgrepo-com.svg";

const Explain = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100 via-sky-500 to-fuchsia-200">
      <div className="flex w-[100%] relative">
        <div className="w-1/2  p-16 text-xl">
          <p className="font-serif">
            Having a business website is no longer a luxury. When the whole
            world is online and the internet is at everyone’s fingertips, you
            need to come out of your cocoon if you want growth to come your way.
            <br />
            <br />
            We know small business struggles inside out and deliver on-point
            solutions to design and develop a marketing-ready website that
            improves your bottom line.
          </p>
          <div className="flex p-2 pt-10">
            <p className="p-2 text-sm border-pink-500 border text-pink-500  rounded-full mr-6 ">
              {" "}
              Website design
            </p>
            <p className="p-2 text-sm border-pink-500 border text-pink-500  rounded-full mr-6 ">
              {" "}
              Website development
            </p>
            <p className="p-2 text-sm border-pink-500 border text-pink-500  rounded-full mr-6 ">
              {" "}
              Website Builder
            </p>
          </div>
        </div>
        <div className="w-1/2 mt-44 relative z-10 px-24">
          <img className="rounded-xl" src={laptop} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-b -mt-16 absolute from-rose-700 to-pink-600 w-[100%] h-64 flex justify-center items-center">
        <div className="w-1/2 relative p-20">
          <img
            className=" absolute w-[80px] opacity-10 -mt-12 -ml-10"
            src={semi}
            alt=""
          />
          <p className="slant text-white text-4xl">
            With years of experience in local business web design and
            development, we offer responsive websites that are attractive to
            look and serve as a growth engine for your business.
          </p>
        </div>
        <div className="w-1/2 text-white flex  p-4 text-3xl font-bold">
          <h1 className="text-center  ml-8">
            100+ <p className="font-serif"> Websites</p>
          </h1>

          <h1 className="text-center ml-8 ">
            {" "}
            80+ <p className="font-serif">Happy Customers</p>{" "}
          </h1>
          <h1 className="text-center  ml-8">
            {" "}
            80+ <p className="font-serif">Happy clients</p>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Explain;
