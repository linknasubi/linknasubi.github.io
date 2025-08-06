'use client';

import { ReactNode } from 'react';
import BackgroundNight from './BackgroundNight';
import BackgroundDay from './BackgroundDay';

interface Props {
  children: ReactNode;
  theme: 'day' | 'night';
}

export default function Background({ children, theme }: Props) {
  if (theme === 'night') {
    return <BackgroundNight>{children}</BackgroundNight>;
  }
  return <BackgroundDay>{children}</BackgroundDay>;
}
