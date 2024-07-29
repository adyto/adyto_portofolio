import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { images } from '../../constants';

import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  console.log('test header')
  return (
    <div className="flex justify-center items-center relative flex-1 w-full flex-col lg:flex-row py-24 px-4 sm:py-24 sm:px-8 ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-start h-full items-start flex-[0.65] w-full xl:mx-8"
      >
        <div className="w-full flex justify-start items-start xl:justify-end xl:items-end flex-col gap-5">
          <div className="flex justify-center items-center py-4 px-8 lg:py-2 lg:px-4 xl:py-4 xl:px-8 border-white rounded-2xl flex-row w-auto shadow-md shadow-black/10">
            <span className="text-4xl lg:text-2xl xl:text-4xl">👋</span>
            <div className="ml-5 lg:ml-3 xl:ml-4">
              <p className="">Hello, I am</p>
              <h1 className="font-extrabold text-3xl lg:text-3xl xl:text-4xl items-center text-black capitalize">
                Adi Yulianto
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-8 border-white rounded-2xl flex-col w-auto shadow-md shadow-black/10">
            <p className="inline-flex font-bold w-full text-right capitalize">
              <Typewriter
                options={{
                  strings: ['Full-Stack', 'Front-End', 'React JS'],
                  autoStart: true,
                  loop: true,
                  cursor: '',
                  wrapperClassName: 'text-color-palette-2 font-bold span',
                }}
              />
              Developer
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-full flex justify-end items-end relative my-5 md:w-2/3 lg:my-0"
      >
        <img
          src={images.pasFOTO}
          alt="profile"
          className="w-full object-contain z-10 rounded-full relative bottom-10 xl:bottom-0"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute left-0 right-0 bottom-10 xl:bottom-0 z-0 w-full xl:w-full 2xl:h-[90%]"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex-[0.75] w-full flex flex-row flex-wrap ml-0 lg:flex-col justify-evenly lg:items-center xl:items-start h-full xl:ml-4"
      >
        {[images.react, images.javascript, images.tailwind].map(
          (circle, index) => (
            <div
              className="flex justify-center items-center first:w-24 first:h-24 w-24 h-24 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52  2xl:h-52  last:w-24 last:h-24 rounded-full bg-white shadow-md shadow-black/10"
              key={`circle-${index}`}
            >
              <img src={circle} alt="circle" className="w-3/5 h-3/5" />
            </div>
          ),
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home', 'bg-cover bg-repeat bg-bgIMG');
