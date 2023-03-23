import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { IoMdClose } from 'react-icons/io';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, oppacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const sortedDates = filterWork
    .map((obj) => {
      return { ...obj, date: new Date(obj._createdAt) };
    })
    .sort((a, b) => b.date - a.date);

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

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState('');
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const res = sortedDates.filter((w) => w._id.includes(modalId));

  return (
    <div className="flex flex-col w-full h-full justify-center items-center my-10 relative">
      <h1 className="text-5xl font-bold text-center text-black capitalize">
        My Creative <span className="text-color-palette-2">Portfolio </span>
        Section
      </h1>
      <div className="flex lg:flex-row lg:justify-start items-center flex-wrap justify-center my-16 mx-8">
        {['Web Design', 'ReactJS', 'NextJS', 'All'].map((item, index) => (
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
        className="flex flex-wrap justify-center items-center w-full gap-8"
      >
        {sortedDates.map((work, index) => (
          <div
            className="flex justify-between items-center w-72 h-[450px] flex-col p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-black/20"
            key={index}
          >
            <div className="flex justify-center items-center w-full h-60 relative">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />
              <p className="text-sm bg-white w-20 mx-auto rounded-lg px-2 py-2 shadow-md text-center text-gray-400 absolute inset-x-0 -bottom-4 ">
                {work.tags[0]}
              </p>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0,
                }}
                className="flex justify-center items-center absolute  w-full h-full bg-black/50 rounded-lg opacity-0 transition-all duration-300"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex flex-col gap-4 text-white"
                >
                  <button
                    onClick={() => {
                      setModal(true);
                      setModalId(work._id);
                    }}
                    className="border py-2 px-2 scale-95 hover:scale-100 duration-200 rounded-md"
                  >
                    Stacks
                  </button>
                  <a
                    href={work?.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border py-2 px-2 scale-95 hover:scale-100 duration-200 rounded-md"
                  >
                    View More
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex justify-center items-center p-2 w-full relative flex-col">
              <h1 className="mt-4 font-extrabold text-base text-black text-left">
                {work.title}
              </h1>
              <p className="text-sm text-left text-gray-400 mt-3">
                {work.description.length > 100
                  ? `${work.description.substring(0, 100)}....`
                  : work.description}
              </p>
              <div className="flex flex-row gap-2 mt-2">
                <button
                  onClick={() => {
                    setModal(true);
                    setModalId(work._id);
                  }}
                  className="border px-3 py-1 bg-color-palette-2 text-white rounded-md scale-95 hover:scale-100"
                >
                  Stacks
                </button>
                <a
                  href={work?.projectLink}
                  target="_blank"
                  className="border px-3 py-1 bg-color-palette-2 text-white rounded-md scale-95 hover:scale-100"
                  rel="noreferrer"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {modal && (
        <div className="w-5/6 lg:w-1/2 lg:h/1/2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-color-palette-4 p-4 text-white">
          <IoMdClose
            onClick={() => setModal(false)}
            className="absolute top-2 right-1 cursor-pointer"
          />

          {res.map((value, i) => (
            <div
              key={i}
              className="flex flex-col w-full justify-center items-center"
            >
              <span>Identify technologies on websites</span>
              <span className="mb-4">Third-Party NPM Packages</span>
              {value.stacks && (
                <div className="flex flex-wrap w-full">
                  <div className="flex flex-col w-2/5">
                    {value?.stacks.map?.((item, i) => (
                      <div key={i}>
                        <p>
                          {item === 'nextjs' || item === 'reactjs'
                            ? 'JavaScript frameworks'
                            : ''}
                        </p>
                        <p>
                          {item === 'nextjs' || item === 'reactjs' ? item : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/5">
                    {value?.stacks?.map?.((item, i) => (
                      <div>
                        <p>{item === 'sanity' ? 'CMS' : ''}</p>
                        <p>{item === 'sanity' ? item : ''}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/5">
                    {value?.stacks?.map?.((item, i) => (
                      <div>
                        <p>
                          {item === 'tailwindcss' || item === 'bootstrap'
                            ? 'UI frameworks'
                            : ''}
                        </p>
                        <p>
                          {item === 'tailwindcss' || item === 'bootstrap'
                            ? item
                            : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/5">
                    {value?.stacks?.map((item, i) => (
                      <div>
                        <p>
                          {item === 'react-redux'
                            ? 'State Management Library '
                            : ''}
                        </p>
                        <p>{item === 'react-redux' ? item : ''}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/5">
                    {value?.stacks?.map?.((item, i) => (
                      <div>
                        <p>
                          {item === 'moment' ||
                          item === 'react-router-dom' ||
                          item === 'react-icons' ||
                          item === 'react-hook-form' ||
                          item === 'react-select' ||
                          item === 'chakra-ui-accordion' ||
                          item === 'chakra-ui-breadcrumb'
                            ? item
                            : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'flex-1 w-full flex-col lg:flex  lg:items-center'),
  'work',
  'bg-color-palette-1',
);
