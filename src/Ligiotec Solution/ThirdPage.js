import React from "react";
import { motion } from "framer-motion";

import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import face from "./assets/facebook-round-svgrepo-com.svg";
import tele from "./assets/telegram-fill-svgrepo-com.svg";
import Transition from "./Transition";

const ThirdPage = () => {
  return (
    <motion.div
      /*  initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }} */
      id="about"
    >
      <div id="logo" className="w-[100%] h-[530vh] relative overflow-hidden">
        <Transition />
        {/**logo pulse animation */}
        {/*  <div
        id="one"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#logo"
        className="absolute px-4  -mt-[100px] "
      >
        <svg
          width="170"
          height="297"
          viewBox="0 0 842 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M175.797 289.484V2H204.545V289.484H175.797Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M130.061 245.054V52.963H157.503V245.054H130.061Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M119.607 76.4844H89.5519V214.999H119.607V76.4844Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M81.7114 191.478H51.6563V110.46H81.7114V191.478Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M35.9754 135.288H2V170.57H35.9754V135.288Z"
            stroke="black"
            stroke-width="2.61349"
          />

          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M666.47 7.29132L665.826 294.774L637.078 294.71L637.721 7.22695L666.47 7.29132Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M712.106 51.823L711.676 243.914L684.234 243.852L684.665 51.7615L712.106 51.823Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M722.183 220.416L752.238 220.483L752.548 81.9687L722.493 81.9014L722.183 220.416Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M760.336 105.508L790.391 105.575L790.209 186.593L760.154 186.526L760.336 105.508Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M805.946 161.8L839.921 161.876L840 126.594L806.025 126.518L805.946 161.8Z"
            stroke="black"
            stroke-width="2.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M233.294 281.643V32.0551H280.337V233.294H387.49V281.643H233.294Z"
            stroke="black"
            stroke-width="1.61349"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 6,
              repeat: "infinite",
            }}
            d="M611.026 91.0752L564.071 98.6708V91.0752L555.785 76.5746L544.737 66.9075L530.237 62.7645L516.427 59.312L499.854 62.7645L486.044 66.9075L477.068 73.8126L468.782 83.4797L465.329 98.6708L474.306 107.647L486.044 113.862L495.021 118.005L505.379 122.148L530.237 127.672L555.785 134.577L575.81 141.482L593.763 154.602L607.573 168.412L611.026 182.912L614.478 205.009L611.026 225.724L607.573 240.915L593.763 263.011L575.81 279.583C569.826 281.885 556.062 287.317 548.88 290.631C541.699 293.946 524.252 294.314 516.427 294.084L495.021 290.631L468.782 279.583L445.305 263.011C439.32 257.487 426.661 244.506 423.899 236.772C421.137 229.038 418.145 214.215 416.994 207.771H465.329L474.306 221.581L486.044 234.01L499.854 240.915L516.427 246.439C520.8 246.439 532.584 245.334 544.737 240.915C556.89 236.496 562.69 223.882 564.071 218.128V207.771V193.27L548.88 182.912L524.022 175.317L499.854 171.864L481.211 164.959L457.043 154.602L440.471 141.482L427.351 127.672C425.05 122.838 419.756 110.271 416.994 98.6708C414.232 87.0703 415.843 88.7735 416.994 91.0752L420.446 76.5746L427.351 59.312L440.471 42.0493L452.9 31.0012L468.782 22.0247L486.044 16.5006L505.379 12.3576H524.022C529.546 13.2783 541.423 15.3958 544.737 16.5006C548.052 17.6054 561.77 22.9453 568.215 25.4772L584.787 37.9063C588.009 41.589 595.697 51.0259 600.668 59.312C605.64 67.598 609.645 83.94 611.026 91.0752Z"
            stroke="black"
            stroke-width="1.8888"
          />
        </svg>
      </div> */}

        {/**first */}
        <div>
          {/**shines */}
          <div className=" bg-yellow-300 -mt-20 w-screen h-[500vh] absolute">
            <div className="pl-16 ">
              <div className="shine  "></div>
              <div className="shine1  "></div>
              <div className="shine2  "></div>
              <div className="shine3  "></div>
              <div className="shine4  "></div>
              <div className="shine5  "></div>
            </div>
            <div className=" bottom-0 absolute z-40  w-screen h-screen">
              <div className="absolute mt-72">
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
                        <p className="text-[10px] font-semibold">
                          STAY UP TO DATE
                        </p>
                        <p className="font-semibold text-2xl">
                          Get our newsletter
                        </p>
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
                    <h1 className="font-bold lg:text-xl">
                      Business Consultancy
                    </h1>
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
          </div>

          {/**balls */}

          <div
            data-scroll
            data-scroll-speed="2"
            className="absolute w-full flex justify-between h-[200vh]"
          >
            <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
              <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                {" "}
                <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
              <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
            </div>
            <div className="w-[40px] mt-[180px] h-[40px] bg-black rounded-full overflow-hidden">
              <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
            </div>
            <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
            <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
              <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                {" "}
                <div className="w-10 h-10 rounded-full bg-white/20 "></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-4"
            className="absolute w-full flex justify-evenly rotate-45 h-[200vh]"
          >
            <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
              <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                {" "}
                <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
              <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
            </div>
            <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
              <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
            </div>
            <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
            <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
              <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                {" "}
                <div className="w-10 h-10 rounded-full bg-white/20 "></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-2"
            className="absolute w-full flex justify-evenly mt-20 -rotate-45 h-[200vh]"
          >
            <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
              <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                {" "}
                <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
              <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
            </div>
            <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
              <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
            </div>
            <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
            <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
              <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                {" "}
                <div className="w-10 h-10 rounded-full bg-white/20 "></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="4"
            className="absolute w-full left-0 h-[200vh]"
          >
            <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
              <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                {" "}
                <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
              <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
            </div>
            <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
              <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
            </div>
            <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
            <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
              <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                {" "}
                <div className="w-10 h-10 rounded-full bg-white/20 "></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="2"
            className="absolute w-full ml-[1000px] h-[200vh]"
          >
            <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
              <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                {" "}
                <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
              <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
            </div>
            <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
              <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
            </div>
            <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
            <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
              <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                {" "}
                <div className="w-10 h-10 rounded-full bg-white/20 "></div>
              </div>
            </div>
          </div>

          <motion.div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#logo"
            className="w-full mx-auto sticky top-0 flex justify-center pt-48  h-[100vh] overflow-hidden "
          >
            <motion.div
              initial={{ rotate: -90 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 5, type: "spring", stiffness: 100 }}
              className="w-[1800px] border-white/20 border-8 bg-gray-300 absolute h-[1800px]  rounded-full "
            >
              {/**pulse icons */}
              {/*  <div className="absolute ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  calcMode="spline"
                  dur="1.2s"
                  keySplines=".52,.6,.25,.99"
                  repeatCount="indefinite"
                  values="0;11"
                />
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="1.2s"
                  keySplines=".52,.6,.25,.99"
                  repeatCount="indefinite"
                  values="1;0"
                />
              </circle>
            </svg>
          </div>  */}
              <motion.div className="overflow-visible mx-auto flex-wrap  -mt-6 z-50 ml-[230px]">
                <svg
                  width="1340"
                  height="383"
                  viewBox="0 0 1340 383"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M70.0253 382.267L0.482335 318.905L9.73821 308.294C12.8796 304.693 16.217 302.166 19.7505 300.711C23.2804 299.195 26.9871 298.937 30.8705 299.936C34.7819 300.903 38.8349 303.297 43.0296 307.119C46.3727 310.165 48.8974 313.273 50.6036 316.444C52.3378 319.582 52.8855 323.139 52.2467 327.116C55.8782 325.808 59.6987 325.971 63.7081 327.604C67.686 329.209 71.6461 331.807 75.5884 335.399C79.4677 338.934 82.3287 342.695 84.1714 346.682C86.0422 350.637 86.7335 354.614 86.2453 358.613C85.7537 362.55 83.9372 366.32 80.7958 369.921L70.0253 382.267ZM68.989 362.626C71.7377 359.475 72.6322 356.568 71.6724 353.904C70.6811 351.212 68.4666 348.3 65.0289 345.168C61.5281 341.978 58.4441 340.063 55.7769 339.421C53.0781 338.751 50.3544 339.992 47.6057 343.143L68.989 362.626ZM38.2387 334.608C40.791 331.682 41.7556 328.955 41.1323 326.425C40.537 323.863 38.694 321.173 35.6032 318.357C32.4809 315.512 29.6737 313.993 27.1816 313.8C24.6861 313.546 22.1901 314.85 19.6939 317.712L38.2387 334.608Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M133.513 313.675C130.706 316.358 127.702 317.99 124.501 318.573C121.33 319.126 118.195 318.76 115.095 317.476C111.995 316.192 109.163 314.12 106.599 311.262L56.6809 255.62L66.6735 246.067L116.591 301.71C117.816 303.075 119.161 304.031 120.626 304.578C122.062 305.093 123.366 304.791 124.538 303.67C125.771 302.491 126.179 301.157 125.761 299.669C125.314 298.15 124.478 296.707 123.253 295.341L73.3353 239.699L83.3279 230.146L133.246 285.789C135.81 288.647 137.578 291.735 138.55 295.054C139.553 298.343 139.65 301.613 138.842 304.863C138.065 308.084 136.288 311.021 133.513 313.675Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M189.017 265.896C186.029 268.24 183.173 269.694 180.45 270.259C177.7 270.789 175.038 270.546 172.461 269.531C169.885 268.516 167.333 266.859 164.805 264.559C162.311 262.232 159.795 259.38 157.258 256.003L167.165 246.605C168.395 248.243 169.637 249.789 170.89 251.246C172.152 252.641 173.395 253.835 174.62 254.826C175.852 255.757 177.04 256.343 178.182 256.586C179.358 256.802 180.433 256.528 181.406 255.764C183.018 254.5 183.595 252.854 183.139 250.826C182.658 248.764 181.61 246.659 179.995 244.51C178.381 242.36 176.149 240.56 173.298 239.11C170.448 237.659 167.469 236.499 164.362 235.629C159.079 234.135 154.306 232.647 150.045 231.164C145.818 229.656 142.048 227.869 138.737 225.804C135.459 223.713 132.615 221.064 130.207 217.857C128.311 215.332 126.887 212.762 125.936 210.147C124.96 207.497 124.486 204.914 124.516 202.396C124.554 199.819 125.112 197.402 126.192 195.145C127.271 192.889 128.935 190.878 131.185 189.114C133.971 186.928 136.679 185.562 139.31 185.016C141.975 184.444 144.561 184.584 147.068 185.436C149.609 186.262 152.071 187.693 154.453 189.728C156.843 191.702 159.152 194.173 161.382 197.141L151.475 206.539C150.527 205.277 149.512 204.068 148.43 202.911C147.355 201.693 146.27 200.674 145.173 199.854C144.077 199.033 143 198.523 141.942 198.322C140.885 198.122 139.903 198.377 138.996 199.088C137.586 200.194 137.074 201.572 137.46 203.221C137.819 204.837 138.832 206.753 140.498 208.971C142.65 211.836 145.481 214.007 148.99 215.483C152.5 216.959 156.862 218.47 162.078 220.017C168.285 221.816 173.665 223.723 178.218 225.735C182.804 227.722 186.699 230.847 189.902 235.112C191.926 237.807 193.524 240.538 194.696 243.305C195.842 246.039 196.435 248.746 196.474 251.426C196.546 254.08 195.985 256.635 194.789 259.091C193.626 261.521 191.702 263.789 189.017 265.896Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M230.719 233.32L179.907 154.142L191.39 146.445L242.202 225.623L230.719 233.32Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M269.648 207.372L225.324 124.388L236.614 118.089L270.889 155.096L273.945 158.373L274.616 157.999L249.469 110.918L260.535 104.744L304.86 187.729L294.688 193.403L259.294 157.021L256.238 153.743L255.567 154.118L280.715 201.198L269.648 207.372Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M339.918 169.611L303.468 82.8786L332.418 70.1714L337.922 83.2697L321.631 90.4207L331.45 113.785L343.17 108.641L348.526 121.385L336.806 126.53L347.071 150.956L363.363 143.805L368.868 156.903L339.918 169.611Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M417.642 139.16C414.044 140.372 410.862 140.791 408.096 140.416C405.318 140.001 402.874 138.888 400.766 137.077C398.659 135.266 396.784 132.858 395.143 129.855C393.543 126.837 392.095 123.318 390.799 119.298L403.265 113.75C403.893 115.699 404.562 117.567 405.273 119.354C406.011 121.086 406.797 122.622 407.632 123.961C408.495 125.246 409.428 126.193 410.43 126.8C411.474 127.395 412.582 127.494 413.754 127.099C415.695 126.446 416.782 125.089 417.015 123.03C417.234 120.931 416.932 118.602 416.107 116.043C415.282 113.485 413.757 111.05 411.533 108.738C409.308 106.426 406.866 104.344 404.208 102.493C399.692 99.3321 395.659 96.346 392.108 93.5352C388.598 90.7107 385.612 87.7769 383.152 84.7339C380.732 81.6773 378.907 78.2404 377.676 74.4232C376.708 71.4181 376.202 68.5274 376.158 65.751C376.102 62.9339 376.5 60.3464 377.354 57.9882C378.234 55.5758 379.556 53.4878 381.318 51.7239C383.081 49.9601 385.316 48.6221 388.026 47.7099C391.382 46.5798 394.396 46.1952 397.067 46.5562C399.779 46.9035 402.183 47.8948 404.279 49.5299C406.415 51.1514 408.278 53.3151 409.868 56.0211C411.485 58.6728 412.863 61.7652 414.002 65.2981L401.536 70.846C401.051 69.3435 400.486 67.8682 399.84 66.4202C399.221 64.9179 398.527 63.5986 397.757 62.4623C396.987 61.326 396.134 60.4877 395.198 59.9476C394.262 59.4075 393.248 59.3213 392.156 59.6889C390.458 60.2607 389.521 61.3865 389.345 63.0663C389.157 64.7054 389.488 66.8448 390.339 69.4843C391.438 72.8955 393.409 75.8784 396.249 78.4332C399.09 80.988 402.728 83.8596 407.163 87.0481C412.453 90.804 416.924 94.3852 420.577 97.7918C424.271 101.185 426.936 105.419 428.573 110.495C429.607 113.703 430.225 116.804 430.428 119.797C430.618 122.749 430.292 125.492 429.451 128.026C428.649 130.547 427.28 132.764 425.341 134.677C423.444 136.576 420.877 138.071 417.642 139.16Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M484.062 119.406C480.369 120.287 477.16 120.416 474.436 119.794C471.702 119.13 469.364 117.801 467.421 115.808C465.478 113.815 463.82 111.25 462.447 108.112C461.116 104.965 459.98 101.332 459.04 97.214L471.953 92.819C472.409 94.8156 472.913 96.735 473.465 98.5772C474.049 100.368 474.698 101.967 475.414 103.376C476.161 104.733 477.008 105.759 477.955 106.454C478.943 107.14 480.038 107.339 481.242 107.052C483.234 106.577 484.436 105.325 484.849 103.297C485.251 101.227 485.153 98.8822 484.555 96.2617C483.957 93.6411 482.65 91.0798 480.635 88.5778C478.619 86.0759 476.367 83.7838 473.879 81.7017C469.654 78.1476 465.895 74.8114 462.601 71.6932C459.348 68.5651 456.629 65.3758 454.443 62.125C452.298 58.8644 450.779 55.2791 449.886 51.3691C449.184 48.2909 448.932 45.3684 449.132 42.6013C449.322 39.7927 449.946 37.2536 451.003 34.9839C452.093 32.6627 453.593 30.704 455.504 29.1079C457.415 27.5118 459.761 26.3822 462.542 25.7191C465.987 24.8977 469.025 24.7873 471.657 25.3879C474.33 25.9786 476.639 27.1823 478.586 28.999C480.574 30.8057 482.242 33.1274 483.589 35.964C484.969 38.7491 486.072 41.951 486.898 45.5699L473.985 49.9649C473.634 48.4258 473.2 46.9066 472.682 45.4071C472.197 43.8561 471.62 42.4804 470.952 41.28C470.284 40.0796 469.507 39.1683 468.621 38.5462C467.735 37.9241 466.732 37.7467 465.612 38.0139C463.868 38.4295 462.836 39.4653 462.514 41.1211C462.182 42.7353 462.325 44.8943 462.942 47.598C463.74 51.0921 465.443 54.2388 468.051 57.038C470.66 59.8371 474.035 63.0237 478.177 66.5976C483.121 70.8133 487.266 74.7814 490.61 78.5017C493.995 82.2122 496.281 86.6671 497.468 91.8667C498.218 95.1528 498.564 98.2943 498.504 101.291C498.435 104.246 497.87 106.947 496.809 109.393C495.79 111.829 494.23 113.911 492.13 115.64C490.072 117.359 487.383 118.614 484.062 119.406Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M530.167 79.5409L528.271 67.5297L546.584 64.5102L548.48 76.5214L530.167 79.5409Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M591.263 100.834C587.354 101.191 583.942 100.624 581.028 99.133C578.153 97.5959 575.859 95.3632 574.147 92.4346C572.477 89.5022 571.474 86.1021 571.136 82.2341L566.312 27.0205C565.978 23.195 566.399 19.6862 567.576 16.4941C568.796 13.298 570.709 10.6814 573.315 8.64418C575.921 6.60697 579.115 5.41583 582.896 5.07076C585.743 4.81099 588.339 5.10967 590.684 5.96679C593.029 6.82392 595.069 8.11586 596.804 9.84262C598.579 11.523 599.998 13.557 601.063 15.9448C602.125 18.29 602.778 20.8653 603.023 23.6706L604.148 36.5495L591.274 37.7243L590.149 24.8454C589.978 22.8902 589.431 21.2906 588.509 20.0466C587.586 18.8026 586.19 18.2659 584.321 18.4365C582.621 18.5916 581.449 19.3841 580.803 20.814C580.157 22.244 579.915 23.8941 580.079 25.7643L584.902 80.9779C585.066 82.8482 585.611 84.4265 586.537 85.713C587.505 86.9956 588.776 87.5652 590.348 87.4217C592.26 87.2472 593.541 86.4663 594.191 85.0789C594.883 83.6875 595.143 82.0143 594.973 80.0591L593.847 67.1801L606.722 66.0053L607.847 78.8843C608.181 82.7097 607.739 86.2204 606.519 89.4165C605.299 92.6125 603.386 95.2292 600.78 97.2664C598.217 99.2997 595.044 100.489 591.263 100.834Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M662.865 97.0939C659.025 97.082 655.722 96.1759 652.955 94.3753C650.23 92.5749 648.127 90.1364 646.645 87.0598C645.205 83.9834 644.492 80.5251 644.505 76.6852L644.701 21.2615C644.714 17.3789 645.452 13.9251 646.913 10.9003C648.417 7.8329 650.538 5.40743 653.275 3.62386C656.055 1.84042 659.364 0.954628 663.204 0.966468C667.044 0.978309 670.327 1.88443 673.051 3.68484C675.818 5.48538 677.921 7.92388 679.361 11.0003C680.844 14.0769 681.578 17.5352 681.564 21.3752L681.369 76.7988C681.355 80.6388 680.597 84.0925 679.092 87.1599C677.631 90.2274 675.51 92.6529 672.731 94.4363C669.994 96.2199 666.705 97.1057 662.865 97.0939ZM662.913 83.654C664.619 83.6592 665.816 82.9589 666.504 81.553C667.192 80.1045 667.539 78.5055 667.545 76.7562L667.741 21.3325C667.747 19.5832 667.39 18.0035 666.669 16.5932C665.949 15.1403 664.778 14.4114 663.157 14.4064C661.578 14.4015 660.402 15.1232 659.629 16.5715C658.899 17.9773 658.531 19.5548 658.525 21.3041L658.329 76.7278C658.323 78.4771 658.68 80.0782 659.4 81.5311C660.12 82.9414 661.291 83.649 662.913 83.654Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M717.035 97.3038L726.282 3.67927L739.142 5.00579L747.056 55.1058L747.774 59.5549L748.538 59.6338L753.784 6.51618L766.389 7.81644L757.143 101.441L745.556 100.246L736.369 50.0144L735.651 45.5652L734.887 45.4864L729.641 98.604L717.035 97.3038Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M812.023 111.269C808.302 110.513 805.326 109.277 803.095 107.561C800.873 105.803 799.279 103.608 798.313 100.973C797.348 98.3391 796.874 95.304 796.89 91.8679C796.948 88.4404 797.381 84.6534 798.187 80.5071L811.728 81.9521C811.337 83.9624 811.021 85.9226 810.78 87.8328C810.588 89.7096 810.534 91.4401 810.617 93.0243C810.75 94.5751 811.108 95.8667 811.689 96.8991C812.312 97.94 813.23 98.5837 814.443 98.83C816.45 99.2378 818.051 98.6052 819.246 96.9323C820.448 95.2175 821.306 93.0409 821.82 90.4023C822.333 87.7638 822.177 84.8804 821.351 81.7521C820.525 78.6238 819.399 75.5869 817.973 72.6413C815.558 67.623 813.48 62.9996 811.739 58.7709C810.039 54.5507 808.849 50.4996 808.17 46.6174C807.532 42.7437 807.597 38.8385 808.362 34.9016C808.965 31.8024 809.917 29.0351 811.216 26.5998C812.524 24.1227 814.118 22.0738 815.998 20.453C817.928 18.7989 820.086 17.6483 822.472 17.0011C824.858 16.3539 827.452 16.3149 830.253 16.884C833.723 17.5891 836.536 18.7701 838.691 20.427C840.888 22.0924 842.507 24.1627 843.547 26.6378C844.628 29.1215 845.21 31.939 845.293 35.0904C845.425 38.2084 845.137 41.5893 844.428 45.233L830.887 43.7881C831.189 42.2384 831.407 40.6718 831.541 39.0882C831.725 37.4712 831.755 35.9754 831.631 34.6006C831.508 33.2258 831.168 32.0683 830.612 31.1281C830.056 30.188 829.213 29.6032 828.084 29.3738C826.328 29.0171 824.969 29.5246 824.007 30.8964C823.052 32.2263 822.311 34.2525 821.781 36.9748C821.097 40.4928 821.378 44.0764 822.624 47.7254C823.87 51.3745 825.658 55.6996 827.989 60.7009C830.791 66.6254 832.965 71.9867 834.509 76.7847C836.095 81.5912 836.379 86.6121 835.36 91.8473C834.717 95.1559 833.763 98.162 832.498 100.866C831.241 103.527 829.636 105.748 827.681 107.528C825.769 109.316 823.507 110.554 820.895 111.243C818.326 111.94 815.368 111.948 812.023 111.269Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M881.026 128.209C877.311 127.082 874.376 125.255 872.222 122.729C870.109 120.215 868.787 117.273 868.255 113.902C867.724 110.531 867.994 107.001 869.065 103.314L889.918 31.529L903.147 35.5425L882.294 107.327C881.782 109.089 881.677 110.751 881.978 112.314C882.291 113.836 883.224 114.832 884.775 115.303C886.408 115.798 887.742 115.489 888.776 114.376C889.822 113.223 890.601 111.765 891.113 110.003L911.966 38.2183L925.194 42.2318L904.341 114.016C903.27 117.704 901.592 120.806 899.306 123.322C897.06 125.851 894.361 127.574 891.207 128.489C888.094 129.417 884.701 129.324 881.026 128.209Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M934.428 144.903L968.328 57.1433L981.148 62.3155L951.86 138.135L968.835 144.984L964.223 156.924L934.428 144.903Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M999.581 173.148L1034.43 101.279L1022.78 95.3805L1028.98 82.5963L1064.61 100.64L1058.41 113.424L1046.76 107.525L1011.91 179.394L999.581 173.148Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M1050.49 199.95L1111.22 127.064L1125.5 136.094L1088.79 224.167L1077.43 216.984L1085.21 199.191L1073.95 192.077L1061.85 207.133L1050.49 199.95ZM1083.13 180.62L1091.14 185.683L1104.16 156.516L1106.42 152.041L1105.77 151.63L1102.86 155.696L1083.13 180.62Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M1117.58 244.056L1174.08 168.833L1184.25 176.812L1164.88 223.911L1163.18 228.102L1163.78 228.576L1195.84 185.898L1205.81 193.719L1149.3 268.943L1140.14 261.754L1158.5 213.865L1160.21 209.674L1159.61 209.2L1127.55 251.878L1117.58 244.056Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M1191.71 307.779C1188.87 305.066 1187.04 302.107 1186.21 298.9C1185.45 295.691 1185.58 292.453 1186.61 289.184C1187.66 285.945 1189.5 282.893 1192.12 280.029L1229.54 239.143C1232.13 236.31 1234.99 234.262 1238.11 232.998C1241.27 231.763 1244.45 231.443 1247.67 232.038C1250.88 232.632 1253.86 234.241 1256.61 236.865C1258.67 238.84 1260.16 241.003 1261.08 243.352C1261.99 245.701 1262.39 248.114 1262.26 250.59C1262.19 253.063 1261.63 255.508 1260.58 257.923C1259.55 260.307 1258.09 262.537 1256.19 264.615L1247.46 274.152L1238.12 265.219L1246.84 255.682C1248.17 254.234 1248.99 252.742 1249.29 251.206C1249.6 249.67 1249.07 248.254 1247.72 246.957C1246.48 245.777 1245.13 245.426 1243.65 245.903C1242.17 246.379 1240.8 247.31 1239.53 248.695L1202.12 289.581C1200.85 290.966 1200.05 292.442 1199.71 294.009C1199.41 295.606 1199.82 296.95 1200.97 298.041C1202.35 299.367 1203.77 299.808 1205.22 299.363C1206.7 298.948 1208.1 298.016 1209.43 296.568L1218.15 287.031L1227.5 295.964L1218.77 305.501C1216.18 308.334 1213.31 310.367 1210.15 311.602C1207 312.836 1203.81 313.156 1200.6 312.562C1197.42 311.997 1194.45 310.402 1191.71 307.779Z"
                    fill="#000"
                  />
                  <motion.path
                    initial={{
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    d="M1248.31 349.823L1279 324.062L1310.72 279.075L1320.02 288.958L1301.63 313.241L1298.8 316.201L1299.06 316.481L1302.5 314.173L1330.19 299.774L1339.48 309.658L1288.47 334.132L1257.78 359.893L1248.31 349.823Z"
                    fill="#000"
                  />
                </svg>
              </motion.div>
            </motion.div>
            <div className="bg-[#DF73FF] z-10 border-white/30 border-8 w-[1800px] mt-24 h-[1400px] rounded-full ">
              {" "}
              <div className="bold font-bold uppercase text-center flex justify-center mt-16 text-4xl ">
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
          </motion.div>
        </div>

        {/**Second */}

        <motion.div className="w-full z-50  mx-auto sticky top-0  flex justify-center pt-48  h-[100vh] ">
          {/**Heading svg */}
          <motion.div
            initial={{ rotate: -90 }}
            whileInView={{ rotate: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="w-[1800px] border-white/20 border-8 bg-gray-500 absolute h-[2000px]  rounded-t-full"
          >
            {/*  <div className="absolute mt-4 ml-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  calcMode="spline"
                  dur="1.2s"
                  keySplines=".52,.6,.25,.99"
                  repeatCount="indefinite"
                  values="0;11"
                />
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="1.2s"
                  keySplines=".52,.6,.25,.99"
                  repeatCount="indefinite"
                  values="1;0"
                />
              </circle>
            </svg>
          </div> */}
            <motion.div className=" -mt-12  ml-[185px]">
              <svg
                width="1405"
                height="454"
                viewBox="0 0 1405 454"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M106.881 397.804C104.365 400.648 101.816 402.597 99.2327 403.649C96.6183 404.673 93.9469 404.925 91.2187 404.403C88.4905 403.881 85.668 402.726 82.7511 400.937C79.8625 399.115 76.8562 396.783 73.7323 393.94L81.7749 382.916C83.2896 384.294 84.7993 385.582 86.304 386.778C87.8055 387.914 89.2515 388.855 90.6419 389.601C92.029 390.286 93.3083 390.643 94.4798 390.671C95.6795 390.667 96.6893 390.201 97.5091 389.275C98.8659 387.741 99.1328 386.022 98.3098 384.119C97.4552 382.188 96.0339 380.318 94.0459 378.508C92.0579 376.699 89.5247 375.345 86.4461 374.447C83.3675 373.549 80.2156 372.959 76.9904 372.677C71.5038 372.183 66.5223 371.601 62.0461 370.931C57.5981 370.229 53.5509 369.17 49.9043 367.755C46.286 366.308 42.9937 364.235 40.0276 361.535C37.6925 359.41 35.8153 357.153 34.396 354.766C32.9451 352.349 32.0027 349.905 31.5689 347.434C31.1317 344.902 31.2379 342.431 31.8874 340.023C32.5369 337.614 33.8086 335.339 35.7026 333.198C38.0489 330.545 40.4694 328.71 42.9642 327.693C45.4873 326.643 48.064 326.306 50.6943 326.681C53.3528 327.024 56.0442 327.973 58.7684 329.53C61.4894 331.025 64.2225 333.022 66.9678 335.521L58.9252 346.545C57.7576 345.483 56.5335 344.484 55.2529 343.549C53.969 342.554 52.7108 341.755 51.4782 341.152C50.2455 340.55 49.0892 340.247 48.0091 340.245C46.929 340.242 46.0073 340.673 45.2441 341.536C44.0568 342.878 43.805 344.322 44.4887 345.867C45.1408 347.383 46.4924 349.075 48.5435 350.941C51.1941 353.354 54.3861 354.961 58.1195 355.763C61.8529 356.565 66.4346 357.244 71.8647 357.802C78.3184 358.426 83.9759 359.306 88.8374 360.443C93.7271 361.547 98.1442 363.894 102.089 367.484C104.581 369.753 106.66 372.135 108.326 374.631C109.959 377.099 111.042 379.641 111.574 382.26C112.134 384.846 112.05 387.452 111.322 390.078C110.623 392.672 109.142 395.247 106.881 397.804Z"
                  fill="black"
                />
                <path
                  d="M148.505 353.483C145.718 356.186 142.714 357.852 139.494 358.478C136.305 359.076 133.136 358.761 129.988 357.536C126.839 356.311 123.948 354.301 121.314 351.507L70.0391 297.112L79.9624 287.487L131.237 341.882C132.496 343.217 133.868 344.144 135.354 344.664C136.812 345.152 138.122 344.832 139.286 343.703C140.511 342.515 140.9 341.187 140.454 339.718C139.978 338.218 139.111 336.801 137.853 335.466L86.578 281.071L96.5013 271.447L147.776 325.841C150.41 328.635 152.244 331.67 153.28 334.945C154.346 338.19 154.498 341.431 153.736 344.665C153.005 347.871 151.261 350.81 148.505 353.483Z"
                  fill="black"
                />
                <path
                  d="M180.804 321.536L121.739 248.308L132.376 239.479C136.415 236.128 140.503 234.232 144.642 233.791C148.814 233.322 152.899 234.174 156.897 236.344C160.895 238.515 164.688 241.825 168.278 246.275C171.867 250.725 174.255 255.147 175.442 259.54C176.628 263.933 176.596 268.174 175.344 272.262C174.098 276.29 171.589 280.008 167.815 283.416L191.442 312.707L180.804 321.536ZM158.976 272.457C160.847 270.904 162.03 269.312 162.524 267.683C162.992 266.02 162.799 264.184 161.946 262.175C161.126 260.139 159.685 257.842 157.622 255.285C155.533 252.695 153.585 250.79 151.78 249.572C150.008 248.326 148.256 247.784 146.523 247.947C144.824 248.082 143.055 248.913 141.216 250.439L158.976 272.457Z"
                  fill="black"
                />
                <path
                  d="M227.457 283.531L173.851 206.218L199.588 187.856L207.684 199.532L193.2 209.865L207.641 230.693L218.061 223.259L225.938 234.619L215.518 242.053L230.615 263.827L245.099 253.494L253.195 265.17L227.457 283.531Z"
                  fill="black"
                />
                <path
                  d="M273.729 251.023L225.911 170.001L237.728 162.825C244.803 158.529 251.189 157.347 256.886 159.278C262.562 161.172 267.666 165.959 272.198 173.638C274.887 178.195 276.416 182.632 276.785 186.95C277.168 191.21 276.685 194.797 275.334 197.714L306.114 231.357L294.297 238.532L267.456 208.413L265.377 209.675L285.545 243.847L273.729 251.023ZM258.871 198.651C261.059 197.323 262.51 195.793 263.222 194.063C263.913 192.295 264.001 190.346 263.485 188.213C262.97 186.08 261.986 183.783 260.533 181.321C258.256 177.463 255.872 174.892 253.381 173.61C250.905 172.268 248.007 172.605 244.689 174.62L258.871 198.651Z"
                  fill="black"
                />
                <path
                  d="M326.301 219.323L285.775 134.419L301.515 126.689L329.301 167.371L332.026 171.594L332.256 171.481L330.68 166.694L316.451 119.354L332.192 111.623L372.717 196.528L361.228 202.17L334.046 145.221L333.356 145.559L334.606 149.366L352.726 206.345L346.292 209.505L313.466 159.748L311.297 156.393L310.607 156.731L337.79 213.681L326.301 219.323Z"
                  fill="black"
                />
                <path
                  d="M396.197 185.801L376.799 92.5177L392.587 86.5012L438.539 169.665L425.98 174.451L416.919 157.358L404.48 162.098L408.756 181.015L396.197 185.801ZM401.206 147.731L410.057 144.358L395.369 116.123L393.276 111.579L392.558 111.852L393.933 116.67L401.206 147.731Z"
                  fill="black"
                />
                <path
                  d="M460.768 161.926L435.123 71.4084L448.394 67.5396C456.341 65.2231 462.826 65.7324 467.851 69.0673C472.864 72.3613 476.586 78.298 479.017 86.8777C480.459 91.968 480.808 96.6437 480.064 100.905C479.349 105.113 477.966 108.449 475.915 110.913L497.142 151.322L483.87 155.191L465.558 119.199L463.223 119.88L474.039 158.057L460.768 161.926ZM459.734 107.564C462.192 106.848 463.986 105.747 465.117 104.262C466.237 102.735 466.819 100.877 466.864 98.6864C466.908 96.4958 466.541 94.0253 465.762 91.2749C464.54 86.9645 462.887 83.8689 460.802 81.988C458.747 80.054 455.855 79.6304 452.128 80.717L459.734 107.564Z"
                  fill="black"
                />
                <path
                  d="M519.634 145.337L501.032 53.114L514.568 50.3049L520.769 81.0458L521.072 82.5515L521.574 82.4474L521.896 80.8117L526.224 47.8859L540.135 44.9988L533.852 77.9383L560.366 136.883L546.455 139.77L528.953 99.6097L528.577 99.6878L526.59 109.905L533.17 142.528L519.634 145.337Z"
                  fill="black"
                />
                <path
                  d="M581.938 133.148L570.207 39.8022L601.562 35.7479L603.333 49.845L585.688 52.1266L588.848 77.2728L601.543 75.6314L603.266 89.3475L590.572 90.9889L593.876 117.278L611.521 114.997L613.293 129.094L581.938 133.148Z"
                  fill="black"
                />
                <path
                  d="M647.054 125.96L642.684 46.2077L629.649 46.9426L628.872 32.7558L668.744 30.5081L669.522 44.6948L656.486 45.4297L660.856 125.182L647.054 125.96Z"
                  fill="black"
                />
                <path
                  d="M694.833 95.6062L694.899 83.4464L713.458 83.5413L713.393 95.7011L694.833 95.6062Z"
                  fill="black"
                />
                <path
                  d="M752.509 126.685C748.593 126.413 745.31 125.309 742.661 123.372C740.058 121.395 738.136 118.824 736.895 115.658C735.697 112.496 735.229 108.977 735.49 105.104L739.217 49.8051C739.476 45.9738 740.432 42.5758 742.086 39.6111C743.782 36.6494 746.074 34.3705 748.961 32.7745C751.848 31.1784 755.186 30.5118 758.974 30.7745C761.826 30.9723 764.344 31.6816 766.528 32.9023C768.712 34.123 770.529 35.7246 771.977 37.7069C773.471 39.6496 774.561 41.885 775.246 44.4131C775.933 46.8986 776.183 49.5462 775.993 52.3558L775.124 65.2546L762.227 64.36L763.096 51.4613C763.228 49.5031 762.934 47.8361 762.214 46.4603C761.495 45.0846 760.198 44.3317 758.326 44.2018C756.623 44.0837 755.343 44.6792 754.485 45.9883C753.627 47.2974 753.135 48.8885 753.008 50.7616L749.281 106.06C749.154 107.933 749.45 109.579 750.167 110.997C750.926 112.419 752.093 113.184 753.668 113.293C755.583 113.426 756.969 112.859 757.824 111.593C758.722 110.329 759.236 108.718 759.368 106.76L760.238 93.8611L773.135 94.7556L772.265 107.654C772.007 111.486 771.03 114.882 769.333 117.844C767.637 120.806 765.345 123.084 762.458 124.681C759.613 126.28 756.297 126.948 752.509 126.685Z"
                  fill="black"
                />
                <path
                  d="M813.177 132.948C809.378 132.386 806.234 131.016 803.746 128.836C801.3 126.663 799.556 123.947 798.516 120.687C797.518 117.434 797.292 113.907 797.839 110.106L805.725 55.2464C806.278 51.4032 807.487 48.0885 809.353 45.3023C811.267 42.48 813.703 40.3818 816.659 39.0076C819.658 37.6396 823.056 37.2365 826.855 37.7984C830.653 38.3603 833.776 39.7278 836.222 41.9012C838.711 44.0807 840.454 46.797 841.452 50.05C842.492 53.3092 842.739 56.8393 842.192 60.6402L834.306 115.5C833.76 119.301 832.529 122.613 830.615 125.435C828.743 128.264 826.307 130.362 823.309 131.73C820.353 133.104 816.975 133.51 813.177 132.948ZM815.089 119.645C816.777 119.895 818.059 119.373 818.935 118.079C819.817 116.743 820.382 115.209 820.631 113.478L828.517 58.6175C828.766 56.886 828.632 55.2703 828.115 53.7705C827.604 52.2285 826.546 51.3389 824.942 51.1017C823.381 50.8707 822.117 51.4169 821.151 52.7405C820.233 54.028 819.649 55.5375 819.4 57.2691L811.514 112.129C811.265 113.861 811.396 115.497 811.907 117.039C812.425 118.539 813.485 119.408 815.089 119.645Z"
                  fill="black"
                />
                <path
                  d="M856.101 138.876L876.815 47.1051L889.408 50.0297L891.082 100.746L891.246 105.252L891.994 105.426L903.746 53.3596L916.089 56.2262L895.376 147.998L884.029 145.363L881.108 94.3564L880.944 89.8506L880.196 89.6769L868.444 141.743L856.101 138.876Z"
                  fill="black"
                />
                <path
                  d="M936.789 160.948C933.17 159.797 930.344 158.249 928.31 156.304C926.29 154.318 924.941 151.964 924.264 149.242C923.587 146.519 923.442 143.451 923.827 140.036C924.253 136.635 925.09 132.917 926.338 128.881L939.646 131.77C939.041 133.727 938.516 135.642 938.071 137.515C937.679 139.361 937.439 141.075 937.351 142.659C937.317 144.215 937.533 145.537 938.001 146.626C938.509 147.728 939.352 148.466 940.531 148.841C942.483 149.462 944.143 149.005 945.51 147.47C946.89 145.894 947.977 143.822 948.771 141.254C949.565 138.686 949.72 135.803 949.235 132.604C948.75 129.406 947.957 126.265 946.855 123.184C944.994 117.936 943.425 113.116 942.147 108.725C940.91 104.347 940.163 100.192 939.905 96.2598C939.687 92.3403 940.171 88.4647 941.355 84.6329C942.288 81.6164 943.531 78.9673 945.085 76.6857C946.651 74.3633 948.456 72.4974 950.5 71.0878C952.596 69.6504 954.865 68.738 957.307 68.3506C959.749 67.9632 962.332 68.2028 965.057 69.0692C968.431 70.1426 971.101 71.6185 973.066 73.497C975.071 75.3885 976.458 77.6203 977.226 80.1927C978.034 82.7779 978.31 85.6415 978.053 88.7834C977.85 91.8974 977.2 95.2277 976.104 98.7741L962.796 95.8846C963.262 94.3764 963.647 92.8422 963.951 91.2823C964.308 89.6945 964.498 88.2105 964.523 86.8305C964.548 85.4504 964.334 84.2632 963.882 83.2689C963.431 82.2745 962.656 81.6027 961.558 81.2536C959.85 80.7104 958.444 81.0691 957.34 82.3297C956.249 83.5495 955.293 85.4842 954.474 88.1339C953.416 91.558 953.31 95.1508 954.157 98.9123C955.004 102.674 956.317 107.166 958.096 112.388C960.247 118.579 961.832 124.142 962.851 129.078C963.912 134.026 963.654 139.048 962.079 144.144C961.084 147.364 959.812 150.25 958.264 152.802C956.728 155.314 954.893 157.349 952.759 158.909C950.665 160.482 948.283 161.47 945.613 161.874C942.983 162.291 940.042 161.983 936.789 160.948Z"
                  fill="black"
                />
                <path
                  d="M993.752 181.226C990.154 179.767 987.398 177.682 985.485 174.973C983.612 172.279 982.567 169.231 982.349 165.828C982.131 162.425 982.726 158.937 984.135 155.364L1011.55 85.8205L1024.36 91.0162L996.945 160.56C996.272 162.267 996.014 163.912 996.17 165.494C996.341 167.037 997.178 168.113 998.68 168.722C1000.26 169.364 1001.62 169.178 1002.75 168.164C1003.9 167.111 1004.81 165.731 1005.49 164.024L1032.9 94.48L1045.71 99.6757L1018.3 169.22C1016.89 172.792 1014.93 175.727 1012.42 178.023C1009.95 180.336 1007.1 181.805 1003.87 182.43C1000.68 183.071 997.31 182.669 993.752 181.226Z"
                  fill="black"
                />
                <path
                  d="M1035.58 198.071L1076.23 113.228L1088.63 119.34L1053.51 192.641L1069.93 200.734L1064.4 212.278L1035.58 198.071Z"
                  fill="black"
                />
                <path
                  d="M1089.61 226.048L1128.92 156.518L1117.63 149.954L1124.63 137.585L1159.15 157.665L1152.16 170.034L1140.87 163.469L1101.56 232.999L1089.61 226.048Z"
                  fill="black"
                />
                <path
                  d="M1128.84 249.311L1192.98 179.282L1206.88 188.886L1166.12 275.067L1155.07 267.427L1163.66 250.032L1152.71 242.466L1139.9 256.95L1128.84 249.311ZM1162.42 231.443L1170.22 236.827L1184.58 208.324L1187.04 203.961L1186.41 203.524L1183.31 207.451L1162.42 231.443Z"
                  fill="black"
                />
                <path
                  d="M1185.16 289.208L1243.9 215.716L1253.88 223.927L1233.16 270.353L1231.34 274.484L1231.93 274.972L1265.25 233.276L1275.04 241.325L1216.3 314.817L1207.31 307.419L1227.04 260.18L1228.87 256.049L1228.27 255.561L1194.95 297.257L1185.16 289.208Z"
                  fill="black"
                />
                <path
                  d="M1248.7 345.832C1245.88 343.103 1244.07 340.138 1243.27 336.935C1242.54 333.731 1242.7 330.505 1243.76 327.259C1244.85 324.041 1246.73 321.018 1249.38 318.189L1287.34 277.801C1289.97 275.003 1292.86 272.989 1296.01 271.759C1299.18 270.559 1302.38 270.269 1305.6 270.891C1308.82 271.513 1311.8 273.144 1314.53 275.784C1316.58 277.771 1318.06 279.939 1318.95 282.288C1319.85 284.638 1320.22 287.045 1320.07 289.51C1319.98 291.974 1319.39 294.405 1318.31 296.801C1317.26 299.166 1315.77 301.375 1313.84 303.427L1304.99 312.848L1295.69 303.861L1304.55 294.44C1305.89 293.01 1306.73 291.531 1307.05 290.004C1307.37 288.477 1306.86 287.06 1305.51 285.755C1304.28 284.569 1302.93 284.206 1301.44 284.667C1299.95 285.129 1298.56 286.043 1297.28 287.411L1259.32 327.798C1258.04 329.166 1257.22 330.629 1256.87 332.188C1256.54 333.776 1256.95 335.119 1258.09 336.216C1259.47 337.551 1260.88 338.003 1262.34 337.573C1263.83 337.173 1265.25 336.258 1266.59 334.828L1275.45 325.407L1284.74 334.394L1275.89 343.814C1273.26 346.612 1270.35 348.612 1267.17 349.812C1264 351.013 1260.8 351.302 1257.58 350.68C1254.39 350.088 1251.43 348.472 1248.7 345.832Z"
                  fill="black"
                />
                <path
                  d="M1287.46 384.117L1317.05 357.106L1347.6 310.157L1356.6 320.306L1338.89 345.66L1336.16 348.757L1336.41 349.044L1339.74 346.618L1366.46 331.413L1375.46 341.562L1326.22 367.447L1296.63 394.458L1287.46 384.117Z"
                  fill="black"
                />
              </svg>
            </motion.div>
          </motion.div>
          {/**------------Content---------  */}
          <div
            id="two"
            className="bg-[#e0e1dd] z-10 border-white/30 border-8 w-[1800px] mt-24 h-[1400px] rounded-full"
          >
            {/**balls */}
            <div className="opacity-50 mt-[200px]">
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute w-full flex justify-between h-[200vh]"
              >
                <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
                  <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                    {" "}
                    <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
                  <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
                </div>
                <div className="w-[40px] mt-[180px] h-[40px] bg-black rounded-full overflow-hidden">
                  <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
                </div>
                <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
                <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
                  <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-white/20 "></div>
                  </div>
                </div>
              </div>
              <div
                data-scroll
                data-scroll-speed="-4"
                className="absolute w-full flex justify-evenly rotate-45 h-[200vh]"
              >
                <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
                  <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                    {" "}
                    <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
                  <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
                </div>
                <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
                  <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
                </div>
                <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
                <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
                  <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-white/20 "></div>
                  </div>
                </div>
              </div>
              <div
                data-scroll
                data-scroll-speed="-2"
                className="absolute w-full flex justify-evenly mt-20 -rotate-45 h-[200vh]"
              >
                <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
                  <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                    {" "}
                    <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
                  <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
                </div>
                <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
                  <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
                </div>
                <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
                <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
                  <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-white/20 "></div>
                  </div>
                </div>
              </div>
              <div
                data-scroll
                data-scroll-speed="4"
                className="absolute w-full left-0 h-[200vh]"
              >
                <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
                  <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                    {" "}
                    <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
                  <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
                </div>
                <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
                  <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
                </div>
                <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
                <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
                  <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-white/20 "></div>
                  </div>
                </div>
              </div>
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute w-full ml-[1000px] h-[200vh]"
              >
                <div className="w-[50px] mt-[300px] animate-spin h-[50px] bg-black rounded-full">
                  <div className="w-[10px] h-[20px] rounded-full bg-white/40 rotate-45 ml-2 ">
                    {" "}
                    <div className="w-6 h-6 ml-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="w-[20px] mt-[200px] h-[20px] bg-black rounded-full overflow-hidden">
                  <div className="w-2 h-1 bg-white/50 -rotate-45 ml-2  rounded-full"></div>
                </div>
                <div className="w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
                  <div className="w-6 h-2 bg-white/50 rounded-full ml-2 pt-4 -rotate-45 "></div>
                </div>
                <div className="w-[10px] mt-[150px] h-[10px] bg-black rounded-full"></div>
                <div className="w-[70px] h-[70px] mt-[90px]  bg-black rounded-full overflow-hidden">
                  <div className="w-8 h-4 bg-white/50 rounded-full rotate-45 ml-8">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-white/20 "></div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="bold font-bold uppercase text-center flex justify-center -mt-32 text-4xl ">
              <motion.ul className="">
                <li className="mt-2"> New Store Startup</li>
                <li className="mt-2"> Merchandising</li>
                <li className="mt-2">Shop Development</li>
                <li className="mt-2">Marketing strategy</li>
                <li className="mt-2"> Product Procurement</li>
                <li className="mt-2"> Stock Auditing</li>
                <li className="mt-2">Infrastructure Costing</li>
              </motion.ul>
            </div>
          </div>

          {/**------Third inside second container-------- */}
          <motion.div
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 0 }}
            transition={{
              duration: 5,
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#two"
            className="w-[800px] absolute  rounded-full z-30 h-[800px] bg-red-200 mt-[550px]"
          >
            <div className="absolute mt-[170px] ml-[25px]">
              <svg
                width="735"
                height="295"
                viewBox="0 0 735 295"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M85.5185 274.912L31.0365 194.995L42.0846 182.211L115.147 240.629L106.359 250.798L91.6705 238.619L82.9659 248.69L94.3068 264.743L85.5185 274.912ZM74.3302 236.51L80.5238 229.343L56.4982 209.101L52.8632 205.722L52.361 206.303L55.4938 210.264L74.3302 236.51Z"
                  fill="black"
                />
                <path
                  d="M120.065 233.82L64.9786 157.554L75.2211 148.27C79.1094 144.746 83.0242 142.742 86.9655 142.26C90.9384 141.75 94.8095 142.619 98.5789 144.868C102.348 147.118 105.907 150.56 109.254 155.195C112.602 159.829 114.808 164.44 115.872 169.028C116.936 173.615 116.843 178.049 115.593 182.329C114.35 186.547 111.91 190.447 108.273 194.03L130.307 224.536L120.065 233.82ZM100.029 182.616C101.831 180.982 102.978 179.313 103.472 177.606C103.941 175.865 103.784 173.946 103.002 171.85C102.253 169.726 100.916 167.332 98.9921 164.669C97.0435 161.971 95.22 159.989 93.5216 158.724C91.8549 157.431 90.1969 156.873 88.5474 157.052C86.9296 157.202 85.2356 158.079 83.4653 159.684L100.029 182.616Z"
                  fill="black"
                />
                <path
                  d="M153.408 202.669L107.09 120.781L118.362 112.779C122.642 109.742 126.775 108.213 130.763 108.193C134.785 108.149 138.549 109.458 142.055 112.122C145.561 114.787 148.721 118.607 151.536 123.583C154.351 128.56 156.029 133.38 156.571 138.044C157.112 142.709 156.517 147.087 154.784 151.179C153.066 155.21 150.189 158.787 146.153 161.912L164.681 194.667L153.408 202.669ZM139.221 149.657C141.205 148.249 142.539 146.729 143.225 145.097C143.89 143.428 143.952 141.511 143.409 139.345C142.902 137.155 141.84 134.63 140.222 131.77C138.584 128.874 136.989 126.701 135.438 125.251C133.921 123.777 132.33 123.033 130.664 123.019C129.033 122.98 127.243 123.652 125.294 125.035L139.221 149.657Z"
                  fill="black"
                />
                <path
                  d="M178.241 150.768L173.23 139.688L189.372 130.527L194.383 141.607L178.241 150.768Z"
                  fill="black"
                />
                <path
                  d="M215.496 161.321L184.748 72.4075L197.664 66.8022C201.735 65.0356 205.416 64.2264 208.708 64.3744C212.001 64.5224 215.079 65.876 217.945 68.4351C220.811 70.9943 223.612 74.9956 226.35 80.4391C229.127 85.8657 232.035 92.9742 235.075 101.765C238.129 110.596 240.262 118.064 241.473 124.17C242.709 130.219 243.038 135.27 242.46 139.324C241.867 143.338 240.399 146.641 238.055 149.235C235.697 151.789 232.483 153.949 228.412 155.716L215.496 161.321ZM223.659 142.753C226.79 141.394 228.563 139.164 228.976 136.063C229.389 132.962 228.917 128.993 227.559 124.157C226.201 119.32 224.4 113.655 222.155 107.163C219.882 100.59 217.807 95.045 215.929 90.5266C214.038 85.968 212.001 82.7476 209.82 80.8654C207.664 78.9258 205.04 78.627 201.947 79.9689L223.659 142.753Z"
                  fill="black"
                />
                <path
                  d="M258.813 142.683L237.565 51.0334L267.922 42.2012L271.131 56.0422L254.048 61.0125L259.771 85.7017L272.062 82.1259L275.184 95.5927L262.894 99.1685L268.878 124.98L285.961 120.01L289.17 133.851L258.813 142.683Z"
                  fill="black"
                />
                <path
                  d="M309.574 129.53L283.691 38.4151L296.967 36.3229L310.716 90.3661L312.354 99.3036L313.113 99.1841L312.486 90.0872L312.393 33.8921L325.669 31.7999L323.229 127.378L309.574 129.53Z"
                  fill="black"
                />
                <path
                  d="M343.788 124.904L341.654 30.8485L373.257 29.9487L373.58 44.1531L355.795 44.6594L356.37 69.9969L369.165 69.6326L369.478 83.4531L356.683 83.8173L357.284 110.307L375.069 109.8L375.391 124.005L343.788 124.904Z"
                  fill="black"
                />
                <path
                  d="M384.949 124.687L391.542 30.8385L405.312 32.0525L399.616 113.133L417.849 114.74L416.952 127.509L384.949 124.687Z"
                  fill="black"
                />
                <path
                  d="M439.44 133.624C435.683 132.827 432.598 131.257 430.184 128.915C427.811 126.582 426.15 123.745 425.201 120.406C424.294 117.076 424.16 113.518 424.8 109.732L434.036 55.0829C434.683 51.2545 435.969 47.9973 437.892 45.3113C439.865 42.5921 442.337 40.6323 445.306 39.4319C448.318 38.2403 451.702 38.0429 455.458 38.8396C459.215 39.6363 462.279 41.2014 464.652 43.5349C467.066 45.8772 468.727 48.7134 469.634 52.0434C470.583 55.3823 470.738 58.9449 470.098 62.7312L460.862 117.38C460.222 121.167 458.916 124.419 456.943 127.139C455.012 129.867 452.541 131.826 449.529 133.018C446.559 134.218 443.196 134.42 439.44 133.624ZM441.679 120.371C443.349 120.726 444.635 120.279 445.537 119.033C446.447 117.744 447.047 116.237 447.339 114.512L456.575 59.8631C456.866 58.1382 456.775 56.5064 456.3 54.9676C455.832 53.3867 454.805 52.4281 453.219 52.0917C451.675 51.7642 450.406 52.2359 449.413 53.5069C448.469 54.7448 447.851 56.2261 447.559 57.951L438.324 112.6C438.032 114.325 438.12 115.978 438.588 117.559C439.063 119.097 440.093 120.035 441.679 120.371Z"
                  fill="black"
                />
                <path
                  d="M465.638 139.747L490.989 49.1468L504.032 53.727C508.984 55.4658 512.8 58.0242 515.48 61.4021C518.201 64.7942 519.817 68.814 520.329 73.4613C520.842 78.1086 520.327 83.1852 518.787 88.6911C517.246 94.1969 515.053 98.6387 512.206 102.016C509.36 105.394 505.95 107.626 501.977 108.713C498.055 109.772 493.67 109.564 488.822 108.087L478.681 144.327L465.638 139.747ZM492.616 94.5278C494.91 95.3336 496.848 95.5178 498.43 95.0803C500.023 94.6018 501.383 93.4548 502.51 91.6394C503.677 89.8381 504.703 87.3556 505.588 84.1917C506.485 80.9868 506.913 78.2717 506.873 76.0463C506.873 73.8351 506.32 72.0166 505.216 70.591C504.152 69.1794 502.493 68.0778 500.238 67.2862L492.616 94.5278Z"
                  fill="black"
                />
                <path
                  d="M506.433 155.711L542.794 68.9414L558.315 77.1035L546.151 125.597L544.788 130.499L545.014 130.618L547.51 126.312L573.042 84.8485L588.563 93.0105L552.203 179.78L540.874 173.822L565.262 115.622L564.583 115.264L562.596 118.686L532.49 169.414L526.146 166.077L541.75 107.724L542.831 103.826L542.151 103.468L517.762 161.669L506.433 155.711Z"
                  fill="black"
                />
                <path
                  d="M558.099 186.28L604.865 104.647L630.536 123.102L623.473 135.43L609.027 125.045L596.429 147.036L606.822 154.507L599.95 166.502L589.557 159.031L576.386 182.021L590.832 192.407L583.77 204.735L558.099 186.28Z"
                  fill="black"
                />
                <path
                  d="M591.034 212.487L646.803 136.718L656.299 145.49L636.641 193.658L634.908 197.944L635.472 198.465L667.112 155.478L676.421 164.077L620.652 239.845L612.096 231.942L630.813 182.906L632.547 178.619L631.983 178.098L600.342 221.085L591.034 212.487Z"
                  fill="black"
                />
                <path
                  d="M632.659 256.052L687.273 197.769L678.815 187.823L688.53 177.456L714.401 207.879L704.686 218.246L696.228 208.3L641.615 266.583L632.659 256.052Z"
                  fill="black"
                />
              </svg>
            </div>
          </motion.div>

          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#two"
            className="w-[600px]  h-[600px] absolute z-40  bg-[#69a2b0] rounded-full mt-[650px] "
          >
            <div className="bold font-bold uppercase z-40 text-center flex justify-center mt-24 text-2xl ">
              <motion.ul className="">
                <li className="mt-2"> Website Development</li>
                <li className="mt-2"> CRM Development</li>
                <li className="mt-2">E-Commerce Development</li>
                <li className="mt-2">Mobile Application Development</li>
                <li className="mt-2"> Digital Marketing</li>
                <li className="mt-2">SEO</li>
                <li className="mt-2">Automation</li>
                <li className="mt-2">REST API Development & Integration </li>
              </motion.ul>
            </div>
          </div>

          {/**fourth container inside second container */}
          <motion.div
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 0 }}
            transition={{
              duration: 5,
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            className="w-[800px] absolute  rounded-full z-30 h-[800px] bg-red-200 mt-[550px]"
          >
            <div className="absolute -mt-8 ml-[10px]">
              <svg
                width="770"
                height="298"
                viewBox="0 0 770 298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M123.689 271.438C121.856 274.909 119.502 277.496 116.626 279.2C113.731 280.847 110.557 281.655 107.104 281.623C103.67 281.553 100.198 280.687 96.6895 279.025L46.5999 255.3C43.1295 253.657 40.3448 251.536 38.2459 248.938C36.1668 246.303 34.965 243.375 34.6405 240.155C34.316 236.936 35.0403 233.647 36.8134 230.289C38.1482 227.761 39.8256 225.726 41.8455 224.183C43.8655 222.64 46.0923 221.572 48.5261 220.98C50.9412 220.331 53.4663 220.159 56.1012 220.464C58.6976 220.751 61.2683 221.497 63.8133 222.702L75.497 228.236L69.4603 239.668L57.7766 234.134C56.0029 233.294 54.329 232.949 52.7551 233.1C51.1812 233.251 49.956 234.156 49.0794 235.816C48.2825 237.325 48.3217 238.712 49.197 239.975C50.0723 241.239 51.3583 242.272 53.0549 243.076L103.144 266.801C104.841 267.604 106.496 267.94 108.108 267.807C109.741 267.637 110.925 266.854 111.662 265.458C112.559 263.76 112.589 262.289 111.752 261.043C110.935 259.76 109.64 258.699 107.866 257.859L96.1825 252.325L102.219 240.893L113.903 246.427C117.373 248.07 120.148 250.21 122.227 252.845C124.306 255.481 125.508 258.408 125.832 261.628C126.177 264.81 125.462 268.08 123.689 271.438Z"
                  fill="black"
                />
                <path
                  d="M135.31 251.045L56.2467 200.054L64.3168 188.831L132.623 232.884L143.309 218.022L154.066 224.96L135.31 251.045Z"
                  fill="black"
                />
                <path
                  d="M169.534 211.668C166.892 214.454 163.934 216.273 160.66 217.123C157.416 217.943 154.11 217.899 150.743 216.992C147.405 216.054 144.274 214.34 141.349 211.852L99.1375 175.935C96.1804 173.419 94.0475 170.653 92.7387 167.638C91.4267 164.563 91.028 161.455 91.5425 158.313C92.0864 155.139 93.6797 152.16 96.3224 149.374C98.9652 146.588 101.909 144.785 105.153 143.965C108.426 143.114 111.732 143.158 115.07 144.096C118.437 145.004 121.583 146.702 124.508 149.19L166.719 185.107C169.644 187.595 171.762 190.377 173.074 193.451C174.415 196.494 174.814 199.602 174.27 202.776C173.756 205.918 172.177 208.882 169.534 211.668ZM159.298 202.959C160.473 201.72 160.759 200.398 160.156 198.99C159.521 197.554 158.538 196.27 157.205 195.136L114.994 159.22C113.662 158.086 112.21 157.326 110.638 156.94C109.034 156.526 107.674 156.907 106.558 158.083C105.472 159.229 105.217 160.55 105.793 162.047C106.366 163.486 107.319 164.772 108.651 165.906L150.863 201.823C152.195 202.956 153.663 203.73 155.267 204.144C156.839 204.53 158.183 204.135 159.298 202.959Z"
                  fill="black"
                />
                <path
                  d="M201.331 184.576C198.273 186.968 195.063 188.344 191.701 188.702C188.372 189.035 185.127 188.49 181.965 187.069C178.803 185.648 175.96 183.491 173.436 180.597L124.297 124.266L135.185 115.747L184.323 172.078C185.529 173.461 186.881 174.459 188.378 175.073C189.846 175.655 191.219 175.447 192.496 174.447C193.84 173.396 194.332 172.145 193.973 170.696C193.585 169.214 192.788 167.782 191.582 166.399L142.443 110.068L153.33 101.549L202.469 157.88C204.993 160.774 206.677 163.839 207.52 167.074C208.397 170.283 208.333 173.417 207.326 176.476C206.354 179.51 204.355 182.209 201.331 184.576Z"
                  fill="black"
                />
                <path
                  d="M221.195 169.944L170.941 90.4105L183.19 83.468C187.051 81.28 190.704 80.0418 194.152 79.7535C197.599 79.4651 201.074 80.3369 204.576 82.3689C208.078 84.401 211.812 87.7961 215.776 92.5543C219.778 97.2915 224.263 103.592 229.231 111.455C234.222 119.354 237.976 126.093 240.493 131.672C243.024 137.193 244.407 141.896 244.643 145.779C244.856 149.626 244.013 152.921 242.116 155.662C240.195 158.367 237.305 160.813 233.444 163.001L221.195 169.944ZM225.837 151.441C228.807 149.758 230.186 147.433 229.975 144.466C229.764 141.5 228.456 137.833 226.049 133.465C223.642 129.098 220.604 124.011 216.935 118.204C213.22 112.324 209.922 107.384 207.041 103.383C204.138 99.3466 201.36 96.5857 198.707 95.1008C196.069 93.5587 193.284 93.6187 190.352 95.2807L225.837 151.441Z"
                  fill="black"
                />
                <path
                  d="M248.073 124.251L242.926 113.234L260.044 106.061L265.191 117.078L248.073 124.251Z"
                  fill="black"
                />
                <path
                  d="M293.253 137.724L254.771 50.5633L267.158 47.339L286.111 92.9114L287.215 95.7973L288.206 95.5393L287.721 92.4923L279.793 44.0503L289.455 41.5354L308.78 87.0111L310.007 89.8647L310.998 89.6067L310.39 86.5919L302.09 38.2467L314.477 35.0224L328.433 128.567L318.027 131.276L299.42 90.1084L297.143 85.0159L296.647 85.1449L297.438 90.6243L303.658 135.016L293.253 137.724Z"
                  fill="black"
                />
                <path
                  d="M342.146 127.13L332.248 33.572L363.723 30.5852L365.217 44.7144L347.505 46.3952L350.171 71.5985L362.914 70.3893L364.369 84.1366L351.626 85.3458L354.413 111.695L372.126 110.014L373.621 124.143L342.146 127.13Z"
                  fill="black"
                />
                <path
                  d="M380.535 124.079L384.672 30.0903L398.741 30.6381C403.516 30.824 407.593 31.8367 410.971 33.6762C414.394 35.4747 416.965 38.2008 418.683 41.8543C420.444 45.5096 421.2 50.1718 420.95 55.841C420.751 60.3593 419.981 64.2789 418.639 67.5998C417.34 70.9224 414.959 73.5837 411.497 75.5839C414.825 77.5922 417.145 80.6714 418.458 84.8216C419.772 88.9291 420.311 93.6469 420.077 98.9751C419.846 104.218 418.79 108.81 416.908 112.75C415.069 116.692 412.458 119.729 409.076 121.86C405.738 123.95 401.682 124.903 396.907 124.717L380.535 124.079ZM394.951 110.934C399.129 111.097 401.933 109.968 403.364 107.547C404.796 105.084 405.615 101.529 405.819 96.8828C406.027 92.1514 405.524 88.5451 404.309 86.064C403.097 83.5403 400.401 82.1971 396.223 82.0344L394.951 110.934ZM396.78 69.3746C400.66 69.5257 403.371 68.5638 404.915 66.489C406.501 64.4158 407.386 61.2906 407.569 57.1133C407.755 52.8934 407.125 49.7518 405.678 47.6887C404.276 45.5846 401.678 44.4586 397.883 44.3109L396.78 69.3746Z"
                  fill="black"
                />
                <path
                  d="M428.592 98.6727L430.667 86.6912L449.007 89.5413L446.931 101.523L428.592 98.6727Z"
                  fill="black"
                />
                <path
                  d="M450.328 130.501L478.296 40.6739L491.611 44.3924L480.043 81.5452L490.399 84.4373L501.967 47.2845L515.281 51.0029L487.313 140.83L473.999 137.111L486.175 98.003L475.819 95.1109L463.643 134.219L450.328 130.501Z"
                  fill="black"
                />
                <path
                  d="M509.182 150.777C505.669 149.225 503.041 147.085 501.296 144.356C499.59 141.645 498.733 138.61 498.725 135.251C498.756 131.908 499.619 128.515 501.316 125.07L525.81 75.3521C527.525 71.8691 529.716 69.0621 532.382 66.931C535.105 64.7788 538.112 63.4508 541.401 62.9469C544.73 62.4604 548.151 62.9931 551.663 64.5452C555.175 66.0972 557.784 68.2288 559.49 70.9401C561.235 73.6685 562.092 76.7038 562.061 80.0459C562.07 83.4052 561.225 86.8072 559.528 90.2519L535.035 139.97C533.338 143.415 531.128 146.213 528.404 148.365C525.72 150.535 522.713 151.863 519.385 152.349C516.095 152.853 512.694 152.329 509.182 150.777ZM515.121 138.721C516.682 139.411 518.086 139.262 519.333 138.275C520.598 137.249 521.618 135.952 522.391 134.383L546.884 84.6645C547.657 83.0952 548.023 81.5325 547.982 79.9763C547.959 78.3818 547.206 77.2569 545.723 76.6016C544.28 75.9635 542.886 76.1399 541.542 77.1308C540.257 78.1007 539.227 79.3703 538.454 80.9395L513.961 130.658C513.188 132.227 512.813 133.809 512.835 135.403C512.876 136.96 513.638 138.065 515.121 138.721Z"
                  fill="black"
                />
                <path
                  d="M545.461 169.258C542.233 167.259 539.9 165.087 538.463 162.743C537.051 160.364 536.407 157.81 536.531 155.08C536.656 152.35 537.403 149.43 538.775 146.319C540.182 143.231 542.086 139.949 544.487 136.473L556.748 142.565C555.585 144.25 554.512 145.916 553.529 147.564C552.608 149.198 551.874 150.749 551.327 152.215C550.841 153.668 550.67 154.966 550.814 156.108C550.994 157.272 551.61 158.18 552.662 158.831C554.403 159.91 556.17 159.901 557.962 158.806C559.778 157.675 561.45 156.004 562.978 153.792C564.505 151.58 565.495 148.91 565.946 145.781C566.398 142.652 566.529 139.5 566.34 136.325C566.032 130.921 565.887 125.994 565.905 121.544C565.959 117.116 566.43 113.022 567.318 109.261C568.243 105.523 569.844 102.004 572.123 98.7035C573.918 96.1055 575.911 93.9316 578.103 92.1817C580.32 90.3968 582.639 89.1012 585.06 88.2951C587.541 87.4763 590.04 87.1947 592.557 87.4502C595.073 87.7057 597.547 88.5861 599.977 90.0915C602.987 91.9563 605.187 94.0206 606.576 96.2843C608.001 98.5705 608.717 101.02 608.726 103.632C608.771 106.266 608.211 109.027 607.046 111.914C605.941 114.789 604.334 117.754 602.224 120.808L589.963 114.716C590.86 113.417 591.684 112.073 592.436 110.685C593.249 109.283 593.868 107.937 594.293 106.646C594.718 105.356 594.853 104.186 594.697 103.137C594.541 102.088 593.973 101.26 592.994 100.654C591.47 99.7099 589.982 99.6902 588.529 100.595C587.1 101.464 585.597 103.04 584.021 105.322C581.985 108.271 580.837 111.62 580.578 115.37C580.319 119.119 580.307 123.673 580.543 129.032C580.861 135.395 580.805 141.025 580.376 145.922C579.982 150.841 578.27 155.495 575.239 159.884C573.324 162.657 571.234 165.047 568.968 167.052C566.727 169.023 564.33 170.47 561.775 171.394C559.257 172.34 556.625 172.665 553.879 172.367C551.169 172.092 548.363 171.056 545.461 169.258Z"
                  fill="black"
                />
                <path
                  d="M573.334 186.633L627.462 127.899L617.399 119.581L627.028 109.133L657.809 134.578L648.18 145.025L638.117 136.707L583.989 195.441L573.334 186.633Z"
                  fill="black"
                />
                <path
                  d="M596.769 206.452L667.813 144.777L677.427 154.711L606.383 216.386L596.769 206.452Z"
                  fill="black"
                />
                <path
                  d="M613.727 222.83L691.703 170.192L699.477 180.522L666.541 218.178L663.627 221.533L664.089 222.147L708.329 192.283L715.948 202.408L637.972 255.046L630.968 245.739L663.134 207.06L666.048 203.705L665.586 203.091L621.347 232.955L613.727 222.83Z"
                  fill="black"
                />
                <path
                  d="M647.474 273.589C645.696 270.233 645.057 267.115 645.556 264.235C646.056 261.354 647.423 258.746 649.658 256.409C651.913 254.11 654.775 252.136 658.243 250.488L708.3 226.694C711.73 225.064 715.181 224.249 718.655 224.25C722.129 224.25 725.324 225.091 728.241 226.773C731.197 228.436 733.554 230.926 735.312 234.243C736.65 236.769 737.367 239.26 737.463 241.716C737.617 244.192 737.216 246.53 736.259 248.731C735.323 250.969 733.927 252.978 732.072 254.757C730.275 256.555 728.105 258.058 725.561 259.267L712.498 265.476L706.025 253.262L719.088 247.052C720.784 246.246 722.088 245.249 723.002 244.059C723.915 242.87 723.972 241.521 723.173 240.013C722.394 238.543 721.18 237.799 719.53 237.781C717.939 237.782 716.353 238.158 714.773 238.909L663.676 263.197C662.019 263.985 660.724 265.001 659.792 266.247C658.899 267.474 658.832 268.804 659.591 270.236C660.39 271.744 661.566 272.507 663.119 272.524C664.71 272.522 666.334 272.128 667.991 271.34L682.211 264.581L679.633 259.718L691.309 254.168L700.36 271.246L658.048 291.358L654.212 284.12L658.057 280.452C655.764 280.22 653.677 279.513 651.796 278.331C649.973 277.167 648.533 275.587 647.474 273.589Z"
                  fill="black"
                />
              </svg>
            </div>
          </motion.div>

          <div className="w-[600px]  h-[600px] absolute z-40  bg-red-500 rounded-full mt-[650px] ">
            <div className="bold font-bold uppercase z-40 text-center flex justify-center mt-24 text-3xl ">
              <motion.ul className="">
                <li className="mt-2"> Server Administration</li>
                <li className="mt-2"> server backup</li>
                <li className="mt-2">Server Migration</li>
                <li className="mt-2">Student Web Hosting</li>
                <li className="mt-2"> Cloud VPS Hosting</li>
                <li className="mt-2"> Dedicated Server</li>
                <li className="mt-2">SSL Certificates</li>
                <li className="mt-2">license </li>
                <li className="mt-2">Buy Domain Name</li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThirdPage;

/* Website Development
CRM Development
E-Commerce Develpment
Mobile Application Development
Digital Marketing
SEO
Automation
REST API Development & Integration */
