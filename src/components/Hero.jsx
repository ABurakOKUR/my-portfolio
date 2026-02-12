import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";


export default function Hero() {
  const { lang, siteData } = useContext(SiteContext);
  const { hero } = siteData[lang];

  return (
    <section className="relative isolate overflow-hidden min-h-[600px] flex items-center border-b dark:border-zinc-800 transition-colors">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20 dark:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070')",
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 max-w-6xl mx-auto gap-12 w-full">
        <div className="flex-1 space-y-8 z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-[2px] bg-custom-purple"></div>
            <span className="text-custom-purple font-medium tracking-widest uppercase">
              {hero.name}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-custom-dark leading-tight">
            {hero.title}
          </h1>

          <p className="text-lg dark:text-custom-gray text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button className="bg-custom-purple text-white dark:bg-white dark:text-custom-purple hover:opacity-90 transition-all px-10 py-3 rounded-md font-bold shadow-lg">
              {hero.hireMe}
            </button>

            <a
              href={hero.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-custom-purple text-custom-purple dark:border-white dark:text-white hover:bg-custom-purple hover:text-white dark:hover:bg-white dark:hover:text-custom-dark transition-all px-8 py-3 rounded-md font-bold">
              <i className="fab fa-github"></i> {hero.github}
            </a>

            <a
              href={hero.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-custom-purple text-custom-purple dark:border-white dark:text-white hover:bg-custom-purple hover:text-white dark:hover:bg-white dark:hover:text-custom-dark transition-all px-8 py-3 rounded-md font-bold">
              <i className="fab fa-linkedin-in"></i> {hero.linkedin}
            </a>
          </div>
        </div>

        <div className="flex-1 z-10 relative w-full max-w-[400px] md:max-w-none">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-custom-purple rounded-2xl -z-10 translate-x-2 translate-y-2"></div>
          <img
            src="../pngs/pp.JPG"
            alt="Profile"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-square border-8 border-white/10 dark:border-zinc-800/30"
          />
        </div>
      </div>
    </section>
  );
}
