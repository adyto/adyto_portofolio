import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  console.log(experiences);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="font-bold text-5xl text-center text-black capitalize">
        Skills & Experience
      </h2>
      <div className="w-4/5 mt-12 flex flex-row">
        <motion.div className="flex-1 flex flex-wrap justify-center items-center md:justify-start md:items-start mr-20 w-full">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center flex-col text-center m-4 transition-all duration-300 ease-in-out"
              key={skill.name}
            >
              <div
                className="flex justify-center items-center w-24 h-24 rounded-full bg-gray-100 hover:shadow-sm hover:shadow-gray-100"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon)}
                  className="w-1/2 h-1/2"
                  alt={skill.name}
                />
              </div>
              <p className="text-left text-sm text-gray-400 font-medium mt-2">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex-1 flex justify-start items-start flex-col">
          {experiences?.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start my-4 mx-0"
              key={experience.year}
            >
              <div className="mr-12">
                <p className="font-bold text-color-palette-2">
                  {experience.year}
                </p>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="font-normal text-base text-black text-left">
                        {work.name}
                      </h4>
                      <p className="text-sm text-left text-gray-400 font-normal mt-1">
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'flex-1 w-full flex-col'),
  'skills',
  'bg-white',
);
