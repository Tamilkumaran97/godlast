import React from "react";
import { motion } from "framer-motion";
import mobile from "./assets/mobile1.jpg";
import shoe from "./assets/shoe.jpg";
import Footer1 from "./Footer1";

const Work = () => {
  return (
    <section
      /*   id="two" */
      className="w-[100%] h-[580vh] bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="w-[100%]   h-[100vh] ">
        <div className="relative">
          <div className="absolute mx-aut0 bg-gradient-to-r from-gray-100 to-gray-300 w-[100%] h-[100vh] flex justify-center items-center">
            <div className="px-44 text-center">
              <h1 className="font-bold bold pb-2 text-8xl">
                The Work We Do and The People We Help
              </h1>
              <p className="text-2xl text-gray-700">
                Our clients inspire us. We become invested in what they're
                passionate about, and ultimately, when we care about something,
                it shows in the work.
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
                className="floating1 w-44 h-44 bg-orange-500/50 rounded-2xl rotate-12"
              ></motion.div>
              <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="floating w-24 h-24 bg-orange-300 rounded-2xl rotate-12"
              ></motion.div>
            </div>
            <div className="rotate-180">
              <div className="floating1 w-44 h-44 bg-orange-500/50 rounded-full rotate-12"></div>
              <div className="floating w-24 h-24 bg-orange-300 rounded-full rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
      {/**work */}
      <div
        id="one"
        className="w-[100%] relative  flex h-[335vh] container mx-auto"
      >
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#one"
          className="w-[100%] h-[100vh] absolute flex justify-between"
        >
          <div>
            <motion.div className="floating1 w-16 h-16 bg-blue-500/50 rounded-2xl rotate-12"></motion.div>
            <motion.div className="floating w-24 h-24 bg-cyan-300 rounded-2xl rotate-12"></motion.div>
          </div>
          <div className="rotate-180">
            <div className="floating1 w-16 h-44 bg-yellow-500/50 rounded-full rotate-12"></div>
            <div className="floating w-24 h-24 bg-yellow-300 rounded-full rotate-12"></div>
          </div>
        </div>
        <div className="w-1/2  py-16">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#one"
            className="p-4"
          >
            <h1 className="text-4xl bold py-4 p-1 border-b border-cyan-500">
              Work
            </h1>
            <p className="text-xl pb-8 font-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              dolor alias temporibus deserunt suscipit quis et aperiam,
              necessitatibus culpa quae cumque at minima, labore voluptatem
              exercitationem, ex animi maiores? Ipsa.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              officia porro laudantium fugit libero repudiandae optio asperiores
              inventore tempora sapiente vero non soluta fuga sit, nobis aliquid
              dolores, provident voluptates.
            </p>
            <div className="bg-black  h-[200px] container p-4 rounded-lg text-center ">
              <div className="text-white">
                <h1 className="text-3xl font-bold">
                  "Let's make something special"
                </h1>
                <p className="p-4">
                  Have an idea? We will help you make it possible.
                </p>
                <button className="bg-blue-500 p-4  rounded-full text-black font-semibold">
                  {" "}
                  Start your project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2  py-16">
          <div className="">
            <h1 className="text-4xl text-center font-bold">
              We let our Portfolio do the talk!
            </h1>
            <p className="text-center ">
              All Bespoke designs. Most advanced Technologies
            </p>
          </div>
          <div className="w-96 relative h-96 mx-auto my-10 bg-white">
            <img className="absolute" src={mobile} alt="" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-96 h-96 bg-black/80"
            >
              <div className="text-white p-10">
                <h1 className="font-bold text-center py-4 text-2xl">
                  Mantara company
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus nisi fugit officiis perferendis, voluptate voluptas
                  dolor, necessitatibus, amet placeat qui debitis ab sed. Odit
                  atque optio deserunt. Esse, id dolor!
                </p>
                <button className="text-red-500 py-2">Read more --</button>
              </div>
            </motion.div>
          </div>
          <div className="w-96 relative h-96 mx-auto my-10 bg-white">
            <img
              className="h-96 absolute w-96 object-cover"
              src={shoe}
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-96 h-96 bg-black/80"
            >
              <div className="text-white p-10">
                <h1 className="font-bold text-center py-4 text-2xl">
                  shoe company
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus nisi fugit officiis perferendis, voluptate voluptas
                  dolor, necessitatibus, amet placeat qui debitis ab sed. Odit
                  atque optio deserunt. Esse, id dolor!
                </p>
                <button className="text-red-500 py-2">Read more --</button>
              </div>
            </motion.div>
          </div>
          <div className="w-96 relative h-96 mx-auto my-10 bg-white">
            <img className="absolute" src={mobile} alt="" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-96 h-96 bg-black/80"
            >
              <div className="text-white p-10">
                <h1 className="font-bold text-center py-4 text-2xl">
                  shoe company
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus nisi fugit officiis perferendis, voluptate voluptas
                  dolor, necessitatibus, amet placeat qui debitis ab sed. Odit
                  atque optio deserunt. Esse, id dolor!
                </p>
                <button className="text-red-500 py-2">Read more --</button>
              </div>
            </motion.div>
          </div>
          <div className="w-96 h-96 relative mx-auto my-10 bg-white">
            <img
              className="h-96 absolute w-96  object-cover"
              src={shoe}
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-96 h-96 bg-black/80"
            >
              <div className="text-white p-10">
                <h1 className="font-bold text-center py-4 text-2xl">
                  shoe company
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus nisi fugit officiis perferendis, voluptate voluptas
                  dolor, necessitatibus, amet placeat qui debitis ab sed. Odit
                  atque optio deserunt. Esse, id dolor!
                </p>
                <button className="text-red-500 py-2">Read more --</button>
              </div>
            </motion.div>
          </div>
          <div className="w-96 relative h-96 mx-auto my-10 bg-white">
            <img className="absolute" src={mobile} alt="" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-96 h-96 bg-black/80"
            >
              <div className="text-white p-10">
                <h1 className="font-bold text-center py-4 text-2xl">
                  shoe company
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus nisi fugit officiis perferendis, voluptate voluptas
                  dolor, necessitatibus, amet placeat qui debitis ab sed. Odit
                  atque optio deserunt. Esse, id dolor!
                </p>
                <button className="text-red-500 py-2">Read more --</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <Footer1/>
      </div>
    </section>
  );
};

export default Work;
