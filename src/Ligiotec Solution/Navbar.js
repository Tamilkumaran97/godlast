import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
/* import sound from "./assets/menu sound.unknown"; */

import Hamburger from "hamburger-react";

import insta from "./assets/instagram-round-svgrepo-com.svg";
import whatsapp from "./assets/whatsapp-alt-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";

import tele from "./assets/telegram-fill-svgrepo-com.svg";

const Navbar = () => {
/*   const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };
 */
  const [menu, setMenu] = useState(false);
  const menuBar = () => {
    setMenu(!menu);
  };

/*   const play = () => {
    new Audio(sound).play();
  };
 */
  return (
    <div>

      <motion.div className="absolute z-50 mx-auto w-[100%] px-2 mt-10">
        <div className="text-white squad flex  justify-between px-3 lg:px-4 text-2xl pt-1">
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
          {/**Svg animation */}

          <motion.div className="  lg:flex justify-center items-center gap-8">
            {/*   <motion.div whileHover={{ scale: 1.1 }}>
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
      </motion.div> */}
            <motion.div className="-mt-2 bg-[#353535] z-50 rounded-lg ">
              <motion.div>
                <Hamburger onToggle={menuBar} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            exit={{ x: 400, duration: 1 }}
            className="absolute right-0 z-40 w-[400px] p-24 bg-white/30 backdrop-blur-3xl h-screen"
          >
            <div className="font-bold grid text-3xl ">
              <Link
                to="/"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                className="p-10 hover:scale-125 z-50 duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="p-10 z-50 hover:scale-125 duration-300"
              >
                About
              </Link>
              <Link to="/contact" className="p-10 hover:scale-125 duration-300">
                Work
              </Link>
              <h1 className="p-10  hover:scale-125 duration-300">Contact</h1>
              <div className="flex w-[200px] opacity-75 h-[30px] my-4 gap-4">
                <img src={whatsapp} alt="" />
                <img src={github} alt="" />
                <img src={insta} alt="" />
                <img className="rounded-full" src={twitter} alt="" />
                <img src={tele} alt="" />
              </div>
              <hr className="border-1 w-[250px]  border-black/20" />
              <h1 className="text-xl text-gray-500">
                Bright Solutions. Profitable Results.
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
