import React, { useState } from "react";
import { headPhones } from "./HeroData";
import { UpdateFollower } from "react-mouse-follower";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const fadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
        scale: 0.5,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
      exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
          duration: 0.5,
        },
      },
    };
  };

  const [activeData, setActiveData] = useState(headPhones[0]);

  const headPhonesHandle = (phones) => {
    setActiveData(phones);
  };

  return (
    <>
      <div className="bg-secondary py-20">
        <div className="container flex flex-col md:flex-row justify-between space-y-4">
          <div className="md:w-1/2 text-center md:text-left ">
            <div className="mb-20">
              <div>
                <AnimatePresence mode="wait">
                  <UpdateFollower
                    key={activeData.id} 
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 2,
                      followSpeed: 1.5,
                      rotate: -720,
                      mixBlendMode: "difference",
                      scale: 10,
                    }}
                  >
                    <motion.h1
                      key={activeData.id}
                      variants={fadeUp(0.3)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold"
                    >
                      {activeData.title}
                    </motion.h1>
                  </UpdateFollower>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeData.id}-subtitle`} 
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-gray-300 leading-loose py-5"
                >
                  {activeData.subTitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.button
                  key={`${activeData.id}-button`} 
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ backgroundColor: activeData.bgColor }}
                  className="px-6 py-2 text-gray-300"
                >
                  Buy and Listen
                </motion.button>
              </AnimatePresence>
            </div>

            <div className="flex items-center mb-5">
              <div className="w-[80px] h-[1px] bg-white"></div>
              <div className="uppercase text-gray-200 text-sm mx-6">
                Top Headphones for you
              </div>
              <div className="w-[80px] h-[1px] bg-white"></div>
            </div>

            <div className=" flex space-x-8 ">
              {headPhones.map((ele) => {
                return (
                  <UpdateFollower
                    key={ele.id} 
                    mouseOptions={{
                      backgroundColor: ele.bgColor,
                      zIndex: 2,
                      followSpeed: 1.5,
                      rotate: -720,
                      mixBlendMode: "difference",
                      scale: 5,
                    }}
                  >
                    <div
                      onClick={() => headPhonesHandle(ele)}
                      className="flex items-center cursor-pointer"
                      key={ele.id}
                    >
                      <img className=" w-14 md:w-20" src={ele.img} alt="" />
                      <div className="flex flex-col space-y-1">
                        <p className="text-white font-semibold">{ele.price}</p>
                        <p className="text-white font-semibold text-[12px]">
                          {ele.model}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeData.id}-image`}
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                src={activeData.img}
                alt=""
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
