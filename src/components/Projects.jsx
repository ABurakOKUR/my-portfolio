import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';


export default function Projects() {
  const { lang, siteData } = useContext(SiteContext);
  const { projects, projectsTitle } = siteData[lang];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold dark:text-white text-custom-dark mb-12">
        {projectsTitle}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col group">
            
            <div className="overflow-hidden rounded-xl mb-6 shadow-md border dark:border-zinc-800 transition-transform group-hover:scale-[1.02]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full aspect-video object-cover"
              />
            </div>

            
            <h3 className="text-3xl font-bold text-custom-purple mb-4">
              {project.title}
            </h3>

            
            <p className="text-lg dark:text-custom-gray text-gray-600 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 border border-custom-purple text-custom-purple rounded-full text-sm font-bold uppercase">
                  {tag}
                </span>
              ))}
            </div>

            
            <div className="flex justify-between items-center text-lg font-bold">
              <a href={project.links.github} className="dark:text-white text-custom-dark border-b-2 border-custom-purple hover:opacity-70 transition-opacity">
                {siteData[lang].hero.github}
              </a>
              <a href={project.links.site} className="dark:text-white text-custom-dark border-b-2 border-custom-purple hover:opacity-70 transition-opacity">
                {siteData[lang].hero.linkedin}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}