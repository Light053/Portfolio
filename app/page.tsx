'use client';

import LinkedinIcon from '@/assets/Linkedin.svg?svgr';
import GithubIcon from '@/assets/Github.svg?svgr';
import Link from 'next/link';
import TelegramIcon from '@/assets/Telegram.svg?svgr';
import { motion } from 'framer-motion';

export default function Home() {
  const variants1 = {
    hidden: { opacity: 0, x: +200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, x: -200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center p-4">
      <motion.div
        variants={variants2}
        initial="hidden"
        animate="visible"
        className="pr-6"
      >
        <h1 className="text-3xl font-bold underline mb-2">
          Hello, I am Frontend Developer
        </h1>
        <h2 className="text-2xl font-bold leading-8 w-96">
          <span className="text-lightTheme-alert-text dark:text-darkTheme-alert-text">
            My name is Sîrbu Nicolae, I am a front-end developer
          </span>
          . I specialize in creating interactive web applications that are
          user-friendly and enjoyable to use.
        </h2>
        <div className="mt-4 flex justify-between max-w-44">
          <Link
            href={'https://www.linkedin.com/in/nicolae-s%C3%AErbu-83472a27a/'}
            target="_blank"
          >
            <LinkedinIcon className="dark:fill-white" />
          </Link>
          <Link href={'https://github.com/Light053'} target="_blank">
            <GithubIcon className="dark:fill-white" />
          </Link>
          <Link href={'https://t.me/MisterLight9'} target="_blank">
            <TelegramIcon className="dark:fill-white" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={variants1}
        initial="hidden"
        animate="visible"
        className="p-4 bg-gray-100 dark:bg-[#684a83] rounded-md shadow-md dark:shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-2 dark:text-white">
          Languages:
        </h2>
        <ul className="list-disc list-inside space-y-1 w-[300px] text-lg">
          <li className="text-blue-600 dark:text-fuchsia-300">English: A2</li>
          <li className="text-green-600 dark:text-green-500">
            Russian: Native
          </li>
          <li className="text-red-600 dark:text-red-500">Romanian: Native</li>
        </ul>
      </motion.div>
    </main>
  );
}
