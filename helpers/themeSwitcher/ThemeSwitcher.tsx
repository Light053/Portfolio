'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '@/assets/Moon.svg?svgr';
import SunIcon from '@/assets/Sun.svg?svgr';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-6 h-6"
    >
      {theme === 'dark' ? (
        <div className="cursor-pointer ">
          <SunIcon />
        </div>
      ) : (
        <div>
          <MoonIcon />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
