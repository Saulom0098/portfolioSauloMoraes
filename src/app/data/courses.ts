export interface Course {
  id: number;
  category: string;
  name: string;
  description?: string;
}

export const courses = {
  pt: [
    // Análise de Sistemas
    {
      id: 1,
      category: "Análise de Sistemas",
      name: "UML",
      description: "Modelagem de processos e casos de uso"
    },
    {
      id: 2,
      category: "Análise de Sistemas",
      name: "RUP",
      description: "Metodologia de desenvolvimento"
    },
    {
      id: 3,
      category: "Análise de Sistemas",
      name: "Jira",
      description: "Gestão de projetos e tarefas"
    },
    {
      id: 4,
      category: "Análise de Sistemas",
      name: "Modelagem de Processos",
      description: "Documentação e otimização de processos"
    },

    // Banco de Dados
    {
      id: 5,
      category: "Banco de Dados",
      name: "PostgreSQL",
      description: "Banco de dados relacional"
    },
    {
      id: 6,
      category: "Banco de Dados",
      name: "MySQL",
      description: "Banco de dados relacional"
    },
    {
      id: 7,
      category: "Banco de Dados",
      name: "Oracle",
      description: "Banco de dados empresarial"
    },
    {
      id: 8,
      category: "Banco de Dados",
      name: "MongoDB",
      description: "Banco de dados NoSQL"
    },

    // Cloud & DevOps
    {
      id: 9,
      category: "Cloud & DevOps",
      name: "AWS",
      description: "Serviços em nuvem"
    },
    {
      id: 10,
      category: "Cloud & DevOps",
      name: "Azure",
      description: "Serviços em nuvem"
    },
    {
      id: 11,
      category: "Cloud & DevOps",
      name: "Docker",
      description: "Containerização"
    },
    {
      id: 12,
      category: "Cloud & DevOps",
      name: "Git",
      description: "Controle de versão"
    },
    {
      id: 13,
      category: "Cloud & DevOps",
      name: "CI/CD",
      description: "Integração e entrega contínua"
    },

    // Business Intelligence
    {
      id: 14,
      category: "Business Intelligence",
      name: "Power BI",
      description: "Visualização e análise de dados"
    },
    {
      id: 15,
      category: "Business Intelligence",
      name: "Excel Avançado",
      description: "Análise e manipulação de dados"
    },
    {
      id: 16,
      category: "Business Intelligence",
      name: "Access",
      description: "Banco de dados e relatórios"
    },

    // Tecnologias de Desenvolvimento
    {
      id: 17,
      category: "Tecnologias de Desenvolvimento",
      name: "React",
      description: "Desenvolvimento front-end"
    },
    {
      id: 18,
      category: "Tecnologias de Desenvolvimento",
      name: "Vue.js",
      description: "Desenvolvimento front-end"
    },
    {
      id: 19,
      category: "Tecnologias de Desenvolvimento",
      name: "Node.js",
      description: "Desenvolvimento back-end"
    }
  ],
  en: [
    // Systems Analysis
    {
      id: 1,
      category: "Systems Analysis",
      name: "UML",
      description: "Process and use case modeling"
    },
    {
      id: 2,
      category: "Systems Analysis",
      name: "RUP",
      description: "Development methodology"
    },
    {
      id: 3,
      category: "Systems Analysis",
      name: "Jira",
      description: "Project and task management"
    },
    {
      id: 4,
      category: "Systems Analysis",
      name: "Process Modeling",
      description: "Process documentation and optimization"
    },

    // Database
    {
      id: 5,
      category: "Database",
      name: "PostgreSQL",
      description: "Relational database"
    },
    {
      id: 6,
      category: "Database",
      name: "MySQL",
      description: "Relational database"
    },
    {
      id: 7,
      category: "Database",
      name: "Oracle",
      description: "Enterprise database"
    },
    {
      id: 8,
      category: "Database",
      name: "MongoDB",
      description: "NoSQL database"
    },

    // Cloud & DevOps
    {
      id: 9,
      category: "Cloud & DevOps",
      name: "AWS",
      description: "Cloud services"
    },
    {
      id: 10,
      category: "Cloud & DevOps",
      name: "Azure",
      description: "Cloud services"
    },
    {
      id: 11,
      category: "Cloud & DevOps",
      name: "Docker",
      description: "Containerization"
    },
    {
      id: 12,
      category: "Cloud & DevOps",
      name: "Git",
      description: "Version control"
    },
    {
      id: 13,
      category: "Cloud & DevOps",
      name: "CI/CD",
      description: "Continuous integration and delivery"
    },

    // Business Intelligence
    {
      id: 14,
      category: "Business Intelligence",
      name: "Power BI",
      description: "Data visualization and analysis"
    },
    {
      id: 15,
      category: "Business Intelligence",
      name: "Advanced Excel",
      description: "Data analysis and manipulation"
    },
    {
      id: 16,
      category: "Business Intelligence",
      name: "Access",
      description: "Database and reports"
    },

    // Development Technologies
    {
      id: 17,
      category: "Development Technologies",
      name: "React",
      description: "Front-end development"
    },
    {
      id: 18,
      category: "Development Technologies",
      name: "Vue.js",
      description: "Front-end development"
    },
    {
      id: 19,
      category: "Development Technologies",
      name: "Node.js",
      description: "Back-end development"
    }
  ]
};

export function getCourses() {
  let lang = 'pt';
  if (typeof window !== 'undefined') {
    lang = localStorage.getItem('lang') || 'pt';
  }
  return courses[lang as keyof typeof courses] || courses.pt;
}

// Retorna os cursos como certificações para compatibilidade
export function getCertifications() {
  return getCourses();
} 