import React, { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import one from "./assets/1stcompany.jpg";
import about from "./assets/mobile1.jpg";
import home from "./assets/back.jpg";
import Services from "./assets/small-business-consultant-removebg-preview (2).png";
import contact from "./assets/admin.png";

const Navbar1 = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="w-[100%] absolute h-[100vh] overflow-hidden">
      <div className="absolute z-50 w-[100%]">
        <div className="container flex xl:p-10 p-8  xl:mx-10 justify-between ">
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
            <div
              className="bg-white hover:bg-blue-400 duration-300 relative
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
            <div className="w-[100%] h-[100vh]  absolute hidden lg:flex justify-center ">
              <div className="w-[80%]  px-10 flex justify-evenly items-center  absolute">
                {/**first */}
                <div className="xl:w-[30%] ">
                  <Link to="/work" className="">
                    <motion.div
                      initial={{ y: -400, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
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
                      initial={{ x: -600, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ x: -500, transition: { duration: 0.5 } }}
                      className="w-80 mt-6 h-72 flex overflow-hidden  relative justify-center items-center "
                    >
                      <img className="absolute rounded-xl" src={about} alt="" />
                      <motion.div className="absolute bg-black/50 rounded-xl w-80 h-72"></motion.div>
                      <h1 className="text-5xl absolute text-white bold">
                        About us
                      </h1>
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
                <div className="xl:w-[30%] -rotate-90">
                  <Link to="/">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.5 } }}
                      className="w-80 h-52  flex justify-center relative overflow-hidden items-center "
                    >
                      <img className="absolute rounded-xl" src={home} alt="" />
                      <div className="absolute bg-black/50 rounded-xl w-80 h-72"></div>
                      <h1 className="text-5xl absolute text-white bold">
                        Home
                      </h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-80 h-72 text-center text-white pt-24 font-bold font-serif"
                      >
                        Work with us
                      </motion.p>
                    </motion.div>
                  </Link>
                </div>
                {/*third */}
                <div className="xl:w-[30%]">
                  <Link to="/services">
                    <motion.div
                      initial={{ y: -450, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ y: -400, transition: { duration: 0.5 } }}
                      className="w-80 flex justify-center relative overflow-hidden  items-center h-72  "
                    >
                      <img
                        className="absolute rounded-xl w-80 h-72 object-cover "
                        src={Services}
                        alt=""
                      />
                      <div className="absolute bg-black/50 rounded-xl w-80 h-72"></div>
                      <h1 className="text-5xl absolute text-white bold">
                        Service
                      </h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-80 h-72 text-center text-white pt-24 font-bold font-serif"
                      >
                        Work with us
                      </motion.p>
                    </motion.div>
                  </Link>

                  <Link to="/contact">
                    <motion.div
                      initial={{ x: 500, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      exit={{ x: 400, transition: { duration: 0.5 } }}
                      className="w-80 mt-6 h-40 flex relative overflow-hidden justify-center items-center "
                    >
                      <img
                        className="absolute rounded-xl w-80 h-40 object-cover "
                        src={contact}
                        alt=""
                      />
                      <motion.div className="absolute bg-black/50  rounded-xl w-80 h-40"></motion.div>
                      <h1 className="text-5xl absolute text-white bold">
                        contact
                      </h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-80 h-72 text-center text-white pt-24 font-bold font-serif"
                      >
                        Work with us
                      </motion.p>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {menu && (
            <motion.div className="container mx-auto lg:hidden md:flex z-40 absolute">
              <motion.div
                transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
                className="w-auto md:w-1/2 flex justify-center items-center"
              >
                {/*  <img className="opacity-80" src={bgimg} alt="" /> */}
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1,
                  }}
                  className="text-5xl text-center md:text-start md:text-7xl p-10 text-gray-500 font-semibold"
                >
                  <Link to="/">
                    <motion.li
                      initial={{ x: -700 }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 0.2,
                      }}
                      exit={{ x: -700, delay: 0.2 }}
                      className="pt- pr-2"
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link to="/work">
                    <motion.li
                      initial={{ x: -700 }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 0.4,
                      }}
                      exit={{ x: -700 }}
                      className="pt-4 pr-2"
                    >
                      Work
                    </motion.li>
                  </Link>
                  <Link to="services">
                    <motion.li
                      initial={{ x: -700 }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 0.6,
                      }}
                      exit={{ x: -700 }}
                      className="pt-4 pr-2"
                    >
                      Services
                    </motion.li>
                  </Link>
                  <Link to="/contact">
                    <motion.li
                      initial={{ x: -700 }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 0.8,
                      }}
                      exit={{ x: -700 }}
                      className="pt-4 pr-2"
                    >
                      Contact
                    </motion.li>
                  </Link>
                  <Link to="about">
                    <motion.li
                      initial={{ x: -700 }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 1,
                      }}
                      exit={{ x: -700 }}
                      className="pt-4 pr-2"
                    >
                      About
                    </motion.li>
                  </Link>
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
                exit={{ opacity: 0 }}
                className="w-auto md:w-1/2 flex justify-center items-center "
              >
                <div className="flex md:block">
                  <div className="md:py-6 mr-5">
                    <h1 className="uppercase md:py-2">New Business</h1>
                    <p className="text-sm md:text-xl md:font-bold">+919445521578</p>
                    <p className="text-sm md:text-xl md:font-bold">ligiotec@gmail.com</p>
                  </div>
                  <div>
                    <h1 className="uppercase md:py-2">Our Office</h1>
                    <p className="text-sm md:text-xl md:font-bold"> no:23 street salem</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar1;
