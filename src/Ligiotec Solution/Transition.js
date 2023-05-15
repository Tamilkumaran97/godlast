import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-blue-500"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-yellow-500"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-cyan-500"
      />
    </>
  );
};

export default Transition;
