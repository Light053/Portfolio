'use client';

import { motion } from 'framer-motion';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';

export const Introduction = () => {
  const variants2 = {
    hidden: { opacity: 0, x: -200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.div
      variants={variants2}
      initial="hidden"
      animate="visible"
      className="pr-6"
    >
      <h1 className="text-3xl md:text-4xl font-bold underline mb-2">
        Hello, I am Frontend Developer
      </h1>
      <h2 className="text-xl md:text-2xl font-bold leading-8 w-full md:w-96">
        <span className="text-lightTheme-alert-text dark:text-darkTheme-alert-text text-sm md:text-lg">
          My name is Sîrbu Nicolae, I am a front-end developer
        </span>
        . I specialize in creating interactive web applications that are
        user-friendly and enjoyable to use.
      </h2>
      <SocialNetwork />
    </motion.div>
  );
};
