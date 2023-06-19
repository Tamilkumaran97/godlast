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
        {/*  <Transition /> */}
        {/*      <Transition /> */}
        {/**Navbar */}

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
              <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 max-w-screen h-screen inset-0  ">
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
                {/*    <AnimatePresence>
              
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
                
                </AnimatePresence> */}
              </div>
              {/**image slide bar */}
              <AnimatePresence>
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
              </AnimatePresence>
            </div>
          }
          itemTwo={
            <div className="relative">
              <div className=" bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 max-w-full h-screen mx-auto z-40 ">
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
                      <span className="slant text-black text-5xl lg:text-9xl">
                        {" "}
                        Squad
                      </span>
                    </span>
                  </motion.h1>
                </motion.div>
                {/**Logo */}

                {/*   <motion.div className="-mt-28 lg:-mt-36 container mx-auto ">
                    <div className="  ">
                      <div className="flex justify-center items-center   ">
                        <img
                          className="bg-blend-overlay rounded-full"
                          src={image}
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div> */}
              </div>
              {/**content slide bar */}
              <AnimatePresence>
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
              </AnimatePresence>
            </div>
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Exnav;
