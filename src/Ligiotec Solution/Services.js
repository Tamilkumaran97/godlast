import React from "react";
import { motion } from "framer-motion";
import Footer1 from "./Footer1";
import Transition from "./Transition";

const Services = () => {
  return (
    <section className="w-[100%] ">
      <div className="w-[100%] relative  h-[100vh] overflow-hidden">
        <Transition />
        <div className="relative">
          <div className="absolute mx-aut0 bg-gradient-to-r from-gray-100 to-gray-300 w-[100%] h-[100vh] flex justify-center items-center">
            <div className="lg:px-36 px-4 md:px-10 text-center">
              <h1 className="font-bold bold pb-2 text-3xl  md:text-5xl lg:text-6xl ">
                We Are Skilled to Provide Better Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700">
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
              <motion.div className="floating1 w-32 h-32 lg:w-44 lg:h-44 bg-yellow-700/30 rounded-2xl rotate-12"></motion.div>
              <motion.div className="floating  w-14 h-14 lg:w-24 lg:h-24 bg-yellow-300/40 rounded-2xl rotate-12"></motion.div>
            </div>
            <div className="rotate-180">
              <div className="floating1  w-32 h-32 lg:w-44 lg:h-44 bg-yellow-700/30 rounded-2xl rotate-12"></div>
              <div className="floating w-14 h-14 lg:w-24 lg:h-24 bg-yellow-300/40 rounded-2xl rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative md:flex justify-center   mx-auto container  ">
        <div className="px-4">
          {/**animation */}
          <div className="absolute w-[100%]  ">
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
          {/**how */}
          <div className="w-[100%] sm:px-14 lg:px-24 xl:px-52 flex justify-center">
            <div className="relative">
              <h1 className="absolute text-[80px] md:text-[200px] bold text-black/20">
                {" "}
                How
              </h1>
              <div className="pt-20 lg:pt-32">
                <h1 className="bold text-blue-800 text-5xl lg:text-8xl">
                  How we work
                </h1>

                <p className="py-4 text-xl md:text-4xl md:px-14  bold">
                  Our blueprint for success combines total project transparency,
                  regular milestone checkpoints, and dramatic data-driven
                  results that elevate leading brands from the rest of the pack.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:px-24 xl:px-52 flex justify-center ">
            <div className="relative">
              <h1 className="absolute text-[100px] lg:text-[200px]  bold text-black/20">
                {" "}
                1
              </h1>
              <div className="pt-24 lg:pt-44">
                <h1 className="bold text-blue-800 text-7xl lg:text-8xl">
                  Dig Deep
                </h1>

                <p className="py-4  bold text-xl md:text-4xl md:px-14 ">
                  We are not yes-people. We question the information to make
                  sure each element supports a powerful experience, taps into
                  people’s emotions and results in a specific action on behalf
                  of the brand.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute w-[100%]  flex justify-center ">
            <div className="radius fixed rotate1 w-[800px] h-[800px] bg-gray-500/10"></div>
          </div>
          <div className="w-[100%] lg:px-24 xl:px-52 flex justify-center ">
            <div className="relative">
              <h1 className="absolute text-[100px] lg:text-[200px] bold text-black/20">
                2
              </h1>
              <div className="pt-24 lg:pt-44">
                <h1 className="bold text-blue-800 text-7xl lg:text-8xl">
                  Goals First
                </h1>

                <p className="py-4 text-xl md:text-4xl md:px-14 bold">
                  Our blueprint for success combines total project transparency,
                  regular milestone checkpoints, and dramatic data-driven
                  results that elevate leading brands from the rest of the pack.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:px-24 xl:px-52 flex justify-center ">
            <div className="relative">
              <h1 className="absolute text-[100px] lg:text-[200px] bold text-black/20">
             
              </h1>
              <div className="pt-24 lg:pt-44">
                <h1 className="bold text-blue-800 text-7xl lg:text-8xl">
                  How we work
                </h1>

                <p className="py-4 text-xl md:text-4xl md:px-14 bold ">
                  Our blueprint for success combines total project transparency,
                  regular milestone checkpoints, and dramatic data-driven
                  results that elevate leading brands from the rest of the pack.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:px-24 xl:px-52 flex justify-center ">
            <div className="relative">
              <h1 className="absolute text-[100px] lg:text-[200px] bold text-black/20">
                4
              </h1>
              <div className="pt-24 lg:pt-44">
                <h1 className="bold text-blue-800 text-7xl lg:text-8xl">
                  How we work
                </h1>

                <p className="py-4 text-xl md:text-4xl md:px-14 bold ">
                  Our blueprint for success combines total project transparency,
                  regular milestone checkpoints, and dramatic data-driven
                  results that elevate leading brands from the rest of the pack.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:px-24 xl:px-52 flex justify-center ">
            <div className="relative">
              <h1 className="absolute text-[100px] lg:text-[200px] bold text-black/20">
                {" "}
                5
              </h1>
              <div className="pt-24 lg:pt-44">
                <h1 className="bold text-blue-800 text-7xl lg:text-8xl">
                  Dig Deep
                </h1>

                <p className="py-4 text-xl md:text-4xl md:px-14 bold ">
                  We are not yes-people. We question the information to make
                  sure each element supports a powerful experience, taps into
                  people’s emotions and results in a specific action on behalf
                  of the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer1 />
    </section>
  );
};

export default Services;
