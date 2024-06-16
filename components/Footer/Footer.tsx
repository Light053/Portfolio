import LinkedinIcon from '@/assets/Linkedin.svg?svgr';
import GithubIcon from '@/assets/Github.svg?svgr';
import Link from 'next/link';
import TelegramIcon from '@/assets/Telegram.svg?svgr';

export const Footer = () => {
  return (
    <div className="mt-4 flex">
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
  );
};
