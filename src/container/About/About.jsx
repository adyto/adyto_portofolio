import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log(abouts);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-5xl font-bold text-center text-black capitalize">
        I Know That <span className="text-color-palette-2">Good Apps</span>
        <br />
        means <span className="text-color-palette-2">Good Business</span>
      </h1>
      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + index}
            className="w-48 flex justify-start items-start flex-col m-8 "
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-44 rounded-2xl object-cover"
            />
            <h2 className="text-base font-extrabold text-black text-left mt-5">
              {about.title}
            </h2>
            <h2 className="text-sm text-left text-gray-400 mt-3">
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'flex-1 w-full flex-col'),
  'about',
  'bg-white',
);
