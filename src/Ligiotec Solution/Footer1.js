import React from "react";
import { motion } from "framer-motion";
import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import man from "./assets/manworking.png";

const Footer1 = () => {
  return (
    <div className="w-[100%]  ">
      <div className="px-4 md:px-20 py-8 relative md:flex justify-center items-center">
        <div className="md:w-1/2 text-center md:text-start">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl py-2 font-bold">
            Stop thinking about your website plans!
          </h1>
          <p className="text- pb-4 ">
            Act now to book a free consulting session with our experts today.
          </p>
          <button className="bg-pink-500 mt-4 p-2 lg:p-4 rounded-full">
            GET STARTED NOW
          </button>
        </div>
        <div className="md:w-1/2 hidden md:block ">
          <img src={man} alt="" />
        </div>
      </div>
      <div className=" md:flex md:justify-between md:items-start p-4 md:p-10 xl:p-20 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="lg:2xl xl:text-3xl font-bold bold">
          Ligiotec solution
        </div>
        <div>
          <h1 className=" lg:text-xl xl:text-2xl font-bold pb-">citymapia</h1>
          <ul className="">
            <li className="lg:py-2 md:text-sm xl:text-xl">About us</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">services</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">careers</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="lg:text-xl xl:text-2xl font-bold pb-">Services</h1>
          <ul>
            <li className="lg:py-2 md:text-sm xl:text-xl">Web development</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">Branding</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">seo</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">eCommerce</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">Digital Marketing</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">
              Restaurant solution
            </li>
          </ul>
        </div>
        <div>
          <h1 className="lg:text-xl xl:text-2xl font-bold pb-">Contact</h1>
          <ul>
            <li className="lg:py-2 md:text-sm xl:text-xl">example@gmail.com</li>
            <li className="lg:py-2 md:text-sm xl:text-xl">example@gmail.com</li>
          </ul>
        </div>
        <div>
          <h1 className="lg:text-xl xl:text-2xl font-bold pb-">social</h1>
          <div className=" flex flex-warp py-2 ">
            <img className="w-5 lg:w-8 " src={insta} alt="" />
            <img className="w-5 lg:w-8 ml-2" src={whatsapp} alt="" />
            <img className="w-5 lg:w-8 ml-2" src={github} alt="" />
            <img className="w-5 lg:w-8 ml-2" src={twitter} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r  px-2 from-gray-100 to-gray-300 flex justify-between items-center text-sm md:px-4 border-t border-black/20 py-2 ">
        <div>
          <h1>Copyrights@ 2023 ligiotec.com.All Rights Reserved </h1>
        </div>
        <div className="md:flex justify-between items-center text-[12px] md:text-sm ">
          <h1 className="pl-2">Privacy Policy</h1>
          <h1 className="pl-2">Term & condition</h1>
          <h1 className="pl-2">Refund & cancellation</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
