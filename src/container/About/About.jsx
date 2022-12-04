import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsFillDiamondFill } from 'react-icons/bs';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const dataStack = [
  {
    title: 'Javascript',
  },
  {
    title: 'React',
  },
  {
    title: 'Tailwind',
  },
  {
    title: 'Sanity',
  },
  {
    title: 'Bootstap',
  },
];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log(abouts);

  return (
    <div className="flex flex-col w-full justify-center items-center my-10 xl:my-0">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-black capitalize">
        About <span className="text-color-palette-2">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div>
          <h1>
            Hallo! My name is Adi Yulianto I am a Fresh-Graduate in Information
            System from National University. My interest in technology is very
            high, I am proficient in using CSS Framework with Tailwind or
            Bootstap, HTML and CSS.
          </h1>

          <h2>
            I am also interesting to have good experience in ReactJS and
            Javascript to build application and build a website with a
            responsive web design which will to good view when we are on mobile
            and desktop, I am also very happy to work with a team that relies on
            source control tools like Git
          </h2>

          <h3>
            I am also very happy to study a system that already has a package
            manager found in NPM. and recently I'm studying Sanity which can
            make it easier to store data and make it easier for a full stuck
            developer
          </h3>

          <h4>Here are some of the technologies I've been using recently:</h4>
          <div className="grid grid-cols-2 ">
            {dataStack.map((res) => (
              <div className="flex flex-row items-center">
                <BsFillDiamondFill className="text-color-palette-2" />
                <p className="ml-2">{res.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>321</div>
      </div>
      <div className="flex justify-center items-start flex-wrap  mt-4 lg:mt-8">
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
  MotionWrap(About, 'flex-1 w-full flex-col flex justify-center items-center'),
  'about',
  'bg-white',
);
