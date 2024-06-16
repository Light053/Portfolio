import LinkedinIcon from '@/assets/Linkedin.svg?svgr';
import GithubIcon from '@/assets/Github.svg?svgr';
import Link from 'next/link';
import TelegramIcon from '@/assets/Telegram.svg?svgr';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline mb-2">
        Hello, i am Frontend Developer
      </h1>
      <h2 className="text-2xl font-bold leading-8 w-96">
        My name is Sîrbu Nicolae, I am a front-end developer. I specialize in
        creating interactive web applications that are user-friendly and
        enjoyable to use.
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
    </main>
  );
}
