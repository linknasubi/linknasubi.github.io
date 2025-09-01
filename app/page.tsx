'use client';

import { useState, useEffect } from 'react';
import DataScienceSection from './sections/DataScienceSection';
// import SecuritySection from './sections/SecuritySection';
import SoftwareEngineerSection from './sections/SoftwareEngineerSection';
import Background from './components/Background';
import { Code2, BarChart3 } from "lucide-react";


type Lang = 'pt' | 'en';

// 👇 Novo: dicionário UI centralizado na page
const UI: Record<Lang, Record<string, string>> = {
  pt: {
    seeMore: 'Ver mais',
    seeLess: 'Ver menos',
    studyPage: 'Página do estudo',
    problem: 'Problema',
    context: 'Contexto',
    solution: 'Solução & Arquitetura',
    tools: 'Ferramentas & Integrações',
    testimonials: 'Relatos',
    caseSuffix: ' — Case',
  },
  en: {
    seeMore: 'See more',
    seeLess: 'See less',
    studyPage: 'Case page',
    problem: 'Problem',
    context: 'Context',
    solution: 'Solution & Architecture',
    tools: 'Tools & Integrations',
    testimonials: 'Reports',
    caseSuffix: ' — Case',
  },
};

export default function HomePage() {
  const [section, setSection] = useState<'data' | 'software'>('software');
  const [theme, setTheme] = useState<'day' | 'night'>('night');
  const [lang, setLang] = useState<Lang>('en');
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://linknasubi.github.io")
      .then(res => res.text())
      .then(svg => {
        // pega o número dentro do SVG retornado
        const match = svg.match(/>([0-9]+)<\/text>/);
        if (match) setVisits(parseInt(match[1], 10));
      })
      .catch(err => console.error("Erro ao buscar contador:", err));
  }, []);





const translations = {
  pt: {
    name: 'Gabriel Aragão',
    title: 'Cientista da Computação & Engenheiro de Software',
    labels: {
      software: 'Engenharia de Software',
      data: 'Data Science',
    },
    headers: {
      software: 'Experiência em Engenharia de Software',
      data: 'Experiência em Data Science',
    },
  },
  en: {
    name: 'Gabriel Aragão',
    title: 'Computer Scientist & Software Engineer',
    labels: {
      software: 'Software Engineering',
      data: 'Data Science',
    },
    headers: {
      software: 'Experience in Software Engineering',
      data: 'Experience in Data Science',
    },
  },
};


const items = [
  {
    key: "software",
    icon: <Code2 size={20} className="inline-block align-text-bottom" />,
    label: translations[lang].labels.software,
  },
  {
    key: "data",
    icon: <BarChart3 size={20} className="inline-block align-text-bottom" />,
    label: translations[lang].labels.data,
  }
];


<div className="flex flex-col items-center justify-center gap-3 mb-8 mt-2">
  <h1 className="text-2xl sm:text-4xl font-black tracking-tight drop-shadow text-white text-center">
    {translations[lang].name}
  </h1>
  <p className="text-base sm:text-lg text-gray-200 font-medium text-center">
    {translations[lang].title}
  </p>
</div>


  const renderSection = () => {
    switch (section) {
      case 'software':
        // 👇 Passa UI adiante
        return <SoftwareEngineerSection lang={lang} UI={UI} />;
      case 'data':
      default:
        return <DataScienceSection lang={lang} UI={UI} />;
    }
  };
  // Estilos
