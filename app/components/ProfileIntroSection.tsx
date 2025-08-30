'use client';

import React from 'react';
import Image from 'next/image';


interface TimelineItem {
  img: string;
  alt: string;
  year: string;
}

interface ProfileIntroSectionProps {
  intro: React.ReactNode;
  rest: React.ReactNode;
    skills: {
    labels: {
      skills: string; hard: string; soft: string;
      groups: Record<string, string>;
    };
    hard: Record<string, string[]>;
    soft: Record<string, string[]>;  
  };
  profileImg: string;
  profileAlt: string;
  timeline: TimelineItem[];
}

export function ProfileIntroSection({
  intro,
  rest,
  skills,
  profileImg,
  profileAlt,
  timeline,
}: ProfileIntroSectionProps) {

      React.useEffect(() => {
      const elements = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target); // só anima 1x
            }
          });
        },
        { threshold: 0.1 }
      );
  
      elements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, []);


  return (
    <section className="w-full bg-[#151414B3] rounded-2xl">

      {/* Intro + Imagem */}
      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-8 md:gap-16">
        {/* Texto intro (coluna esquerda) */}
        <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:pl-14 md:pt-14 text-gray-200">
          {intro}
        </div>
        {/* Imagem (coluna direita) */}
        <div className="flex-1 flex items-center justify-center px-4 py-2 sm:px-8 sm:py-6 md:pr-14 md:pt-14">
            <Image
            src={profileImg}
            alt={profileAlt}
            width={380} // ajuste para o maior valor usado (md:w-[380px])
            height={350}
            className="rounded-3xl shadow-2xl object-cover w-40 h-40 sm:w-64 sm:h-60 md:w-[380px] md:h-[350px] max-w-full border-4 border-[#242227] mx-auto md:mx-0"
            style={{ background: "#222" }}
            priority // profile geralmente é importante pro LCP
            />
        </div>
      </div>
      {/* Texto detalhado abaixo */}
      <div className="fade-in w-full px-4 sm:px-8 md:px-20 pb-2 text-gray-300 text-base sm:text-lg">
        {rest}
      </div>

<div className="flex flex-col gap-6 items-center w-full">
  {/* Soft Skills */}
  <div className="w-full max-w-3xl rounded-xl p-4 border border-white/10 bg-white/[0.04]">
    <h4 className="text-base font-semibold mb-3 text-gray-100 text-center">
      {skills.labels.soft}
    </h4>
    <ul className="space-y-3">
      {['collaboration','leadership','communication','languages']
        .filter((key) => key in skills.soft)
        .map((key) => (
          <li key={key} className="text-center">
            <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
              {skills.labels.groups[key] ?? key}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.soft[key].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-white/10 text-gray-100 bg-white/[0.03]"
                >
                  {item}
                </span>
              ))}
            </div>
          </li>
      ))}
    </ul>
  </div>

  {/* Hard Skills */}
  <div className="w-full max-w-3xl rounded-xl p-4 border border-white/10 bg-white/[0.04]">
    <h4 className="text-base font-semibold mb-3 text-gray-100 text-center">
      {skills.labels.hard}
    </h4>
    <ul className="space-y-3">
      {['programming','frameworks','ecommerce','tooling','devops','databases','dataModeling']
        .filter((key) => key in skills.hard)
        .map((key) => (
          <li key={key} className="text-center">
            <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
              {skills.labels.groups[key] ?? key}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.hard[key].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-white/10 text-gray-100 bg-white/[0.03]"
                >
                  {item}
                </span>
              ))}
            </div>
          </li>
      ))}
    </ul>
  </div>
</div>



      {/* Timeline */}
      <div className="fade-in w-full flex flex-wrap justify-center gap-5 sm:gap-8 mt-4 pb-6">
        {timeline.map((item, i) => (
          <div key={i} className="flex flex-col items-center mb-2">
              <Image
              src={item.img}
              alt={item.alt}
              width={56}
              height={56}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-100 border-2 border-gray-700 shadow"
              style={{ objectFit: 'cover' }}
              />
            <span className="mt-2 text-xs text-gray-400">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
