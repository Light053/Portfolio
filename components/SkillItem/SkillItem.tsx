'use client';

import { motion } from 'framer-motion';

export const SkillItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      variants={variants}
      initial="hidden"
      animate="visible"
      className="mt-4"
    >
      <div className="font-semibold dark:bg-[#12142a] bg-gray-100 p-3 rounded-lg">
        <span className="font-bold text-lightTheme-alert-text dark:text-lightTheme-alert-text">
          {title}:
        </span>{' '}
        {description}
      </div>
    </motion.li>
  );
};
