'use client';

import React from 'react';

interface FeaturedWork {
  img: string;
  alt: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
}

interface FeaturedWorksSectionProps {
  title: string; // Ex: 'Trabalhos em Destaque' ou 'Featured Projects'
  works: FeaturedWork[];
}

export function FeaturedWorksSection({ title, works }: FeaturedWorksSectionProps) {
  return (
    <section className="w-full bg-[#18191d] rounded-2xl mt-10 mb-6 px-2 sm:px-6 md:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-10 text-center tracking-tight">
        {title}
      </h2>
      <div className="flex flex-col gap-10">
        {works.map((work, i) => (
          <div
            key={i}
            className={`
              flex flex-col md:flex-row items-stretch bg-[#202128] rounded-xl shadow-lg overflow-hidden
              border border-[#23232b] hover:shadow-2xl transition-all
              ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}
            `}
          >
            {/* Imagem do projeto */}
            <div className="md:w-2/5 flex-shrink-0 flex items-center justify-center bg-[#23232b] p-5 md:p-8">
              <img
                src={work.img}
                alt={work.alt}
                className="rounded-xl w-full h-44 sm:h-56 md:h-60 object-cover shadow"
                style={{ background: "#222", minWidth: 120, maxWidth: 340 }}
              />
            </div>
            {/* Texto do projeto */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-shrink-0">
                  <span className="block text-xs bg-yellow-300 text-gray-900 px-3 py-1 rounded-full font-bold tracking-wider shadow-sm">
                    {work.period}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
                  {work.title}
                </h3>
              </div>
              <p className="mb-3 text-gray-300">{work.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-gray-800 text-gray-200 text-xs font-mono px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
