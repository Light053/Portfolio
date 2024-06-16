import LinkedinIcon from '@/assets/Linkedin.svg?svgr';
import GithubIcon from '@/assets/Github.svg?svgr';
import Link from 'next/link';
import TelegramIcon from '@/assets/Telegram.svg?svgr';

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center h-0">
        <Link
          href={'https://www.linkedin.com/in/nicolae-s%C3%AErbu-83472a27a/'}
          target="_blank"
          className="mr-4"
        >
          <LinkedinIcon className="dark:fill-white" />
        </Link>
        <Link
          href={'https://github.com/Light053'}
          target="_blank"
          className="mr-4"
        >
          <GithubIcon className="dark:fill-white" />
        </Link>
        <Link href={'https://t.me/MisterLight9'} target="_blank">
          <TelegramIcon className="dark:fill-white" />
        </Link>
      </div>
      <div className="pt-7 flex justify-between phone-block">
        <span className="ml-4 text-gray-300">+37361036921</span>
        <span className="mr-4 text-gray-300">ksirbu519@gmail.com</span>
      </div>
    </div>
  );
};
