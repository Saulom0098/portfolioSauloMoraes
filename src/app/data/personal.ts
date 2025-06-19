export const personalInfo = {
  name: "Saulo Gabriel Rodrigues de Moraes",
  title: "Analista de TI & Analista de Negócios",
  location: "São Luís - MA",
  phone: "(98) 98447-6541",
  email: "devwebsg@gmail.com",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  portfolio: "https://seu-portfolio.com",
  summary: [
    "Levantamento e documentação de requisitos com foco no negócio",
    "Análise de sistemas e mapeamento de processos",
    "Integração de sistemas e automação de rotinas",
    "Suporte técnico e infraestrutura (TI Corporativa)",
    "Implantação e gestão de ambientes em nuvem (AWS e Azure)",
    "Experiência com metodologias ágeis e ferramentas corporativas (Jira, SAP, Azure DevOps)"
  ],
  education: [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Faculdade Anhanguera",
      period: "2022 - 2026",
      status: "Em andamento (5º período)"
    },
    {
      degree: "Senac Informática",
      institution: "Nutec",
      period: "Concluído",
      status: "Concluído",
      courses: [
        "Programação de Sistemas/Web",
        "Administração de Redes",
        "Manutenção de Computadores e Pacote Office",
        "Excel Avançado e Power BI"
      ]
    }
  ]
};

type Lang = 'pt' | 'en';

interface PersonalData {
  name: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
}

export const personal: Record<Lang, PersonalData> = {
  pt: {
    name: 'Saulo Gabriel R. de Moraes',
    bio: 'Analista de TI & Desenvolvedor apaixonado por tecnologia e inovação.',
    location: 'São Luís - MA, Brasil',
    email: 'devwebsg@gmail.com',
    phone: '(98) 98447-6541',
  },
  en: {
    name: 'Saulo Gabriel R. de Moraes',
    bio: 'IT Analyst & Developer passionate about technology and innovation.',
    location: 'São Luís - MA, Brazil',
    email: 'devwebsg@gmail.com',
    phone: '+55 98 98447-6541',
  }
};

export function getPersonal(): PersonalData {
  let lang: Lang = 'pt';
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'pt' || storedLang === 'en') {
      lang = storedLang;
    }
  }
  return personal[lang];
} 