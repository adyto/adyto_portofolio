import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { images } from '../../constants/';
import bgWhite from '../../assets/bgWhite.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex flex-row justify-between items-center py-4 px-8 bg-white/25 backdrop-blur-sm border-[1px] border-solid border-white/20 fixed z-50">
      <div className="flex items-center justify-start">
        <h1 className="text-3xl font-medium font-Rubik">
          Ady<span className="text-color-palette-2">.to</span>
        </h1>
      </div>
      <ul className="flex items-center justify-center flex-1 list-none max-md:hidden">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className="mx-4 my-0 cursor-pointer">
            <a
              href={`#${item}`}
              className="font-medium text-gray-500 uppercase transition-all duration-300 ease-in-out hover:text-color-palette-2"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="max-md:hidden ">
        <a
          href="https://www.cakeresume.com/pdf/s--6uGkmdA91duVZEGEOoZG1w--/pJV5j.pdf"
          className="flex flex-row items-center w-full h-full gap-2 px-3 py-1 text-white rounded-full cursor-pointer bg-color-palette-2/80"
        >
          <AiOutlineCloudDownload />
          <span>Resume</span>
        </a>
      </div>
      <div className="relative flex flex-row items-center justify-center rounded-full w-9 h-9 bg-color-palette-2 md:hidden">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-3/4 text-white h-3/4"
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
              className="mx-4 my-2 w-9 h-9 text-color-palette-2"
            />
            <ul className="flex flex-col items-start justify-start w-full h-full p-0 m-0 list-none">
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item} className="m-4">
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="text-base font-medium text-gray-400 uppercase transition-all duration-300 ease-in-out hover:text-color-palette-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <a
                href="https://www.cakeresume.com/pdf/s--6uGkmdA91duVZEGEOoZG1w--/pJV5j.pdf"
                className="flex flex-row items-center gap-2 px-3 py-1 text-white rounded-full cursor-pointer bg-color-palette-2/80"
              >
                <AiOutlineCloudDownload />
                <span>Resume</span>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
