import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';

export default function Header() {
  const { lang, toggleLang, theme, toggleTheme } = useContext(SiteContext);

  return (
    <header className="flex flex-col sm:flex-row justify-end items-center py-6 px-4 max-w-6xl mx-auto gap-4 text-[10px] sm:text-xs font-bold tracking-widest">
      <div className="flex items-center gap-2 cursor-pointer order-2 sm:order-1" onClick={toggleTheme}>
        <div className={`w-10 h-5 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-custom-purple' : 'bg-gray-300'}`}>
          <div className={`w-3 h-3 bg-yellow-300 rounded-full absolute top-1 transition-all ${theme === 'dark' ? 'right-1' : 'left-1'}`}></div>
        </div>
        <span className="dark:text-custom-gray text-gray-500 uppercase">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
      </div>
      <span className="hidden sm:inline text-custom-purple order-2">|</span>
      <button onClick={toggleLang} className="text-custom-purple uppercase order-1 sm:order-3">
        {lang === 'tr' ? 'ENGLISH' : 'TÜRKÇE'}
      </button>
    </header>
  );
}