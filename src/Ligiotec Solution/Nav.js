
import image from "./assets/ligi.gif";
import image2 from "./assets/lIGIOTEC sOLUTION (2).gif";

import Hamburger from "hamburger-react";
import { ComparisonSlider } from "react-comparison-slider";

const Nav = () => {
  return (
    <section className="">
      <ComparisonSlider
        defaultValue={50}
        itemOne={
          <div>
            <div className="bg-[#F55326] inset-0  ">
              {/**Navbar */}
              <div className="text-black squad flex justify-between px-28 text-2xl pt-14">
                <h1 className="text-3xl">Ligiotec Solution</h1>
                <div className="flex justify-center items-center gap-8">
                  <h1 className="">About </h1>
                  <h2 className="">Contact</h2>
                  <Hamburger />
                </div>
              </div>

              {/**Heading */}
              <div className="flex justify-center items-center   ">
                <h1 className="squad text-center text-5xl p-16  text-black">
                  "Designing and developing the web tomorrow , <br />
                  <span>
                    today with our skilled
                    <span className="slant text-8xl text-white"> team </span> "
                  </span>
                </h1>
              </div>
              {/**Logo */}
              <div className="-mt-24 container mx-auto ">
                <div className="  ">
                  <div className="flex justify-center items-center   ">
                    <img
                      className="bg-blend-overlay rounded-full"
                      src={image2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        itemTwo={
          <div>
            <div className=" bg-black w-full h-screen mx-auto  ">
              {/**Navbar */}

              <div className="text-white squad flex justify-between px-28 text-2xl pt-14">
                <h1 className="text-3xl">Ligiotec Solution</h1>
                <div className="flex justify-center items-center gap-8">
                  <h1 className="">About </h1>
                  <h2 className="">Contact</h2>
                  <Hamburger />
                </div>
              </div>
              {/**Heading */}
              <div className="flex justify-center items-center   ">
                <h1 className="squad text-center text-5xl p-16  text-white">
                  "Designing and developing the web tomorrow , <br />
                  <span>
                    {" "}
                    today with our skilled{" "}
                    <span className="slant text-[#F55326] text-8xl">
                      Squad{" "}
                    </span>{" "}
                    "
                  </span>
                </h1>
              </div>
              {/**Logo */}
              <div className="-mt-24 container mx-auto ">
                <div className="  ">
                  <div className="flex justify-center items-center   ">
                    <img
                      className="bg-blend-overlay rounded-full"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        aspectRatio={16/9}
        handleBefore = {<div className="bg-gradient-to-t w-0.5 h-full"></div>}
        handleAfter={<div className="bg-gradient-to-b  w-0.5 h-full"></div>}
       
      />
    </section>
  );
};

export default Nav;
