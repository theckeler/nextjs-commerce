'use client';
import { useEffect, useState } from 'react';

export default function ThemeSwitch({}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="mx-auto mt-10 grid max-w-screen-2xl items-center justify-center">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onChange={(e) => {
            toggleTheme();
          }}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:content-[''] peer-checked:bg-amber-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  peer-focus:ring-4"></div>
        <span className="ml-3 text-sm font-medium dark:text-white">
          Light/Dark Mode <small className="text-gray-600">(In Progress)</small>
        </span>
      </label>
    </div>
  );
}
