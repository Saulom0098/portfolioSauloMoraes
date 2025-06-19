export interface Skill {
  id: number;
  category: string;
  name: string;
  level: number;
}

export const skills = {
  pt: [
    // Análise e Negócios
    {
      id: 1,
      category: "Análise e Negócios",
      name: "Levantamento de Requisitos",
      level: 90
    },
    {
      id: 2,
      category: "Análise e Negócios",
      name: "Modelagem UML/RUP",
      level: 85
    },
    {
      id: 3,
      category: "Análise e Negócios",
      name: "Jira",
      level: 80
    },
    {
      id: 4,
      category: "Análise e Negócios",
      name: "Azure DevOps",
      level: 75
    },
    {
      id: 5,
      category: "Análise e Negócios",
      name: "SAP",
      level: 70
    },

    // Infraestrutura e Suporte
    {
      id: 6,
      category: "Infraestrutura e Suporte",
      name: "Windows Server",
      level: 85
    },
    {
      id: 7,
      category: "Infraestrutura e Suporte",
      name: "Linux",
      level: 80
    },
    {
      id: 8,
      category: "Infraestrutura e Suporte",
      name: "Redes",
      level: 85
    },
    {
      id: 9,
      category: "Infraestrutura e Suporte",
      name: "AWS",
      level: 75
    },
    {
      id: 10,
      category: "Infraestrutura e Suporte",
      name: "Azure",
      level: 75
    },

    // Automação e Integração
    {
      id: 11,
      category: "Automação e Integração",
      name: "Node.js",
      level: 80
    },
    {
      id: 12,
      category: "Automação e Integração",
      name: "React",
      level: 75
    },
    {
      id: 13,
      category: "Automação e Integração",
      name: "APIs REST",
      level: 85
    },
    {
      id: 14,
      category: "Automação e Integração",
      name: "Postman",
      level: 90
    },

    // Business Intelligence
    {
      id: 15,
      category: "Business Intelligence",
      name: "Power BI",
      level: 85
    },
    {
      id: 16,
      category: "Business Intelligence",
      name: "Excel Avançado",
      level: 90
    },
    {
      id: 17,
      category: "Business Intelligence",
      name: "SQL",
      level: 80
    },
    {
      id: 18,
      category: "Business Intelligence",
      name: "PostgreSQL",
      level: 75
    },

    // Idiomas
    {
      id: 19,
      category: "Idiomas",
      name: "Português",
      level: 100
    },
    {
      id: 20,
      category: "Idiomas",
      name: "Inglês",
      level: 80
    }
  ],
  en: [
    // Analysis & Business
    {
      id: 1,
      category: "Analysis & Business",
      name: "Requirements Gathering",
      level: 90
    },
    {
      id: 2,
      category: "Analysis & Business",
      name: "UML/RUP Modeling",
      level: 85
    },
    {
      id: 3,
      category: "Analysis & Business",
      name: "Jira",
      level: 80
    },
    {
      id: 4,
      category: "Analysis & Business",
      name: "Azure DevOps",
      level: 75
    },
    {
      id: 5,
      category: "Analysis & Business",
      name: "SAP",
      level: 70
    },

    // Infrastructure & Support
    {
      id: 6,
      category: "Infrastructure & Support",
      name: "Windows Server",
      level: 85
    },
    {
      id: 7,
      category: "Infrastructure & Support",
      name: "Linux",
      level: 80
    },
    {
      id: 8,
      category: "Infrastructure & Support",
      name: "Networks",
      level: 85
    },
    {
      id: 9,
      category: "Infrastructure & Support",
      name: "AWS",
      level: 75
    },
    {
      id: 10,
      category: "Infrastructure & Support",
      name: "Azure",
      level: 75
    },

    // Automation & Integration
    {
      id: 11,
      category: "Automation & Integration",
      name: "Node.js",
      level: 80
    },
    {
      id: 12,
      category: "Automation & Integration",
      name: "React",
      level: 75
    },
    {
      id: 13,
      category: "Automation & Integration",
      name: "REST APIs",
      level: 85
    },
    {
      id: 14,
      category: "Automation & Integration",
      name: "Postman",
      level: 90
    },

    // Business Intelligence
    {
      id: 15,
      category: "Business Intelligence",
      name: "Power BI",
      level: 85
    },
    {
      id: 16,
      category: "Business Intelligence",
      name: "Advanced Excel",
      level: 90
    },
    {
      id: 17,
      category: "Business Intelligence",
      name: "SQL",
      level: 80
    },
    {
      id: 18,
      category: "Business Intelligence",
      name: "PostgreSQL",
      level: 75
    },

    // Languages
    {
      id: 19,
      category: "Languages",
      name: "Portuguese",
      level: 100
    },
    {
      id: 20,
      category: "Languages",
      name: "English",
      level: 80
    }
  ]
};

export function getSkills() {
  let lang = 'pt';
  if (typeof window !== 'undefined') {
    lang = localStorage.getItem('lang') || 'pt';
  }
  return skills[lang as keyof typeof skills] || skills.pt;
} 