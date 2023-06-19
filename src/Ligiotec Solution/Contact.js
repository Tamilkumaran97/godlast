import React, { useEffect, useRef } from "react";
import Footer1 from "./Footer1";
import LocomotiveScroll from "locomotive-scroll";
import back from "./assets/back.jpg";

const Contact = () => {
  /*   const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: "true",
        direction: "horizontal",
      });
    }
  }); */
  return (
    <div className="w-[100%] h-[350vh]   ">
      <div className="w-[100%]  h-[100vh] overflow-hidden relative">
        <div className="object-contain absolute">
          <img className="" src={back} alt="" />
        </div>
        <div className="absolute w-[100%] h-[100vh] bg-black/50"></div>
        <div className="flex absolute justify-center items-center w-[100%] h-[100vh] ">
          <div className="text-center p-44">
            <h1 className="text-9xl bold text-white p-4">
              Say <span className="bg-yellow-500 px-4 text-black">HI</span>
            </h1>

            <p className="text-3xl text-white p-4 ">
              We get as excited about your project as you do, let’s chat about
              how we can help you make it a success.
            </p>
          </div>
        </div>
      </div>
      {/**contact box */}
      <div className="w-[100%] h-[100vh]">
        <section class="bg-white  flex dark:bg-gray-900">
          <div class="py-8 lg:py-16 w-[50%]   px-4 ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="w-[50%] flex">
            <div className="pt-28">
              <div className="p-12 ">
                <h1 className="text-gray-500 text-xl ">India</h1>
                <p className="font-bold text-xl">salem, tamilnadu</p>
              </div>
              <div className="p-12 ">
                <h1 className="text-gray-500 text-xl ">Customer support</h1>
                <p className="font-bold text-xl">ligiotec@gmail.com</p>
              </div>
              <div className="p-12 ">
                <h1 className="text-gray-500 text-xl ">Call us</h1>
                <p className="font-bold text-xl">+919845623215</p>
              </div>
            </div>
            <div className="pt-48">
              <div className="p-12 ">
                <h1 className="text-gray-500 text-xl ">India</h1>
                <p className="font-bold text-xl">salem, tamilnadu</p>
              </div>
              <div className="p-12 ">
                <h1 className="text-gray-500 text-xl ">India</h1>
                <p className="font-bold text-xl">salem, tamilnadu</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <Footer1 />
      </div>
    </div>
  );
};

export default Contact;
