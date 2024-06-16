'use client';

import { motion } from 'framer-motion';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md dark:shadow-lg grid-full-width"
    >
      <h1 className="text-3xl md:text-4xl font-bold underline mb-2 text-lightTheme-alert-text dark:text-darkTheme-alert-text">
        Experience - 1 year
      </h1>
      <motion.ul
        className="list-disc list-inside space-y-2 mt-4"
        variants={containerVariants}
      >
        <motion.li variants={itemVariants}>
          Developed and maintained web applications using React and Redux
          Toolkit.
        </motion.li>
        <motion.li variants={itemVariants}>
          Created user interface components using best React practices and
          modern web development standards.
        </motion.li>
        <motion.li variants={itemVariants}>
          Utilized Redux Toolkit to manage application state and ensure
          predictability of data flow.
        </motion.li>
        <motion.li variants={itemVariants}>
          Optimized application performance using React.memo, useMemo, and
          useCallback.
        </motion.li>
        <motion.li variants={itemVariants}>
          Integrated with external services and third-party libraries to extend
          application functionality.
        </motion.li>
        <motion.li variants={itemVariants}>
          Collaborated with designers and backend developers to achieve project
          goals and ensure interface compatibility with APIs.
        </motion.li>
        <motion.li variants={itemVariants}>
          Developed and maintained web applications using Next.js for
          server-side rendering and routing.
        </motion.li>
        <motion.li variants={itemVariants}>
          Implemented SEO optimizations and performance improvements using
          Next.js features.
        </motion.li>
        <motion.li variants={itemVariants}>
          Leveraged Next.js API routes for backend functionality and data
          fetching.
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
