import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';


export default function Skills() {
  const { lang, siteData } = useContext(SiteContext);
  const { skills } = siteData[lang];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto border-b dark:border-zinc-800">
      <h2 className="text-5xl font-bold dark:text-white text-custom-dark mb-12">Skills</h2>
      <div className="flex flex-wrap justify-between gap-8 md:gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 w-[100px] md:w-[120px]">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center p-4 shadow-sm transition-transform hover:scale-105">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-custom-gray font-medium tracking-widest text-xs md:text-sm uppercase text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}