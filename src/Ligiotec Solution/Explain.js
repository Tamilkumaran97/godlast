import React from "react";
import laptop from "./assets/pexels-olia-danilevich-8145335.jpg";
import semi from "./assets/quotation-mark-svgrepo-com.svg";

const Explain = () => {
  return (
    <div className="w-[100%] py-auto">
      <div className="md:flex w-[100%]  relative">
        {/**paragraph */}
        <div className="md:w-1/2 md:text-lg p-10 xs:p-12 sm:p-10 md:p-6   lg:p-10  xl:p-16 lg:text-lg xl:text-xl">
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
          <div className="flex justify-center pt-6 sm:pt-2 md:pt-0  md:py-4 gap-2 lg:py-10">
            <p className=" xl:p-2 px-1 py-1 xs:py-2 xs:px-2 md:px-5 sm:px-2 sm:py-2 text-center lg:py-2 lg:px-2 text-[10px] xs:text-xs md:text-sm xl:text-lg border-pink-500 border text-pink-500  rounded-full  ">
              {" "}
              Website design
            </p>
            <p className="xl:p-2 px-1 py-1 xs:py-2 xs:px-2 md:px-5 sm:px-2 sm:py-2 text-center lg:py-2 lg:px-2 text-[10px] xs:text-xs md:text-sm xl:text-lg border-pink-500 border text-pink-500  rounded-full  ">
              {" "}
              Website development
            </p>
            <p className="xl:p-2 px-1 py-1 xs:py-2 xs:px-2 md:px-5 sm:px-2 sm:py-2 text-center lg:py-2 lg:px-2 text-[10px] xs:text-xs md:text-sm xl:text-lg border-pink-500 border text-pink-500  rounded-full  ">
              {" "}
              Website Builder
            </p>
          </div>
        </div>
        {/**image */}
        <div className="md:w-1/2  md:mt-32 xl:mt-40 sm:flex justify-center px-16 lg:px-12 md:px-6 relative z-10 xl:px-24">
          <img
            className="rounded-xl sm:w-[500px]  md:w-auto"
            src={laptop}
            alt=""
          />
        </div>
      </div>
      {/**last container */}
      <div className="bg-gradient-to-b -mt-6 lg:-mt-16 relative from-rose-700 to-pink-600 w-[100%]  md:h-52 lg:h-64 md:flex justify-center items-center">
        {/**paragraph */}
        <div className="md:w-1/2 relative p-10 sm:p-8 mt-4 lg:mt-0 lg:p-20">
          <img
            className=" absolute w-[40px] lg:w-[70px] xl:w-[80px] opacity-10 -mt-4 lg:-mt-8 xl:-mt-12 lg:-ml-10"
            src={semi}
            alt=""
          />
          <p className="slant text-white text-2xl lg:text-3xl xl:text-4xl">
            With years of experience in local business web design and
            development, we offer responsive websites that are attractive to
            look and serve as a growth engine for your business.
          </p>
        </div>
        {/**clients */}
        <div className="md:w-1/2 text-white flex justify-center p-2  xl:p-4 gap-6 md:text-xl lg:text-2xl  xl:text-3xl font-bold">
          <h1 className="text-center  xl:pl-8">
            100+ <p className="font-serif"> Websites</p>
          </h1>

          <h1 className="text-center xl:pl-8 ">
            {" "}
            80+ <p className="font-serif">Happy Customers</p>{" "}
          </h1>
          <h1 className="text-center  xl:pl-8">
            {" "}
            80+ <p className="font-serif">Happy clients</p>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Explain;
