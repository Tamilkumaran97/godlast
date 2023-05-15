import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import Loading from "./Loding";
import Footer from "./Footer";
import sound from "./assets/menu sound.unknown";
import Transition from "./Transition";

import { Link } from "react-scroll";

const Exnav = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };

  const play = () => {
    new Audio(sound).play();
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto "
        >
          <Transition />
          {/**Navbar */}
          <motion.div className="absolute z-40 mx-auto w-full  mt-10">
            <div className="text-white squad flex  justify-between px-3 lg:px-28 text-2xl pt-1">
              <motion.div whileHover={{ scale: 1.02 }}>
                <motion.a
                  initial={{ x: `100vw` }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.8 }}
                  href="/"
                  className="text-3xl bg-white/20 p-1 lg:p-2 rounded-xl hover:bg-white/40 lg:text-4xl  hover:text-cyan-800 duration-500 flex animate-pulse"
                >
                  Ligiotec <span className="ml-2">Solution</span>
                </motion.a>
              </motion.div>

              <motion.div className="  lg:flex justify-center items-center gap-8">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <motion.a
                    initial={{ x: `-100vw` }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8 }}
                    href="/"
                    className="hidden lg:flex bg-white/20 p-2 rounded-xl hover:bg-white/40  hover:text-black duration-500"
                  >
                    About{" "}
                  </motion.a>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <motion.a
                    initial={{ x: `-100vw` }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8 }}
                    href="/"
                    className="hidden lg:flex bg-white/20 p-2 rounded-xl hover:bg-white/40 hover:text-black duration-500"
                  >
                    Contact
                  </motion.a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }} className="-mt-2 ">
                  <motion.div
                    initial={{ x: `-100vw` }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8 }}
                    onClick={play}
                  >
                    <Hamburger onToggle={showMenu} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            {open && (
              <motion.div
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.9 }}
                className="  "
              >
                <div className="lg:hidden grid bg-white/40 backdrop-blur-lg  h-56  text-center pt-4  text-black font-semibold  ">
                  <Link
                    href="/"
                    className="px-8 cursor-pointer hover:scale-110 duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    href="./about"
                    className="px-8 cursor-pointer  hover:scale-110 duration-200"
                  >
                    About
                  </Link>
                  <Link
                    href="./about"
                    className="px-8 cursor-pointer  hover:scale-110 duration-200"
                  >
                    Work
                  </Link>
                  <Link
                    href="./about"
                    className="px-8 cursor-pointer  hover:scale-110 duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
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
                </div>
                {/**image slide bar */}
                {open ? (
                  <motion.div className="mt-[21rem] md:mt-[14rem] sm:mt-[14rem] lg:mt-80 absolute inset-0 p-5 gap-10 flex whitespace-nowrap overflow-hidden cursor-grab">
                    <div className="w-[calc(-250px * 7)] flex gap-10  animate-scroll ">
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.4 }}
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
                        className="bg-white h-[350px] w-[250px] rounded-xl"
                      >
                        <img className="rounded-lg" src={bapp} alt="" />
                      </motion.div>
                      <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.8 }}
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
              </div>
            }
          />
          <div></div>
        </motion.div>
      )}
      <Footer />
    </div>
  );
};

export default Exnav;
