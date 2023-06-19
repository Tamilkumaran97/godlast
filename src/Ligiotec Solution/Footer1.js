import React from "react";
import { motion } from "framer-motion";
import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import man from "./assets/manworking.png";

const Footer1 = () => {
  return (
    <div className="w-[100%]  h-[150vh]">
      <div className="px-20 py-8  flex justify-center items-center">
        <div>
          <h1 className="text-5xl py-2 font-bold">
            Stop thinking about your website plans!
          </h1>
          <p className="text- pb-4 ">
            Act now to book a free consulting session with our experts today.
          </p>
          <button className="bg-pink-500 mt-4 p-4 rounded-full">
            GET STARTED NOW
          </button>
        </div>
        <div>
          <img src={man} alt="" />
        </div>
      </div>
      <div className="flex gap-28 p-20 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className=" text-3xl font-bold bold">Ligiotec solution</div>
        <div className=" ">
          <h1 className="text-2xl pb-4">citymapia</h1>
          <ul className="">
            <li className="py-2">About us</li>
            <li className="py-2">services</li>
            <li className="py-2">careers</li>
            <li className="py-2">contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl pb-4">Services</h1>
          <ul>
            <li className="py-2">Web development</li>
            <li className="py-2">Branding</li>
            <li className="py-2">seo</li>
            <li className="py-2">eCommerce</li>
            <li className="py-2">Digital Marketing</li>
            <li className="py-2">Restaurant solution</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl pb-4">Contact</h1>
          <ul>
            <li className="py-2">example@gmail.com</li>
            <li className="py-2">example@gmail.com</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl" pb-4>
            social
          </h1>
          <div className=" flex py-2 ">
            <img className="w-8 " src={insta} alt="" />
            <img className="w-8 ml-2" src={whatsapp} alt="" />
            <img className="w-8 ml-2" src={github} alt="" />
            <img className="w-8 ml-2" src={twitter} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 flex justify-between px-10 border-t border-black/20 py-10 rounded-xl">
        <div>
          <h1>Copyrights@ 2023 ligiotec.com.All Rights Reserved </h1>
        </div>
        <div className="flex gap-4">
          <h1>Privacy Policy</h1>
          <h1>Term & condition</h1>
          <h1>Refund & cancellation</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
