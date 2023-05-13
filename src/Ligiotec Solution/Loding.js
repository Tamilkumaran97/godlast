import React from "react";
import { motion } from "framer-motion";

const Loding = () => {
  return (
    <section className="mx-auto w-screen h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.2 }}
        className=" absolute z-50 ml-[700px] w-[250px] h-[250px] bg-[#f55326] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.4 }}
        className=" absolute z-50 ml-[900px] mt-[400px] w-[270px] h-[270px] bg-[#f55326] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.6 }}
        className="absolute z-50 ml-[400px] w-[150px] h-[150px] bg-[#f55326] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.8 }}
        className="absolute z-50 mt-[360px] ml-24 w-[250px] h-[250px] bg-[#f55326] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.2 }}
        className="absolute z-50 ml-[50px] w-[250px] h-[250px] bg-[#353535] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.4 }}
        className="absolute z-50 ml-[1200px] mt-[400px] w-[270px] h-[270px] bg-[#353535] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.6 }}
        className="absolute z-50 ml-[1200px] w-[150px] h-[150px] bg-[#353535] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 6, duration: 0.8 }}
        className="hidden lg:absolute z-50 mt-[400px] ml-[500px] w-[250px] h-[250px] bg-[#353535] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2.5 }}
        transition={{ delay: 6.2, duration: 0.8 }}
        className="absolute z-50 ml-[920px] w-[500px]  h-[500px] bg-[#353535] rounded-full"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 15 }}
        transition={{ delay: 6.6, duration: 1.5 }}
        className="absolute z-50 w-[250px]  h-[250px] bg-[#F55326] rounded-full"
      ></motion.div>

      <div className="w-screen h-screen flex justify-center items-center relative">
        <motion.div
          className="hidden lg:text-9xl lg:flex  squad relative
      
      
      "
        >
          <motion.div
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            transition={{ delay: 3 }}
            span
            className="squad text-[#F55326]"
          >
            L
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 2 }}
          >
            igiotec
          </motion.span>{" "}
          <motion.div
            initial={{ x: 4000 }}
            animate={{ x: 0 }}
            span
            className="squad ml-5 text-[#353535]"
          >
            S
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 2 }}
          >
            {" "}
            olution
          </motion.span>
        </motion.div>
        <motion.div
          className="lg:hidden -mt-32 text-9xl flex  squad relative
      
      
      "
        >
          <motion.div
            initial={{ x: 15 }}
            animate={{ x: 0 }}
            transition={{ delay: 3 }}
            span
            className="squad  text-[#F55326]"
          >
            L
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 2 }}
            className="hidden"
          >
            igiotec
          </motion.span>{" "}
          <motion.div
            initial={{ x: 4000 }}
            animate={{ x: 0 }}
            span
            className="squad ml-5 text-[#353535]"
          >
            S
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 2 }}
            className="hidden"
          >
            {" "}
            olution
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className=" 
      hidden lg:absolute
      
      "
        >
          <h1 data-text="Ligiotec Solution" className="st trans squad ">
            Ligiotec Solution
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className=" 
     lg:hidden  absolute -mt-16
      
      "
        >
          <h1
            data-text="Ligiotec Solution"
            className="smst smtrans squad mt-32 "
          >
            Ligiotec Solution
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Loding;
