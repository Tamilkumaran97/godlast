import React from "react";

import Img1 from "./assets/real.png";
import { motion } from "framer-motion";
import Img2 from "./assets/supermar.png";
import man from "./assets/manalone.png";
import smoke from "./assets/fog.png";
import building from "./assets/building.png";
import plane from "./assets/airplane.png";
import bgst from "./assets/veiw.avif";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";
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
/* import start from "./assets/start.png"; */
import Transition from "./Transition";

const SecondPage = () => {
  return (
    <section id="section">
      {/* -----------------first page--------------------- */}
      <div
        id="fixed"
        className="  relative w-[100%] h-[198px] lg:w-[100%] lg:h-[100vh] overflow-hidden"
      >
        <Transition />
        {/**----------------moon-------------- */}
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-13.8"
          className="absolute lg:left-[800px] left-[190px] opacity-90 z-10 "
        >
          <img className="bg-blend-screen" src={moon} alt="" />
        </div>
        {/*   flight one */}

        <motion.div
          data-scroll
          data-scroll-speed="24"
          data-scroll-direction="horizontal"
          className=" mt-40 left-[900px] absolute z-20  "
        >
          <img className="lg:visible invisible w-[900px]" src={plane} alt="" />
        </motion.div>
        {/** flight one-copy */}
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: -200 }}
          transition={{ duration: 6, repeat: Infinity }}
          className="   absolute z-20  "
        >
          <img className="visible lg:invisible w-[200px]" src={plane} alt="" />
        </motion.div>
        {/**building */}
        <motion.div>
          <img
            data-scroll
            data-scroll-speed=""
            className=" absolute z-30  lg:w-full "
            src={building}
            alt=""
          />
        </motion.div>
        {/*  cloud img */}
        <motion.div className="w-full lg:w-full">
          <img
            data-scroll
            data-scroll-speed=""
            className=" absolute lg:w-full "
            src={smoke}
            alt=""
          />
          {/*    <div className="bg-red-500 -mt-[500px] w-full h-[100vh] lg:invisible absolute">

          </div> */}
        </motion.div>
        {/* man image */}

        <div className=" absolute top-[90px]  lg:top-[190px] z-20">
          <img
            data-scroll
            data-scroll-speed="-1"
            className="w-[200px]  lg:w-[900px]  "
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
            className="text:xl lg:text-7xl text-white drop-shadow-[0_35px_35px_rgb(255,255,255)] pl-2 z-10 font-bold lg:w-1/2 uppercase  mt-24 lg:mt-60"
          >
            Business consultancy
          </div>
          {/**Business content  */}
          <div
            data-scroll
            data-scroll-speed="4"
            className="font-bold lg:visible invisible  text-white z-40  lg:z-10 text-[12px]  w-1/2   -ml-4     lg:ml-16  lg:text-2xl mt-10 lg:mt-40"
          >
            <ul className="">
              <li className="pt-2"> Start A Business</li>
              <li className="pt-2">Accounting & Financing</li>
              <li className="pt-2">Secretarial Compliance</li>
              <li className="pt-2">Taxation</li>
              <li className="pt-2"> Advisory</li>
              <li className="pt-2"> Licence and Business permits</li>
            </ul>
          </div>
          {/**Business content copy */}
          <div className="font-bold lg:invisible visible  text-white z-40   text-[12px]  w-1/2  -ml-40     mt-5 ">
            <ul className="">
              <li className="pt-2"> Start A Business</li>
              <li className="pt-2">Accounting & Financing</li>
              <li className="pt-2">Secretarial Compliance</li>
              <li className="pt-2">Taxation</li>
              <li className="pt-2"> Advisory</li>
              <li className="pt-2"> Licence and Business permits</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  -----------------second page-------------------- */}
      <div className=" relative h-[199px]  lg:w-[100%] lg:h-[100vh] overflow-hidden flex">
        {/**sun */}
        <div
          data-scroll
          data-scroll-speed="-7.5"
          data-scroll-direction="vertical"
          className="absolute z-10 opacity-90 left-[190px] lg:left-[840px]"
        >
          <img className="w-[10rem] lg:w-[29rem]" src={sun} alt="" />
        </div>
        <img className="absolute lg:w-[100%] blur-sm" src={bgst} alt="" />
        {/*------------ flight-image -----------   */}
        <motion.div
          initial={{ x: 900 }}
          whileInView={{ x: -100 }}
          transition={{ duration: 4, delay: 0.3 }}
          className="lg:visible invisible  absolute  w-[500px] mt-24 lg:mt-96"
        >
          <div className="w-[2000px] h-2 absolute top-[150px] left-[350px] flex justify-end rounded-l-full blur-sm bg-white/50"></div>

          <img className="ml-[150px]  lg:w-[350px]" src={Img1} alt="" />
        </motion.div>
        {/*------------ flight-image copy -----------   */}
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: -200 }}
          transition={{ duration: 4, delay: 0.3 }}
          className="lg:invisible visible  absolute  w-[500px] mt-24 lg:mt-96"
        >
          <div className="w-[2000px] h-2 absolute top-[70px] left-[250px] flex justify-end rounded-l-full blur-sm bg-white/50"></div>

          <img className="ml-[150px]  w-[150px]" src={Img1} alt="" />
        </motion.div>
        {/**-----------super market content------------- */}
        <h1
          data-scroll
          data-scroll-speed="-5"
          data-scroll-direction="vertical"
          className="font-bold z-20 ml-8 lg:ml-0  lg:mt-16 text-xl lg:text-7xl lg:w-1/2  lg:pl-2 uppercase text-white lg:text-white"
        >
          Supermarket consultancy
        </h1>
        <motion.ul
          initial={{ x: 600 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="lg:visible invisible font-bold text-white  w-1/2 -ml-16 z-10 text-2xl   mt-40"
        >
          <li className="mt-2"> New Store Startup</li>
          <li className="mt-2"> Merchandising</li>
          <li className="mt-2">Shop Development</li>
          <li className="mt-2">Marketing strategy</li>
          <li className="mt-2"> Product Procurement</li>
          <li className="mt-2"> Stock Auditing</li>
          <li className="mt-2">Infrastructure Costing</li>
        </motion.ul>
        {/**-------------Submenu copy----------------- */}
        <motion.ul
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 3 }}
          className="font-bold visible lg:invisible text-white -ml-[330px] mt-10 text-center  z-10 text-sm   "
        >
          <li className=""> New Store Startup</li>
          <li className=""> Merchandising</li>
          <li className="">Shop Development</li>
          <li className="">Marketing strategy</li>
          <li className=""> Product Procurement</li>
          <li className=""> Stock Auditing</li>
          <li className="">Infrastructure Costing</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="lg:top-[200px] left-[220px] z-20 top-[70px] lg:left-[980px]  absolute"
        >
          <img className="w-[8rem]  lg:w-[23rem]" src={Img2} alt="" />
        </motion.div>
      </div>

      {/**---------------------Third page-------------------------- */}
      <div
        id="flow"
        className="  relative h-[350vh]  lg:w-[100%]  lg:h-[300vh]  overflow-hidden "
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
                className="p-6 bg-[#ffc914] lg:flex lg:h-screen 
       "
              >
                <motion.div className="mt-40 lg:mt-44 w-[500px]">
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
            <div className=" bg-[#ffc914] absolute gap-[55px] p-10 flex  lg:-mt-[100px] lg:visible invisible  border-t border-black  ">
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

        <div className="w-full bg-[#37C3DEff] lg:rounded-b-[100px] absolute  h-[150vh]  lg:h-[200vh]  ">
          {/*   <div>
            <img
              data-scroll
              data-scroll-speed="4"
              className=" w-full h-[200vh] opacity-20 absolute"
              src={start}
              alt=""
            />
          </div> */}
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            className="w-[200px] lg:w-[500px] z-20 opacity-90 absolute"
            src={cloud}
            alt=""
          />
          <div className="w-[100%] flex justify-center">
            <img
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="-20"
              className=" absolute w-[300px] ml-20  "
              src={top}
              alt=""
            />
          </div>
          <div id="one" className=" w-full h-[100vh]  lg:ml-24">
            <div
              data-scroll
              data-scroll-speed="20"
              data-scroll-direction="horizontal"
              className="text-6xl text-center  lg:text-8xl mt-20 uppercase lg:p-4 font-bold flex justify-center"
            >
              Cloud Web Hosting
            </div>
            <div data-scroll data-scroll-speed="4" className="absolute mt-24">
              <img
                className="w-[800px] opacity-75 lg:ml-40 "
                src={cloud}
                alt=""
              />
            </div>
            <div
              id="two"
              className="absolute   text-center  lg:left-[900px] font-bold text-2xl mt-20"
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
                className="uppercase text-4xl ml-4 lg:text-6xl py-20"
              >
                App Development
              </div>
              <ul>
                <li> Website Development</li>
                <li> CRM Development</li>
                <li>E-Commerce Development</li>
                <li className="px-3">Mobile Application Development</li>
                <li> SEO</li>
                <li> Automation</li>
                <li>REST API Development </li>
              </ul>
            </div>

            <div className="">
              <motion.div>
                <img
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#two"
                  className="lg:visible invisible relative "
                  src={web}
                  alt=""
                />
              </motion.div>

              <div>
                <img
                  data-scroll
                  data-scroll-speed="-4"
                  data-scroll-direction="horizontal"
                  className="  absolute -mt-[250px] lg:-mt-[300px] ml-72 lg:ml-24"
                  src={cld}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-[#37C3DEff] rounded-b-[20px] w-[900px] relative ">
            {/*  <img src={top} alt="" /> */}
            <img
              className="w-[400px] lg:w-[500px] relative mt-52 ml-20 "
              src={phone}
              alt=""
            />
            <img
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical"
              className="w-[500px] absolute ml-10 -mt-[22rem]"
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
