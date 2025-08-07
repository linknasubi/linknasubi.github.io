'use client';

import { useState } from 'react';
import DataScienceSection from './sections/DataScienceSection';
// import SecuritySection from './sections/SecuritySection';
import SoftwareEngineerSection from './sections/SoftwareEngineerSection';
import Background from './components/Background';
import { Code2, BarChart3 } from "lucide-react";

export default function HomePage() {
  const [section, setSection] = useState<'data' | 'software'>('software');
  const [theme, setTheme] = useState<'day' | 'night'>('night');
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const renderSection = () => {
    switch (section) {
      case 'software':
        return <SoftwareEngineerSection lang={lang} />;
      case 'data':
      default:
        return <DataScienceSection lang={lang} />;
    }
  };

  // Estilos
  const mainBg = theme === 'day'
    ? 'bg-white/80 text-gray-900'
    : 'bg-[#131313] text-gray-100';

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
          className="bg-white/90 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-yellow-200 transition-colors"
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'night' ? '🌞 Modo Dia' : '🌙 Modo Noite'}
        </button>
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="bg-white/90 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-blue-100 transition-colors"
          aria-label="Switch language"
        >
          {lang === 'pt' ? 'EN English' : 'PT Português'}
        </button>
      </div>

      {/* Container principal com hero e navegação */}
      <div className="min-h-screen px-2 sm:px-4 py-6 sm:py-10 flex flex-col items-center bg-transparent">
        
        {/* HERO centralizado */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8 mt-2">

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight drop-shadow text-white text-center">
            Gabriel Aragão
          </h1>
          <p className="text-base sm:text-lg text-gray-200 font-medium text-center">
            Cientista da Computação & Engenheiro de Software
          </p>
        </div>
        
        {/* Navegação horizontal minimalista */}

      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 w-full">
        {[
          {
            key: "software",
            icon: <Code2 size={20} className="inline-block align-text-bottom" />,
            label: "Engenharia de Software"
          },
          {
            key: "data",
            icon: <BarChart3 size={20} className="inline-block align-text-bottom" />,
            label: "Data Science"
          }
        ].map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => setSection(key as any)}
            className={`px-3 py-2 sm:px-6 rounded-full text-sm sm:text-base font-semibold border transition-all duration-150
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
          ${mainBg}
          shadow-xl rounded-2xl
          p-3 sm:p-6 md:p-10 lg:p-14
          w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto
          border border-white/10
        `}>
          <h2 className={`
            text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b pb-2 drop-shadow text-center
            ${theme === 'day' ? 'text-indigo-800 border-yellow-400' : 'text-yellow-300 border-yellow-700'}
          `}>
            {section === 'data'
              ? 'Experiência em Data Science'
              : 'Experiência em Engenharia de Software'}
          </h2>
          <div className={`prose max-w-none text-base sm:text-lg leading-relaxed ${theme === 'day' ? '' : 'prose-invert'}`}>
            {renderSection()}
          </div>
        </main>

      </div>
    </Background>
  );
}
