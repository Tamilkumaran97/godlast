import React from "react";
import { motion } from "framer-motion";
import wave from "./assets/wave-haikei.svg";

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: -1600 }}
        transition={{ duration: 2 }}
        exit={{ y: [ 900 , -350] , transition: { duration: 1} }}
        className=" fixed  w-screen h-screen z-[70] "
      >
        <motion.div className=" w-[100%] h-[100vh]  ">
          <svg
            className="-mb-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#00cba9"
              fill-opacity="1"
              d="M0,32L34.3,53.3C68.6,75,137,117,206,117.3C274.3,117,343,75,411,53.3C480,32,549,32,617,37.3C685.7,43,754,53,823,80C891.4,107,960,149,1029,186.7C1097.1,224,1166,256,1234,250.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          <div className="bg-[#00cba9]  h-[150vh]"></div>
          <svg
            className="-mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#00cba9"
              fill-opacity="1"
              d="M0,160L20,160C40,160,80,160,120,154.7C160,149,200,139,240,149.3C280,160,320,192,360,202.7C400,213,440,203,480,181.3C520,160,560,128,600,144C640,160,680,224,720,250.7C760,277,800,267,840,261.3C880,256,920,256,960,245.3C1000,235,1040,213,1080,208C1120,203,1160,213,1200,213.3C1240,213,1280,203,1320,202.7C1360,203,1400,213,1420,218.7L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Transition;
/* bg-[#F7770F] */
/*     initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
          exit={{ y: -600 }} */
/* initial={{ y: -4500 }}
          animate={{ y: 2000 }}
          transition={{ duration: 4 }}
          exit={{ y: [2000, -4500], ease: "easeInOut" }} */
{
  /*  <div className=" w-full h-[600px] "></div> */
}
