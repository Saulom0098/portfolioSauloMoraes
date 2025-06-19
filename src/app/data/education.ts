export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  location: string;
  type: 'graduation' | 'course' | 'certification' | 'workshop';
  description: string;
  subjects?: string[];
  achievements?: string[];
  certificate?: string;
}

const education: Record<string, Education[]> = {
  pt: [
    {
      id: '1',
      title: 'Bacharelado em Ciência da Computação',
      institution: 'Faculdade Anhanguera',
      period: '2022 - 2026',
      location: 'São Luís, MA',
      type: 'graduation',
      description: 'Formação em Ciência da Computação com foco em desenvolvimento de software, algoritmos e estruturas de dados.',
      subjects: [
        'Algoritmos e Estruturas de Dados',
        'Programação Orientada a Objetos',
        'Banco de Dados',
        'Redes de Computadores',
        'Sistemas Operacionais',
        'Engenharia de Software'
      ],
      achievements: [
        '5º período em andamento',
        'Participação em projetos acadêmicos',
        'Desenvolvimento de aplicações práticas'
      ]
    },
    {
      id: '2',
      title: 'Senac Informática - Nutec',
      institution: 'Senac Nutec',
      period: 'Concluído',
      location: 'São Luís, MA',
      type: 'course',
      description: 'Curso técnico em informática com foco em programação, redes e manutenção de computadores.',
      subjects: [
        'Programação de Sistemas/Web',
        'Administração de Redes',
        'Manutenção de Computadores',
        'Pacote Office',
        'Excel Avançado',
        'Power BI'
      ],
      achievements: [
        'Certificação completa em todas as áreas',
        'Projetos práticos desenvolvidos',
        'Conhecimento aplicado em ambiente profissional'
      ]
    },
    {
      id: '3',
      title: 'Curso de Inglês',
      institution: 'Wizard',
      period: '2023 - Em andamento',
      location: 'São Luís, MA',
      type: 'course',
      description: 'Curso de inglês para desenvolvimento de habilidades de comunicação internacional.',
      subjects: [
        'Conversação',
        'Gramática',
        'Compreensão auditiva',
        'Leitura e escrita'
      ],
      achievements: [
        'Nível intermediário alcançado',
        'Melhoria significativa na comunicação',
        'Preparação para certificações internacionais'
      ]
    }
  ],
  en: [
    {
      id: '1',
      title: 'Bachelor in Computer Science',
      institution: 'Anhanguera College',
      period: '2022 - 2026',
      location: 'São Luís, MA',
      type: 'graduation',
      description: 'Computer Science degree focusing on software development, algorithms and data structures.',
      subjects: [
        'Algorithms and Data Structures',
        'Object-Oriented Programming',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering'
      ],
      achievements: [
        '5th semester in progress',
        'Participation in academic projects',
        'Development of practical applications'
      ]
    },
    {
      id: '2',
      title: 'Senac Informatics - Nutec',
      institution: 'Senac Nutec',
      period: 'Completed',
      location: 'São Luís, MA',
      type: 'course',
      description: 'Technical course in informatics focusing on programming, networks and computer maintenance.',
      subjects: [
        'Systems/Web Programming',
        'Network Administration',
        'Computer Maintenance',
        'Office Package',
        'Advanced Excel',
        'Power BI'
      ],
      achievements: [
        'Complete certification in all areas',
        'Practical projects developed',
        'Knowledge applied in professional environment'
      ]
    },
    {
      id: '3',
      title: 'English Course',
      institution: 'Wizard',
      period: '2023 - In progress',
      location: 'São Luís, MA',
      type: 'course',
      description: 'English course for developing international communication skills.',
      subjects: [
        'Conversation',
        'Grammar',
        'Listening comprehension',
        'Reading and writing'
      ],
      achievements: [
        'Intermediate level achieved',
        'Significant improvement in communication',
        'Preparation for international certifications'
      ]
    }
  ]
};

export function getEducation(): Education[] {
  // Por padrão, retorna em português
  return education.pt;
}

export function getEducationByLanguage(language: string): Education[] {
  return education[language] || education.pt;
} 