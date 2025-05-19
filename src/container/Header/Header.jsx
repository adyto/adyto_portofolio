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
  console.log('test header');
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 w-full px-4 py-24 lg:flex-row sm:py-24 sm:px-8 ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-start h-full items-start flex-[0.65] w-full xl:mx-8"
      >
        <div className="flex flex-col items-start justify-start w-full gap-5 xl:justify-end xl:items-end">
          <div className="flex flex-row items-center justify-center w-auto px-8 py-4 border-white shadow-md lg:py-2 lg:px-4 xl:py-4 xl:px-8 rounded-2xl shadow-black/10">
            <span className="text-4xl lg:text-2xl xl:text-4xl">👋</span>
            <div className="ml-5 lg:ml-3 xl:ml-4">
              <p className="">Hello, I am</p>
              <h1 className="items-center text-3xl font-extrabold text-black capitalize lg:text-3xl xl:text-4xl">
                Adi Yulianto1
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-auto px-8 py-4 border-white shadow-md rounded-2xl shadow-black/10">
            <p className="inline-flex w-full font-bold text-right capitalize">
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
        className="relative flex items-end justify-end flex-1 h-full my-5 md:w-2/3 lg:my-0"
      >
        <img
          src={images.pasFOTO}
          alt="profile"
          className="relative z-10 object-contain w-full rounded-full bottom-10 xl:bottom-0"
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
              className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md first:w-24 first:h-24 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 last:w-24 last:h-24 shadow-black/10"
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
