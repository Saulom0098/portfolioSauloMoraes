export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects = {
  pt: [
    {
      id: 1,
      title: "Sistema de Gestão de Infraestrutura",
      description: "Sistema desenvolvido para o Grupo Mateus para gerenciamento de infraestrutura de TI, incluindo redes, equipamentos e suporte técnico.",
      image: "infra",
      category: "Infraestrutura",
      technologies: ["Windows Server", "Linux", "Redes", "PowerShell"],
      features: [
        "Gestão de equipamentos de rede",
        "Monitoramento de infraestrutura",
        "Automação de rotinas de suporte",
        "Documentação técnica"
      ],
      github: "https://github.com/seu-usuario/infra-gestao",
      demo: "https://infra-gestao.demo"
    },
    {
      id: 2,
      title: "Automação de Processos - Pulse",
      description: "Sistema de automação de processos internos desenvolvido durante o período de trainee na Pulse, utilizando scripts e integração com APIs.",
      image: "automacao",
      category: "Automação",
      technologies: ["Node.js", "React", "AWS", "Azure"],
      features: [
        "Automação de processos internos",
        "Integração com APIs REST",
        "Migração para nuvem",
        "Documentação de processos"
      ],
      github: "https://github.com/seu-usuario/automacao-pulse",
      demo: "https://automacao-pulse.demo"
    },
    {
      id: 3,
      title: "Dashboard de BI",
      description: "Dashboard desenvolvido para análise de dados e métricas de negócio utilizando Power BI e Excel Avançado.",
      image: "bi",
      category: "Business Intelligence",
      technologies: ["Power BI", "Excel", "SQL", "PostgreSQL"],
      features: [
        "Análise de dados em tempo real",
        "Relatórios personalizados",
        "Integração com múltiplas fontes",
        "Exportação de relatórios"
      ],
      github: "https://github.com/seu-usuario/bi-dashboard",
      demo: "https://bi-dashboard.demo"
    }
  ],
  en: [
    {
      id: 1,
      title: "Infrastructure Management System",
      description: "System developed for Grupo Mateus for IT infrastructure management, including networks, equipment and technical support.",
      image: "infra",
      category: "Infrastructure",
      technologies: ["Windows Server", "Linux", "Networks", "PowerShell"],
      features: [
        "Network equipment management",
        "Infrastructure monitoring",
        "Support routines automation",
        "Technical documentation"
      ],
      github: "https://github.com/seu-usuario/infra-gestao",
      demo: "https://infra-gestao.demo"
    },
    {
      id: 2,
      title: "Process Automation - Pulse",
      description: "Internal process automation system developed during the trainee period at Pulse, using scripts and API integration.",
      image: "automacao",
      category: "Automation",
      technologies: ["Node.js", "React", "AWS", "Azure"],
      features: [
        "Internal processes automation",
        "REST API integration",
        "Cloud migration",
        "Process documentation"
      ],
      github: "https://github.com/seu-usuario/automacao-pulse",
      demo: "https://automacao-pulse.demo"
    },
    {
      id: 3,
      title: "BI Dashboard",
      description: "Dashboard developed for data analysis and business metrics using Power BI and Advanced Excel.",
      image: "bi",
      category: "Business Intelligence",
      technologies: ["Power BI", "Excel", "SQL", "PostgreSQL"],
      features: [
        "Real-time data analysis",
        "Custom reports",
        "Multiple sources integration",
        "Report export"
      ],
      github: "https://github.com/seu-usuario/bi-dashboard",
      demo: "https://bi-dashboard.demo"
    }
  ]
};

export function getProjects() {
  let lang = 'pt';
  if (typeof window !== 'undefined') {
    lang = localStorage.getItem('lang') || 'pt';
  }
  return projects[lang as keyof typeof projects] || projects.pt;
} 