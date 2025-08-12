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
  profileImg: string;
  profileAlt: string;
  timeline: TimelineItem[];
}

export function ProfileIntroSection({
  intro,
  rest,
  profileImg,
  profileAlt,
  timeline,
}: ProfileIntroSectionProps) {
  return (
    <section className="w-full bg-[#151414] rounded-2xl">
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
      <div className="w-full px-4 sm:px-8 md:px-20 pb-2 text-gray-300 text-base sm:text-lg">
        {rest}
      </div>
      {/* Timeline */}
      <div className="w-full flex flex-wrap justify-center gap-5 sm:gap-8 mt-4 pb-6">
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
