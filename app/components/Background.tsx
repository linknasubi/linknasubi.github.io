'use client';

import { ReactNode } from 'react';
import BackgroundNight from './BackgroundNight';
import BackgroundDay from './BackgroundDay';

interface Props {
  children: ReactNode;
  theme: 'day' | 'night';
}

export default function Background({ children, theme }: Props) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            theme === 'night' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={theme !== 'night'}
          role="presentation"
        >
          <BackgroundNight />
        </div>

        {/* Day */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            theme === 'day' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={theme !== 'day'}
          role="presentation"
        >
          <BackgroundDay />
        </div>
      </div>

      {/* Conteúdo por cima dos fundos */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
