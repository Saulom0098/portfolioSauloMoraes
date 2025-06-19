export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  category: string;
  achievements?: string[];
  technologies?: string[];
}

type Lang = 'pt' | 'en';

export const experiences: Record<Lang, Experience[]> = {
  pt: [
    {
      id: 1,
      title: "Técnico de TI",
      company: "Grupo Mateus",
      location: "São Luís - MA",
      period: "Jan/2025 - Mai/2025",
      description: "Suporte técnico às lojas e matriz, com manutenção de sistemas e equipamentos.",
      responsibilities: [
        "Suporte técnico às lojas e matriz, com manutenção de sistemas e equipamentos",
        "Gestão de infraestrutura: redes, cabeamento, switches e roteadores",
        "Apoio à operação de sistemas ERP e de gestão do varejo"
      ],
      category: "infrastructure"
    },
    {
      id: 2,
      title: "Trainee em TI",
      company: "Pulse",
      location: "São Luís - MA",
      period: "Jan/2024 - Jul/2024",
      description: "Automação de processos internos com scripts e rotinas.",
      responsibilities: [
        "Automação de processos internos com scripts e rotinas",
        "Apoio à equipe de análise de sistemas e suporte à infraestrutura",
        "Desenvolvimento de soluções front-end integradas a APIs",
        "Participação na migração de sistemas locais para a nuvem (AWS/Azure)",
        "Mapeamento de processos, documentação técnica e treinamento de usuários"
      ],
      category: "development"
    },
    {
      id: 3,
      title: "Freelancer - Desenvolvedor e Suporte em TI",
      company: "Autônomo",
      location: "São Luís - MA",
      period: "2023 - atual",
      description: "Análise de demandas de clientes para desenvolvimento de soluções digitais.",
      responsibilities: [
        "Análise de demandas de clientes para desenvolvimento de soluções digitais",
        "Criação de sistemas e sites institucionais com foco no usuário",
        "Suporte técnico remoto e manutenção de infraestrutura local"
      ],
      category: "business"
    }
  ],
  en: [
    {
      id: 1,
      title: "IT Technician",
      company: "Grupo Mateus",
      location: "São Luís - MA",
      period: "Jan/2025 - May/2025",
      description: "Technical support for stores and headquarters, maintaining systems and equipment.",
      responsibilities: [
        "Technical support for stores and headquarters, maintaining systems and equipment",
        "Infrastructure management: networks, cabling, switches, and routers",
        "Support for ERP and retail management system operations",
      ],
      category: "infrastructure"
    },
    {
      id: 2,
      title: "Trainee in IT",
      company: "Pulse",
      location: "São Luís - MA",
      period: "Jan/2024 - Jul/2024",
      description: "Automation of internal processes with scripts and routines.",
      responsibilities: [
        "Automation of internal processes with scripts and routines",
        "Support to the systems analysis team and infrastructure support",
        "Development of front-end solutions integrated with APIs",
        "Participation in the migration of local systems to the cloud (AWS/Azure)",
        "Process mapping, technical documentation and user training"
      ],
      category: "development"
    },
    {
      id: 3,
      title: "Freelancer - Developer and IT Support",
      company: "Autônomo",
      location: "São Luís - MA",
      period: "2023 - current",
      description: "Analysis of customer demands for the development of digital solutions.",
      responsibilities: [
        "Analysis of customer demands for the development of digital solutions",
        "Creation of institutional websites and systems with focus on the user",
        "Remote technical support and local infrastructure maintenance"
      ],
      category: "business"
    }
  ]
};

export function getExperiences(): Experience[] {
  let lang: Lang = 'pt';
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'pt' || storedLang === 'en') {
      lang = storedLang;
    }
  }
  return experiences[lang];
} 