'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import ThemeSwitch from '@/helpers/themeSwitcher/ThemeSwitcher';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 1, x: 0, y: -300 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="w-full flex items-center justify-between rounded-3xl overflow-hidden p-4 bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center">
        <Link href={'/'} passHref>
          <span className="font-bold px-4 py-2">Home</span>
        </Link>
        <div className="cursor-pointer">
          <ThemeSwitch />
        </div>
      </div>
      <div className="hidden md:flex">
        <Link href={'/about'} passHref>
          <span className="font-bold px-4 py-2">About</span>
        </Link>
        <Link href={'/skills'} passHref>
          <span className="font-bold px-4 py-2">Skills</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="z-50 absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center md:hidden"
        >
          <button onClick={toggleMenu} className="absolute top-7 right-7">
            <FaTimes size={24} />
          </button>
          <Link href={'/about'} passHref>
            <span className="font-bold px-4 py-2 text-2xl" onClick={toggleMenu}>
              About
            </span>
          </Link>
          <Link href={'/skills'} passHref>
            <span className="font-bold px-4 py-2 text-2xl" onClick={toggleMenu}>
              Skills
            </span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};
