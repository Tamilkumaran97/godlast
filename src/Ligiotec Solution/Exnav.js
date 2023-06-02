import { useState } from "react";
import image from "./assets/ligi.gif";
import image2 from "./assets/lIGIOTEC sOLUTION (2).gif";
import cloud from "./assets/cloud.gif";
import market from "./assets/marketing.gif";
import finance from "./assets/finance.gif";
import digital from "./assets/digital.gif";
import mobile from "./assets/mobile.gif";
import web from "./assets/web.gif";
import auto from "./assets/auto.gif";
import bcloud from "./assets/bcloud.gif";
import bmarket from "./assets/bmarket.gif";
import bfinance from "./assets/bfinance.gif";
import bdigi from "./assets/bdigi.gif";
import bapp from "./assets/bapp.gif";
import bweb from "./assets/bweb.gif";
import bauto from "./assets/bauto.gif";
import Hamburger from "hamburger-react";
import { ReactCompareSlider } from "react-compare-slider";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import face from "./assets/facebook-round-svgrepo-com.svg";
import tele from "./assets/telegram-fill-svgrepo-com.svg";

/* import Footer from "./Footer"; */
import sound from "./assets/menu sound.unknown";
import Transition from "./Transition";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Navbar from "./Navbar";
import ThirdPage from "./ThirdPage";

const Exnav = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };

  const [menu, setMenu] = useState(false);
  const menuBar = () => {
    setMenu(!menu);
  };

  const play = () => {
    new Audio(sound).play();
  };

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let el = document.querySelector(id);

    scroll.scrollTo(el, {
      offset: "-100",
      duration: "2000",
      getSpeed: "1000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  /* const [loading, setLoading] = useState(false); */

  /*  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []); */

  return (
    <motion.div className="">
      <motion.div
        /*  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} */
        id="all"
        className=" relative mx-auto  w-[100%] h-[100vh] "
      >
        <Transition />
        {/*      <Transition /> */}
        {/**Navbar */}
        <div className="absolute z-50 ml-[610px] mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
            onClick={showMenu}
            className=" bg-white/20   cursor-pointer rounded-full"
          >
            <svg
              onClick={play}
              className="w-32 p-2"
              width="170"
              height=""
              viewBox="0 0 842 297"
              fill="orange"
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
          </motion.div>
        </div>
        <ReactCompareSlider
          handle={
            <div
              style={{
                width: "0.1px",
                height: "100%",
                backgroundColor: "white",
              }}
            ></div>
          }
          changePositionOnHover
          itemOne={
            <div className="relative">
              <div className="bg-[#F55326] max-w-screen h-screen inset-0  ">
                {/**Heading */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center items-center   "
                >
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className="squad text-center text-3xl md:text-5xl sm:text-5xl lg:text-5xl p-16 pt-36 lg:pt-44 z-30 text-black"
                  >
                    Designing and developing the web tomorrow , <br />
                    <span>
                      today with our skilled
                      <span className="slant text-5xl lg:text-9xl text-white">
                        {" "}
                        Team
                      </span>{" "}
                    </span>
                  </motion.h1>
                </motion.div>
                {/**Logo */}
                <AnimatePresence>
                  {!open && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 4 }}
                      className="-mt-28 lg:-mt-36 container mx-auto "
                    >
                      <div className="  ">
                        <div className="flex justify-center items-center   ">
                          <img
                            className="bg-blend-overlay rounded-full"
                            src={image2}
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/**image slide bar */}
              <AnimatePresence>
                {open ? (
                  <motion.div className="mt-[21rem] md:mt-[14rem] sm:mt-[14rem] lg:mt-80 absolute inset-0 p-5 gap-10 flex whitespace-nowrap overflow-hidden cursor-grab">
                    <div className="w-[calc(-250px * 7)] flex gap-10  animate-scroll ">
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.4 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px]  w-[250px] rounded-xl"
                      >
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={cloud}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.8 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px]  w-[250px] rounded-xl"
                      >
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={market}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={finance}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.2 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={digital}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.4 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={mobile}
                          alt=""
                        />
                      </motion.div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={web}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={auto}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="w-[calc(250px * 7)] gap-10 flex animate-scroll ">
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={cloud}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={market}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={finance}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={digital}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={mobile}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={web}
                          alt=""
                        />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img
                          className="rounded-xl shadow-black shadow-xl"
                          src={auto}
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
          }
          itemTwo={
            <div className="relative">
              <div className=" bg-[#353535] max-w-full h-screen mx-auto z-40 ">
                {/**Navbar */}

                {/**Heading */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center items-center   "
                >
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className="squad text-center text-3xl md:text-5xl sm:text-5xl  lg:text-5xl p-16  pt-36 lg:pt-44 z-0 text-white"
                  >
                    Designing and developing the web tomorrow , <br />
                    <span>
                      today with our skilled
                      <span className="slant text-[#F55326] text-5xl lg:text-9xl">
                        {" "}
                        Squad
                      </span>
                    </span>
                  </motion.h1>
                </motion.div>
                {/**Logo */}

                {!open && (
                  <motion.div className="-mt-28 lg:-mt-36 container mx-auto ">
                    <div className="  ">
                      <div className="flex justify-center items-center   ">
                        <img
                          className="bg-blend-overlay rounded-full"
                          src={image}
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              {/**content slide bar */}
              <AnimatePresence>
                {open ? (
                  <motion.div
                    initial={{ x: 4000 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0, duration: 0.2 }}
                    className="mt-[21rem] md:mt-[14rem] sm:mt-[14rem] lg:mt-80 absolute inset-0 p-5 gap-10 flex whitespace-nowrap overflow-hidden "
                  >
                    <div className="w-[calc(-250px * 7)] flex gap-10  animate-scroll ">
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bcloud} alt="" />
                      </div>
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bmarket} alt="" />
                      </div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.4 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img className="rounded-lg" src={bfinance} alt="" />
                      </motion.div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bdigi} alt="" />
                      </div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.6 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img className="rounded-lg" src={bapp} alt="" />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.8 }}
                        exit={{ y: "-100vw", duration: 0.4 }}
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img className="rounded-lg" src={bweb} alt="" />
                      </motion.div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bauto} alt="" />
                      </div>
                    </div>

                    <div className="w-[calc(250px * 7)] gap-10 flex animate-scroll ">
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bcloud} alt="" />
                      </div>
                      <div className="bg-white h-[350px]  w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bmarket} alt="" />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bfinance} alt="" />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bdigi} alt="" />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bapp} alt="" />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bweb} alt="" />
                      </div>
                      <div className="bg-white h-[350px] w-[250px] rounded-xl">
                        <img className="rounded-lg" src={bauto} alt="" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
          }
        />
      </motion.div>
   
    </motion.div>
  );
};

export default Exnav;
