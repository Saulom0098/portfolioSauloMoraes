'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const lang = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Language) : 'pt';
    setLanguageState(lang || 'pt');
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  };

  if (!isMounted) return null; // Evita hydration mismatch

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
} 