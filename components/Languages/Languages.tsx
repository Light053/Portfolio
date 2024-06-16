'use client';

import { motion } from 'framer-motion';

export const Languages = () => {
  const variants1 = {
    hidden: { opacity: 0, x: +200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.div
      variants={variants1}
      initial="hidden"
      animate="visible"
      className="p-4 bg-gray-100 dark:bg-[#684a83] rounded-md shadow-md dark:shadow-lg mb-10"
    >
      <h2 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
        Languages:
      </h2>
      <ul className="list-disc list-inside space-y-1 w-full md:w-[300px] text-base md:text-lg">
        <li className="text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          English: A2
        </li>
        <li className="text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          Russian: Native
        </li>
        <li className="text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          Romanian: Native
        </li>
      </ul>
    </motion.div>
  );
};
