'use client'

import { useState } from 'react';
import DataScienceSection from './sections/DataScienceSection';
// import SecuritySection from './sections/SecuritySection';
// import SoftwareSection from './sections/SoftwareSection';

import Background from './components/Background';

export default function HomePage() {
  const [section, setSection] = useState<'data' | 'security' | 'software'>('data');
  const [theme, setTheme] = useState<'day' | 'night'>('night');
  const [lang, setLang] = useState<'pt' | 'en'>('pt');


const renderSection = () => {
  switch (section) {
    case 'security':
      return <div className="text-left text-fuchsia-200 italic">{lang === 'pt' ? 'Seção de Segurança em breve.' : 'Security section coming soon.'}</div>;
    case 'software':
      return <div className="text-left text-fuchsia-200 italic">{lang === 'pt' ? 'Seção de Engenharia de Software em breve.' : 'Software Engineering section coming soon.'}</div>;
    case 'data':
    default:
      return <DataScienceSection lang={lang} />;
  }
};


    const mainBg = theme === 'day' ? 'bg-white/80 text-gray-900' : 'bg-[#1d1624]/90 text-white';
    const asideText = theme === 'day' ? 'text-indigo-800' : 'text-white';
    const asideSubText = theme === 'day' ? 'text-indigo-500' : 'text-fuchsia-200';
    const buttonActive = theme === 'day'
      ? 'bg-yellow-300 text-indigo-900 border-yellow-400'
      : 'bg-fuchsia-600 text-white border-fuchsia-400';
    const buttonInactive = theme === 'day'
      ? 'border-yellow-400 text-indigo-800 hover:bg-yellow-100'
      : 'border-fuchsia-400 text-fuchsia-100 hover:bg-fuchsia-700/50';

  return (
    <Background theme={theme}>
      {/* Botão de alternância no topo direito */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 items-end">
        <button
          onClick={() => setTheme(theme === 'night' ? 'day' : 'night')}
          className="bg-white/80 border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-yellow-200 transition-colors"
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'night' ? '🌞 Modo Dia' : '🌙 Modo Noite'}
        </button>
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="bg-white/80 border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-blue-200 transition-colors"
          aria-label="Switch language"
        >
          {lang === 'pt' ? 'EN English' : 'PT Português'}
        </button>
      </div>


      <div className="min-h-screen px-4 py-10 bg-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Navegação lateral */}
          <aside className={`space-y-4 md:sticky md:top-10 ${asideText}`}>
            <h1 className="text-3xl font-bold tracking-tight drop-shadow">Gabriel Aragão</h1>
            <p className={`text-sm hidden md:block ${asideSubText}`}>Currículo por área de atuação</p>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => setSection('data')}
                className={`text-left px-4 py-2 rounded-md border transition-all duration-150 font-semibold shadow-sm ${section === 'data' ? buttonActive : buttonInactive}`}
              >
                📊 Data Science
              </button>
              <button
                onClick={() => setSection('security')}
                className={`text-left px-4 py-2 rounded-md border transition-all duration-150 font-semibold shadow-sm ${section === 'security' ? buttonActive : buttonInactive}`}
              >
                🔐 Segurança
              </button>
              <button
                onClick={() => setSection('software')}
                className={`text-left px-4 py-2 rounded-md border transition-all duration-150 font-semibold shadow-sm ${section === 'software' ? buttonActive : buttonInactive}`}
              >
                🧩 Engenharia de Software
              </button>
            </nav>
          </aside>

          {/* Conteúdo */}
          <main className={`${mainBg} shadow-2xl rounded-xl p-6 md:p-8 transition-all duration-200 border border-white/10`}>
            <h2 className={`text-2xl font-bold mb-6 border-b pb-2 drop-shadow ${theme === 'day' ? 'text-indigo-800 border-yellow-400' : 'text-fuchsia-300 border-fuchsia-700'}`}>
              {section === 'data'
                ? 'Experiência em Data Science'
                : section === 'security'
                ? 'Experiência em Segurança'
                : 'Experiência em Engenharia de Software'}
            </h2>
            <div className={`prose max-w-none ${theme === 'day' ? '' : 'prose-invert'}`}>
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    </Background>
  );
}
