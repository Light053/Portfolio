'use client';

import { motion } from 'framer-motion';

export default function About() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="col-span-1 md:col-span-2"
      >
        <h1 className="text-3xl font-bold underline text-lightTheme-alert-text dark:text-darkTheme-alert-text">
          About me
        </h1>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-2xl bg-[#5a9696] dark:bg-gray-800 text-white p-4 rounded-xl mt-10 md:col-span-1"
      >
        <h2 className="mb-4">Personal information</h2>
        <motion.div variants={itemVariants}>
          My name is Sîrbu Nicolae, I am a front-end developer with more than a
          year of experience.
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-2xl bg-[#5a9696] dark:bg-gray-800 text-white p-4 rounded-xl mt-10 md:col-span-1"
      >
        <h2 className="mb-4">Personal qualities</h2>
        <motion.div variants={itemVariants}>
          <ul className="list-disc list-inside">
            <li>Communication skills </li>
            <li>openness</li>
            <li>responsibility</li>
            <li>desire to develop as a person and professional.</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-2xl bg-[#5a9696] dark:bg-gray-800 text-white p-4 rounded-xl mt-10 md:col-span-1"
      >
        <h2 className="mb-4">As for my interests</h2>
        <motion.div variants={itemVariants}>
          I am interested in some sciences such as astrophysics, quantum physics
          and some related ones. I am also interested in philosophy and poetry.
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-2xl bg-[#5a9696] dark:bg-gray-800 text-white p-4 rounded-xl mt-10 md:col-span-1"
      >
        <h2 className="mb-4">Education</h2>
        <motion.div variants={itemVariants}>
          After finishing 9th grade, I went to college to major in web
          applications. I am currently a third year student.
        </motion.div>
      </motion.div>
    </div>
  );
}
