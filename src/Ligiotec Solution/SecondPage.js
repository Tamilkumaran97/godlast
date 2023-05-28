import React from "react";

import Img1 from "./assets/real.png";
import { motion } from "framer-motion";
import Img2 from "./assets/supermar.png";
import man from "./assets/manalone.png";
import smoke from "./assets/fog.png";
import building from "./assets/building.png";
import plane from "./assets/airplane.png";
import bgst from "./assets/veiw.avif";

import cld from "./assets/cloud1.png";
import web from "./assets/web.png";
import phone from "./assets/phone.png";
import up from "./assets/up.png";
import top from "./assets/topplane.png";
import cloud from "./assets/clocud.png";

import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import face from "./assets/facebook-round-svgrepo-com.svg";
import tele from "./assets/telegram-fill-svgrepo-com.svg";

const SecondPage = () => {
  return (
    <section id="section ">
      {/* first page */}
      <div
        id="fixed"
        className="  relative  w-[100%] h-[100vh] overflow-hidden"
      >
        {/*   flight one */}

        <motion.div
          data-scroll
          data-scroll-speed="24"
          data-scroll-direction="horizontal"
          className=" mt-0 lg:mt-40 left-[900px] absolute z-20  "
        >
          <img className="w-52 lg:w-[900px]" src={plane} alt="" />
        </motion.div>
        {/**building */}
        <motion.div>
          <img
            data-scroll
            data-scroll-speed="-1"
            className="lg:visible invisible lg:absolute lg:z-30  lg:w-full "
            src={building}
            alt=""
          />
        </motion.div>
        {/*  cloud img */}
        <motion.div className=" lg:w-full">
          <img
            data-scroll
            data-scroll-speed="-1"
            className="lg:visible invisible lg:absolute w-[2000px] lg:w-full"
            src={smoke}
            alt=""
          />
        </motion.div>
        {/* man image */}

        <div className="lg:visible invisible absolute top-[40px] lg:top-[190px] z-20">
          <img
            data-scroll
            data-scroll-speed="-1"
            className=" w-[300px] lg:w-[900px]  "
            src={man}
            alt=""
          />
        </div>
        <div
          data-scroll
          data-scroll-speed="2"
          className="absolute ml-[600px] mt-72 border-b-2 border-black "
        >
          {/*    <img src={Img} alt="" /> */}
        </div>
        {/*-----------------center-content--------------------- */}

        <div className="flex ">
          {/**-------------Business consultancy------------------- */}
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed"
            className="text-4xl lg:text-7xl  lg:text-white drop-shadow-[0_35px_35px_rgb(255,255,255)] z-10 font-bold lg:w-1/2 uppercase -mt-[600px]  lg:mt-60"
          >
            Business consultancy
          </div>
          <div
            data-scroll
            data-scroll-speed="4"
            className="font-bold lg:text-white  z-10  lg:w-1/2 lg:mr-52  lg:text-2xl  mt-40"
          >
            <ul className="">
              <li> Start A Business</li>
              <li>Accounting & Financing</li>
              <li>Secretarial Compliance</li>
              <li>Taxation</li>
              <li> Advisory</li>
              <li> Licence and Business permits</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" relative  w-[100%] h-[100vh] overflow-hidden flex">
        <img className="absolute w-[100%] blur-sm" src={bgst} alt="" />
        {/*  <img className="absolute w-full blur-sm z-1 " src={street} alt="" /> */}
        <motion.div
          initial={{ x: 900 }}
          whileInView={{ x: -100 }}
          transition={{ duration: 4, delay: 0.3 }}
          className="absolute w-[500px] mt-96"
        >
          <div className="w-[2000px] h-2 absolute top-[150px] left-[350px] flex justify-end rounded-l-full blur-sm bg-white/50"></div>

          <img className="ml-[150px] w-[350px]" src={Img1} alt="" />
        </motion.div>

        <h1
          data-scroll
          data-scroll-speed="-5"
          data-scroll-direction="vertical"
          className="font-bold mt-16 text-7xl w-1/2 uppercase text-white"
        >
          Supermarket consultancy
        </h1>
        <motion.ul
          initial={{ x: 600 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="font-bold text-white  w-1/2 mr-14 z-10 text-2xl  mt-40"
        >
          <li className="mt-2"> New Store Startup</li>
          <li className="mt-2"> Merchandising</li>
          <li className="mt-2">Shop Development</li>
          <li className="mt-2">Marketing strategy</li>
          <li className="mt-2"> Product Procurement</li>
          <li className="mt-2"> Stock Auditing</li>
          <li className="mt-2">Infrastructure Costing</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="top-[200px] left-[980px]  absolute"
        >
          <img src={Img2} alt="" />
        </motion.div>
      </div>
      <div
        id="flow"
        className="  relative   w-[100%] h-[300vh]  overflow-hidden "
      >
        <div
          id="stick"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#flow"
          className="w-full    absolute flex h-[100vh]  "
        >
          {/*   footer */}
          <div className="absolute">
            <div className=" -mt-40 -ml-4 ">
              <div
                className="p-6 bg-[#ffc914] lg:flex h-screen 
       "
              >
                <motion.div className="mt-48 lg:mt-44 w-[500px]">
                  <h1 className="squad font-bold text-5xl ">
                    Ligiotec Solution
                  </h1>
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
                <motion.div className="mt-10  lg:mt-32 w-[1000px] pr-40">
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
            </div>
            <div className=" bg-[#ffc914] absolute gap-[55px] p-10 flex -mt-[100px]  border-t border-black  ">
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
                  <li className="">Privacy Policy</li>
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
          </div>
        </div>

        <div className="w-full bg-[#37C3DEff] rounded-b-[100px] absolute  h-[200vh]  ">
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            className="w-[500px] z-20 opacity-90 absolute"
            src={cloud}
            alt=""
          />
          <div className="w-[100%] flex justify-center">
            <img
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="-20"
              className="absolute w-[300px] ml-20  "
              src={top}
              alt=""
            />
          </div>
          <div id="one" className=" w-full h-[100vh]  ml-24">
            <div
              data-scroll
              data-scroll-speed="20"
              data-scroll-direction="horizontal"
              className="text-8xl mt-20 uppercase p-4 font-bold flex justify-center"
            >
              Cloud Web Hosting
            </div>
            <div data-scroll data-scroll-speed="4" className="absolute mt-24">
              <img className="w-[800px] opacity-75 ml-40 " src={cloud} alt="" />
            </div>
            <div
              id="two"
              className="absolute left-[900px] font-bold text-2xl mt-20"
            >
              <motion.ul
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 3 }}
              >
                <li> Server Administration</li>
                <li> server backup</li>
                <li>Server Migration</li>
                <li>Student Web Hosting</li>
                <li> Cloud VPS Hosting</li>
                <li> Dedicated Server</li>
                <li>Buy Domain Name</li>
                <li>SSL Certificates</li>
                <li>Licenes</li>
              </motion.ul>

              <div
                data-scroll
                data-scroll-sticky="center"
                data-scroll-target="#two"
                className="uppercase text-6xl py-20"
              >
                App Development
              </div>
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

            <div className="">
              <motion.div>
                <img
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#two"
                  className="relative "
                  src={web}
                  alt=""
                />
              </motion.div>

              <div>
                <img
                  data-scroll
                  data-scroll-speed="-4"
                  data-scroll-direction="horizontal"
                  className="absolute -mt-[300px] ml-24"
                  src={cld}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-[#37C3DEff] w-[900px] relative ">
            {/*  <img src={top} alt="" /> */}
            <img
              className="w-[500px] relative mt-52 ml-20 "
              src={phone}
              alt=""
            />
            <img
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical"
              className="absolute ml-10 -mt-[22rem]"
              src={up}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
