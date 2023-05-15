import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import face from "./assets/facebook-round-svgrepo-com.svg";
import tele from "./assets/telegram-fill-svgrepo-com.svg";
import { motion } from "framer-motion";

import Transition from "./Transition";

const Footer = () => {
  return (
    <section href="./about" className="mx-auto overflow-hidden ">
      <Transition />
      <div className=" ">
        <Parallax pages={1.5} className="">
          <ParallaxLayer
            offset={0}
            speed={1}
            className=" bg-[#387780] rounded-b-[100px]"
          >
            <div className=" bg-red-500   grid grid-cols-3 grid-rows-none lg:grid-cols-6 lg:grid lg:grid-rows-1 gap-2 lg:p-16 p-4 lg:gap-8 lg:px-8 lg:rounded-b-[100px] sm:mt-[560px] md:mt-[600px] mt-[405px]  border-t border-black pt-5 ">
              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold   lg:text-xl">Company</h1>
                <ul>
                  <li>About Ligiotec</li>
                  <li>Investor Ligiotec</li>
                  <li>Careers</li>
                  <li>Client Stories</li>
                  <li> Contact Us</li>
                </ul>
              </div>

              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold lg:text-xl">Legal</h1>
                <ul>
                  <li>Privacy Policy</li>
                  <li>TOS</li>
                  <li>SLA</li>
                </ul>
              </div>

              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold lg:text-xl">Business Consultancy</h1>
                <ul>
                  <li> Start A Business</li>
                  <li>Accounting & Financing</li>
                  <li>Secretarial Compliance</li>
                  <li>Taxation</li>
                  <li> Advisory</li>
                  <li> Licence and Business permits</li>
                </ul>
              </div>
              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold lg:text-xl">
                  Supermarket consultancy
                </h1>
                <ul>
                  <li> New Store Startup</li>
                  <li> Merchandising</li>
                  <li>Shop Development</li>
                  <li>Marketing strategy</li>
                  <li> Product Procurement</li>
                  <li> Stock Auditing</li>
                  <li>Infrastructure Costing</li>
                </ul>
              </div>
              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold lg:text-xl">Cloud Web Hosting</h1>
                <ul>
                  <li> Server Administration</li>
                  <li> server backup</li>
                  <li>Server Migration</li>
                  <li>Student Web Hosting</li>
                  <li> Cloud VPS Hosting</li>
                  <li> Dedicated Server</li>
                  <li>Buy Domain Name</li>
                  <li>SSL Certificates</li>
                  <li>Licenes</li>
                </ul>
              </div>
              <div className="text-[13px] lg:text-sm  w-auto">
                <h1 className="font-bold lg:text-xl">App Development</h1>
                <ul>
                  <li> Website Development</li>
                  <li> CRM Development</li>
                  <li>E-Commerce Development</li>
                  <li>Mobile Application Development</li>
                  <li> SEO</li>
                  <li> Automation</li>
                  <li>REST API Development & Integration</li>
                </ul>
              </div>
            </div>
          </ParallaxLayer>

          <div
            className="p-6   lg:flex h-screen bg-[#bac7be] md:mt-[450px] mt-[300px]
       "
          >
            <motion.div className="mt-48 lg:mt-44 w-[500px]">
              <h1 className="squad font-bold text-5xl ">Ligiotec Solution</h1>
              <div className="mt-10 lg:mt-28 ">
                <p className="text-[10px] font-semibold">STAY UP TO DATE</p>
                <p className="font-semibold text-2xl">Get our newsletter</p>
                <form className="mt-10 " action="">
                  <label>
                    <input
                      className="text-xl bg-transparent border-b-black border-b focus:outline-none p-2 w-[300px] "
                      type="text"
                      placeholder="Email address"
                    />{" "}
                    <br />
                    <div className="">
                      <button className="mt-10 bg-black/20 p-2 px-4 rounded-xl  hover:bg-black/50  font-semibold">
                        Submit
                      </button>
                    </div>
                  </label>
                </form>
              </div>
            </motion.div>
            <motion.div className="mt-10 lg:mt-32 w-[1000px] ">
              <h2 className="squad text-2xl lg:text-8xl ">
                Let's make work together!!
              </h2>
              <div className=" lg:flex">
                <div className="inline-block  lg:mt-24">
                  <h2 className="font-bold text-2xl">
                    {" "}
                    Get In touch
                    <div className="flex justify-center gap-5 py-6 ">
                      <img
                        className="w-10 cursor-pointer duration-500 hover:scale-110"
                        src={insta}
                        alt=""
                      />
                      <img
                        className="w-10 cursor-pointer duration-500 hover:scale-110"
                        src={whatsapp}
                        alt=""
                      />
                      <img
                        className="w-10 duration-500 hover:scale-110 cursor-pointer rounded-full"
                        src={github}
                        alt=""
                      />
                      <img
                        className="w-10 duration-500 hover:scale-110 cursor-pointer rounded-full"
                        src={twitter}
                        alt=""
                      />
                      <img
                        className="w-10 duration-500 hover:scale-110 cursor-pointer"
                        src={face}
                        alt=""
                      />
                      <img
                        className="w-10 duration-500 hover:scale-110 cursor-pointer"
                        src={tele}
                        alt=""
                      />
                    </div>
                  </h2>
                </div>
                <div className="block lg:mt-20 lg:ml-12  p-2">
                  <h2 className="font-bold text-2xl ">Contact</h2>
                  <div className="py-2">
                    <a href="/" className=" text-lg ">
                      WWW.LIGIOTEC.com
                    </a>{" "}
                    <br />
                    <a href="/" className=" text-lg">
                      Ligiotec@gamil.com
                    </a>
                  </div>
                </div>
                <div className="lg:mt-20 ml-48 -mt-32 lg:ml-16 ">
                  <h2 className="font-bold text-2xl  ">Help</h2>
                  <div className="py-2">
                    <a href="/" className="text-xl pt-2">
                      Terms & condition
                    </a>{" "}
                    <br />
                    <a href="/" className="text-xl ">
                      Privacy Policy
                    </a>
                    <br />
                    <a href="/" className="text-xl">
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </motion.div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Footer;
