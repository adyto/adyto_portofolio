import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, className) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${className} flex justify-center items-center`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
