import React from "react";
import { motion } from "framer-motion";
import Footer1 from "./Footer1";

const Services = () => {
  return (
    <section className="w-[100%] h-[650vh]">
      <div className="w-[100%]   h-[100vh] ">
        <div className="relative">
          <div className="absolute mx-aut0 bg-gradient-to-r from-gray-100 to-gray-300 w-[100%] h-[100vh] flex justify-center items-center">
            <div className="px-44 text-center">
              <h1 className="font-bold bold pb-2 text-7xl">
                We Are Skilled to Provide Better Services
              </h1>
              <p className="text-2xl text-gray-700">
                At Thinkgestalt we take on products from inception to launch,
                from business model to people's pocket, from wireframe to
                continuous deployment. We pride ourselves in loving what we do
                as we take on complex problems and come up with elegant and
                simple solutions.
              </p>
            </div>
          </div>
          <div
            /*   data-scroll
      data-scroll-sticky
      data-scroll-target="#two" */
            className="w-[100%] h-[100vh] absolute flex justify-between"
          >
            <div>
              <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="floating1 w-44 h-44 bg-cyan-500/50 rounded-2xl rotate-12"
              ></motion.div>
              <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="floating w-24 h-24 bg-cyan-300 rounded-2xl rotate-12"
              ></motion.div>
            </div>
            <div className="rotate-180">
              <div className="floating1 w-44 h-44 bg-cyan-500/50 rounded-full rotate-12"></div>
              <div className="floating w-24 h-24 bg-cyan-300 rounded-full rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative  mx-auto container  h-[400vh]">
        {/**animation */}
        <div className="absolute w-[100%] h-[400vh] ">
          <motion.div
            initial={{ opacity: 0, rotate: 1, x: 0, y: 0 }}
            whileInView={{ opacity: 1, rotate: [5, 90, 5], x: 900, y: 250 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-md"
          ></motion.div>
          <motion.div
            initial={{ rotate: 8, x: 400, y: 150 }}
            whileInView={{ rotate: [8, -90, 8], x: 800, y: 0 }}
            transition={{ duration: 5 }}
            className="w-64 h-64 bg-red-500/20 rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ rotate: 1, x: 900, y: -190 }}
            whileInView={{ rotate: 8, x: 0, y: 250 }}
            transition={{ duration: 5 }}
            className="w-10 h-10 bg-red-500/20 rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, rotate: 1, x: 0, y: 0 }}
              whileInView={{ opacity: 1, rotate: 8, x: 900, y: 250 }}
              transition={{ duration: 5 }}
              className="w-44 h-24 bg-red-500/20 rounded-full"
            ></motion.div>
          </motion.div>
          <motion.div
            initial={{ rotate: 8, x: 0, y: 150 }}
            whileInView={{ rotate: [8, -90, 8], x: 100, y: 500 }}
            transition={{ duration: 5 }}
            className="w-64 h-64 bg-red-500/20 rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 1, x: 0, y: 0 }}
            whileInView={{ opacity: 1, rotate: 8, x: 900, y: 250 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-full"
          ></motion.div>

          <motion.div
            initial={{ rotate: 8, x: 400, y: 0 }}
            whileInView={{ rotate: [8, -90, 8], x: 900, y: 1000 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ rotate: 8, x: 0, y: 0 }}
            whileInView={{ rotate: [8, -90, 8], x: 0, y: 1000 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ rotate: 8, x: 0, y: 150 }}
            whileInView={{ rotate: [8, -90, 8], x: 100, y: 1000 }}
            transition={{ duration: 5 }}
            className="w-4 h-64 bg-red-500/20 rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ rotate: 8, x: 400, y: 0 }}
            whileInView={{ rotate: [8, -90, 8], x: 900, y: 1000 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-xl"
          >
            <motion.div
              initial={{ rotate: 8, x: 400, y: 0 }}
              whileInView={{ rotate: [8, -90, 8], x: 900, y: 1000 }}
              transition={{ duration: 5 }}
              className="w-24 h-24 bg-red-500/20 rounded-xl"
            ></motion.div>
          </motion.div>
          <motion.div
            initial={{ rotate: 8, x: 0, y: 0 }}
            whileInView={{ rotate: [8, -90, 8], x: 0, y: 1200 }}
            transition={{ duration: 5 }}
            className="w-24 h-24 bg-red-500/20 rounded-xl"
          >
            <motion.div
              initial={{ rotate: 8, x: 300, y: 0 }}
              whileInView={{ rotate: [8, -90, 8], x: 300, y: 1000 }}
              transition={{ duration: 5 }}
              className="w-24 h-24 bg-red-500/20 rounded-xl"
            ></motion.div>
          </motion.div>
        </div>

        <div className="w-1/2">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20"> How</h1>
            <div className="pt-32">
              <h1 className="bold text-blue-800 text-8xl">How we work</h1>

              <p className="py-4 text-4xl bold">
                Our blueprint for success combines total project transparency,
                regular milestone checkpoints, and dramatic data-driven results
                that elevate leading brands from the rest of the pack.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 -mt-10 float-right">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20"> 1</h1>
            <div className="pt-44">
              <h1 className="bold text-blue-800 text-8xl">Dig Deep</h1>

              <p className="py-4 text-4xl bold ">
                We are not yes-people. We question the information to make sure
                each element supports a powerful experience, taps into people’s
                emotions and results in a specific action on behalf of the
                brand.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-96">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20">2</h1>
            <div className="pt-44">
              <h1 className="bold text-blue-800 text-8xl">Goals First</h1>

              <p className="py-4 text-4xl bold">
                Our blueprint for success combines total project transparency,
                regular milestone checkpoints, and dramatic data-driven results
                that elevate leading brands from the rest of the pack.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 -mt-20 float-right">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20"> 3</h1>
            <div className="pt-44">
              <h1 className="bold text-blue-800 text-8xl">Transparency</h1>

              <p className="py-4 text-4xl bold ">
                We are not yes-people. We question the information to make sure
                each element supports a powerful experience, taps into people’s
                emotions and results in a specific action on behalf of the
                brand.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-80">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20">4</h1>
            <div className="pt-44">
              <h1 className="bold text-blue-800 text-8xl">How we work</h1>

              <p className="py-4 text-4xl bold">
                Our blueprint for success combines total project transparency,
                regular milestone checkpoints, and dramatic data-driven results
                that elevate leading brands from the rest of the pack.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 -mt-20 float-right">
          <div className="relative">
            <h1 className="absolute text-[200px] bold text-black/20"> 5</h1>
            <div className="pt-44">
              <h1 className="bold text-blue-800 text-8xl">Dig Deep</h1>

              <p className="py-4 text-4xl bold ">
                We are not yes-people. We question the information to make sure
                each element supports a powerful experience, taps into people’s
                emotions and results in a specific action on behalf of the
                brand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer1 />
      </div>
    </section>
  );
};

export default Services;
