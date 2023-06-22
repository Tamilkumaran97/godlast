import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import uiux from "./assets/uiux.png";
import laucher from "./assets/websitelauncher.png";
import webdev from "./assets/webdeve.png";
import relau from "./assets/relauch.png";
import admin from "./assets/admin.png";


const DesignSolution = () => {
  const [active, setActive] = useState("first");

  return (
    <section  className="relative ">
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
        </div> *
      <div className="container mx-auto  sm:p-10 md:px-14 lg:px-0 w-[100%]  ">
        <div className="text-center px-4 py-6 md:py-16 md:px-0  ">
          <p className=" text-sm xs:text-sm md:text-lg lg:text-xl xl:text-2xl font-sans text-blue-500 pb-2 lg:pb-2">
            Helping local businesses create stunning websites through
          </p>
          <p className="bold text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Inclusive Web development & Design solutions
          </p>
        </div>
        <div className=" px-8 sm:px-12 md:px-10  ">
          {/**ui ux container */}
          <div className="lg:flex py-2 relative">
            <div className="lg:w-1/2 w-[100%] relative ">
              {/**moving box */}
              <motion.div
                initial={{ y: 90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className=" w-auto   lg:h-44  p-4 lg:p-4 z-0 bg-gradient-to-t from-cyan-100 via-cyan-500 to-cyan-500 rounded-xl"
              >
                <h1 className="text-2xl sm:text-4xl xl:text-5xl  text-center font-semibold">
                  UI/UX Design
                  <br />
                  <p className="text-sm sm:text-sm  text-center">
                    to make better experience
                  </p>
                </h1>
              </motion.div>
              {/**content box */}
              <div className="px-1 md:p-5 md:px-10  xl:p-10 xl:px-20  lg:-mt-20 lg:absolute border-cyan-500 border-b-4 bg-white rounded-b-2xl">
                <p className=" md:text-lg">
                  Our design team designs a modern, pixel-perfect, and
                  attractive user interface (UI) that attracts and engages your
                  ideal customers.
                </p>
                <br />
                <div className="text-sm lg:text-lg  ">
                  <li>Pleasant User Experience</li>
                  <li>Effective Website Navigation</li>
                  <li>Increased Visitor Retention</li>
                  <li>Increased Number of Clicks</li>
                  <li>More User Engagements</li>
                  <li>Higher User Revisits</li>
                </div>
                <div className="py-4 md:py-0 md:pt-8 ">
                  <button className="bg-cyan-400 duration-1000  hover:bg-gradient-to-t from-cyan-100 via-cyan-500 to-cyan-500 lg:p-4 p-2 rounded-xl">
                    VIEW OUR DESIGNS
                  </button>
                </div>
              </div>
            </div>
            {/**image box */}
            <div className=" lg:w-1/2 h-[90vh] hidden  lg:flex justify-center items-center">
              <img className="xl:w-[500px] w-[400px] " src={uiux} alt="" />
            </div>
          </div>
          {/**quick website launcher */}
          <div className="lg:flex py-2 relative ">
            <div className="lg:w-1/2  hidden lg:block ">
              <div className=" h-[80vh] flex justify-center  items-center">
                <img
                  className="lg:w-[400px] xl:w-[500px] "
                  src={laucher}
                  alt=""
                />
              </div>
            </div>

            <div className="lg:w-1/2  relative ">
              <motion.div
                initial={{ y: 90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className=" w-auto  lg:h-44  p-4 lg:p-4 z-0 bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 rounded-xl"
              >
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center font-semibold">
                  Quick Website Launcher
                  <p className="text-sm text-center">
                    to make better experience
                  </p>
                </h1>
              </motion.div>
              <div className="px-1 md:px-10 md:p-5  xl:p-10 xl:px-20  lg:-mt-20 lg:absolute border-yellow-500 border-b-4 bg-white rounded-b-2xl">
                <p className="md:text-lg">
                  Set up a website quickly & go live! Choose from 100+
                  predefined themes of higher customer interactions best suited
                  for your business.
                </p>
                <br />
                <div className="md:text-lg  ">
                  <li>Launch in less than 2 days</li>
                  <li>Budget-Friendly Themes</li>
                  <li>Specific Industry based Themes</li>
                </div>
                <div className="py-4 md:py-0 md:pt-8 ">
                  <button className="bg-yellow-400 duration-1000  hover:bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 p-2 lg:p-4 rounded-xl">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
       {/*    <div  className="absolute w-[100%]  flex justify-center ">
        <div
         
          className="radius fixed rotate1 w-[800px] h-[800px] bg-gray-500/10"
        ></div>
      </div> */}
          *{/**Custom Website Development */}
          <div className="lg:flex py-2 ">
            <div className="lg:w-1/2    relative ">
              <motion.div
                initial={{ y: 90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className=" w-auto  lg:h-44 -rotate-6 p-4 lg:p-4 z-0 bg-gradient-to-t from-violet-100 via-violet-500 to-violet-500 rounded-xl"
              >
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl  text-center font-semibold">
                  Custom Website Development
                  <br></br>
                  <p className="text-sm text-center">
                    to make better experience
                  </p>
                </h1>
              </motion.div>
              <div className="px-1 md:p-5 md:px-10  xl:p-10 xl:px-20 lg:-mt-20 lg:absolute border-violet-500 border-b-4 bg-white rounded-b-2xl">
                <p className="md:text-lg">
                  Want to stand out or have an innovative business idea? Get a
                  custom website designed and developed from scratch.
                </p>
                <br />
                <div className="md:text-lg  ">
                  <li>Unique Web Design</li>
                  <li>Brand based Customization</li>
                  <li>Design Preview & Presentation</li>
                  <li>Personalized Functionality</li>
                  <li>Website Performance Testing</li>
                </div>
                <div className="py-4 md:py-0 md:pt-8 ">
                  <button className="bg-violet-400 duration-1000 hover:bg-gradient-to-t from-violet-100 via-violet-500 to-violet-500 p-4 rounded-xl">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 h-[90vh] hidden lg:flex justify-center  items-center">
              <img className="lg:w-[400px] xl:w-[500px] " src={webdev} alt="" />
            </div>
          </div>
          {/**Website Revamp & Relaunch */}
          <div className="lg:flex py-2 ">
            <div className="lg:w-1/2 h-[90vh] hidden lg:flex justify-center  items-center">
              <img className="lg:w-[400px] xl:w-[500px] " src={relau} alt="" />
            </div>
            <div className="lg:w-1/2   relative  ">
              <motion.div
                initial={{ y: 90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-auto lg:h-44  p-4 lg:p-4 z-0 bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 rounded-xl"
              >
                <h1 className="text-xl sm:text-3xl xl:text-4xl  text-center font-semibold">
                  Website Revamp & Relaunch
                  <p className="text-sm text-center">
                    to make better experience
                  </p>
                </h1>
              </motion.div>
              <div className="px-1 md:p-5 md:px-10  lg:p-10 lg:px-20  lg:-mt-20 lg:absolute border-yellow-500 border-b-4 bg-white rounded-b-2xl">
                <p className="md:text-lg">
                  Planning a brand redesign or not just satisfied with your
                  website? Get in touch and transform your plan into a fully
                  functional modern website.
                </p>
                <br />
                <div className="md:text-lg  ">
                  <li>Customized Redesign</li>
                  <li>Requirement based Functionality</li>
                  <li>Dynamic Content Editors</li>
                  <li>Third-Party Integrations</li>
                </div>
                <div className="py-4 md:py-0 md:pt-8 ">
                  <button className="bg-yellow-400 duration-1000  hover:bg-gradient-to-t from-orange-100 via-orange-300 to-orange-300 p-4 rounded-xl">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**admin panel */}
          <div className="lg:flex py-2  ">
            <div className="lg:w-1/2  relative ">
              <motion.div
                initial={{ y: 90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-auto lg:h-44  p-4 lg:p-4 z-0 bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 rounded-xl"
              >
                <h1 className="text-2xl sm:text-4xl  text-center font-semibold">
                  Admin Panel
                  <br />
                  <p className="text-sm  text-center">
                    to make better experience
                  </p>
                </h1>
              </motion.div>
              <div className="px-1 md:px-10 md:p-5  xl:p-10 xl:px-20 lg:-mt-20 lg:absolute border-yellow-500 border-b-4 bg-white rounded-b-2xl">
                <p className="md:text-lg">
                  Easily update your website regularly with a user-friendly
                  dashboard. Get an insight on your business trends, interested
                  customers, and inquiries.
                </p>
                <br />
                <div className="md:text-lg  ">
                  <li>Pleasant User Experience</li>
                  <li>Effective Website Navigation</li>
                  <li>Increased Visitor Retention</li>
                  <li>Increased Number of Clicks</li>
                  <li>More User Engagements</li>
                  <li>Higher User Revisits</li>
                </div>
                <div className="py-4 md:py-0 md:pt-8 ">
                  <button className="bg-pink-400 duration-1000  hover:bg-gradient-to-t from-pink-100 via-pink-500 to-pink-500 p-4 rounded-xl">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[100vh] hidden lg:flex justify-center  items-center">
              <img className="lg:w-[400px] xl:w-[500px] " src={admin} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/**why you choose us */}
      <div className=" w-[100%]  relative ">
      
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-8xl text-gray-500 bold ">
            How we help!!
          </h1>
          <p className="text-xl lg:text-2xl">
            We are there for you at every stage of you digital project.
          </p>
        </div>
        <div className="flex  rounded-2xl  py-8">
          <div className="w-[30%] grid text-start gap-10 bold text-xl md:text-2xl lg:text-3xl  cursor-pointer px-2 md:px-4  lg:px-20 ">
            <button
              className="text-red-500 hover:text-gray-500 focus:text-gray-500 "
              onClick={() => setActive("first")}
            >
              Strategy
            </button>
            <button
              className="text-red-500 hover:text-gray-500 focus:text-gray-500 "
              onClick={() => setActive("second")}
            >
              Design
            </button>
            <button
              className="text-red-500 hover:text-gray-500 focus:text-gray-500 "
              onClick={() => setActive("third")}
            >
              Develop
            </button>
            <button
              className="text-red-500 hover:text-gray-500 focus:text-gray-500 "
              onClick={() => setActive("fourth")}
            >
              Evolve
            </button>
          </div>
          <div className="w-[70%]  flex justify-center items-center text-xl border-l-2 border-l-black/20   lg:pr-16">
            {active === "first" && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="flex justify-center  items-center  "
                >
                  {" "}
                  <p className="text-sm sm:text-xl md:text-2xl font-serif mr-10 px-2  md:px-10">
                    We’re there when you need us, even after your Drupal website
                    is launched. We build with longevity and sustainability in
                    mind.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}

            {active === "second" && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="flex justify-center items-center  "
                >
                  {" "}
                  <p className="text-sm sm:text-xl md:text-2xl font-serif mr-10  px-2 md:px-10">
                    We use data to drive UX, design and IA decisions, to
                    validate that your site is easy to use and appealing to your
                    target audience(s).
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
            {active === "third" && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="flex justify-center items-center  "
                >
                  {" "}
                  <p className=" text-sm sm:text-xl md:text-2xl font-serif mr-10 px-2  md:px-10">
                    Short, iterative development cycles, combined with your
                    ongoing feedback, keep our expert PHP developers focused on
                    success.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
            {active === "fourth" && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="flex justify-center items-center "
                >
                  {" "}
                  <p className=" text-sm sm:text-xl md:text-2xl font-serif mr-10  px-2  md:px-10">
                    We’re there when you need us, even after your Drupal website
                    is launched. We build with longevity and sustainability in
                    mind.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSolution;
