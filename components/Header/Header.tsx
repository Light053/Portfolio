import ThemeSwitch from '@/helpers/themeSwitcher/ThemeSwitcher';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between rounded-3xl overflow-hidden">
      <div className="flex">
        <Link href={'/'} passHref>
          <span className="font-bold px-4 py-2">Home</span>
        </Link>
        <ThemeSwitch />
      </div>
      <div>
        <Link href={'/about'} passHref>
          <span className="font-bold px-4 py-2">About</span>
        </Link>
        <Link href={'/contacts'} passHref>
          <span className="font-bold px-4 py-2">Contacts</span>
        </Link>
        <Link href={'/skills'} passHref>
          <span className="font-bold px-4 py-2">Skills</span>
        </Link>
      </div>
    </div>
  );
};
