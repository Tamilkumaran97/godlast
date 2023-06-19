import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import uiux from "./assets/uiux.png";
import laucher from "./assets/websitelauncher.png";
import webdev from "./assets/webdeve.png";
import relau from "./assets/relauch.png";
import admin from "./assets/admin.png";
import Strategy from "./assets/Strategy.png";
import design from "./assets/design.png";
import develop from "./assets/develop.png";
import fourth from "./assets/fourth.png";

const DesignSolution = () => {
  const [active, setActive] = useState("first");

  return (
    <div className="w-[100%] h-[600vh]  overflow-hidden">
      <div className="text-center p-32">
        <p className="text-xl font-sans text-blue-500 pb-4">
          Helping local businesses create stunning websites through
        </p>
        <p className="text-4xl font-bold">
          Inclusive Web development & Design solutions
        </p>
      </div>
      {/**ui ux container */}
      <div className="flex">
        <div className="w-1/2 px-16 relative ">
          <motion.div
            initial={{ y: 90, rotate: 0 }}
            whileInView={{ y: 0, rotate: -8 }}
            transition={{ duration: 1.5 }}
            className="w-[600px] ml-3 h-44 -rotate-6 p-10 z-0 bg-gradient-to-t from-cyan-100 via-cyan-500 to-cyan-500 rounded-xl"
          >
            <h1 className="text-3xl  float-right font-semibold">
              UI/UX Design
              <br />
              <p className="text-sm  float-right">to make better experience</p>
            </h1>
          </motion.div>
          <div className="p-10 px-20 -mt-20 absolute border-cyan-500 border-b-2 bg-white rounded-b-2xl">
            <p className="text-lg">
              Our design team designs a modern, pixel-perfect, and attractive
              user interface (UI) that attracts and engages your ideal
              customers.
            </p>
            <br />
            <div className="text-lg  ">
              <li>Pleasant User Experience</li>
              <li>Effective Website Navigation</li>
              <li>Increased Visitor Retention</li>
              <li>Increased Number of Clicks</li>
              <li>More User Engagements</li>
              <li>Higher User Revisits</li>
            </div>
            <div className="pt-8 ">
              <button className="bg-cyan-400 duration-1000  hover:bg-gradient-to-t from-cyan-100 via-cyan-500 to-cyan-500 p-4 rounded-xl">
                VIEW OUR DESIGNS
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[100vh] flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-white to-white items-center">
          <img className="w-[500px] " src={uiux} alt="" />
        </div>
      </div>

      {/**quick website launcher */}
      <div className="flex">
        <div className="w-1/2 h-[80vh] flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-white to-white items-center">
          <img className="w-[500px] " src={laucher} alt="" />
        </div>
        <div className="w-1/2 px-16 relative ">
          <motion.div
            initial={{ y: 90, rotate: 0 }}
            whileInView={{ y: 0, rotate: 6 }}
            transition={{ duration: 1.5 }}
            className="w-[600px] ml-3 h-42 rotate-6 p-10 z-0 bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 rounded-xl"
          >
            <h1 className="text-3xl  font-semibold">
              Quick Website Launcher
              <p className="text-sm">to make better experience</p>
            </h1>
          </motion.div>
          <div className="p-10 px-20 -mt-10 absolute border-yellow-500 border-b-2 bg-white rounded-b-2xl">
            <p className="text-lg">
              Set up a website quickly & go live! Choose from 100+ predefined
              themes of higher customer interactions best suited for your
              business.
            </p>
            <br />
            <div className="text-lg  ">
              <li>Launch in less than 2 days</li>
              <li>Budget-Friendly Themes</li>
              <li>Specific Industry based Themes</li>
            </div>
            <div className="pt-8 ">
              <button className="bg-yellow-400 duration-1000  hover:bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-300 p-4 rounded-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**Custom Website Development */}
      <div className="flex">
        <div className="w-1/2 px-16 relative ">
          <motion.div
            initial={{ y: 90, rotate: 0 }}
            whileInView={{ y: 0, rotate: -8 }}
            transition={{ duration: 1.5 }}
            className="w-[600px] ml-3 h-44 -rotate-6 p-10 z-0 bg-gradient-to-t from-violet-100 via-violet-500 to-violet-500 rounded-xl"
          >
            <h1 className="text-2xl  float-right font-semibold">
              Custom Website Development
              <br></br>
              <p className="text-sm float-right">to make better experience</p>
            </h1>
          </motion.div>
          <div className="p-10 px-20 -mt-20 absolute border-violet-500 border-b-2 bg-white rounded-b-2xl">
            <p className="text-lg">
              Want to stand out or have an innovative business idea? Get a
              custom website designed and developed from scratch.
            </p>
            <br />
            <div className="text-lg  ">
              <li>Unique Web Design</li>
              <li>Brand based Customization</li>
              <li>Design Preview & Presentation</li>
              <li>Personalized Functionality</li>
              <li>Website Performance Testing</li>
            </div>
            <div className="pt-8 ">
              <button className="bg-violet-400 duration-1000 hover:bg-gradient-to-t from-violet-100 via-violet-500 to-violet-500 p-4 rounded-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[100vh] flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400 via-white to-white items-center">
          <img className="w-[500px] " src={webdev} alt="" />
        </div>
      </div>
      {/**Website Revamp & Relaunch */}
      <div className="flex">
        <div className="w-1/2 h-[80vh] flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300 via-white to-white items-center">
          <img className="w-[500px] " src={relau} alt="" />
        </div>
        <div className="w-1/2 px-16 relative ">
          <motion.div
            initial={{ y: 90, rotate: 0 }}
            whileInView={{ y: 0, rotate: 6 }}
            transition={{ duration: 1.5 }}
            className="w-[600px] ml-3 h-42 rotate-6 p-10 z-0 bg-gradient-to-t from-orange-100 via-orange-300 to-orange-300 rounded-xl"
          >
            <h1 className="text-3xl  font-semibold">
              Website Revamp & Relaunch
              <p className="text-sm">to make better experience</p>
            </h1>
          </motion.div>
          <div className="p-10 px-20 -mt-10 absolute border-orange-500 border-b-2 bg-white rounded-b-2xl">
            <p className="text-lg">
              Planning a brand redesign or not just satisfied with your website?
              Get in touch and transform your plan into a fully functional
              modern website.
            </p>
            <br />
            <div className="text-lg  ">
              <li>Customized Redesign</li>
              <li>Requirement based Functionality</li>
              <li>Dynamic Content Editors</li>
              <li>Third-Party Integrations</li>
            </div>
            <div className="pt-8 ">
              <button className="bg-orange-400 duration-1000  hover:bg-gradient-to-t from-orange-100 via-orange-300 to-orange-300 p-4 rounded-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**admin panel */}
      <div className="flex">
        <div className="w-1/2 px-16 relative ">
          <motion.div
            initial={{ y: 90, rotate: 0 }}
            whileInView={{ y: 0, rotate: -8 }}
            transition={{ duration: 1.5 }}
            className="w-[600px] ml-3 h-44 -rotate-6 p-10 z-0 bg-gradient-to-t from-pink-100 via-pink-500 to-pink-500 rounded-xl"
          >
            <h1 className="text-3xl  float-right font-semibold">
              Admin Panel
              <br />
              <p className="text-sm  float-right">to make better experience</p>
            </h1>
          </motion.div>
          <div className="p-10 px-20 -mt-20 absolute border-pink-500 border-b-2 bg-white rounded-b-2xl">
            <p className="text-lg">
              Easily update your website regularly with a user-friendly
              dashboard. Get an insight on your business trends, interested
              customers, and inquiries.
            </p>
            <br />
            <div className="text-lg  ">
              <li>Pleasant User Experience</li>
              <li>Effective Website Navigation</li>
              <li>Increased Visitor Retention</li>
              <li>Increased Number of Clicks</li>
              <li>More User Engagements</li>
              <li>Higher User Revisits</li>
            </div>
            <div className="pt-8 ">
              <button className="bg-pink-400 duration-1000  hover:bg-gradient-to-t from-pink-100 via-pink-500 to-pink-500 p-4 rounded-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[100vh] flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-white to-white items-center">
          <img className="w-[500px] " src={admin} alt="" />
        </div>
      </div>

      {/**why you choose us */}
      <div className=" w-[100%] h-[100vh] bg-gradient-to-br from-cyan-400 via-white to-white">
        <div className="p-20 ml-12">
          <h1 className="text-8xl bold pb-2">How we help!!</h1>
          <p className="text-2xl">
            We are there for you at every stage of you digital project.
          </p>
        </div>
        <div className="flex">
          <div className="w-[30%] grid gap-10 bold text-3xl  cursor-pointer  px-20 pt-10">
            <button
              className="text-red-500 focus:text-gray-500 "
              onClick={() => setActive("first")}
            >
              Strategy
            </button>
            <button
              className="text-red-500 focus:text-gray-500 "
              onClick={() => setActive("second")}
            >
              Design
            </button>
            <button
              className="text-red-500 focus:text-gray-500 "
              onClick={() => setActive("third")}
            >
              Develop
            </button>
            <button
              className="text-red-500 focus:text-gray-500 "
              onClick={() => setActive("fourth")}
            >
              Evolve
            </button>
          </div>
          <div className="w-[70%] text-xl border-l-2 border-l-black/20  pr-16">
            {active === "first" && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="flex justify-center items-center  p-10"
                >
                  {" "}
                  <p className="  pr-10 w-[400px]">
                    We’re there when you need us, even after your Drupal website
                    is launched. We build with longevity and sustainability in
                    mind.
                  </p>
                  <img className="w-[200px] " src={Strategy} alt="" />
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
                  className="flex justify-center items-center  p-10"
                >
                  {" "}
                  <p className="  pr-10 w-[400px]">
                    We use data to drive UX, design and IA decisions, to
                    validate that your site is easy to use and appealing to your
                    target audience(s).
                  </p>
                  <img className="w-[280px] " src={design} alt="" />
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
                  className="flex justify-center items-center  p-10"
                >
                  {" "}
                  <p className="  pr-10 w-[400px]">
                    Short, iterative development cycles, combined with your
                    ongoing feedback, keep our expert PHP developers focused on
                    success.
                  </p>
                  <img className="w-[280px] " src={develop} alt="" />
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
                  className="flex justify-center items-center  p-10"
                >
                  {" "}
                  <p className="  pr-10 w-[400px]">
                    We’re there when you need us, even after your Drupal website
                    is launched. We build with longevity and sustainability in
                    mind.
                  </p>
                  <img className="w-[210px] " src={fourth} alt="" />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSolution;
