import React, { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import one from "./assets/1stcompany.jpg";
import about from "./assets/mobile1.jpg";

const Navbar1 = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="w-[100%] absolute h-[100vh] overflow-hidden">
      <div className="absolute z-50 w-[100%]">
        <div className="container flex lg:p-10 p-8  lg:mx-10 justify-between ">
          <div className="logo uppercase lg:py-auto w-[250px] pt-2 z-20 font-bold  lg:text-2xl text-white relative ">
            <Link to="/" className="absolute">
              Ligiotech Solution
            </Link>
            <div className="absolute">
              <AnimatePresence>
                {menu && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 2, delay: 1.5 },
                    }}
                    className="logo uppercase text-black z-20 font-bold  lg:text-2xl "
                  >
                    <Link to="/">Ligiotech Solution</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center items-center gap-16 ">
            {/*   <Link to="/about" className="text-white ">
            ABOUT US{" "}
          </Link>
          <Link className="text-white ">SERVICES </Link>
          <Link className="text-white ">CONTACT </Link> */}
            <div
              className="bg-white hover:bg-white duration-300 relative
          py-auto rounded-full "
            >
              <AnimatePresence>
                {menu && (
                  <div className=" overflow-hidden ">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 200 }}
                      transition={{ duration: 1 }}
                      exit={{
                        scale: 0,
                        transition: { delay: 1, duration: 0.8 },
                      }}
                      className="absolute w-10 h-10 rounded-full flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500"
                    >
                      <div className="w-5 h-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 rounded-full"></div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              <Hamburger
                onToggle={showMenu}
                duration={0.8}
                size={24}
                distance="lg"
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menu && (
            <div className="w-[100%] h-[100vh]  absolute flex justify-center ">
              <div className="w-[80%]  px-10 flex justify-evenly items-center  absolute">
                {/**first */}
                <div className="w-[30%] ">
                  <Link to="/work" className="">
                    <motion.div
                      initial={{ y: -400 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ y: -400, transition: { duration: 0.5 } }}
                      className="w-80  h-48 flex rounded-xl relative justify-center items-center overflow-hidden  to-gray-900 "
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute w-96 h-52"
                      >
                        <img className=" rounded-xl" src={one} alt="" />
                      </motion.div>

                      <div className="absolute bg-black/50 w-80 h-48"></div>
                      <h1 className="text-5xl text-white absolute bold">
                        Work
                      </h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-80 h-48 text-center text-white pt-28 font-bold font-serif"
                      >
                        let make together
                      </motion.p>
                    </motion.div>
                  </Link>
                  <Link to="/about">
                    <motion.div
                      initial={{ x: -600 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ x: -500, transition: { duration: 0.5 } }}
                      className="w-80 mt-6 h-72 flex overflow-hidden  relative justify-center items-center "
                    >
                      <img className="absolute rounded-xl" src={about} alt="" />
                      <div className="absolute bg-black/50 rounded-xl w-80 h-72"></div>
                      <h1 className="text-5xl absolute text-white bold">About us</h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-80 h-72 text-center text-white pt-24 font-bold font-serif"
                      >
                      who we are
                      </motion.p>
                    </motion.div>
                  </Link>
                </div>
                {/**second */}
                <div className="w-[30%] -rotate-90">
                  <Link to="/">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.5 } }}
                      className="w-80 h-52  flex justify-center items-center "
                    >
                      <h1 className="text-5xl bold">Home</h1>
                    </motion.div>
                  </Link>
                </div>
                {/*third */}
                <div className="w-[30%]">
                  <Link to="/services">
                    <motion.div
                      initial={{ y: -450 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ y: -400, transition: { duration: 0.5 } }}
                      className="w-80 flex justify-center items-center h-72  "
                    >
                      <h1 className="text-5xl bold">Service</h1>
                    </motion.div>
                  </Link>

                  <motion.div
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    exit={{ x: 400, transition: { duration: 0.5 } }}
                    className="w-80 mt-6 h-40 flex justify-center items-center "
                  >
                    <Link to="/contact" className="text-5xl bold">
                      contact
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar1;
