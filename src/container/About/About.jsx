import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsFillDiamondFill } from 'react-icons/bs';

import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold text-center text-black capitalize mb-4">
        About <span className="text-color-palette-2">Me</span>
      </h1>
      <div className="flex flex-col gap-4 max-w-4xl md:text-xl text-color-palette-4">
        <h1>
          Hallo! My name is{' '}
          <span className="text-color-palette-2 relative font-medium after:hover:absolute after:hover:bg-color-palette-2 after:hover:-bottom-0.5 after:hover:left-0 after:h-0.5 after:transition-all after:duration-500 after:w-full cursor-default">
            Adi Yulianto
          </span>{' '}
          {/* I am a Fresh-Graduate in Information System from National University.
          My interest in technology is very high, I am proficient in using CSS
          Framework with Tailwind or Bootstap, HTML and CSS.
          I graduated from the National University of Information Systems,  */}
          Currently I have experience in the field of Frontend Developer. 
          I always want to learn something new hard working and has a high learning willingness. 
          Carry out website development, testing and maintenance, develop capabilities in problem-solving and optimize user experience.
          {/* <span className="block mt-2">
            I am also interesting to have good experience in ReactJS and
            Javascript to build application and build a website with a
            responsive web design which will to good view when we are on mobile
            and desktop, I am also very happy to work with a team that relies on
            source control tools like Git
          </span>
          <span className="block mt-2">
            I am also very happy to study a system that already has a package
            manager found in NPM. and recently I'm studying Sanity which can
            make it easier to store data and make it easier for a full stuck
            developer
          </span> */}
          <span className="block mt-2">
            Here are some of the{' '}
            <span className="text-color-palette-2 relative font-medium after:hover:absolute after:hover:bg-color-palette-2 after:hover:-bottom-0.5 after:hover:left-0 after:h-0.5 after:transition-all after:duration-500 after:w-full cursor-default">
              technologies I've been using recently:
            </span>
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {abouts.map((results) => (
            <>
              {results.tech.map((res) => (
                <div className="flex flex-row items-center">
                  <BsFillDiamondFill className="text-color-palette-2 h-4 w-4" />
                  <p className="ml-2 text-color-palette-4 text-sm font-medium">
                    {res.name}
                  </p>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(
    About,
    'flex w-full flex-col py-16 px-4 md:px-8 items-center lg:justify-evenly ',
  ),
  'about',
  'bg-color-palette-3',
);
