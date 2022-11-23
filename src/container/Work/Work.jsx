import React, { useState, useEffect } from 'react';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, oppacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center my-10">
      <h1 className="text-5xl font-bold text-center text-black capitalize">
        My Creative <span className="text-color-palette-2">Portfolio </span>
        Section
      </h1>
      <div className="flex flex-row justify-start items-center flex-wrap my-16 mx-8">
        {['UI/UX', 'Web App', 'React JS', 'All'].map((item, index) => (
          <div
            key={item + index}
            onClick={() => handleWorkFilter(item)}
            className={`py-2 px-4 bg-white  font-extrabold cursor-pointer transition-all duration-300 m-2 hover:bg-color-palette-2 hover:text-white flex justify-center items-center text-xs text-left text-gray-400 ${
              activeFilter === item ? 'bg-color-palette-2 text-[#fff]' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="flex justify-center items-center w-72 flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-black/20"
            key={index}
          >
            <div className="flex justify-center items-center w-full h-60 relative">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0,
                }}
                className="flex justify-center items-center absolute  w-full h-full bg-black/50 rounded-lg opacity-0 transition-all duration-300"
              >
                <motion.a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <AiFillEye className="w-10 h-10" />
                </motion.a>
              </motion.div>
            </div>
            <div className="flex justify-center items-center p-2 w-full relative flex-col">
              <h1 className="mt-4 font-extrabold text-base text-black text-left">
                {work.title}
              </h1>
              <p className="text-sm text-left text-gray-400 mt-3">
                {work.description}
              </p>
              <div className="flex justify-center items-center absolute py-2 px-4 rounded-xl bg-white -top-6">
                <p className="text-sm text-left text-gray-400">
                  {work.tags[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'flex-1 w-full flex-col lg:flex  lg:items-center'),
  'work',
  'bg-color-palette-1',
);
