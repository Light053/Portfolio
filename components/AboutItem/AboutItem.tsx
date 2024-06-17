'use client';

import { motion } from 'framer-motion';

interface AboutItemProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const AboutItem = (props: AboutItemProps) => {
  const { description, title, children } = props;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
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
      className="font-semibold text-2xl bg-[#5a9696] dark:bg-gray-800 text-white p-4 rounded-xl mt-3 md:mt-10 md:col-span-1"
    >
      <h2 className="mb-4 text-lightTheme-alert-text dark:text-darkTheme-alert-text">
        {title}
      </h2>
      <motion.div variants={itemVariants}>
        {children ? children : description}
      </motion.div>
    </motion.div>
  );
};
