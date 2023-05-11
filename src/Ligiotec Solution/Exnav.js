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
import { motion } from "framer-motion";

const Exnav = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };

  return (
    <section className="relative overflow-hidden">
      {/**Navbar */}
      <div className="absolute z-50 mx-auto w-full  mt-10">
        <div className="text-white squad flex  justify-between px-3 lg:px-28 text-2xl pt-1">
          <a href="/" className="text-3xl lg:text-4xl flex animate-pulse">
            Ligiotec <span className="ml-2">Solution</span>
          </a>

          <div className="  lg:flex justify-center items-center gap-8">
            <a href="/" className="hidden">
              About{" "}
            </a>
            <a href="/" className="hidden">
              Contact
            </a>
            <div className="-mt-2 ">
              <Hamburger onToggle={showMenu} />
            </div>
          </div>
        </div>
      </div>
      <ReactCompareSlider
        handle={
          <div
            style={{ width: "0.1px", height: "100%", backgroundColor: "white" }}
          ></div>
        }
        changePositionOnHover
        itemOne={
          <div className="relative">
            <div className="bg-[#F55326] max-w-screen h-screen inset-0  ">
              {/**Heading */}
              <div className="flex justify-center items-center   ">
                <h1 className="squad text-center text-3xl lg:text-5xl p-16 pt-44 z-30 text-black">
                  "Designing and developing the web tomorrow , <br />
                  <span>
                    today with our skilled
                    <span className="slant text-5xl lg:text-9xl text-white">
                      {" "}
                      Team
                    </span>{" "}
                    "
                  </span>
                </h1>
              </div>
              {/**Logo */}

              {!open && (
                <div className="-mt-28 lg:-mt-36 container mx-auto ">
                  <div className="  ">
                    <div className="flex justify-center items-center   ">
                      <img
                        className="bg-blend-overlay rounded-full"
                        src={image2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/**image slide bar */}
            {open ? (
              <motion.div
                initial={{ x: -4000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1, duration: 1.5 }}
                className="mt-96 lg:mt-80 absolute inset-0 p-5 gap-10 flex whitespace-nowrap overflow-hidden "
              >
                <div className="w-[calc(-250px * 7)] flex gap-10  animate-scroll ">
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
              <div className="flex justify-center items-center   ">
                <h1 className="squad text-center text-3xl lg:text-5xl p-16  pt-44 z-0 text-white">
                  "Designing and developing the web tomorrow , <br />
                  <span>
                    today with our skilled
                    <span className="slant text-[#F55326] text-5xl lg:text-9xl">
                      {" "}
                      Squad
                    </span>
                    "
                  </span>
                </h1>
              </div>
              {/**Logo */}

              {!open && (
                <div className="-mt-28 lg:-mt-36 container mx-auto ">
                  <div className="  ">
                    <div className="flex justify-center items-center   ">
                      <img
                        className="bg-blend-overlay rounded-full"
                        src={image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/**content slide bar */}
            {open ? (
              <motion.div
                initial={{ x: 4000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1, duration: 1.5 }}
                className="mt-96 lg:mt-80 absolute inset-0 p-5 gap-10 flex whitespace-nowrap overflow-hidden "
              >
                <div className="w-[calc(-250px * 7)] flex gap-10  animate-scroll ">
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
    </section>
  );
};

export default Exnav;
