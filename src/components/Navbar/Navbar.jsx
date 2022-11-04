import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants/';
import bgWhite from '../../assets/bgWhite.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex flex-row justify-between items-center py-4 px-8 bg-white/25 backdrop-blur-sm border-[1px] border-solid border-white/20 fixed z-50">
      <div className="flex justify-start items-center">
        <img src={images.logo} alt="logo" className="w-24 h-5" />
      </div>
      <ul className="flex-1 flex justify-center items-center list-none max-md:hidden">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className="cursor-pointer my-0 mx-4">
            <a
              href={`#${item}`}
              className="text-gray-500 uppercase font-medium transition-all duration-300 ease-in-out hover:text-color-palette-2"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-9 h-9 rounded-full relative flex-row justify-center items-center bg-color-palette-2 md:hidden flex">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-3/4 h-3/4 text-white"
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="fixed top-0 right-0 z-20 p-4 w-4/5 h-screen flex justify-end flex-col items-end shadow-[0px_0px_20px_rgba(168, 168, 168, 0.15)]"
            style={{
              backgroundImage: `url(${bgWhite})`,
              backgroundColor: 'white',
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat',
            }}
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-9 h-9 text-color-palette-2 my-2 mx-4"
            />
            <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item} className="m-4">
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="text-gray-400 text-base uppercase font-medium transition-all duration-300 ease-in-out hover:text-color-palette-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
