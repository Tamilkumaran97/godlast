import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import about from "./assets/about us.jpg";
import client from "./assets/clients.png";
import first from "./assets/1stcompany.jpg";
import bulb from "./assets/bulb.png";
import Footer1 from "./Footer1";
import Transition from "./Transition";

const AboutUs = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="w-[100%]  ">
      <div className="w-[100%] relative  h-[100vh]  overflow-hidden ">
        <Transition />
        <div className="relative">
          <div className="absolute w-[100%] h-[100vh]">
            <img
              className="object-cover w-[100%] h-[100vh]"
              src={about}
              alt=""
            />
          </div>
          <div className="absolute w-[100%] h-[100vh] bg-black/20"></div>
          <div className="absolute mx-aut0  w-[100%] h-[100vh] flex justify-center items-center">
            <div className=" lg:px-44 text-center">
              <h1 className="font-bold bold pb-2 text-white text-4xl md:text-6xl lg:text-7xl">
                Who <span className="bg-red-500 text-white">we are</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white">
                We create digital experiences that people love and deliver
                results.
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100vh] absolute flex justify-between">
            <div>
              <motion.div className="floating1 w-32 h-32 lg:w-44 lg:h-44 bg-pink-500/50 rounded-2xl rotate-12"></motion.div>
              <motion.div className="floating w-14 h-14 lg:w-24 lg:h-24 bg-pink-300 rounded-2xl rotate-12"></motion.div>
            </div>
            <div className="rotate-180">
              <div className="floating1 w-32 h-32 lg:w-44 lg:h-44 bg-pink-500/50 rounded-2xl rotate-12"></div>
              <div className="floating w-14 h-14 lg:w-24 lg:h-24 bg-pink-300 rounded-2xl rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] mx-auto container     p-5">
        <div className="text-center mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold  lg:p-10">
            Our Credentials
          </h1>
          <p className="min-w-[100px] p-2 md:p-0 md:px-10 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quaerat omnis quam sapiente, odio inventore velit veniam, dicta
            voluptatibus optio sequi? At quia obcaecati ducimus a nam ex soluta
            deserunt!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus minus suscipit, dicta repellat veniam adipisci
            asperiores nisi voluptatem iure odio, fugit unde officiis maxime
            voluptates aliquid doloribus error praesentium eius. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Id neque debitis
            soluta, voluptates amet error dolorem velit ea praesentium alias
            assumenda maiores qui veniam ipsum commodi reiciendis, consequatur
            tenetur accusantium.
          </p>
        </div>

        <div className="lg:flex py-10 lg:py-16">
          <div className="lg:w-1/2 lg:py-16 ">
            <h1 className="text-4xl text-center  lg:text-start font-bold bold">
              Ligiotech is one of the first and largest portals for hyper local
              discovery in different parts of the world.
            </h1>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center ">
            <img src={client} alt="" />
          </div>
          <div className="lg:w-1/2 py-10  ">
            <div className="pb-6 text-center">
              <h1 className="text-4xl text-center text-gray-500">
                {" "}
                100+ Project
              </h1>
              <p>
                Every year we help 1 Million users find the latest information
                about local businesses in their city.
              </p>
            </div>
            <div>
              <h1 className="text-4xl text-center text-gray-500">
                {" "}
                200+ clients
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam neque praesentium iure esse illo, id reprehenderit
                fuga illum mollitia quas beatae eos tempora veritatis
                necessitatibus error? Culpa consequatur dolore eos.
              </p>
            </div>
          </div>
        </div>
        {/**scroll  effect */}
        <div className=" w-[100%] ">
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className="overflow-hidden dark:bg-transparent   "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 5, left: -width }}
              className="flex gap-6 dark:bg-transparent  p-6 lg:p-6  "
            >
              <motion.div className=" w-1/4  h-[15rem] lg:h-[17rem]   min-w-[22rem] lg:min-w-[30rem]  shadow-lg shadow-black  duration-500 relative overflow-hidden  rounded-lg cursor-grab ">
                <motion.div
                  initial={{ scale: 2 }}
                  whileHover={{ scale: 0 }}
                  transition={{ duration: 0 }}
                  className="absolute "
                >
                  <motion.img
                    initial={{ scale: 2 }}
                    whileHover={{ scale: 0 }}
                    transition={{ duration: 0 }}
                    className="object-cover w-[30rem] rounded-lg"
                    src={first}
                    alt=""
                  />
                </motion.div>
                <motion.div className="absolute">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" w-[30rem] h-[17rem] rounded-lg bg-black/50 "
                  >
                    <div className="p-5">
                      <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
                        1
                      </h1>

                      <h2 className="font-bold text-white text-lg lg:text-2xl mt-5 mb-2">
                        ABC Corporation:
                      </h2>
                      <p className="text-sm text-white lg:text-base ">
                        We designed a responsive website for this B2B company
                        that provide software solution to health care provides.
                        The website includes easy-to-use navigation, and a
                        content management system that allows the client to make
                        update and manage their content.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div className=" w-1/4 h-[15rem] lg:h-[17rem]   min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black duration-500 relative overflow-hidden  hover:bg-green-500    rounded-lg cursor-grab ">
                <div className="absolute ">
                  <img
                    className="object-cover w-[30rem] rounded-lg"
                    src={first}
                    alt=""
                  />
                </div>

                <div className="absolute">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" w-[30rem] h-[17rem] rounded-lg bg-black/50 "
                  >
                    <div className=" p-5">
                      <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
                        2
                      </h1>
                      <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
                        XYZ Non-Profit:
                      </h1>
                      <p className="text-sm lg:text-base ">
                        For this non-profit organization, we created a custom
                        website that is optimized for fundraising and
                        engagement. The website includes an integrated donation
                        system, event registration forms, and a blog for sharing
                        updates and news.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className=" w-1/4 h-[15rem] lg:h-[17rem]   min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black duration-500 relative overflow-hidden  hover:bg-green-500    rounded-lg cursor-grab ">
                <div className="absolute ">
                  <img
                    className="object-cover w-[30rem] rounded-lg"
                    src={first}
                    alt=""
                  />
                </div>

                <div className="absolute">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" w-[30rem] h-[17rem] rounded-lg bg-black/50 "
                  >
                    <div className=" p-5">
                      <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
                        2
                      </h1>
                      <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
                        XYZ Non-Profit:
                      </h1>
                      <p className="text-sm lg:text-base ">
                        For this non-profit organization, we created a custom
                        website that is optimized for fundraising and
                        engagement. The website includes an integrated donation
                        system, event registration forms, and a blog for sharing
                        updates and news.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className=" w-1/4 h-[15rem] lg:h-[17rem]   min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black duration-500 relative overflow-hidden  hover:bg-green-500    rounded-lg cursor-grab ">
                <div className="absolute ">
                  <img
                    className="object-cover w-[30rem] rounded-lg"
                    src={first}
                    alt=""
                  />
                </div>

                <div className="absolute">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" w-[30rem] h-[17rem] rounded-lg bg-black/50 "
                  >
                    <div className=" p-5">
                      <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
                        2
                      </h1>
                      <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
                        XYZ Non-Profit:
                      </h1>
                      <p className="text-sm lg:text-base ">
                        For this non-profit organization, we created a custom
                        website that is optimized for fundraising and
                        engagement. The website includes an integrated donation
                        system, event registration forms, and a blog for sharing
                        updates and news.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className=" w-1/4 h-[15rem] lg:h-[17rem]   min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black duration-500 relative overflow-hidden  hover:bg-green-500    rounded-lg cursor-grab ">
                <div className="absolute ">
                  <img
                    className="object-cover w-[30rem] rounded-lg"
                    src={first}
                    alt=""
                  />
                </div>

                <div className="absolute">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" w-[30rem] h-[17rem] rounded-lg bg-black/50 "
                  >
                    <div className=" p-5">
                      <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
                        2
                      </h1>
                      <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
                        XYZ Non-Profit:
                      </h1>
                      <p className="text-sm lg:text-base ">
                        For this non-profit organization, we created a custom
                        website that is optimized for fundraising and
                        engagement. The website includes an integrated donation
                        system, event registration forms, and a blog for sharing
                        updates and news.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/**last content */}
          <div className="md:flex">
            <div className="lg:w-1/3 w-[200px] ">
              <img className="" src={bulb} alt="" />
            </div>
            <div className="md:w-1/2 lg:py-10 px-1 ">
              <h1 className="text-xl lg:text-3xl font-bold">You</h1>
              <li className="text-sm lg:text-xl">Discover the best in your city.</li>
              <li className="text-sm lg:text-xl">Source products & services nearby.</li>
              <li className="text-sm lg:text-xl">
                Connect with reliable local businesses.
              </li>
            </div>
            <div className="md:w-1/2 lg:py-10 px-1 ">
              <h1 className="text-xl lg:text-3xl font-bold">Local Business</h1>
              <li className="text-sm lg:text-xl">
                Improve your local reach & visibility.
              </li>
              <li className="text-sm lg:text-xl">Get qualified local leads at no cost.</li>
              <li className="text-sm lg:text-xl">Find new customers near you.</li>
            </div>
          </div>
        </div>
      </div>
      {/**footer */}
      <div className=" ">
        <Footer1 />
      </div>
    </div>
  );
};

export default AboutUs;
