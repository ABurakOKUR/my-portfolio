import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';


export default function Profile() {
  const { lang, siteData } = useContext(SiteContext);
  const { profile } = siteData[lang];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto border-b dark:border-zinc-800">
      <h2 className="text-5xl font-bold dark:text-white text-custom-dark mb-12">
        {profile.title}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sol Taraf: Temel Bilgiler */}
        <div className="flex-1 space-y-8">
          <h3 className="text-3xl font-medium text-custom-purple">
            {profile.intro}
          </h3>
          <div className="space-y-4">
            {profile.basicInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <span className="font-bold dark:text-white text-custom-dark w-32 flex-shrink-0">
                  {info.label}
                </span>
                <span className="dark:text-custom-gray text-gray-600">
                  {info.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Taraf: Hakkımda Metni */}
        <div className="flex-1 space-y-8">
          <h3 className="text-3xl font-medium text-custom-purple">
            {profile.aboutTitle}
          </h3>
          <div className="space-y-6 text-lg dark:text-custom-gray text-gray-600 leading-relaxed">
            {profile.aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}