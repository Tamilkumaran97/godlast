/* import { useState } from "react";
import image from "./assets/ligi.gif";
import image2 from "./assets/lIGIOTEC sOLUTION (2).gif"; */
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

import { ReactCompareSlider } from "react-compare-slider";
import { AnimatePresence, motion } from "framer-motion";




/* import Footer from "./Footer"; */
/* import sound from "./assets/menu sound.unknown"; */
import Transition from "./Transition";
/* import { useLocomotiveScroll } from "react-locomotive-scroll"; */


const Exnav = () => {
/*   const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };
 */
/*   const [menu, setMenu] = useState(false);
  const menuBar = () => {
    setMenu(!menu);
  }; */

/*   const play = () => {
    new Audio(sound).play();
  }; */

/*   const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let el = document.querySelector(id);

    scroll.scrollTo(el, {
      offset: "-100",
      duration: "2000",
      getSpeed: "1000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
 */
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
        className=" relative mx-auto w-[100%]  overflow-hidden  "
      >
        <Transition />
        {/*      <Transition /> */}
        {/**Navbar */}

        <ReactCompareSlider
          handle={
            <div
              style={{
                width: "0.1px",
                height: "120%",
                backgroundColor: "white",
              }}
            ></div>
          }
          changePositionOnHover
          itemOne={
            <div className="w-[100vw] h-[100vh] mx-auto flex justify-center items-center  inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200">
              <div>
                <div className="flex justify-center items-center">
                  {" "}
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className="squad   text-center  flex-warp w-[100vw] pt-48 md:pt-32 text-3xl  px-10 xs:px-0 xs:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl z-30 text-black"
                  >
                    "Designing and developing the web tomorrow , <br />
                    <span>
                      today with our skilled
                      <span className="slant lg:text-7xl xl:text-8xl xs:text-6xl text-5xl text-white ">
                        {" "}
                        Team
                      </span>{" "}
                      "
                    </span>
                  </motion.h1>
                </div>
                <div>
                  <AnimatePresence>
                    <motion.div className=" inset-0 p-5 gap-10 flex justify-center items-center whitespace-nowrap overflow-hidden cursor-grab">
                      <div className="w-[calc(-250px * 7)] flex  sm:gap-10  animate-scroll ">
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.4 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px]   rounded-xl"
                        >
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={cloud}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.8 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px]  w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={market}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={finance}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1.2 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={digital}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1.4 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={mobile}
                            alt=""
                          />
                        </motion.div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={web}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={auto}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="w-[calc(250px * 7)] gap-10 flex animate-scroll ">
                        <div className=" h-[350px]  w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={cloud}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={market}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={finance}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={digital}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={mobile}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={web}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-xl w-[190px] sm:w-[250px] shadow-xl"
                            src={auto}
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          }
          itemTwo={
            <div className="w-[100%] h-[100vh] flex justify-center items-center  inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600">
              <div className="">
                <div className="flex justify-center items-center">
                  {" "}
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className="squad text-center px-10 xs:px-0 flex-warp w-[100vw] pt-48 md:pt-32 text-3xl xs:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl z-0 text-white"
                  >
                    "Designing and developing the web tomorrow , <br />
                    <span>
                      today with our skilled
                      <span className="slant text-black text-5xl xs:text-6xl lg:text-7xl xl:text-8xl ">
                        {" "}
                        Squad{" "}
                      </span>
                      "
                    </span>
                  </motion.h1>
                </div>
                <div>
                  <AnimatePresence>
                    <motion.div
                      initial={{ x: 4000 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0, duration: 0.2 }}
                      className=" inset-0 p-5 gap-10 flex justify-center items-center whitespace-nowrap overflow-hidden "
                    >
                      <div className="w-[calc(-250px * 7)] flex sm:gap-10  animate-scroll ">
                        <div className=" h-[350px] w-[190px] sm:w-[250px]  rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bcloud}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px]  rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bmarket}
                            alt=""
                          />
                        </div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1.4 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bfinance}
                            alt=""
                          />
                        </motion.div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bdigi}
                            alt=""
                          />
                        </div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1.6 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bapp}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: "-100vw" }}
                          animate={{ y: 0 }}
                          transition={{ delay: 1.8 }}
                          exit={{ y: "-100vw", duration: 0.4 }}
                          className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl"
                        >
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bweb}
                            alt=""
                          />
                        </motion.div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bauto}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="w-[calc(250px * 7)] gap-10 flex animate-scroll ">
                        <div className=" h-[350px] w-[190px] sm:w-[250px]  rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bcloud}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px]  rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bmarket}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bfinance}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bdigi}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bapp}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bweb}
                            alt=""
                          />
                        </div>
                        <div className=" h-[350px] w-[190px] sm:w-[250px] rounded-xl">
                          <img
                            className="rounded-lg w-[190px] sm:w-[250px]"
                            src={bauto}
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Exnav;
