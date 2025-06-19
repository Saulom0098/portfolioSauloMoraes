export const contactInfo = {
  name: "Saulo Gabriel Rodrigues de Moraes",
  title: "Analista de TI & Analista de Negócios",
  location: "São Luís - MA",
  phone: "(98) 98447-6541",
  email: "devwebsg@gmail.com",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  portfolio: "https://seu-portfolio.com",
  businessHours: "Segunda a Sexta, 9h às 18h",
  availability: "Disponível para oportunidades de trabalho presencial em São Luís - MA ou remoto"
};

type Lang = 'pt' | 'en';

interface ContactData {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  telegram: string;
  address: string;
}

export const contact: Record<Lang, ContactData> = {
  pt: {
    email: 'devwebsg@gmail.com',
    phone: '(98) 98447-6541',
    whatsapp: 'https://wa.me/559884476541',
    linkedin: 'https://linkedin.com/in/saulo-moraes-897418248',
    github: 'https://github.com/Saulom0098',
    telegram: 'https://t.me/+5598992328516',
    address: 'São Luís - MA, Brasil',
  },
  en: {
    email: 'devwebsg@gmail.com',
    phone: '+55 98 98447-6541',
    whatsapp: 'https://wa.me/559884476541',
    linkedin: 'https://linkedin.com/in/saulo-moraes-897418248',
    github: 'https://github.com/Saulom0098',
    telegram: 'https://t.me/+5598992328516',
    address: 'São Luís - MA, Brazil',
  }
};

export function getContact(): ContactData {
  let lang: Lang = 'pt';
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'pt' || storedLang === 'en') {
      lang = storedLang;
    }
  }
  return contact[lang];
} 
