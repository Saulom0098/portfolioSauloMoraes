export interface Language {
  id: number;
  name: string;
  level: string;
  details: string;
}

type Lang = 'pt' | 'en';

export const languages: Record<Lang, Omit<Language, 'id'>[]> = {
  pt: [
    { name: 'Português', level: 'Nativo', details: 'Fluente em leitura, escrita e conversação' },
    { name: 'Inglês', level: 'Avançado', details: 'Leitura e escrita técnica avançada, conversação intermediária' },
  ],
  en: [
    { name: 'Portuguese', level: 'Native', details: 'Fluent in reading, writing, and conversation' },
    { name: 'English', level: 'Advanced', details: 'Advanced technical reading and writing, intermediate conversation' },
  ]
};

export function getLanguages(): Omit<Language, 'id'>[] {
  let lang: Lang = 'pt';
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'pt' || storedLang === 'en') {
      lang = storedLang;
    }
  }
  return languages[lang];
} 