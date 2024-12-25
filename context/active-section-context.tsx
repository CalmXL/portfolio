import React, { createContext, useState } from 'react';
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveAction] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider>{children}</ActiveSectionContext.Provider>
  );
}