const mainBg = theme === 'day'
  ? 'bg-white/80 text-gray-900'
  : 'bg-[#131313b3] text-gray-100'


  const buttonActive = theme === 'day'
    ? 'bg-yellow-300 text-indigo-900 border-yellow-400 shadow-md'
    : 'bg-yellow-400/80 text-gray-900 border-yellow-300 shadow-md';

  const buttonInactive = theme === 'day'
    ? 'border-yellow-400 text-indigo-800 hover:bg-yellow-100 shadow'
    : 'border-gray-500 text-gray-200 hover:bg-gray-800/70 shadow';

  return (
    <Background theme={theme}>
      {/* Botões flutuantes de tema/idioma */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 items-end">
        <button
          onClick={() => setTheme(theme === 'night' ? 'day' : 'night')}
          className={`rounded-full px-4 py-2 text-sm font-semibold shadow transition-colors
            ${theme === 'day'
              ? 'bg-white/90 border border-gray-300 text-gray-900 hover:bg-yellow-100'
              : 'bg-gray-800/80 border border-gray-700 text-gray-100 hover:bg-gray-700'}
          `}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'night' ? '🌞 Modo Dia' : '🌙 Modo Noite'}
        </button>

        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className={`rounded-full px-4 py-2 text-sm font-semibold shadow transition-colors
            ${theme === 'day'
              ? 'bg-white/90 border border-gray-300 text-gray-900 hover:bg-blue-100'
              : 'bg-gray-800/80 border border-gray-700 text-gray-100 hover:bg-gray-700'}
          `}
          aria-label="Switch language"
        >
          {lang === 'pt' ? 'EN English' : 'PT Português'}
        </button>
      </div>


      {/* Container principal com hero e navegação */}
      <div className="min-h-screen px-2 sm:px-4 py-6 sm:py-10 flex flex-col items-center bg-transparent">
        
        {/* HERO centralizado */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8 mt-2">
          <h1 className={`text-2xl sm:text-4xl font-black tracking-tight drop-shadow text-center ${
            theme === 'day' ? 'text-indigo-900' : 'text-white'
          }`}>
            {translations[lang].name}
          </h1>
          <p className={`text-base sm:text-lg font-medium text-center ${
            theme === 'day' ? 'text-gray-700' : 'text-gray-200'
          }`}>
            {translations[lang].title}
          </p>
        </div>

        
        {/* Navegação horizontal minimalista */}

        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 w-full">
          {items.map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => setSection(key as 'software' | 'data')}
              className={`
                px-3 py-2 sm:px-6 rounded-full text-sm sm:text-base font-semibold border transition-all duration-150
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                ${theme === 'day'
                  ? 'focus-visible:ring-yellow-400 focus-visible:ring-offset-white'
                  : 'focus-visible:ring-yellow-300 focus-visible:ring-offset-[#131313]'}
                ${section === key ? buttonActive : buttonInactive}
              `}
            >
              <span className="mr-1 sm:mr-2">{icon}</span>
              {label}
            </button>
          ))}
        </nav>


        {/* Conteúdo principal centralizado */}
        <main className={`
          ${mainBg} bg-opacity-90
          shadow-xl rounded-2xl
          p-3 sm:p-6 md:p-10 lg:p-14
          w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto
          border ${theme === 'day' ? 'border-black/5' : 'border-white/10'}
        `}>
          <h2 className={`
            text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b pb-2 drop-shadow text-center
            ${theme === 'day' ? 'text-indigo-800 border-yellow-400' : 'text-yellow-300 border-yellow-700'}
          `}>
            {translations[lang].headers[section]}
          </h2>

          <div className={`
          bg-opacity-90
            prose max-w-none text-base sm:text-lg leading-relaxed
            prose-a:no-underline hover:prose-a:underline underline-offset-4
            ${theme === 'day'
              ? 'prose-a:text-indigo-700'
              : 'prose-invert prose-a:text-yellow-300'}
          `}>
            {renderSection()}
          </div>
        </main>



        <footer className="mt-10 text-center text-gray-400 text-sm">

          <img
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://gabrielaragao.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false"
            alt="visit counter"
            className="mx-auto mt-2"
          />


          {visits !== null
            ? `${visits} people have already checked out my amazing resume`
            : "You're one of the first visitors!"}
        </footer>

      </div>
    </Background>
  );
}
